import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, state} from '@angular/animations'


@Component({
  selector: 'app-seccion-uno',
  templateUrl: './seccion-uno.component.html',
  styleUrls: ['./seccion-uno.component.scss'],
  animations: [
    trigger('enterState',[
      state ('void', style({
        transform: 'transalteY(-100%)',
        width:'90%',
        opacity:0
      })),
      transition (':enter',[

        animate(800, style({
          transform:'translateY(0)',
          width:'100%',
          opacity: 1
        }))
      ])
    ])
  ],


})
export class SeccionUnoComponent implements OnInit {


   pantallaPequena: boolean = false
   public screenWidth: any;
   public screenHeight: any;
//animacionQrPequeño
  constructor() { }

  ngOnInit(): void {

    
    this.screenWidth = window.innerWidth
    this.screenHeight = window.innerHeight
   
    

    if (this.screenWidth > 700){

      this.pantallaPequena = false
    } else {
      this.pantallaPequena = true
    }
    
    

  }

  
}
