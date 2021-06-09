import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../Services/api-service.service';
import { Movie } from '../../Models/Movie';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  movies:Movie[];

  constructor(private route: ActivatedRoute,private ApiService:ApiService) {
    this.ApiService.movies.subscribe((movies)=>{
      this.movies = [];
      this.movies = movies;
    });
    route.params.subscribe(params=>{
      this.ApiService.search(params['key'],params['value']).subscribe(movies=>{
        this.ApiService.movies.next(movies);
      });
    });
   }

  ngOnInit() {
  }

}
