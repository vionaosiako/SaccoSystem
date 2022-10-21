import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})  
export class MembersService {

  baseurl = 'http://127.0.0.1:8000/'
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http:HttpClient) { }

  getUser(): Observable<any>{
    return this.http.get(this.baseurl+'membermember/', {headers: this.httpHeaders}) && this.http.get(this.baseurl+'api/users/', {headers: this.httpHeaders});
  }
  getOneUser(id:number): Observable<any>{
    return this.http.get(this.baseurl+'api/users/' + id + '/', {headers: this.httpHeaders});
  }

  updateUser(user:any): Observable<any>{
    const body = {id:user.id, username: user.username, first_name: user.last_name, email:user.email }
    return this.http.put(this.baseurl+'api/users/' + user.id + '/', body,
      {headers: this.httpHeaders});
  }

  getMember(): Observable<any>{
    return this.http.get(this.baseurl+'membermember/', {headers: this.httpHeaders});
  }
  getOneMember(id:number): Observable<any>{
    return this.http.get(this.baseurl+'membermember/' + id + '/', {headers: this.httpHeaders});
  }

  // updateMember(user:any): Observable<any>{
  //   const body = {id:user.id, username: user.username, first_name: user.last_name, email:user.email }
  //   return this.http.put(this.baseurl+'member' + user.id + '/', body,
  //     {headers: this.httpHeaders});
  // }
}
