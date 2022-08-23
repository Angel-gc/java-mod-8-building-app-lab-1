import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AppConversionControlComponentComponent } from './app-conversion-control-component/app-conversion-control-component.component';
import { AppConversionHistoryComponentComponent } from './app-conversion-history-component/app-conversion-history-component.component';
import { AppContactListComponentComponent } from './app-contact-list-component/app-contact-list-component.component';
import { SendMessageComponentComponent } from './send-message-component/send-message-component.component';
import { ConversationThreadComponentComponent } from './conversation-thread-component/conversation-thread-component.component';
import { AppContactComponentComponent } from './app-contact-component/app-contact-component.component';
import { SenderMessageComponentComponent } from './sender-message-component/sender-message-component.component';
import { UserMessageComponentComponent } from './user-message-component/user-message-component.component';
import { WelcomeHeaderComponentComponent } from './welcome-header-component/welcome-header-component.component';
import { HighlightDirective } from './highlight.directive';
import { HttpClientModule } from "@angular/common/http";
import { MessagingDataService } from './messaging-data.service';
import { LoggingService } from './logging.service';
import { ActiveUserMessagesComponent } from './active-user-messages/active-user-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    AppConversionControlComponentComponent,
    AppConversionHistoryComponentComponent,
    AppContactListComponentComponent,
    SendMessageComponentComponent,
    ConversationThreadComponentComponent,
    AppContactComponentComponent,
    SenderMessageComponentComponent,
    UserMessageComponentComponent,
    WelcomeHeaderComponentComponent,
    HighlightDirective,
    ActiveUserMessagesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [LoggingService, MessagingDataService],
  bootstrap: [AppComponent],
})
export class AppModule { }
