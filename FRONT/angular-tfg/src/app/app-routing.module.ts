import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './Componentes/web-page/registro/registro.component';
import { WebPageComponent } from './Componentes/web-page/web-page.component';
import { IniciarSesionComponent } from './Componentes/web-page/iniciar-sesion/iniciar-sesion.component';
import {ClientIndexComponent} from './Componentes/client-index/client-index.component'
import {ProductoComponent} from './Componentes/web-page/producto/producto.component'
import { ContactoComponent } from './Componentes/web-page/contacto/contacto.component';



const routes: Routes = [
  { path: '', component: WebPageComponent },
  { path: 'register', component: RegistroComponent },
  { path: 'login', component: IniciarSesionComponent },
  { path: 'profile', component: ClientIndexComponent},
  { path: 'products', component: ProductoComponent},
 { path: 'us', component: ContactoComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }