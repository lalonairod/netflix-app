import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

const routes: Routes = [
  {
    path : '',
    component : IndexComponent,
    children : [
      {
        path : ':id',
        component : MoviesListComponent,
      },
      {
        path : '',
        component : MoviesListComponent,
        pathMatch : 'full'
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
