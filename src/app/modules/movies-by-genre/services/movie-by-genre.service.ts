import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {urls} from "../../../constants";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieByGenreService {
  private moviesUrl = urls.moviesUrl;
  constructor(private httpClient: HttpClient) { }

  getMovieByGenre(id: number): Observable<any>{
    return this.httpClient.get<any>(`${this.moviesUrl}?with_genres=${id}`)
  }

}
