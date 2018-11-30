import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  constructor(private httpClient: HttpClient) { }

  register(user) {
    return this.httpClient.post(`${environment.api}/register`, user);
  }
  login(user) {
    console.log(user);
    return this.httpClient.post(`${environment.api}/login`, user);
  }
  logout() {
    localStorage.removeItem('token');
  }
  isLogin() {
    if (localStorage.getItem('token')) {
        console.log('token');
    }
    return localStorage.getItem('token');
  }
  reset(data) {
    return this.httpClient.post('http://localhost:8000/api/password/create', data);
  }
}
