import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Portfolio } from './portfolio'
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  _url = 'http://localhost:8000/item'
  constructor(private httpClient: HttpClient) { }

  
  getAllItems(){
    return this.httpClient.get<Array<Portfolio>>(this._url)
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}
