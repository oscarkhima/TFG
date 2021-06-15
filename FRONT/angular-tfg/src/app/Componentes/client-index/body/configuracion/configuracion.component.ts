import { Component, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.scss']
})
export class ConfiguracionComponent implements OnInit {

  constructor(    
    private authService: AuthService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.authService.logOutUser()
    this.router.navigate([''])
  }



}
