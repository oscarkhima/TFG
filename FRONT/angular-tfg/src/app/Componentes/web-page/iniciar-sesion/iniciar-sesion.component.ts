import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { UserInterface } from 'src/app/models/user-interface';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogIniciarComponent} from 'src/app/Componentes/web-page/iniciar-sesion/dialog-iniciar/dialog-iniciar.component'

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent implements OnInit {
  
  hide = true;

  constructor(
    private authService: AuthService, 
    private router: Router, 
    private dialog: MatDialog,
    ) { }

  public user: UserInterface = {
    username: "",
    password: "",
    email: "",
    name: "",
    cartas: [],
    menus: [],
    platos:[]
  };

  ngOnInit(): void {
    AOS.init()
  }

  openDialog(){
    this.dialog.open(DialogIniciarComponent);
  }

  onLogin(): void{
    this.authService.loginUser(
      this.user.username,
      this.user.password
    ).subscribe( userResponse => {
      this.authService.setUser(userResponse.userName);
      if(userResponse.succes){
        this.authService.setToken(userResponse.email);
        this.authService.setUser(userResponse.userName);
        this.router.navigate(['/profile'])
      }else{
        this.openDialog();
      }
    })
  }



}
