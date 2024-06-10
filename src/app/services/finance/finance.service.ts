import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FinanceReport } from '../../core/interface/financeReport.interface';
import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root',
})
export class FinanceService {
  constructor(private http: HttpClient, private loginService: LoginService) {}

  private getHeaders(): HttpHeaders {
    const token = this.loginService.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'x-token': token,
    });
  }

  createReport(report: FinanceReport): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post<any>(
      'http://localhost:4000/api/v1/financeReports',
      report,
      { headers }
    );
  }
  getAllReports(id: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(
      `http://localhost:4000/api/v1/financeReports/all/${id}`,
      {
        headers,
      }
    );
  }
  getWeekReports(id: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(
      `http://localhost:4000/api/v1/financeReports/week/${id}`,
      {
        headers,
      }
    );
  }
  getMonthReports(id: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(
      `http://localhost:4000/api/v1/financeReports/month/${id}`,
      {
        headers,
      }
    );
  }
  getWeekBalance(id: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(
      `http://localhost:4000/api/v1/financeReports/week-balance/${id}`,
      {
        headers,
      }
    );
  }
  getMonthBalance(id: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(
      `http://localhost:4000/api/v1/financeReports/month-balance/${id}`,
      {
        headers,
      }
    );
  }
  getWeekSales(id: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(
      `http://localhost:4000/api/v1/financeReports/week-sales/${id}`,
      {
        headers,
      }
    );
  }
}
