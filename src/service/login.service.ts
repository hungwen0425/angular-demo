import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: Http) { }

  getData(): Promise<any> {
    return this.http.get('http://localhost:8080/srs/demo/login')
    .map(data => data.json()).toPromise();
  }
}
