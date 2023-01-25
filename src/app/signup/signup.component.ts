import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm = new FormGroup({

    fullName: new FormControl(''),
    email: new FormControl(''),
    userName: new FormControl(''),
    password: new FormControl(''),
    passwordRe: new FormControl('')

  });

  constructor() { }

  ngOnInit(): void {
  }

  formSubmit() {
    console.log("o");
    
  }

}
