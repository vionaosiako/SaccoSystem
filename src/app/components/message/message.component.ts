import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message!: string;
  constructor(private messageService: MessageService) { }

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
