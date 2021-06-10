import { Component, OnInit, Compiler, APP_ID } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DishInterface } from 'src/app/models/dish-interface';
import { AuthService } from 'src/app/services/auth.service';
import { DataApiService } from 'src/app/services/data-api.service';
import { DishAndCardsService } from 'src/app/services/dish-and-cards.service';
import { DialogMisPlatosComponent } from './dialog-mis-platos/dialog-mis-platos.component';

@Component({
  selector: 'app-mis-platos',
  templateUrl: './mis-platos.component.html',
  styleUrls: ['./mis-platos.component.scss']
})
export class MisPlatosComponent implements OnInit {

  constructor(private dialog: MatDialog,private fb: FormBuilder,private apiService: DishAndCardsService, private authService: AuthService) { }

  public formArray: FormArray = new FormArray([new FormControl('')]);

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

  openDialog(){
    this.dialog.open(DialogMisPlatosComponent);
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
        this.openDialog()
      }
    })
  }


  getFormGroup(i: number) {
    return this.formArray.at(i) as FormGroup;
  }

}
