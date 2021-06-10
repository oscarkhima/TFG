import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {map} from "rxjs/Operators";
import { UserInterface } from '../models/user-interface';
import { authResponse } from '../models/response/auth-response';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type":"application/json"
  })

  registerUser(username: string,password: string,email: string, name: string, cartas: any, platos: any): Observable<any>{
    const url_api = "http://localhost:8585/user/singIn";
    return this.http.post<UserInterface>( 
      url_api,
      {
      username, 
      password, 
      email,
      name,
      cartas,
      platos
    },
    { headers: this.headers }
    )
    
  }

  loginUser(email: string, password: string): Observable<any> {
    const url_api = "http://localhost:8585/user/logIn";
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
      console.log(user)
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
