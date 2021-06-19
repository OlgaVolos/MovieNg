import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MoviesByGenreRoutingModule} from './movies-by-genre-routing.module';
import {MoviesByGenreComponent} from './components/movies-by-genre/movies-by-genre.component';
import {MovieByGenreComponent} from './components/movie-by-genre/movie-by-genre.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "../../services";
import {MovieByGenreService} from "./services/movie-by-genre.service";
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    MoviesByGenreComponent,
    MovieByGenreComponent,
  ],
  imports: [
    CommonModule,
    MoviesByGenreRoutingModule,
    HttpClientModule,
    RouterModule,
    NgbModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    MovieByGenreService

  ]
})
export class MoviesByGenreModule { }
