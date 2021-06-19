import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let clone = request.clone({
      headers: new HttpHeaders({
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2N2QxNWM5ODBjODY4NmU0MGM2YTg2ZTdiM2I0ZDE0ZSIsInN1YiI6IjYwYzNjNmQzYTc2YWM1MDA1ODAwOTkwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OebMhuJQINmFUs-UFAxdpo_zGh7ZJ_3ZSCW7myYYTEA'
      })

    })

    return next.handle(clone);
  }
}
