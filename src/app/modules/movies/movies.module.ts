import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MoviesRoutingModule} from './movies-routing.module';
import {MoviesComponent} from './components/movies/movies.component';
import {MovieComponent} from './components/movie/movie.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "../../services";
import {MovieService} from "./services/movie.service";
import {StarsComponent} from './components/stars/stars.component';
import {PaginationPageComponent} from './components/pagination-page/pagination-page.component';
import {NgbAlertModule, NgbModule, NgbPaginationModule, NgbRatingModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent,
    MovieDetailsComponent,
    StarsComponent,
    PaginationPageComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbRatingModule,
    NgbPaginationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    MovieService

  ]
})
export class MoviesModule { }
