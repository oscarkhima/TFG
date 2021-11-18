import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { OrderInterface } from '../models/order-interface';

@Injectable({
  providedIn: 'root'
})
export class ManageOrdersService {

  public orders: OrderInterface[];
  private orders$: Subject<OrderInterface[]>;

  constructor() {
    this.orders = [];
    this.orders$ = new Subject<OrderInterface[]>();
   }

   public addOrder(pOrder: OrderInterface){
     this.orders.push(pOrder);
     this.orders$.next(this.orders);
   }

   getOrders$(): Observable<OrderInterface[]>{
     return this.orders$.asObservable();
   }
}
