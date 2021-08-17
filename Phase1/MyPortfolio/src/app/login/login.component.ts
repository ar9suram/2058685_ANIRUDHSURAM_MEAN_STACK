import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRef= new FormGroup({
    userName:new FormControl(),
    password:new FormControl()
  });

  constructor(public router:Router) { }

  ngOnInit(): void { }

  login(){
    let userForm = this.loginRef.value;
    console.log("Password details from form: " + userForm);

    let userObj:any = sessionStorage.getItem("userInfo");
    let userJson:any = JSON.parse(userObj);
    console.log("got it from session storage: " + userJson);
    if(userForm.userName == userJson.userName && userForm.password == userJson.password){
      console.log("login successful.")
      this.router.navigate(["portfolio"]);
    }else{
      console.log("login failed.")
    }

  }

  signup(){
    this.router.navigate(["signup"])
  }
}