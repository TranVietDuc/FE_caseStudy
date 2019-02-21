import { Component, OnInit } from '@angular/core';
import {MessageService} from './shared/message.service';

@Component({
  selector: 'app-message-app',
  templateUrl: './message-app.component.html',
  styleUrls: ['./message-app.component.scss']
})
export class MessageAppComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.removeAllMessages();
  }
}
