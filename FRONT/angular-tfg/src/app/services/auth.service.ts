import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {map} from "rxjs/Operators";
import { isNullOrUndefined } from 'util';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type":"application/json"
  })

  registerUser(username: string,name: string, email: string, password: string){
    const url_api = "http://localhost:8080/user/singIn";
    return this.http.post(url_api,{
      username, 
      password, 
      email,
      name
    },
    { headers: this.headers }
    )
    .pipe(map(data => data));
  }

  loginUser(email: string, password: string): Observable<any> {
    const url_api = "http://localhost:8080/user/logIn";
    return this.http.post(url_api,{
      email, 
      password, 
    },
    { headers: this.headers }
    )
    .pipe(map(data => data));
  }

  setUser(user: any){
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
      let user = JSON.parse(user_string);
      return user;
    }
  }

}
