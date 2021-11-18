import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {map} from "rxjs/Operators";
import { UserInterface } from '../models/user-interface';
import { authResponse } from '../models/response/auth-response';
import { AppRoutingModule } from '../app-routing.module';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private routing: AppRoutingModule) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type":"application/json"
  })

  registerUser(username: string,password: string,email: string, name: string, cartas: any,menus: any, platos: any, pedidos:any): Observable<any>{
    const url_api = "http://"+this.routing.host+ this.routing.backPort+"/user/singIn";
    return this.http.post<UserInterface>( 
      url_api,
      {
      username, 
      password, 
      email,
      name,
      cartas,
      menus,
      platos,
      pedidos
    },
    { headers: this.headers }
    )
    
  }

  loginUser(email: string, password: string): Observable<any> {
    const url_api = "http://"+this.routing.host+ this.routing.backPort +"/user/logIn";
    return this.http.post<UserInterface>(url_api,{
      email, 
      password, 
    },
    { headers: this.headers }
    )
    
  }

  setUser(user: UserInterface){
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  setToken(token: any){
    localStorage.setItem("accessToken", token);
  }

  getToken(){
    localStorage.getItem("accessToken");
  }

  getCurrentUser(){
    let user_string = localStorage.getItem("currentUser");
    if(!(user_string === null || user_string === undefined)){
      let user: string = JSON.parse(user_string);
      return user;
      
    } else{
      return null
    }
  }

  logOutUser(){
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
  }

}
