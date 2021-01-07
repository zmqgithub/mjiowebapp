import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm!: FormGroup;
  constructor(private _authService:AuthService, private _router:Router) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
  })
  }

  LoginProcess(){
    console.log(this.userForm.value)
    let loginResult = this._authService.loginCheck(this.userForm.value)
    
    if(loginResult)
       this._router.navigate(['/admin'])
    else
      alert("Wrong Username/Password")
  }

}
