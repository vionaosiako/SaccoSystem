import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  message!: string;

  constructor(public authService: SignupService, private router: Router, private messageService: MessageService) {
    this.router.navigate(['/', '']);
  }

  sendMessage() {
    this.messageService.sendMessage(this.message)
      .subscribe(
        response => {
          console.log('Message sent successfully');
          // Handle the response if needed
        },
        error => {
          console.error('Error sending message:', error);
          // Handle the error if needed
        }
      );
  }

  ngOnInit(): void {
  }
}
