import { Component, OnInit } from '@angular/core';
import {Genre, GenreObject} from "../../../models";
import {GenreService} from "../../../services";


@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genres: Genre[];

  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    this.genreService.getGenres().subscribe(value => {

      this.genres = value.genres;
      console.log(value.genres);
    })
  }

}
