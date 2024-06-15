import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../core/interface/user.interface';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private cookies: CookieService) {}
  apiURL: string = environment.API_URL;
  serverInvocate(): Observable<any> {
    return this.http.get(this.apiURL);
  }
  login(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiURL}/api/v1/login`, user);
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
    return this.http.get(`${this.apiURL}/api/v1/user/${id}`, {
      headers: header,
    });
  }
}
