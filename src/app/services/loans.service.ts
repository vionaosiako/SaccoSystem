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
}

