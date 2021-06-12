import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CardInterface } from 'src/app/models/cart-interface';
import { DishInterface } from 'src/app/models/dish-interface';
import { AuthService } from 'src/app/services/auth.service';
import { DataApiService } from 'src/app/services/data-api.service';
import { DishAndCardsService } from 'src/app/services/dish-and-cards.service';

@Component({
  selector: 'app-mis-cartas',
  templateUrl: './mis-cartas.component.html',
  styleUrls: ['./mis-cartas.component.scss']
})
export class MisCartasComponent implements OnInit {

  constructor(private fb: FormBuilder,private apiService: DishAndCardsService, private authService: AuthService) { }

  public formArray: FormArray = new FormArray([new FormControl('')]);

  public platos: string[] = ["uno","dos","tres"];

  disabled = false;

  public nombresPlatos: Observable<Object> | undefined;



  public username: any;

  public card: CardInterface = {
    nombre: "",
    platos: [],
    menu: false,
    precio: 0
  }


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

  onDelete(): void{
    this.formArray.removeAt(this.formArray.value)
  }

  onTurn(): void{
    this.card.precio = 0;
  }

  //SUSTITUIR POT ADD CARD
  addDish(): void{
    this.apiService.createCards(
      this.username,
      this.card.nombre,
      this.card.platos,
      this.card.menu = this.disabled,
      this.card.precio
    ).subscribe( cardResponse => {
      if(cardResponse){
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
