import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {map} from "rxjs/Operators";
import { DishInterface } from '../models/dish-interface';
import { QrDataInterface } from '../models/qr-data-interface';
import { AppRoutingModule } from '../app-routing.module';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient,private routing: AppRoutingModule) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type":"application/json"
  })





}
