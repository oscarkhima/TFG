import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './Componentes/web-page/registro/registro.component';
import { WebPageComponent } from './Componentes/web-page/web-page.component';
import { IniciarSesionComponent } from './Componentes/web-page/iniciar-sesion/iniciar-sesion.component';
import { ProfileComponent } from './Componentes/web-page/profile/profile.component';


const routes: Routes = [
  { path: '', component: WebPageComponent },
  { path: 'register', component: RegistroComponent },
  { path: 'login', component: IniciarSesionComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }