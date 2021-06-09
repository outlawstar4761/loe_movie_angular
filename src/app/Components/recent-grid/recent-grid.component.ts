import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api-service.service';
import { Movie } from '../../Models/Movie';

@Component({
  selector: 'app-recent-grid',
  templateUrl: './recent-grid.component.html',
  styleUrls: ['./recent-grid.component.css']
})
export class RecentGridComponent implements OnInit {
  recentMovies:Movie[];

  constructor(private ApiService:ApiService) {
    this.ApiService.movies.subscribe((movies)=>{
      this.recentMovies = [];
      this.recentMovies = movies;
    });
    this.ApiService.getRecent(30).subscribe((movies)=>{
      this.ApiService.movies.next(movies);
    });
  }

  ngOnInit() {
  }

}
