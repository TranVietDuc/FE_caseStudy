import { Component, OnInit } from '@angular/core';
import {MessageService} from '../shared/message.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-message-send',
  templateUrl: './message-send.component.html',
  styleUrls: ['./message-send.component.scss']
})
export class MessageSendComponent implements OnInit {

  sendForm: FormGroup;

  constructor(private messageService: MessageService, private fb: FormBuilder) { }

  ngOnInit() {
    this.sendForm = this.fb.group({
      name: ['', [Validators.required]],
      content: ['']
    });
  }
  onSubmit() {
      this.messageService.insertMessage(this.sendForm.value);
  }

}
