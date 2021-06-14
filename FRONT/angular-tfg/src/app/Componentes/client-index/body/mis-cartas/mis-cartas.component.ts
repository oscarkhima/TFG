import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CardInterface } from 'src/app/models/cart-interface';
import { DishInterface } from 'src/app/models/dish-interface';
import { MenuInterface } from 'src/app/models/menu-interface';
import { AuthService } from 'src/app/services/auth.service';
import { DataApiService } from 'src/app/services/data-api.service';
import { DishAndCardsService } from 'src/app/services/dish-and-cards.service';


export interface interfazMenu {
  visible: boolean;
  nombreMenu: string;
  precio: number;
  
}

export interface interfazCarta {
  visible: boolean;
  nombreCarta: string;
  numeroProductos: number;
  
}

const  ELEMENT_DATA_MENU: interfazMenu[] = [
  { visible: true , nombreMenu: 'Diario', precio: 4},
  { visible: true , nombreMenu: 'Findes de semana', precio: 9}

]

const  ELEMENT_DATA_CARTA: interfazCarta[] = [
  { visible: true , nombreCarta: 'Carta 3', numeroProductos: 20},
  { visible: true , nombreCarta: 'Carta 4', numeroProductos: 16}

]



@Component({
  selector: 'app-mis-cartas',
  templateUrl: './mis-cartas.component.html',
  styleUrls: ['./mis-cartas.component.scss']
})




export class MisCartasComponent implements OnInit {

  constructor(private fb: FormBuilder,private apiService: DishAndCardsService, private authService: AuthService) { }

  public formArray: FormArray = new FormArray([new FormControl('')]);
  public formArrayPrimeros: FormArray = new FormArray([new FormControl('')]);
  public formArraySegundos: FormArray = new FormArray([new FormControl('')]);
  public formArrayPostres: FormArray = new FormArray([new FormControl('')]);

  public platos: string[] = ["uno","dos","tres"];

  disabled = false;

  public nombresPlatos: Observable<Object> | undefined;

  
  public username: any;

  public numeroDePlatos: number = this.platos.length

  public card: CardInterface = {
    nombre: "",
    platos: [],
    activated: false,
  }

  public menu: MenuInterface = {
    nombre: "",
    primeros: [],
    segundos: [],
    postres: [],
    precio: 0,
    activated: false,
  }


  

  displayedColumnsCarta: string[] = ['visible','nombreCarta', 'numeroProductos' ];
  displayedColumnsMenu: string[] = ['visible','nombreMenu', 'precio' ];


  dataSourceMenu = ELEMENT_DATA_MENU;

  dataSourceCarta = ELEMENT_DATA_CARTA;

  ngOnInit(): void {
    this.username = this.authService.getCurrentUser();
    this.platos = this.getDishNames();
  }

  

  getDishNames(): string[]{
    this.apiService.getAllDishNames(this.username).subscribe(dishNames => {
      this.platos =  dishNames as string[]
    })
    return  this.platos
  }

  onAdd(): void{
    this.formArray.push(new FormControl(''));
  }
  onAddPrimeros(): void{
    this.formArrayPrimeros.push(new FormControl(''));
  }
  onAddSegundos(): void{
    this.formArraySegundos.push(new FormControl(''));
  }
  onAddPostres(): void{
    this.formArrayPostres.push(new FormControl(''));
  }

  onDelete(): void{
    this.formArray.removeAt(this.formArray.value)
  }
  onDeletePrimeros(): void{
    this.formArrayPrimeros.removeAt(this.formArray.value)
  }
  onDeleteSegundos(): void{
    this.formArraySegundos.removeAt(this.formArray.value)
  }
  onDeletePostres(): void{
    this.formArrayPostres.removeAt(this.formArray.value)
  }

  onTurn(): void{
    this.menu.precio = 0;
  }

  addCard(): void{
    this.apiService.createCards(
      this.username,
      this.card.nombre,
      this.card.platos,
    ).subscribe( cardResponse => {
      if(cardResponse){
        console.log("INSERTADO")
      }else{
        console.log("MAL INSERTADO")
      }
    })
  }

  addMenu(): void{
    this.apiService.createMenu(
      this.username,
      this.menu.nombre,
      this.menu.primeros,
      this.menu.segundos,
      this.menu.postres,
      this.menu.precio
    ).subscribe( menuResponse => {
      if(menuResponse){
        console.log("INSERTADO")
      }else{
        console.log("MAL INSERTADO")
      }
    })
  }


  getFormGroup(i: number) {
    return this.formArray.at(i) as FormGroup;
  }

}
