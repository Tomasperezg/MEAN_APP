import { Component, OnInit } from '@angular/core';
import { UserMessage } from '../user-message';
import { MessageserviceService } from '../messageservice.service'

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  userMessageModel = new UserMessage('', '', '', '', '', '');
  submitted = false;
  error = '';

  constructor(private _messageservice: MessageserviceService) { }

  ngOnInit() {
  }
  
  onSubmit(){
    this.submitted = true;
    this._messageservice.form(this.userMessageModel)
    .subscribe(
      data => console.log('Success!', data),
      error => this.error = error.statusText
    )
  }

}
