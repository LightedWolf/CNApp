import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FinanceReport } from '../../core/interface/financeReport.interface';
import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FinanceService {
  constructor(private http: HttpClient, private loginService: LoginService) {}
  apiURL: string = environment.API_URL;
  private getHeaders(): HttpHeaders {
    const token = this.loginService.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'x-token': token,
    });
  }

  createReport(report: FinanceReport): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post<any>(`${this.apiURL}/api/v1/financeReports`, report, {
      headers,
    });
  }
  getAllReports(id: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(`${this.apiURL}/api/v1/financeReports/all/${id}`, {
      headers,
    });
  }
  getAReport(id: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(`${this.apiURL}/api/v1/financeReports/${id}`, {
      headers,
    });
  }
  updateAReport(id: string | undefined, reportData: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.put(
      `${this.apiURL}/api/v1/financeReports/${id}`,
      reportData,
      {
        headers,
      }
    );
  }
  deleteAReport(id: string | undefined): Observable<any> {
    const headers = this.getHeaders();
    return this.http.delete(`${this.apiURL}/api/v1/financeReports/${id}`, {
      headers,
    });
  }
  getWeekReports(id: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(`${this.apiURL}/api/v1/financeReports/week/${id}`, {
      headers,
    });
  }
  getMonthReports(id: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(`${this.apiURL}/api/v1/financeReports/month/${id}`, {
      headers,
    });
  }
  getWeekBalance(id: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(
      `${this.apiURL}/api/v1/financeReports/week-balance/${id}`,
      {
        headers,
      }
    );
  }
  getMonthBalance(id: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(
      `${this.apiURL}/api/v1/financeReports/month-balance/${id}`,
      {
        headers,
      }
    );
  }
  getWeekSales(id: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(
      `${this.apiURL}/api/v1/financeReports/week-sales/${id}`,
      {
        headers,
      }
    );
  }
  getMonthlySales(id: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(
      `${this.apiURL}/api/v1/financeReports/monthly-sales/${id}`,
      {
        headers,
      }
    );
  }
}
