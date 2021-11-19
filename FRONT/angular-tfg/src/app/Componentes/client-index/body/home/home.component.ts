import { Component, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
