import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _aurhService:AuthService, private _router:Router){}

  canActivate():boolean{
     
    if(this._aurhService.loggedIn()){
      return true
    }

    else{
       alert("You are not authorized to visit this page, please Login")
       this._router.navigate(['/login'])
       return false
    }
 }
  
}
