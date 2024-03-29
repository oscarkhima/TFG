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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { QRCodeModule } from 'angular2-qrcode';


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
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';

//SERVICES
import{DataApiService} from "./services/data-api.service"
import{AuthService} from "./services/auth.service";
import{DishAndCardsService} from "./services/dish-and-cards.service";

import { SeccionCuatroComponent } from './Componentes/web-page/seccion-cuatro/seccion-cuatro.component';
import { SeccionCincoComponent } from './Componentes/web-page/seccion-cinco/seccion-cinco.component'
import { DialogRegistroComponent } from './Componentes/web-page/registro/dialog-registro/dialog-registro.component';
import { DialogIniciarComponent } from './Componentes/web-page/iniciar-sesion/dialog-iniciar/dialog-iniciar.component';
import {MatStepperModule} from '@angular/material/stepper';
import { NavComponent } from './Componentes/client-index/nav/nav.component';
import { BodyComponent } from './Componentes/client-index/body/body.component';
import { SidenavComponent } from './Componentes/client-index/sidenav/sidenav.component';
import { MisCartasComponent } from './Componentes/client-index/body/mis-cartas/mis-cartas.component';
import { MisPlatosComponent } from './Componentes/client-index/body/mis-platos/mis-platos.component';
import { PedidosComponent } from './Componentes/client-index/body/pedidos/pedidos.component';
import { HomeComponent } from './Componentes/client-index/body/home/home.component';

import { ConfiguracionComponent } from './Componentes/client-index/body/configuracion/configuracion.component';
import { SeccionSeisComponent } from './Componentes/web-page/seccion-seis/seccion-seis.component';
import { ProductoComponent } from './Componentes/web-page/producto/producto.component';
import { ContactoComponent } from './Componentes/web-page/contacto/contacto.component';
import { SeccionSieteComponent } from './Componentes/web-page/seccion-siete/seccion-siete.component';
import { DialogMisPlatosComponent } from './Componentes/client-index/body/mis-platos/dialog-mis-platos/dialog-mis-platos.component';
import { WebCardComponent } from './Componentes/web-card/web-card.component';
import { MenuComponent } from './Componentes/web-card/menu/menu.component';
import { CardComponent } from './Componentes/web-card/card/card.component';
import { WebCardNavComponent } from './Componentes/web-card/web-card-nav/web-card-nav.component';
import { InicioClientComponent } from './Componentes/client-index/body/inicio-client/inicio-client.component';
import { GenerarQrComponent } from './Componentes/client-index/body/generar-qr/generar-qr.component';
import { DialogOrderComponent } from './Componentes/web-card/dialog-order/dialog-order.component';
import { DialogOrderFalseComponent } from './Componentes/web-card/dialog-order-false/dialog-order-false.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';





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
    SeccionSeisComponent,
    MisCartasComponent,
    MisPlatosComponent,
    PedidosComponent,
    ProductoComponent,
    ContactoComponent,
    SeccionSieteComponent,
    ConfiguracionComponent,
    DialogMisPlatosComponent,
    WebCardComponent,
    MenuComponent,
    CardComponent,
    WebCardNavComponent,
    GenerarQrComponent,
    DialogOrderComponent,
    DialogOrderFalseComponent,
    InicioClientComponent,
    HomeComponent
  ],
  imports: [
    QRCodeModule,
    MatGridListModule,
    MatExpansionModule,
    MatTableModule,
    MatTabsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
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
    MatStepperModule,
    MatSnackBarModule

  ],
  providers: [
    DishAndCardsService,
    MatNativeDateModule,
    DataApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
