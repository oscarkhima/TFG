import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-web-page',
  templateUrl: './web-page.component.html',
  styleUrls: ['./web-page.component.scss']
})
export class WebPageComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  ngOnInit(): void {
    this.getListUsers();
  }

  getListUsers(){
    this.dataApi.getAllUsers().subscribe(users => console.log(users));
  }

}
