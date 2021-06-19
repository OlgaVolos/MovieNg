import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../constants";


@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private genreList = urls.genreList

  constructor(private httpClient: HttpClient) { }

  getGenres(): Observable<any>{
    return this.httpClient.get<any>(`${this.genreList}`)
  }

}
