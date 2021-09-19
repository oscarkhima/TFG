import { Component, OnInit, Compiler, APP_ID } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { elementAt, map } from 'rxjs/Operators';
import { DishInterface } from 'src/app/models/dish-interface';
import { AuthService } from 'src/app/services/auth.service';
import { DataApiService } from 'src/app/services/data-api.service';
import { DishAndCardsService } from 'src/app/services/dish-and-cards.service';
import { DialogMisPlatosComponent } from './dialog-mis-platos/dialog-mis-platos.component';
import {MatSnackBar} from '@angular/material/snack-bar';


export interface interfazPlato {
  
  nombrePlato: string;
  numeroDeIngredientes:number;
  precio: number;
  
}



@Component({
  selector: 'app-mis-platos',
  templateUrl: './mis-platos.component.html',
  styleUrls: ['./mis-platos.component.scss']
})
export class MisPlatosComponent implements OnInit {

  constructor(private dialog: MatDialog,private fb: FormBuilder,private apiService: DishAndCardsService, private authService: AuthService, private _snackBar: MatSnackBar) { }

 

  public formArray: FormArray = new FormArray([new FormControl('')]);

  public username: any;

  public platosParaTabla: any;

  public dish: DishInterface = {
    nombre: "",
    descripcion: "",
    ingredientes: [],
    precio: 0
  }

  public durationInSeconds: number = 3

  public platoCreadoString: string = "Se ha creado un nuevo plato";
   

  displayedColumnsPlatos: string[] = ['nombrePlato','numeroDeIngredientes', 'precio' ,'delete'];

  public dataSourcePlatos: any

  ngOnInit(): void {
    this.username = this.authService.getCurrentUser();
   
    this.apiService.getAllDishes(this.username).subscribe(data => { this.dataSourcePlatos = data})
    

  }


  openSnackBar() {
    this._snackBar.open("Plato creado", "close",{
      duration: this.durationInSeconds * 1000,
    })

    
  }
  

  onAdd(): void{
    this.formArray.push(new FormControl(''));
  }

  onDelete(i: string){
    console.log(i)
    console.log(this.dataSourcePlatos)
    //SE PODRIA ELIMINAR EN LA BBDD Y SOBREESCRIBIR DATASOURCEPLATOS
    this.apiService.deleteDish(this.username,i).subscribe( deleteResponse => {
      if(deleteResponse){
        console.log("BORRADO")
        this.apiService.getAllDishes(this.username).subscribe(data => { this.dataSourcePlatos = data})
      }else{
        console.log("MAL BORRADO")
      }
    })
  }

  onDeleteIngredient(): void{
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
        this.openSnackBar()
        
        console.log("INSERTADO")
        this.ngOnInit()
        
      }else{
        
      }
    })

  }

  

  getFormGroup(i: number) {
    return this.formArray.at(i) as FormGroup;
  }

}
