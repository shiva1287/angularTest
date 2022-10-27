import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message2',
  templateUrl: './message2.component.html',
  styleUrls: ['./message2.component.css']
})
export class Message2Component implements OnInit {

  newMsg:any;

  constructor(private messageService: MessageService) { }
  ngOnInit() { }

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage(this.newMsg);
  }

  clearMessages(): void {
    // clear messages
    this.messageService.clearMessages();
  }

}
