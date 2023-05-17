import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoansService {
  baseurl = 'http://127.0.0.1:8000/';

  constructor() { }
}
