import { Component, OnInit } from '@angular/core';
import { MoviesDbService } from '../../../services/movies-db.service';
import { MovieCategory } from '../../../models/movie-category.model';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  genres : MovieCategory[] = [];

  constructor( public moviesDb : MoviesDbService) { }

  ngOnInit(): void {
    this.getGenres();
  }

  getGenres(){
    this.moviesDb.getGenres()
    .subscribe((response:any) => {
      console.log(response);
      this.genres = <MovieCategory[]>response['genres'];
      console.log('Genres', this.genres);
    })
  }

}
