import { Component, OnInit, HostListener  } from '@angular/core';
import { trigger, style, transition, animate, state} from '@angular/animations'


@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss'],
  animations: [
    trigger('enterState',[
      state ('void', style({
        transform: 'transalteY(-200%)',
        height: '0%',
        opacity:1
      })),
      transition (':enter',[

        animate(2000, style({
          transform:'translateY(0)',
          height: '100%',
          opacity: 1
        }))
      ])
    ])
  ]
})
export class NavegacionComponent implements OnInit {


  imgSrc = ''
  imgOpen = './assets/ICONS/menu.png'
  imgClose = './assets/ICONS/close.png'

  
  

  showMe:boolean = false;

  public screenWidth: any;
  public screenHeight: any;

  constructor() {

      }

  ngOnInit(): void {
    
    this.screenWidth = window.innerWidth
    this.screenHeight = window.innerHeight
    this.imgSrc = this.imgOpen
    

    if (this.screenWidth > 700){

      this.showMe = true
    } else {
      this.showMe = false
    }
    
  }


  showOrHideMenu(){

    this.showMe=!this.showMe
    


    switch (this.imgSrc) {
      case  this.imgSrc = this.imgOpen:
        this.imgSrc = this.imgClose
        break;
      
        case this.imgSrc = this.imgClose:
          this.imgSrc = this.imgOpen
        break;
        
      default:
        break;
    }

    console.log(this.imgSrc);



  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;

    //console.log(this.screenWidth);

    if (this.screenWidth > 700){

      this.showMe = true
    } else {
      this.showMe = false
    }
  }
  

}
