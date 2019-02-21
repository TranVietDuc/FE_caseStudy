import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageAppComponent } from './message-app/message-app.component';
import { MessageSendComponent } from './message-app/message-send/message-send.component';
import { MessageListComponent } from './message-app/message-list/message-list.component';
import { AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from 'src/environments/environment';
import {ReactiveFormsModule} from '@angular/forms';
import {MessageService} from './message-app/shared/message.service';

@NgModule({
  declarations: [
    AppComponent,
    MessageAppComponent,
    MessageSendComponent,
    MessageListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    AngularFireDatabaseModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
