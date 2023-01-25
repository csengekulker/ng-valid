import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators as V } from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm = new FormGroup({

    fullName: new FormControl('', V.required),
    email: new FormControl('', [V.required, V.email]),
    userName: new FormControl('', V.required),
    password: new FormControl('', V.required),
    passwordRe: new FormControl('', V.required)

  });

  constructor() { }

  ngOnInit(): void {
  }

  formSubmit() {
    console.log("o");
    
  }

}
