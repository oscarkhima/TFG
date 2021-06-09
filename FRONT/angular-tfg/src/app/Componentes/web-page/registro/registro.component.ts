import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { UserInterface } from 'src/app/models/user-interface';
import { AuthService } from 'src/app/services/auth.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogRegistroComponent } from 'src/app/Componentes/web-page/registro/dialog-registro/dialog-registro.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
  
})
export class RegistroComponent implements OnInit {

  hide = true;

  constructor(private authService: AuthService, public dialog: MatDialog, private router: Router) { }
  
  public user: UserInterface = {
    username: "",
    password: "",
    email: "",
    name: "",
    cartas: [],
    platos: []
  };

  ngOnInit(): void {
    AOS.init()
  }

  openDialog(){
    this.dialog.open(DialogRegistroComponent);
  }

  onRegister(): void{
    this.authService.registerUser(
      this.user.username,
      this.user.password,
      this.user.email,
      this.user.name,
      this.user.cartas,
      this.user.platos
    ).subscribe( userResponse => {
      this.authService.setUser(userResponse.userName);
      if(userResponse.succes){
        this.authService.setToken(userResponse.email)
        this.authService.setUser(userResponse.userName)
        this.router.navigate(['/profile'])
      }else{
        this.openDialog();
      }
    })
  }

}
