import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiUrl = 'http://127.0.0.1:8000/sms/message/'; // Replace with your Django API URL

  constructor(private http: HttpClient) { }

  sendMessage(message: string) {
    const payload = { message: message };
    return this.http.post(this.apiUrl, payload);
  }
}
