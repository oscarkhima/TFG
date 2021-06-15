import { Component, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { QrDataInterface } from 'src/app/models/qr-data-interface';
import { AuthService } from 'src/app/services/auth.service';
import { DataApiService } from 'src/app/services/data-api.service';
import { DishAndCardsService } from 'src/app/services/dish-and-cards.service';

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.component.html',
  styleUrls: ['./generar-qr.component.scss']
})
export class GenerarQrComponent implements OnInit {

  constructor(private dataApi: DishAndCardsService,private authService: AuthService) { }

  public qrData: QrDataInterface= <QrDataInterface>{};

  public nombreCarta: any;
  public nombreUsuario: any;
  public nombreMenu: any;
  public numeroMesa: number = 1;
  public username: any;

  name = 'Angular ' + VERSION.major;
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'http://localhost:4200/';

  ngOnInit(): void {
    this.username = this.authService.getCurrentUser();
  }

  generarCodigo(){

    this.dataApi.getQrData(this.username).subscribe(data => this.qrData = data)
    this.value = 'http://localhost:4200/card?username=' + this.username + "&cardname=" + this.qrData.nombreCarta + "&menuname=" + this.qrData.nombreMenu + "&mesa=" + this.numeroMesa;
    console.log(this.value)
  
  }

}
