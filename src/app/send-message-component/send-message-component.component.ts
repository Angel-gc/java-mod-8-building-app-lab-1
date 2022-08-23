import { LoggingService } from './../logging.service';
import { Component, OnInit } from '@angular/core';
import { MessagingDataService } from '../messaging-data.service';
import { Message } from '../message.model';

@Component({
  selector: 'app-send-message-component',
  templateUrl: './send-message-component.component.html',
  styleUrls: ['./send-message-component.component.css']
})
export class SendMessageComponentComponent implements OnInit {

  // log = new LoggingService
  messageString: Message =
  {
    sender: { firstName: "Jessica" },
    text: "Message from Jessica",
    conversationId: 1,
    sequenceNumber: 1,
  }
  
  constructor(private log: LoggingService, private msgSer: MessagingDataService) {
  
   }

  ngOnInit(): void {
  }

  onSendMessage(){
    this.log.log('send following message: ')
    this.log.log(this.messageString.text)
    this.msgSer.addUserMessage(this.messageString)
  }
}
