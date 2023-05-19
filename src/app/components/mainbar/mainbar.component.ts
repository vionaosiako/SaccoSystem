import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoansService } from 'src/app/services/loans.service';

@Component({
  selector: 'app-mainbar',
  templateUrl:'./mainbar.component.html',
  styleUrls: ['./mainbar.component.css']
})
export class MainbarComponent implements OnInit {
  loans: any;
  constructor(public api:LoansService, private router: Router) {
    this.getDashboardInfo()
    this.loans = {totalCustomer:'',}
   }

  ngOnInit(): void {
    this.getDashboardInfo()
    this.loans = {totalCustomer:'',}

  }

  getDashboardInfo=() =>{
    this.api.getDashboardInfo().subscribe(
      data => {
        this.loans =data
        console.log(data)
      },
      error => {
        console.log(error)
      }
    )
  }

}
