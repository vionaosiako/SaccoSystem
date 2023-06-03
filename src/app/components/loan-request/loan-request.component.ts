import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoansService } from 'src/app/services/loans.service';
import 'datatables.net-responsive-dt'

@Component({
  selector: 'app-loan-request',
  templateUrl: './loan-request.component.html',
  styleUrls: ['./loan-request.component.css']
})
export class LoanRequestComponent implements OnInit {

  loans: any;
  constructor(public api:LoansService, private router: Router) {
    this.getLoanRequest()
   }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
  }
  // -------------------------------------------------------------------------------------------------------------------------------------
// Loan Request
// -------------------------------------------------------------------------------------------------------------------------------------

getLoanRequest = () => {
  this.api.getLoanRequest().subscribe(
    (data) => {
      this.loans = data;
      setTimeout(()=>{   
        $('#datatableexample').DataTable( {
          pagingType: 'full_numbers',
          pageLength: 5,
          processing: true,
          lengthMenu : [5, 10, 25],
          responsive: true, // Use this attribute to enable the responsive extension
      } 
      );
      }, 1);
            }, error => console.error(error));
}

newLoanRequest(){
  this.api.createLoanRequest(this.loans).subscribe(
    response=> {
      alert('Loan Requested Successfully!')
      this.getLoanRequest()
    },
    error=> console.log (error)
  );

}

putLoanRequest = () => {
  this.api.updateLoanRequest(this.loans).subscribe(
    response=> {
      alert('Loan Request Successfully!')
      this.getLoanRequest()
    },
    error => {
      console.log(error);
    }
  );
}

loanRequestClicked = (request:any) => {
  this.api.getOneLoanRequest(request.id).subscribe(
    data => {
      this.loans = data;
    },
    error => {
      console.log(error);
    }
  );
}

}
