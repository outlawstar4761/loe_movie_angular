import { Injectable,Inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable,Subject,BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import {
  HttpClient,
  HttpRequest,
  HttpHeaders
} from '@angular/common/http';

import { Movie } from '../Models/Movie';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  endpoint:string;
  domain:string;
  authEndPoint:string;
  authToken:string;
  regexPattern:RegExp;
  movies:Subject<Movie[]> = new BehaviorSubject<Movie[]>([]);

  constructor(@Inject('API_ENDPOINT') ENDPOINT:string,@Inject('LOE_DOMAIN') DOMAIN:string,@Inject('AUTH_ENDPOINT') AUTH:string, private http:HttpClient,private cookie:CookieService,private router:Router) {
    this.endpoint = ENDPOINT;
    this.domain = DOMAIN;
    this.authEndPoint = AUTH;
    this.regexPattern = /\/LOE\//;
  }
  _buildAuthHeader():HttpHeaders{
    return new HttpHeaders({'auth_token':this.authToken});
  }
  authenticate(username:string,password:string):Observable<any>{
    let headers = new HttpHeaders({'request_token':username,'password':password});
    let url = this.authEndPoint + 'authenticate';
    return this.http.get(url,{headers:headers}).pipe(map(response=>{return response}));
  }
  login(username:string,password:string):void{
    this.authenticate(username,password).subscribe((response)=>{
      if(!response['error']){
        this.authToken = response.token;
        this.cookie.set('auth_token',this.authToken);
        this.checkCookie();
      }else{
        this.router.navigateByUrl('/login');
      }
    });
  }
  verifyToken():Observable<any>{
    let url = this.authEndPoint + 'verify';
    return this.http.get<any>(url,{headers:this._buildAuthHeader()}).pipe(map(response=>{return response}));
  }
  checkCookie():void{
    if(this.cookie.check('auth_token')){
      this.authToken = this.cookie.get('auth_token');
      this.verifyToken().subscribe((response)=>{
        if(!response['error']){
          this.router.navigateByUrl('/recent');
        }else{
          this.router.navigateByUrl('/login');
        }
      },console.log);
    }
  }
  search(field:string,query:string):Observable<Movie[]>{
    let url = this.endpoint + 'search/' + field + '/' + query;
    return this.http.get<Movie[]>(url,{headers:this._buildAuthHeader()}).pipe(map(response=>{
      return response.map((movie)=>{
        movie.file_path = movie.file_path.replace(this.regexPattern,this.domain);
        movie.cover_path = movie.cover_path.replace(this.regexPattern,this.domain);
        return new Movie(movie);
      });
    }));
  }
}
