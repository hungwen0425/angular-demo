import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { Http, Jsonp } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: Form;
  account: string;
  password: string;
  data: [
    { userName: '张三', password: 12 }
  ];

  constructor(private http: Http, private jsonp: Jsonp) {
  }

}
