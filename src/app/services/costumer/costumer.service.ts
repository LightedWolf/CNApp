import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Costumer } from '../../core/interface/costumer.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CostumerService {
  constructor(private http: HttpClient, private loginService: LoginService) {}
  apiURL: string = environment.API_URL;
  private getHeaders(): HttpHeaders {
    const token = this.loginService.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'x-token': token,
    });
  }
  createCostumer(costumer: Costumer) {
    const headers = this.getHeaders();
    this.http
      .post(`${this.apiURL}/api/v1/costumers`, costumer, {
        headers,
      })
      .subscribe(
        (response) => {
          console.log('Backend Response: ', response);
        },
        (error) => {
          console.error(error);
        }
      );
  }
  getAllCostumers(id: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(`${this.apiURL}/api/v1/costumers/all/${id}`, {
      headers,
    });
  }
  getACostumer(email: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(`${this.apiURL}/api/v1/costumers/${email}`, {
      headers,
    });
  }
  updateACostumer(id: string | undefined, costumerData: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.put(
      `${this.apiURL}/api/v1/costumers/${id}`,
      costumerData,
      { headers }
    );
  }

  deleteACostumer(id: string | undefined): Observable<any> {
    const headers = this.getHeaders();
    return this.http.delete(`${this.apiURL}/api/v1/costumers/${id}`, {
      headers,
    });
  }
}
