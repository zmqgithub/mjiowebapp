import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _authService:AuthService, private _router:Router) { }

  ngOnInit(): void {
  }

  BackOnHome(){
    this._router.navigate(['/'])
  }
  DashboardProcess(){
    this._router.navigate(['/admin'])
  }

  LogOutProcess(){
    console.log('Logout from Admin => ')
    localStorage.removeItem('token')
    this._router.navigate(['/'])
  }
  LoginProcess(){
    this._router.navigate(['/login'])
  }
  isLogedIn(){
    return this._authService.loggedIn();
  }
}
