import { Component, OnInit } from '@angular/core';
import {MessageService} from '../shared/message.service';
import {Message} from '../shared/message.model';
import {element} from 'protractor';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

  messagelist: Message[];
  constructor(private messageService: MessageService) { }

  ngOnInit(
  ) {

    let x = this.messageService.getData();
    x.snapshotChanges().subscribe(item => {
      this.messagelist = [];
      item.forEach(element => {
        let y = element.payload.toJSON();
        this.messagelist.unshift(y as Message);
      });
    });
  }

}
