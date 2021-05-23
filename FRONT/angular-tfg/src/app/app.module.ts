import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WebPageComponent } from './Componentes/web-page/web-page.component';
import { NavegacionComponent } from './Componentes/web-page/navegacion/navegacion.component';
import { ClientIndexComponent } from './Componentes/client-index/client-index.component';
import { LandingPageComponent } from './Componentes/web-page/landing-page/landing-page.component';
import { SeccionUnoComponent } from './web-page/seccion-uno/seccion-uno.component';
@NgModule({
  declarations: [
    AppComponent,
    WebPageComponent,
    NavegacionComponent,
    ClientIndexComponent,
    LandingPageComponent,
    SeccionUnoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
