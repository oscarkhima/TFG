import { Component, HostListener, Input, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { OrderInterface } from 'src/app/models/order-interface';
import { CardInterfaceResponse } from 'src/app/models/response/card-interface-response';
import { DishAndCardsService } from 'src/app/services/dish-and-cards.service';
import { ManageOrdersService } from 'src/app/services/manage-orders.service';
import { DialogOrderFalseComponent } from '../dialog-order-false/dialog-order-false.component';
import { DialogOrderComponent } from '../dialog-order/dialog-order.component';



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
  private mesa: string = "";

  public name: string = "";

  public total: number[] = [];

  public suma: number = 0;

  public platosPedido: string[] = [];

  public pedido: OrderInterface = {
    username: "",
    tableNumber: 0,
    platos: [],
    totalPrice: 0.0
  }


  constructor(
    private dialog: MatDialog,
    private apiService: DishAndCardsService,
    private dishAndCards: DishAndCardsService, 
    private route: ActivatedRoute,
    private manageOrderService: ManageOrdersService 
    ) { }

  ngOnInit(): void {
    //http://localhost:4200/card?username=Ocal&cardname=el caltin
    this.route.queryParams.subscribe(params => {
      this.username = params.username
      this.cardname = params.cardname
      this.mesa = params.mesa
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
    if(this.total[index] != undefined){
      if(this.total[index] < 1){
        this.total[index] = 0
      }else{
        this.total[index] = this.total[index]-1;
        this.suma = this.suma - this.cardInterface.platos[index].precio;
      }
    }
  }

  getCarta(username: string, cardname: string){
    this.dishAndCards.getCard(username,cardname).subscribe(card => this.cardInterface = card);
  }

  
  postOrder(): void{
    for (let i = 0; i < this.cardInterface.platos.length; i++) {
      if(this.total[i] != 0 && this.total[i] != undefined){
        for (let x = 0; x < this.total[i]; x++){
          console.log(this.platosPedido.push(this.cardInterface.platos[i].nombre))
        }
      }
    }
    this.pedido.platos = this.platosPedido;
    this.pedido.totalPrice = this.suma;
    this.pedido.tableNumber = Number(this.mesa);
    this.pedido.username = this.username;
    this.addOrder();
  }

  addOrder(): void{
    this.apiService.createOrder(
      this.username,
      this.pedido.tableNumber,
      this.pedido.platos,
      this.pedido.totalPrice
    ).subscribe( orderResponse => {
      if (orderResponse) {
        this.dialog.open(DialogOrderComponent);
        this.manageOrderService.addOrder(this.pedido);
      } else {
        this.dialog.open(DialogOrderFalseComponent);
      }
    })
    //METODO PARA QUE SE ACTUALICE EL COMPONENTE PEDIDOS
    
  }

}
