import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Portfolio } from './portfolio'


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  _url = 'http://localhost:8000/item'
  constructor(private httpClient: HttpClient) { }

  
  getAllItems(){
    return this.httpClient.get<Array<Portfolio>>(this._url)
  }
}
