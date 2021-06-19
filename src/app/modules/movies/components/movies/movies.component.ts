import {Component, OnInit} from '@angular/core';
import {Movie, Page} from "../../../../models";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  page: number;
  currentPage: Page

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(value => {
      console.log(value);
      this.movies = value.results})
  }


}
