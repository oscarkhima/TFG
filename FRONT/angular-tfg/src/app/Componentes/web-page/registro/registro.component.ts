import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
  
})
export class RegistroComponent implements OnInit {

  constructor(private authService: AuthService) { }


  ngOnInit(): void {
    AOS.init()
  }

}
