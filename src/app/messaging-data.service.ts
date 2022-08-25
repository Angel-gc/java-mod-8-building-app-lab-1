import { Conversation } from './converstion.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';
import { Message } from './message.model';

@Injectable()
export class MessagingDataService {

  private senderMessages: Message[] = [
    // {
    //   sender: { firstName: "Ludovic", isOnline: true },
    //   text: "Message from Ludovic",
    //   conversationId: 1,
    //   sequenceNumber: 0,
    // },
    // {
    //   sender: { firstName: "Jessica" },
    //   text: "Message from Jessica",
    //   conversationId: 1,
    //   sequenceNumber: 1,
    // },
  ];
  conversationId: string;
  sequenceNumber: string;

  private userMessages: Message[] = [
    // {
    //   sender: { firstName: "Aurelie" },
    //   text: "Message from Aurelie",
    //   conversationId: 1,
    //   sequenceNumber: 2,
    // },
  ];
  userMessagesChanged = new EventEmitter<Message[]>();
  senderMessagesChanged = new EventEmitter<Message[]>();

  // getSenderMessages() {
  //   return this.senderMessages.slice();
  // }
  getSenderMessages() {
    this.http
      .get<Message[]>("http://localhost:8080/api/get-sender-messages")
      .subscribe((messages: Message[]) => {
        console.log('SENDER MESSAGES', messages);
        this.senderMessages = messages;
        this.senderMessagesChanged.emit(this.senderMessages);
      });
    return this.senderMessages.slice();
  }

  getUserMessages() {
    this.http.get<Message[]>("http://localhost:8080/api/get-user-messages").subscribe(
            (messages: Message[]) => {
                console.log("Response Messages: ", messages);
                this.userMessages = messages;
                this.userMessagesChanged.emit(this.userMessages);
            }
        )
        return this.userMessages.slice();
  }

  deleteUserMessage(messageToDelete: Message) {
    this.http.delete<Message[]>(`http://localhost:8080/api/delete-user-message/${messageToDelete.conversationId}/${messageToDelete.sequenceNumber}`).subscribe(
        (messages: Message[]) => {
            console.log('Remaining Messages', messages);
            this.userMessages = messages;
            this.userMessagesChanged.emit(this.userMessages);
        }
    )
    this.userMessages = this.userMessages.filter((message) => message.sequenceNumber !== messageToDelete.sequenceNumber);
    this.userMessagesChanged.emit(this.userMessages.slice());
  }

  addUserMessage(newMessage: Message) {
    this.http.post<Message[]>("http://localhost:8080/api/add-user-message", newMessage).subscribe(
        (messages: Message[]) => {
            console.log('POSTED MESSAGES', messages);
            this.userMessages = messages;
            this.userMessagesChanged.emit(this.userMessages);
        }
    )
    this.userMessages.push(newMessage);
    this.userMessagesChanged.emit(this.userMessages.slice());
  }
  // addUserMessage(newMessage: Message) {
  //   this.userMessages.push(newMessage);
  //   this.userMessagesChanged.emit(this.userMessages.slice());
  // }

  addSenderMessage(newMessage: Message) {
    this.senderMessages.push(newMessage);
    this.senderMessagesChanged.emit(this.senderMessages.slice());
  }

  constructor(private log: LoggingService, private http: HttpClient) {
    log.log("Messaging Data Service constructor completed");
  }
}