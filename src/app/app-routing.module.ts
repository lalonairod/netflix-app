import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesModule } from './modules/movies/movies.module';

const routes: Routes = [
  {
    path : 'list',
    loadChildren : () => import ('./modules/movies/movies.module').then(m => MoviesModule),
  },
  {
    path : '',
    redirectTo : 'list',
    pathMatch : 'full',
  },
  {
    path : '**',
    redirectTo : 'list',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
