import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';


import { AppComponent } from './app.component';
import { WebPageComponent } from './Componentes/web-page/web-page.component';
import { NavegacionComponent } from './Componentes/web-page/navegacion/navegacion.component';
import { ClientIndexComponent } from './Componentes/client-index/client-index.component';
import { LandingPageComponent } from './Componentes/web-page/landing-page/landing-page.component';
import { SeccionUnoComponent } from './Componentes/web-page/seccion-uno/seccion-uno.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SeccionDosComponent } from './Componentes/web-page/seccion-dos/seccion-dos.component';
import { SeccionTresComponent } from './Componentes/web-page/seccion-tres/seccion-tres.component';
import { FooterComponent } from './Componentes/web-page/footer/footer.component';
import { RegistroComponent } from './Componentes/web-page/registro/registro.component';
import { IniciarSesionComponent } from './Componentes/web-page/iniciar-sesion/iniciar-sesion.component';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [
    AppComponent,
    WebPageComponent,
    NavegacionComponent,
    ClientIndexComponent,
    LandingPageComponent,
    SeccionUnoComponent,
    SeccionDosComponent,
    SeccionTresComponent,
    FooterComponent,
    RegistroComponent,
    IniciarSesionComponent,
  ],
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    MatNativeDateModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
