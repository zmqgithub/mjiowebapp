import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {

  formGroup!: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';
  private exportTime = { hour: 7, minute: 15, meriden: 'PM', format: 24 };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.setChangeValidate()
  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      'programName':    [null, Validators.required],
      'marhoomName':    '',
      'fatherName':     '',
      'progDate':       [null, Validators.required],
      'progTime':       [null, Validators.required],
      'qurankhani':     '',
      'sozkhani':       '',
      'peshkhani':      '',
      'zakir':          '',
      'nauhahakhaani':  '',
      'liveOn':         '',
      'description':    '',
      'validate':       ''
      // 'email': [null, [Validators.required, Validators.pattern(emailregex)], this.checkInUseEmail],
      // 'name': [null, Validators.required],
      // 'password': [null, [Validators.required, this.checkPassword]],
      //[null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      
    });
  }

  setChangeValidate() {
    this.formGroup.get('validate')?.valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.formGroup.get('programName')?.setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = "You need to specify at least 3 characters";
        } else {
          this.formGroup.get('programName')?.setValidators(Validators.required);
        }
        this.formGroup.get('programName')?.updateValueAndValidity();
      }
    )
  }

  // get name() {
  //   return this.formGroup.get('programName') as FormControl
  // }

  // checkPassword(control: { value: any; }) {
  //   let enteredPassword = control.value
  //   let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  //   return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  // }

  // checkInUseEmail(control: { value: string; }) {
  //   // mimic http database access
  //   let db = ['tony@gmail.com'];
  //   return new Observable(observer => {
  //     setTimeout(() => {
  //       let result = (db.indexOf(control.value) !== -1) ? { 'alreadyInUse': true } : null;
  //       observer.next(result);
  //       observer.complete();
  //     }, 4000)
  //   })
  // }

  // getErrorEmail() {
  //   return this.formGroup.get('email')?.hasError('required') ? 'Field is required' :
  //     this.formGroup.get('email')?.hasError('pattern') ? 'Not a valid emailaddress' :
  //       this.formGroup.get('email')?.hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  // }

  // getErrorPassword() {
  //   return this.formGroup.get('password')?.hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
  //     this.formGroup.get('password')?.hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  // }

  onSubmit(post: any) {
    this.post = post;
    console.log(post)
  }

  
  /////////////////////////////
}
