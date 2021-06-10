import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {map} from "rxjs/Operators";
import { DishInterface } from '../models/dish-interface';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type":"application/json"
  })

  getAllUsers(){
    const url_api = 'http://localhost:8585/user/all';
    return this.http.get(url_api);
  }


}
