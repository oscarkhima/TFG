import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DishInterface } from 'src/app/models/dish-interface';
import { AuthService } from 'src/app/services/auth.service';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-mis-cartas',
  templateUrl: './mis-cartas.component.html',
  styleUrls: ['./mis-cartas.component.scss']
})
export class MisCartasComponent implements OnInit {

  constructor(private fb: FormBuilder,private apiService: DataApiService, private authService: AuthService) { }

  public formArray: FormArray = new FormArray([new FormControl('')]);

  public platos = ["uno","dos","tres"];

  disabled = false;

  public username: any;

  public dish: DishInterface = {
    nombre: "",
    descripcion: "",
    ingredientes: [],
    precio: 0
  }


  ngOnInit(): void {
    this.username = this.authService.getCurrentUser();
  }

  onAdd(): void{
    this.formArray.push(new FormControl(''));
  }

  onDelete(): void{
    this.formArray.removeAt(this.formArray.value)
  }

  addDish(): void{
    this.apiService.createDish(
      this.username,
      this.dish.nombre,
      this.dish.descripcion,
      this.dish.ingredientes,
      this.dish.precio
    ).subscribe( dishResponse => {
      if(dishResponse){
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
