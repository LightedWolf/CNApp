import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../core/interface/user.interface';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private cookies: CookieService) {}

  login(user: User): Observable<any> {
    return this.http.post<any>('http://localhost:4000/api/v1/login', user);
  }
  setToken(token: string) {
    this.cookies.set('token', token);
  }
  getToken() {
    return this.cookies.get('token');
  }
  setId(id: string) {
    this.cookies.set('id', id);
  }
  getId() {
    return this.cookies.get('id');
  }
  getUser(id: string, header: {}): Observable<any> {
    return this.http.get(`http://localhost:4000/api/v1/user/${id}`, {
      headers: header,
    });
  }
}
