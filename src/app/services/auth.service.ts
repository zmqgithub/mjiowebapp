import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'
import { throwError } from 'rxjs/internal/observable/throwError';
import { Router } from '@angular/router';
import { catchError, delay} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient,
    private _router:Router)  { }
  handleError(error:HttpErrorResponse){
    let errormsg = "unknown error"
    if(error.error instanceof ErrorEvent){
      //  client-side error
       errormsg = "Error: "+error.error.message 
    }
    else{
     errormsg = "Error Code "+error.status+'\n message :'+ error.message
    }
  
    alert(errormsg)
   return throwError(errormsg)
 }

  loginCheck(loginDetails: { email: string; password: string; }){
    if(loginDetails.email ==='admin' && loginDetails.password ==='admin'){
          localStorage.setItem('token',loginDetails.email)
          return true
    }
    else{
        return false
    }
  }
  
  loggedIn(){
    return localStorage.getItem('token')
  }

  getPrograms(){
    // return this._http.get<any>("assets/jsonfiles/program.json").pipe(delay(0),catchError(this.handleError))
    
    // return this._http.get<any>("http://dev.wesaya.net/api/users").pipe(delay(1000),catchError(this.handleError))
    return this._http.get<any>("http://127.0.0.1:5600/api/users/1").pipe(delay(1000),catchError(this.handleError))
  }
}
