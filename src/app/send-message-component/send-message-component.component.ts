import { LoggingService } from './../logging.service';
import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';
import { MessagingDataService } from '../messaging-data.service';
import { User } from '../user.model';

@Component({
  selector: 'app-send-message-component',
  templateUrl: './send-message-component.component.html',
  styleUrls: ['./send-message-component.component.css']
})
export class SendMessageComponentComponent implements OnInit {

  messageString: string;
  
  constructor(private log: LoggingService, private msgSer: MessagingDataService) { }

  ngOnInit(): void {
  }

  onSendMessage(){
    this.log.log('send following message: ')
    this.log.log(this.messageString)

    this.msgSer.addUserMessage({
      sender: new User("Angel", true),
      text: this.messageString,
      conversationId: 5,
      sequenceNumber: 5
    });
  }
}
