import {Movie} from "./movie";

export interface Page{
  page: number,
  results: Movie[],
  total_pages: number,
  total_results: number
}
