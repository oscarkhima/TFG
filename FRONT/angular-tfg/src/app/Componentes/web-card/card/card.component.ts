import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { CardInterface } from 'src/app/models/cart-interface';
import { DishInterface } from 'src/app/models/dish-interface';
import { CardInterfaceResponse } from 'src/app/models/response/card-interface-response';
import { DishAndCardsService } from 'src/app/services/dish-and-cards.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public cardInterface: CardInterfaceResponse = <CardInterfaceResponse>{};

  public displayedColumns: string[] = ['nombre', 'descripcion', 'ingredientes', 'precio','añadir'];

  private username: string = "";
  private cardname: string = "";

  public name: string = "";

  public total: number[] = [];

  @Input() suma: number = 0;


  constructor(private dishAndCards: DishAndCardsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //http://localhost:4200/card?username=Ocal&cardname=el caltin
    this.route.queryParams.subscribe(params => {
      console.log(params); 
      this.username = params.username
      this.cardname = params.cardname

    }
  );
    this.getCarta(this.username,this.cardname)

  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes)
  }


  sumar(index: number){
    if(this.total[index] === undefined){
      this.total[index] = 0
      this.total[index] = this.total[index]+1;
      this.suma = this.suma + this.cardInterface.platos[index].precio;
    }else{
      this.total[index] = this.total[index]+1;
      this.suma = this.suma + this.cardInterface.platos[index].precio;
    }
  }
  restar(index: number){
    if(this.total[index] < 1){
      this.total[index] = 0
    }else{
      this.total[index] = this.total[index]-1;
      this.suma = this.suma - this.cardInterface.platos[index].precio;
    }
  }

  getCarta(username: string, cardname: string){
    this.dishAndCards.getCard(username,cardname).subscribe(card => this.cardInterface = card);
  }


}
