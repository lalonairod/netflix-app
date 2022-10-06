import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiEndpoints } from '../utils/api.endpoints.class';
import { Constants } from '../utils/constants.class';

@Injectable({
  providedIn: 'root'
})
export class MoviesDbService {

  constructor( public http : HttpClient) { }

  getGenres() : Observable<Object>{
    return this.http.get(environment.MOVIES_URL + ApiEndpoints.GENRE_LIST);
  }

  getTrending () : Observable<Object>{
    return this.http.get(environment.MOVIES_URL + ApiEndpoints.TRENDING);
  }

  getMoviesByGenre ( id : number) : Observable<Object>{
    return this.http.get(environment.MOVIES_URL + ApiEndpoints.getMoviesByGenre(id));
  }

  getMovieImage ( path : string ) {
    return ApiEndpoints.getImage(path);
  }

  addMovie(id:number, key:string){
    let myListArray = JSON.parse(localStorage.getItem(key) ?? '[]');
    if(myListArray.indexOf(id) == -1){
      myListArray.push(id);
      localStorage.setItem(key, JSON.stringify(myListArray));
    }
  }

  addMovieList( id : number) {
    this.addMovie(id, Constants.MY_LIST);
  }

  addMovieFavorites( id : number) {
    this.addMovie(id, Constants.MY_FAVORITES);
  }

  removeMovie(id:number, key:string){
    let myListArray = JSON.parse(localStorage.getItem(key) ?? '[]');
    let index = myListArray.indexOf(id);
    if(index > -1 ){
      myListArray.splice(index, 1);
      localStorage.setItem(key, JSON.stringify(myListArray));
    }
  }

  removeMovieList( id : number) {
    this.addMovie(id, Constants.MY_LIST);
  }

  removeMovieFavorites( id : number) {
    this.addMovie(id, Constants.MY_FAVORITES);
  }

  checkMovie(id:number, key:string) : boolean {
    let myListArray = JSON.parse(localStorage.getItem(key) ?? '[]');
    return (myListArray.indexOf(id) > -1);
  }

  checkMovieList( id : number) : boolean {
    return this.checkMovie(id, Constants.MY_LIST);
  }

  checkMovieFavorites( id : number) : boolean{
    return this.checkMovie(id, Constants.MY_FAVORITES);
  }
}
