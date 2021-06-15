import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DishInterface } from 'src/app/models/dish-interface';
import { OrderInterface } from 'src/app/models/order-interface';
import { CardInterfaceResponse } from 'src/app/models/response/card-interface-response';
import { MenuInterfaceResponse } from 'src/app/models/response/menu-interface-response';
import { DishAndCardsService } from 'src/app/services/dish-and-cards.service';
import { DialogOrderFalseComponent } from '../dialog-order-false/dialog-order-false.component';
import { DialogOrderComponent } from '../dialog-order/dialog-order.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuInterface: MenuInterfaceResponse = <MenuInterfaceResponse>{};

  public displayedColumns: string[] = ['nombre', 'descripcion', 'ingredientes', 'añadir'];

  private username: string = "";
  private menuname: string = "";
  private mesa: string = "";

  public name: string = "";

  public primeros: number[] = [];
  public totalPrimeros: number = 0;
  public segundos: number[] = [];
  public totalSegundos: number = 0;
  public postres: number[] = [];
  public totalPostres: number = 0;

  @Input() total: number = 0;

  public platosPedido: string[] = [];

  public pedido: OrderInterface = {
    username: "",
    tableNumber: 0,
    platos: [],
    totalPrice: 0.0
  }


  constructor(private dialog: MatDialog,private dishAndCards: DishAndCardsService, private route: ActivatedRoute, private apiService: DishAndCardsService) { }

  ngOnInit(): void {
    //http://localhost:4200/card?username=Moreiro&cardname=Macarrones&menuname=Menu del dia&mesa=3
    this.route.queryParams.subscribe(params => {
      this.username = params.username
      this.menuname = params.menuname
      this.mesa = params.mesa
    }
    );
    this.getMenu(this.username, this.menuname)

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }


  sumarPrimeros(index: number) {
    if (this.primeros[index] === undefined) {
      this.primeros[index] = 0
      this.primeros[index] = this.primeros[index] + 1;
      this.total = this.total + 1;
      this.totalPrimeros = this.totalPrimeros + 1;
    } else {
      this.primeros[index] = this.primeros[index] + 1;
      this.total = this.total + 1;
      this.totalPrimeros = this.totalPrimeros + 1;
    }

  }
  restarPrimeros(index: number) {
    if (this.primeros[index] != undefined) {
      if (this.primeros[index] < 1) {
        this.primeros[index] = 0
      } else {
        this.primeros[index] = this.primeros[index] - 1;
        this.total = this.total - 1;
        this.totalPrimeros = this.totalPrimeros - 1;
      }
    }

  }
  sumarSegundos(index: number) {
    if (this.segundos[index] === undefined) {
      this.segundos[index] = 0
      this.segundos[index] = this.segundos[index] + 1;
      this.total = this.total + 1;
      this.totalSegundos = this.totalSegundos + 1;
    } else {
      this.segundos[index] = this.segundos[index] + 1;
      this.total = this.total + 1;
    }
  }
  restarSegundos(index: number) {
    if (this.segundos[index] != undefined) {
      if (this.segundos[index] < 1) {
        this.segundos[index] = 0
      } else {
        this.segundos[index] = this.segundos[index] - 1;
        this.total = this.total - 1;
        this.totalSegundos = this.totalSegundos - 1;
      }
    }
  }
  sumarPostres(index: number) {
    if (this.postres[index] === undefined) {
      this.postres[index] = 0
      this.postres[index] = this.postres[index] + 1;
      this.total = this.total + 1;
      this.totalPostres = this.totalPostres + 1;
    } else {
      this.postres[index] = this.postres[index] + 1;
      this.total = this.total + 1;
      this.totalPostres = this.totalPostres + 1;
    }
  }
  restarPostres(index: number) {
    if (this.segundos[index] != undefined) {
      if (this.postres[index] < 1) {
        this.postres[index] = 0
      } else {
        this.postres[index] = this.postres[index] - 1;
        this.total = this.total - 1;
        this.totalPostres = this.totalPostres - 1;
      }
    }
  }

  getMenu(username: string, cardname: string) {
    this.dishAndCards.getMenu(username, cardname).subscribe(card => this.menuInterface = card);
  }

  postOrder(): void {
    for (let i = 0; i < this.menuInterface.primeros.length; i++) {
      if (this.primeros[i] != 0 && this.primeros[i] != undefined) {
        for (let x = 0; x < this.primeros[i]; x++) {
          console.log(this.platosPedido.push(this.menuInterface.primeros[i].nombre))
        }
      }
    }
    for (let i = 0; i < this.menuInterface.segundos.length; i++) {
      if (this.segundos[i] != 0 && this.segundos[i] != undefined) {
        for (let x = 0; x < this.segundos[i]; x++) {
          console.log(this.platosPedido.push(this.menuInterface.segundos[i].nombre))
        }
      }
    }
    for (let i = 0; i < this.menuInterface.postres.length; i++) {
      if (this.postres[i] != 0 && this.postres[i] != undefined) {
        for (let x = 0; x < this.postres[i]; x++) {
          console.log(this.platosPedido.push(this.menuInterface.postres[i].nombre))
        }
      }
    }
    console.log("RESULTADO " + this.platosPedido)
    this.pedido.platos = this.platosPedido;
    this.pedido.totalPrice = this.menuInterface.precio * this.totalPrimeros;
    this.pedido.tableNumber = Number(this.mesa);
    this.pedido.username = this.username;
    this.addOrder();
  }

  addOrder(): void {
    this.apiService.createOrder(
      this.username,
      this.pedido.tableNumber,
      this.pedido.platos,
      this.pedido.totalPrice
    ).subscribe(orderResponse => {
      if (orderResponse) {
        this.dialog.open(DialogOrderComponent);
      } else {
        this.dialog.open(DialogOrderFalseComponent);
      }
    })
  }

}
