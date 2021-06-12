import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import { CardInterface } from '../models/cart-interface';
import { DishInterface } from '../models/dish-interface';
import { CardInterfaceResponse } from '../models/response/card-interface-response';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DishAndCardsService {

  constructor(private http: HttpClient, private authService: AuthService) { }
  
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type":"application/json"
  })

  
  getAllDishNames(username: string){
    const url_api = 'http://localhost:8585/dishNames/' + username;
    return this.http.get(url_api);
  }

  getAllDishes(username: string){
    const url_api = 'http://localhost:8585/dish/' + username;
    return this.http.get(url_api);
  }


  createDish(username: string,nombre: string,descripcion: string,ingredientes: any, precio: number): Observable<any>{
    const url_api = "http://localhost:8585/dish/create/"+username;
    return this.http.post<DishInterface>( 
      url_api,
      {
      nombre,
      descripcion,
      ingredientes,
      precio
    },
    { headers: this.headers }
    )
    .pipe(map(data => data));
  }

  /////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////CARDS/////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////

  createCards(username: string,nombre: string,platos: string[],menu: boolean, precio: number): Observable<any>{
    const url_api = "http://localhost:8585/card/create/"+username;
    return this.http.post<DishInterface>( 
      url_api,
      {
      nombre,
      platos,
      menu,
      precio
    },
    { headers: this.headers }
    )
    .pipe(map(data => data));
  }

  getCard(username: string, cardname: string): Observable<CardInterfaceResponse>{
    const url_api = 'http://localhost:8585/card/' + username + "/" + cardname;
    return this.http.get<CardInterfaceResponse>(url_api);
  }


}
