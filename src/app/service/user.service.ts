import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/customers';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) {
    console.log('Servicio Customer Funcionando');
  }

  getCustomers(): Observable<User[]> {
    return this.http.get(this.baseUrl).pipe(
      map(data => data as User[])
    );
  }

  getCustomer(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  createCustomer(customer: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, customer, {headers: this.httpHeaders});
  }

  updateCustomer(customer: User): Observable<User> {
    return this.http.put<User>(this.baseUrl, customer, {headers: this.httpHeaders});
  }

  deleteCustomer(id: number): Observable<User> {
    return this.http.delete<User>(`${this.baseUrl}/${id}`, {headers: this.httpHeaders});
  }
}
