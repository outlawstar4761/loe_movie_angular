import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api-service.service';
import { Movie } from '../../Models/movie';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  activeMedia:Movie;

  constructor(private ApiService:ApiService) {
    this.ApiService.activeMovie.subscribe(movie=>{
      console.log(movie);
      this.activeMedia = movie;
    });
  }

  ngOnInit() {
  }

}
