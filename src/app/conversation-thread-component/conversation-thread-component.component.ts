import { Message } from './../message.model';
import { Component, OnInit } from "@angular/core";
import { MessagingDataService } from '../messaging-data.service';

@Component({
  selector: "app-conversation-thread-component",
  templateUrl: "./conversation-thread-component.component.html",
  styleUrls: ["./conversation-thread-component.component.css"],
})
export class ConversationThreadComponentComponent implements OnInit {
  // senderMessages: Message[] = [
  //   {
  //     sender: { firstName: "Ludovic",isOnline: true },
  //     text: "Message from Ludovic",
  //     conversationId: 1,
  //     sequenceNumber: 0,
  //   },
  //   {
  //     sender: { firstName: "Jessica" },
  //     text: "Message from Jessica",
  //     conversationId: 1,
  //     sequenceNumber: 1,
  //   },
  // ];

  // userMessages: Message[] = [
  //   {
  //     sender: { firstName: "Aurelie" },
  //     text: "Message from Aurelie",
  //     conversationId: 1,
  //     sequenceNumber: 2,
  //   },
  // ];
//   constructor() {}

//   ngOnInit(): void {}
// }
  senderMessages: Message[];
  userMessages: Message[];

  constructor(private messagingSvce: MessagingDataService) {}

  ngOnInit(): void {
    this.senderMessages = this.messagingSvce.getSenderMessages();
    this.userMessages = this.messagingSvce.getUserMessages();
    this.messagingSvce.userMessagesChanged.subscribe((messages: Message[]) => {
      console.log("********** messages have changed");
      this.userMessages = messages;
    });
    this.messagingSvce.senderMessagesChanged.subscribe((messages: Message[]) => {
      console.log("********** messages have changed");
      this.senderMessages = messages;
    });
  }
}