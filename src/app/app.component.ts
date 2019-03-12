import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { Http, Jsonp } from '@angular/http';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form: Form;
  account = '';
  password = '';


  constructor(private service: UserService, jsonp: Jsonp) {
  }

  login() {
    console.log('account: ', this.account, 'password: ', this.password);
    this.service.login(this.account, this.password )
      .subscribe(data => {
        console.log('data', data);
    });
  }
}
