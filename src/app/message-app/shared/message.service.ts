import { Injectable } from '@angular/core';
import {Message} from './message.model';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messageList: AngularFireList<Message>;
  selectedMessage: Message = new Message();

  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.messageList = this.firebase.list('messages');
    return this.messageList;
  }

  insertMessage(message: Message) {
    this.messageList.push({
      name: message.name,
      content: message.content,
    });
  }

  removeAllMessages(){
    this.firebase.list('messages').remove();
  }
}


