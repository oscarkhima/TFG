import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
  
})
export class RegistroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
