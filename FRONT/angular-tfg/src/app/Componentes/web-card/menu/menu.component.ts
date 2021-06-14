import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardInterfaceResponse } from 'src/app/models/response/card-interface-response';
import { MenuInterfaceResponse } from 'src/app/models/response/menu-interface-response';
import { DishAndCardsService } from 'src/app/services/dish-and-cards.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuInterface: MenuInterfaceResponse = <MenuInterfaceResponse>{};

  public displayedColumns: string[] = ['nombre', 'descripcion', 'ingredientes','añadir'];

  private username: string = "";
  private menuname: string = "";

  public name: string = "";

  public primeros: number[] = [];
  public totalPrimeros: number = 0;
  public segundos: number[] = [];
  public totalSegundos: number = 0;
  public terceros: number[] = [];
  public totalTerceros: number = 0;

  @Input() total: number = 0;


  constructor(private dishAndCards: DishAndCardsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //http://localhost:4200/card?username=ocal&cardname=ejemplin&menuname=Menu 1
    this.route.queryParams.subscribe(params => {
      this.username = params.username
      this.menuname = params.menuname

    }
  );
    this.getMenu(this.username,this.menuname)

  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes)
  }


  sumarPrimeros(index: number){
    if(this.primeros[index] === undefined){
      this.primeros[index] = 0
      this.primeros[index] = this.primeros[index]+1;
      this.total = this.total + 1;
      this.totalPrimeros = this.totalPrimeros + 1;
    }else{
      this.primeros[index] = this.primeros[index]+1;
      this.total = this.total + 1;
      this.totalPrimeros = this.totalPrimeros + 1;
    }
    console.log(this.totalPrimeros)
  }
  restarPrimeros(index: number){
    if(this.primeros[index] != undefined){
      if(this.primeros[index] < 1){
        this.primeros[index] = 0
      }else{
        this.primeros[index] = this.primeros[index]-1;
        this.total = this.total - 1;
        this.totalPrimeros = this.totalPrimeros - 1;
      }
    }
    console.log(this.totalPrimeros)
  }
  sumarSegundos(index: number){
    if(this.segundos[index] === undefined){
      this.segundos[index] = 0
      this.segundos[index] = this.segundos[index]+1;
      this.total = this.total + 1;
      this.totalSegundos = this.totalSegundos + 1;
    }else{
      this.segundos[index] = this.segundos[index]+1;
      this.total = this.total + 1;
    }
  }
  restarSegundos(index: number){
    if(this.segundos[index] != undefined){
      if(this.segundos[index] < 1){
        this.segundos[index] = 0
      }else{
        this.segundos[index] = this.segundos[index]-1;
        this.total = this.total - 1;
        this.totalSegundos = this.totalSegundos - 1;
      }
    }
  }
  sumarPostres(index: number){
    if(this.terceros[index] === undefined){
      this.terceros[index] = 0
      this.terceros[index] = this.terceros[index]+1;
      this.total = this.total + 1;
      this.totalTerceros = this.totalTerceros + 1;
    }else{
      this.terceros[index] = this.terceros[index]+1;
      this.total = this.total + 1;
      this.totalTerceros = this.totalTerceros + 1;
    }
  }
  restarPostres(index: number){
    if(this.segundos[index] != undefined){
      if(this.terceros[index] < 1){
        this.terceros[index] = 0
      }else{
        this.terceros[index] = this.terceros[index]-1;
        this.total = this.total - 1;
        this.totalTerceros = this.totalTerceros - 1;
      }
    }
  }

  getMenu(username: string, cardname: string){
    this.dishAndCards.getMenu(username,cardname).subscribe(card => this.menuInterface = card);
  }


}
