import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoansService {
  baseurl = 'http://127.0.0.1:8000/';

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http:HttpClient) { }

  getDashboardInfo(): Observable<any> {
    return this.http.get(
      this.baseurl + 'loans/getdashboard/',
      { headers: this.httpHeaders }
    );
  }
// -------------------------------------------------------------------------------------------------------------------------------------
// Loan processes
// -------------------------------------------------------------------------------------------------------------------------------------


  getLoanRequest(): Observable<any>{
    return this.http.get(
      this.baseurl+'loans/loanrequest/', 
      {headers: this.httpHeaders});
  }
  getOneLoanRequest(id:number): Observable<any>{
    return this.http.get(
      this.baseurl+'loans/loanrequest/' + id + '/', 
      {headers: this.httpHeaders});
  }

  updateLoanRequest(loanrequest: any): Observable<any> {
    const body = {amount_requested: loanrequest.amount_requested, purpose:loanrequest.purpose, status:loanrequest.status, payment_period_years:loanrequest.payment_period_years,user:loanrequest.user,category:loanrequest.category};
    return this.http.put(this.baseurl +'loans/loanrequest/' +loanrequest.id ,
      body,{ headers: this.httpHeaders });
}

createLoanRequest(loanrequest: any): Observable<any>{
  const body = {amount_requested: loanrequest.amount_requested, purpose:loanrequest.purpose, status:loanrequest.status, payment_period_years:loanrequest.payment_period_years,user:loanrequest.user,category:loanrequest.category};
  return this.http.post(this.baseurl +'loans/loanrequest/',
    body,{headers: this.httpHeaders});
}
// -------------------------------------------------------------------------------------------------------------------------------------
// Loan Category
// -------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------
// Loan Payment
// -------------------------------------------------------------------------------------------------------------------------------------

}
