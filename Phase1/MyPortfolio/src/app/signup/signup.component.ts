import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupRef= new FormGroup({
    userName:new FormControl(),
    password:new FormControl()
  });

  info:string="";

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  checkUser(){  
    let registrationForm = this.signupRef.value;
    console.log(registrationForm);
    sessionStorage.setItem("userInfo", JSON.stringify(registrationForm));
    this.info = "User is registered, Please login."
  }

  loginPage(){
     this.router.navigate(["login"]);
  }

}