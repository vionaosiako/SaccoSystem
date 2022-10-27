import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContributionsService {

  baseurl = 'http://127.0.0.1:8000/';
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) {}

  getMerryGoRoundContribution(): Observable<any> {
    return this.http.get(
      this.baseurl + 'contributions/merrygoroundcontribution/',
      { headers: this.httpHeaders }
    );
  }

  getMonthlySavingContribution(): Observable<any> {
    return this.http.get(this.baseurl + 'contributions/monthlycontribution/', {
      headers: this.httpHeaders,
    });
  }

  updateMonthlySavings(monthlysavings: any): Observable<any> {
    const body = {reg_number: monthlysavings.reg_number,Amount: monthlysavings.Amount};
    return this.http.put(this.baseurl +'contributions/monthlycontribution/' + monthlysavings.id + '/',
      body,{ headers: this.httpHeaders });
  }

  updateMerryGoRound(monthlysavings: any): Observable<any> {
    const body = {reg_number: monthlysavings.reg_number,Amount: monthlysavings.Amount,};
    return this.http.put(this.baseurl +'contributions/merrygoroundcontribution/' + monthlysavings.id +'/',body,{ headers: this.httpHeaders });
  }

  createMonthlySavings(monthlysavings: any): Observable<any>{
    const body = {reg_number: monthlysavings.reg_number, Amount: monthlysavings.Amount };
    return this.http.post('http://127.0.0.1:8000/contributions/monthlycontribution/', body,{headers: this.httpHeaders});
  }

  createMerryGoRound(monthlysavings: any): Observable<any>{
    const body = {reg_number: monthlysavings.reg_number, Amount: monthlysavings.Amount };
    return this.http.post('http://127.0.0.1:8000/contributions/merrygoroundcontribution/', body,{headers: this.httpHeaders});
  }

  getOneMonthlySavings(id:number): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/contributions/monthlycontribution/' + id + '/',
    {headers: this.httpHeaders});
  }

  getOneMerryGoRound(receipt_ID:number): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/contributions/merrygoroundcontribution/'+ receipt_ID + '/',
    {headers: this.httpHeaders});
  }
}
