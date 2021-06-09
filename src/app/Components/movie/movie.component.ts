import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../Services/api-service.service';
import { Movie } from '../../Models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies:Movie[];
  UID:number;

  constructor(private route: ActivatedRoute,private ApiService:ApiService) {
    //this.ApiService.movies.subscribe(movies=>{this.movies = movies;});
    route.params.subscribe(params=>{
      this.UID = params['UID'];
      this.ApiService.get(this.UID).subscribe(movie=>{
        this.movies = [];
        this.movies.push(movie);
      });
    });
  }
  play(movie:Movie){
    this.ApiService.play(movie);
  }

  ngOnInit() {
  }

}
