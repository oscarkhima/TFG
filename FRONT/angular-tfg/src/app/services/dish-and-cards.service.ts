import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import { AppRoutingModule } from '../app-routing.module';
import { CardInterface } from '../models/cart-interface';
import { DishInterface } from '../models/dish-interface';
import { MenuInterface } from '../models/menu-interface';
import { OrderInterface } from '../models/order-interface';
import { QrDataInterface } from '../models/qr-data-interface';
import { CardInterfaceResponse } from '../models/response/card-interface-response';
import { MenuInterfaceResponse } from '../models/response/menu-interface-response';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DishAndCardsService {

  constructor(private http: HttpClient, private authService: AuthService,private routing: AppRoutingModule) { }
  
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type":"application/json"
  })

  getQrData(username: string){
    const url_api = 'http://'+this.routing.host+ this.routing.backPort +'/getQr/' + username;
    return this.http.get<QrDataInterface>(url_api);
  }


  
  getAllDishNames(username: string){
    const url_api = 'http://'+this.routing.host+ this.routing.backPort +'/dishNames/' + username;
    return this.http.get(url_api);
  }

  getAllDishes(username: string){
    const url_api = 'http://'+this.routing.host+ this.routing.backPort +'/dish/' + username;
    return this.http.get(url_api);
  }


  createDish(username: string,nombre: string,descripcion: string,ingredientes: any, precio: number): Observable<any>{
    const url_api = "http://"+this.routing.host+ this.routing.backPort +"/dish/create/"+username;
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

  deleteDish(username: string,dishName: string): Observable<any>{
    const url_api = "http://"+this.routing.host+ this.routing.backPort +"/dish/delete/"+username+"/"+dishName;
    return this.http.delete(url_api);
  }

  /////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////CARDS/////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////

  createCards(username: string,nombre: string,platos: string[]): Observable<any>{
    const url_api = "http://"+this.routing.host+ this.routing.backPort +"/card/create/"+username;
    return this.http.post<DishInterface>( 
      url_api,
      {
      nombre,
      platos,
    },
    { headers: this.headers }
    )
    .pipe(map(data => data));
  }

  updateCards(username: string,nombre: string,activated: boolean, platos:any){
    const url_api = "http://"+this.routing.host+ this.routing.backPort +"/card/update/"+username;
    return this.http.post<CardInterface>( 
      url_api,
      {
        nombre,
        activated,
        platos
    }
    )
    .pipe(map(data => data));
  }

  //ESCRIBIR IP PARA PRUEBAS EN LA PRESENTACION
  getCard(username: string, cardname: string): Observable<CardInterfaceResponse>{
    const url_api = 'http://'+this.routing.host+ this.routing.backPort +'/card/' + username + "/" + cardname;
    return this.http.get<CardInterfaceResponse>(url_api);
  }

  getAllCards(username: string){
    const url_api = 'http://'+this.routing.host+ this.routing.backPort +'/card/' + username;
    return this.http.get(url_api);
  }

  /////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////MENUS/////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////

  updateMenus(username: string,nombre: string,primeros: string[],segundos: string[],postres: string[],precio: number,activated: boolean): Observable<any>{
    const url_api = "http://"+this.routing.host+ this.routing.backPort +"/menu/update/"+username;
    return this.http.post<MenuInterface>( 
      url_api,
      {
      nombre,primeros,segundos,postres,precio,activated
    },
    { headers: this.headers }
    )
    .pipe(map(data => data));
  }

  createMenu(username: string,nombre: string,primeros: string[],segundos: string[],postres: string[],precio: number): Observable<any>{
    const url_api = "http://"+this.routing.host+ this.routing.backPort +"/menu/create/"+username;
    return this.http.post<DishInterface>( 
      url_api,
      {
      nombre,
      primeros,
      segundos,
      postres,
      precio
    },
    { headers: this.headers }
    )
    .pipe(map(data => data));
  }

  //ESCRIBIR IP PARA PRUEBAS EN LA PRESENTACION
  getMenu(username: string, menuname: string): Observable<MenuInterfaceResponse>{
    const url_api = 'http://'+this.routing.host+ this.routing.backPort +'/menu/' + username + "/" + menuname;
    return this.http.get<MenuInterfaceResponse>(url_api);
  }

  getAllMenus(username: string){
    const url_api = 'http://'+this.routing.host+ this.routing.backPort +'/menu/' + username;
    return this.http.get(url_api);
  }

  /////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////ORDERS////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////

  createOrder(username: string, tableNumber: number, platos: any,totalPrice: number): Observable<any>{
    const url_api = "http://"+this.routing.host+ this.routing.backPort +"/order/create/"+username;
    return this.http.post<OrderInterface>( 
      url_api,
      {
      username,
      tableNumber,
      platos,
      totalPrice
    },
    { headers: this.headers }
    )
    .pipe(map(data => data));
  }

  getAllOrders(username: string){
    const url_api = 'http://'+this.routing.host+ this.routing.backPort +'/order/' + username;
    return this.http.get(url_api);
  }

  deleteOrder(username: string,index: number): Observable<any>{
    const url_api = "http://"+this.routing.host+ this.routing.backPort +"/order/delete/"+username+"/"+index;
    return this.http.delete(url_api);
  }

}
