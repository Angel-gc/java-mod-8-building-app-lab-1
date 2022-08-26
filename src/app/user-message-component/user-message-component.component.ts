import { MessagingDataService } from './../messaging-data.service';
import { Message } from './../message.model';
import { Component, Input, OnInit } from "@angular/core";


@Component({
  selector: "app-user-message-component",
  templateUrl: "./user-message-component.component.html",
  styleUrls: ["./user-message-component.component.css"],
})
export class UserMessageComponentComponent implements OnInit {
  //decorator @Input() that is sharing data with its parent component:
  //conversation thread component
  @Input() 
  message: Message 
  // id: number;

  onDelete(){
    this.msgSer.deleteUserMessage(this.message)
  }
  constructor(private msgSer: MessagingDataService) {}

  ngOnInit(): void {}
}