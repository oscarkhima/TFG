import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-seccion-dos',
  templateUrl: './seccion-dos.component.html',
  styleUrls: ['./seccion-dos.component.scss']
})
export class SeccionDosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

  
}
