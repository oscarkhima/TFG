import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  
  opened = false;
  option: String ="";
  
  ngOnInit(): void {
  }

  chooseOption(option: any){
    console.log(option.selectedOptions.selected[0]?.value)
    this.option = option.selectedOptions.selected[0]?.value
  }

  
}
