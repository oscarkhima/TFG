import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public username: any;

  constructor(private authService: AuthService, private router: Router) { }

  opened = false;
  option: String ="";
  
  ngOnInit(): void {
    this.onCheckUser();
    this.username = this.authService.getCurrentUser();
    this.option = "5"
  }

  chooseOption(option: any){
    console.log(option.selectedOptions.selected[0]?.value)
    this.option = option.selectedOptions.selected[0]?.value
  }

  onCheckUser(): void {
    if (this.authService.getCurrentUser() == null) {
      this.router.navigate([''])
    }
  }
  logOut(){
    this.authService.logOutUser()
    this.router.navigate([''])
  }
  
  
}
