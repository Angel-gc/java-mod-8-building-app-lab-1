import { LoggingService } from './../logging.service';
import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';
import { MessagingDataService } from '../messaging-data.service';

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
  }

  // messageString: Message =
  // {
  //   sender: { firstName: "Jessica" },
  //   text: "Message from Jessica",
  //   conversationId: 1,
  //   sequenceNumber: 1,
  // }
  
  // constructor(private log: LoggingService, private msgSer: MessagingDataService) {
  
  //  }

  // ngOnInit(): void {
  // }

  // onSendMessage(){
  //   this.log.log('send following message: ')
  //   this.log.log(this.messageString.text)
  //   this.msgSer.addUserMessage(this.messageString)
  // }
}
