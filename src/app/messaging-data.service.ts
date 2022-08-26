import { Conversation } from './converstion.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';
import { Message } from './message.model';

@Injectable()
export class MessagingDataService {

  private senderMessages: Message[] = [

  ];
  conversationId: string;
  sequenceNumber: string;

  private userMessages: Message[] = [

  ];
  //event emitters which we call within our http requests to let listeners know when a
  //change has occured
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
      //nothing is returned from the backend delete mapping therefore we dont have anything
      //to manipulate within the callback
        // (messages: Message[]) => {
        //   this.userMessages = messages;
        //   this.userMessagesChanged.emit(this.userMessages);
        //   console.log('Remaining Messages', messages);
        // }
    )
    this.userMessages = this.userMessages.filter((message) => 
    (message.sequenceNumber !== messageToDelete.sequenceNumber) && 
    (message.conversationId !== messageToDelete.conversationId)
    );
    console.log('Remaining Messages', this.userMessages);
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