import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  constructor(private authService: AuthService, private router: Router) { }

  public username: any;

  ngOnInit(): void {
    this.onCheckUser();
    this.username = this.authService.getCurrentUser();
  }

  onCheckUser(): void {
    if (this.authService.getCurrentUser() == null) {
      this.router.navigate([''])
    }
  }
}
