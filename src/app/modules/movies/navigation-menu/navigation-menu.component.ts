import { Component, Input, OnInit } from '@angular/core';
import { MovieCategory } from 'src/app/models/movie-category.model';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent {

  genres : MovieCategory[] = [];

  @Input()
  set data( param : MovieCategory[]) {
    console.log(param);
    this.genres = param;
  }

}
