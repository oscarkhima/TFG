import { Component, OnInit, VERSION } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { QrDataInterface } from 'src/app/models/qr-data-interface';
import { AuthService } from 'src/app/services/auth.service';
import { QRCodeModule } from 'angular2-qrcode';
import { DishAndCardsService } from 'src/app/services/dish-and-cards.service';


@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.component.html',
  styleUrls: ['./generar-qr.component.scss']
})
export class GenerarQrComponent implements OnInit {

  constructor(private dataApi: DishAndCardsService,private authService: AuthService,private routing:AppRoutingModule) { 
  }

  public qrData: QrDataInterface= <QrDataInterface>{};

  public nombreCarta: any;
  public nombreUsuario: any;
  public nombreMenu: any;
  public numeroMesa: number = 1;
  public username: any;
  public newVariable: any = window.navigator;


  name = 'Angular ' + VERSION.major;
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'http://'+this.routing.host+ this.routing.frontPort+'/';

  ngOnInit(): void {
    this.username = this.authService.getCurrentUser();
    
  }

  generarCodigo(){
    this.dataApi.getQrData(this.username).subscribe(data => this.qrData = data);
    this.value = 'http://'+this.routing.host+ this.routing.frontPort +'/card?username=' + this.username + "&cardname=" + this.qrData.nombreCarta + "&menuname=" + this.qrData.nombreMenu + "&mesa=" + this.numeroMesa;
    console.log(this.value)
  }

  qrdata = 'Initial QR code data string';

  saveAsImage() {
    // fetches base 64 date from image
    const parentElement = document.querySelector('img')?.src;

    // converts base 64 encoded image to blobData
    let blobData = this.convertBase64ToBlob(parentElement);

    const blob = new Blob([blobData], { type: "image/png" });
    const url = window.URL.createObjectURL(blob);
    // window.open(url);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Qrcode';
    link.click();
  }

  private convertBase64ToBlob(Base64Image: any) {
    // SPLIT INTO TWO PARTS
    const parts = Base64Image.split(';base64,');
    // HOLD THE CONTENT TYPE
    const imageType = parts[0].split(':')[1];
    // DECODE BASE64 STRING
    const decodedData = window.atob(parts[1]);
    // CREATE UNIT8ARRAY OF SIZE SAME AS ROW DATA LENGTH
    const uInt8Array = new Uint8Array(decodedData.length);
    // INSERT ALL CHARACTER CODE INTO UINT8ARRAY
    for (let i = 0; i < decodedData.length; ++i) {
      uInt8Array[i] = decodedData.charCodeAt(i);
    }
    // RETURN BLOB IMAGE AFTER CONVERSION
    return new Blob([uInt8Array], { type: imageType });
  }



}
