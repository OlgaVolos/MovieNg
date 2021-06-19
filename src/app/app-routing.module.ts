import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";


let routes: Routes = [
  {path: '', component: HomeComponent, children: [
      {path: '', redirectTo: 'movie', pathMatch: 'full'},
      {path: 'movie', loadChildren: () => import('./modules/movies/movies.module').then(m => m.MoviesModule)},
      {path: 'genre', loadChildren: () => import('./modules/movies-by-genre/movies-by-genre.module').then(m => m.MoviesByGenreModule)}

    ]}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
