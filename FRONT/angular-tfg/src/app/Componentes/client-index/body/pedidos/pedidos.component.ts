import { Component, OnInit } from '@angular/core';
import { OrderInterface } from 'src/app/models/order-interface';
import { AuthService } from 'src/app/services/auth.service';
import { DishAndCardsService } from 'src/app/services/dish-and-cards.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  public pedidos: any;
  public username: any;

  constructor(private apiService: DishAndCardsService,private authService: AuthService) { }

  ngOnInit(): void {
    this.username = this.authService.getCurrentUser();
    this.apiService.getAllOrders(this.username).subscribe(data => { this.pedidos = data})
  }

  onDelete(i: number){
    this.pedidos.splice(i,1);
    this.apiService.deleteOrder(this.username,i).subscribe( deleteResponse => {
      if(deleteResponse){
        console.log("INSERTADO")
      }else{
        console.log("MAL INSERTADO")
      }
    })
  }

  
}
