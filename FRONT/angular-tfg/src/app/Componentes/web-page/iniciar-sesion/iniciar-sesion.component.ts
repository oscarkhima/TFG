import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
