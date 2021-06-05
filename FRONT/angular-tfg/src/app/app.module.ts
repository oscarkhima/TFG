import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';


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
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';


//SERVICES
import{DataApiService} from "./services/data-api.service"
import{AuthService} from "./services/auth.service";
import { SeccionCuatroComponent } from './Componentes/web-page/seccion-cuatro/seccion-cuatro.component';
import { SeccionCincoComponent } from './Componentes/web-page/seccion-cinco/seccion-cinco.component'

import { DialogRegistroComponent } from './Componentes/web-page/registro/dialog-registro/dialog-registro.component';
import { DialogIniciarComponent } from './Componentes/web-page/iniciar-sesion/dialog-iniciar/dialog-iniciar.component';
<<<<<<< Updated upstream
import { NavComponent } from './Componentes/client-index/nav/nav.component';
import { BodyComponent } from './Componentes/client-index/body/body.component';
import { SidenavComponent } from './Componentes/client-index/sidenav/sidenav.component';

=======
import {MatStepperModule} from '@angular/material/stepper';
>>>>>>> Stashed changes




@NgModule({
  entryComponents:[
    DialogRegistroComponent,
    DialogIniciarComponent,
  ],
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
    SeccionCuatroComponent,
    SeccionCincoComponent,
    DialogRegistroComponent,
    DialogIniciarComponent,
    NavComponent,
    BodyComponent,
    SidenavComponent,
  ],
  imports: [
    NgxQRCodeModule,
    MatIconModule,
    MatSidenavModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatStepperModule
  ],
  providers: [
    MatNativeDateModule,
    DataApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
