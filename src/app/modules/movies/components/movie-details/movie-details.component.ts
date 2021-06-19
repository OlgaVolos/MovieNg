import {Component, Input, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../../../models";
import {ActivatedRoute} from "@angular/router";
import {urls} from "../../../../constants";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

imageOriginal: string;
imagePreview: string;
movieDetails: Movie
  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute ) {
    this.activatedRoute.params.subscribe(value => {
      let id = +value.id;
      this.movieService.getMovie(id).subscribe(res => {
        this.movieDetails = res;
        this.imageOriginal = `${urls.ImageOriginalUrl}${this.movieDetails.backdrop_path}`;
        this.imagePreview = `${urls.ImageLogoUrl}${this.movieDetails.poster_path}`
        })
    })
  }

  ngOnInit(): void {

  }

}
