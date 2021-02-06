import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Portfolio } from './portfolio'
import { catchError, map, tap } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class PortfolioService {

  _url = 'http://localhost:8000/'
  constructor(private httpClient: HttpClient) { }

  getItem(_id: string): Observable<Portfolio[]>{
    return this.httpClient.get<Portfolio[]>(this._url+`item/${_id}`).pipe(
      catchError(this.errorHandler)
    )

  }


  getAllItems(): Observable<Portfolio[]>{
    return this.httpClient.get<Portfolio[]>(this._url + 'item')
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}
