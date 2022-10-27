import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message1',
  templateUrl: './message1.component.html',
  styleUrls: ['./message1.component.css']
})
export class Message1Component implements OnInit {
  messages: any[] = [];
  subscription: Subscription=new Subscription();

  constructor(private messageService:MessageService) {
   }

  ngOnInit(): void {
    
    this.subscription = this.messageService.getMessages().subscribe(messages => {
      if (messages) {
        this.messages.push(messages);
      } else {
        // clear messages when empty message received
        this.messages = [];
      }
    });
    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


}
