import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { UserInterface } from 'src/app/models/user-interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent implements OnInit {
  
  constructor(private authService: AuthService) { }

  public user: UserInterface = {
    username: "",
    password: "",
    email: "",
    name: "",
  };

  ngOnInit(): void {
    AOS.init()
  }

  onLogin(): void{
    this.authService.loginUser(
      this.user.username,
      this.user.password
    ).subscribe( user => {
      console.log(user)
    })
  }

}
