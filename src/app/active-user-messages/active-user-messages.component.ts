import { MessagingDataService } from './../messaging-data.service';
import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-active-user-messages',
  templateUrl: './active-user-messages.component.html',
  styleUrls: ['./active-user-messages.component.css']
})
export class ActiveUserMessagesComponent implements OnInit {
  sentMsgCt: number = 0

  constructor(private msgSer: MessagingDataService) { }

  ngOnInit(): void {
    // this.msgSer.userMessagesChanged.subscribe((messages: Message[]) => {
    //   if (messages.length !== null){
    //   this.sentMsgCt = messages.length;
    //   }
    // });
  }
}
