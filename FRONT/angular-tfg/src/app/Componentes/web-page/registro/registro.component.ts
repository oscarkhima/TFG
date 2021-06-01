import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { UserInterface } from 'src/app/models/user-interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
  
})
export class RegistroComponent implements OnInit {

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

  onRegister(): void{
    this.authService.registerUser(
      this.user.username,
      this.user.name,
      this.user.email,
      this.user.password
    ).subscribe( user => {
      console.log(user)
    })
  }

}
