import { Component, OnInit, ViewChild} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CardInterface } from 'src/app/models/cart-interface';
import { DishInterface } from 'src/app/models/dish-interface';
import { MenuInterface } from 'src/app/models/menu-interface';
import { AuthService } from 'src/app/services/auth.service';
import { DataApiService } from 'src/app/services/data-api.service';
import { DishAndCardsService } from 'src/app/services/dish-and-cards.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatAccordion} from '@angular/material/expansion';

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




@Component({
  selector: 'app-mis-cartas',
  templateUrl: './mis-cartas.component.html',
  styleUrls: ['./mis-cartas.component.scss']
})




export class MisCartasComponent implements OnInit {

  constructor(private fb: FormBuilder,private apiService: DishAndCardsService, private authService: AuthService, private _snackBar: MatSnackBar) { }

  public formArray: FormArray = new FormArray([new FormControl('')]);
  public formArrayPrimeros: FormArray = new FormArray([new FormControl('')]);
  public formArraySegundos: FormArray = new FormArray([new FormControl('')]);
  public formArrayPostres: FormArray = new FormArray([new FormControl('')]);

  public platos: string[] = ["uno","dos","tres"];

  disabled = false;

  

  public nombresPlatos: Observable<Object> | undefined;

  public durationInSeconds: number = 3
  
  public username: any;

  public numeroDePlatos: number = this.platos.length

  public activado: string = ""

  public cartaMostrada: string = ""
  public menuMostrado: string = ""

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

  public panelOpenState = false;


  displayedColumnsCarta: string[] = ['visible','nombreCarta', 'numeroProductos','delete'];
  displayedColumnsCartaUnica: string[] = ['nombrePlato','ingredientesPlato', 'precioPlato','delete'];
  displayedColumnsMenu: string[] = ['visible','nombreMenu', 'primeros', 'segundos','postres' , 'precio','delete'];
  displayedColumnsMenuPrimeros: string[] = ['nombrePlato','ingredientesPlato','delete'];
  displayedColumnsMenuSegundos: string[] = ['nombrePlato','ingredientesPlato','delete'];
  displayedColumnsMenuPostres: string[] = ['nombrePlato','ingredientesPlato','delete'];

  public dataSourceResumenCarta: any
  public dataSourceCarta: any
  public dataSourceResumenMenu: any
  public dataSourceMenuPrimeros: any
  public dataSourceMenuSegundos: any
  public dataSourceMenuPostres: any

  ngOnInit(): void {
    this.username = this.authService.getCurrentUser();
    this.platos = this.getDishNames();

     this.apiService.getAllCards(this.username).subscribe(data => { this.dataSourceResumenCarta = data})  

     this.apiService.getAllMenus(this.username).subscribe(data => { this.dataSourceResumenMenu = data})  
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
        this.ngOnInit()
        console.log("INSERTADO")
        this.openSnackBar("Carta creada correctamente")
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
        this.ngOnInit()
        console.log("INSERTADO")
        this.openSnackBar("Menú creado correctamente")
      }else{
        console.log("MAL INSERTADO")
      }
    })
  }

  updateMenus(element: any){

    let nombre: string ="";

    if(element.activated){
      element.activated = false;
    }else{
      element.activated = true;
    }
    
    for(let i = 0;i < this.dataSourceResumenMenu.length;i++){
      if(this.dataSourceResumenMenu[i].nombre !=  element.nombre){
        this.dataSourceResumenMenu[i].activated = false;
      }
    }

    

    this.apiService.updateMenus(this.username,element.nombre, element.primeros,element.segundos, element.postres, element.precio,element.activated).subscribe( cardUpdate => {
      if(cardUpdate){
        this.ngOnInit()
        console.log("ACTUALIZADO")
      }else{
        console.log("MAL ACTUALIZADO")
      }
    })
  }

  showCard(element:any){
    this.panelOpenState = true;
    this.cartaMostrada = element.nombre;
    this.apiService.getCard(this.username,element.nombre).subscribe(data => { this.dataSourceCarta = data.platos})  
  }

  showMenu(element:any){
    this.panelOpenState = true;
    this.cartaMostrada = element.nombre;
    this.apiService.getMenu(this.username,element.nombre).subscribe(data => { this.dataSourceMenuPrimeros = data.primeros}) 
    this.apiService.getMenu(this.username,element.nombre).subscribe(data => { this.dataSourceMenuSegundos = data.segundos}) 
    this.apiService.getMenu(this.username,element.nombre).subscribe(data => { this.dataSourceMenuPostres = data.postres}) 
    
  }

  onDeleteCard(nombre:string){
    this.apiService.deleteCard(this.username,nombre).subscribe( deleteResponse => {
      if(deleteResponse){
        this.openSnackBar("Carta borrada correctamente")
        this.apiService.getAllCards(this.username).subscribe(data => { this.dataSourceResumenCarta = data})  
        this.dataSourceCarta = null
      }else{
        this.openSnackBar("Carta no borrada")
      }
    })
  }

  onDeleteMenu(nombre:string){
    
    this.apiService.deleteMenu(this.username,nombre).subscribe( deleteResponse => {
      if(deleteResponse){
        this.openSnackBar("Menú borrada correctamente")
        this.apiService.getAllMenus(this.username).subscribe(data => { this.dataSourceResumenMenu = data})  
        this.dataSourceCarta = null
      }else{
        this.openSnackBar("Menú no borrada")
      }
    })
  }

  onDeleteFromCard(nombre:string){
    this.apiService.deleteFromCard(this.username,this.cartaMostrada,nombre).subscribe( deleteResponse => {
      if(deleteResponse){
        this.openSnackBar("Plato borrado correctamente")
        this.apiService.getCard(this.username,this.cartaMostrada).subscribe(data => { this.dataSourceCarta = data.platos}) 
      }else{
        this.openSnackBar("Plato no borrado")
      }
    })
  }

  updateCards(element: any){

    let nombre: string ="";

    if(element.activated){
      element.activated = false;
    }else{
      element.activated = true;
    }
    
    for(let i = 0;i < this.dataSourceResumenCarta.length;i++){
      if(this.dataSourceResumenCarta[i].nombre !=  element.nombre){
        this.dataSourceResumenCarta[i].activated = false;
      }
    }

     

    this.apiService.updateCards(this.username,element.nombre, element.activated, element.platos).subscribe( cardUpdate => {
      if(cardUpdate){
        this.ngOnInit()
        console.log("ACTUALIZADO")
      }else{
        console.log("MAL ACTUALIZADO")
      }
    })
  }


  getFormGroup(i: number) {
    return this.formArray.at(i) as FormGroup;
  }
  openSnackBar(value:string) {
    this._snackBar.open(value, "close", {
      duration: this.durationInSeconds * 1000,
    })

    
  }
  

}
