import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoansService } from 'src/app/services/loans.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {

  loans: any;
  constructor(public api:LoansService, private router: Router) {
   }

  ngOnInit(): void {
  }

// -------------------------------------------------------------------------------------------------------------------------------------
// Loan category
// -------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------
// Loan Payment
// -------------------------------------------------------------------------------------------------------------------------------------

}

