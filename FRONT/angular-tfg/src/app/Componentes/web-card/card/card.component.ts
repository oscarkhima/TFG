import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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

  public cardInterface!: CardInterfaceResponse;

  public displayedColumns: string[] = ['nombre', 'descripcion', 'ingredientes', 'precio','añadir'];

  private username: string = "";
  private cardname: string = "";

  public name: string = "";


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

  getCarta(username: string, cardname: string){
    this.dishAndCards.getCard(username,cardname).subscribe(card => this.cardInterface = card);
  }


}
