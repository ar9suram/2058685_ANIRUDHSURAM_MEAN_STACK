import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { contactDetails } from '../contact.details';
import { Portfolio } from '../models/Portfolio';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']

})
export class PortfolioComponent implements OnInit {
  
  portfolio: Portfolio = new Portfolio();
  portfolioList: Portfolio[] = [];
  
  portfolioRef: FormGroup = new FormGroup({
    cname: new FormControl(),
    phoneNumber:new FormControl(),    
  });
 

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.portfolioRef = this.fb.group({
      cname: '',
      phoneNumber:'',  
    })
  }
  save(){
    let myPortfolioObj = this.portfolioRef.value;
    this.portfolio = new Portfolio;
    this.portfolio.name = myPortfolioObj.cname;
    this.portfolio.phoneNumber = myPortfolioObj.phoneNumber;
    this.portfolioList.push(this.portfolio);
    console.log(this.portfolioRef.value);
    
  }
}