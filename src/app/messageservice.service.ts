import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { UserMessage } from './user-message';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class MessageserviceService {

  _url='http://localhost:3000/form';

  constructor(private _http: HttpClient) { }

  form(msg: UserMessage){
    return this._http.post<any>(this._url, msg)
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }

}
