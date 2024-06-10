import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Project } from '../../core/interface/project.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient, private loginService: LoginService) {}

  private getHeaders(): HttpHeaders {
    const token = this.loginService.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'x-token': token,
    });
  }

  createproject(project: Project): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post<any>(
      'http://localhost:4000/api/v1/projects/',
      project,
      { headers }
    );
  }
  getAllProjects(id: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(`http://localhost:4000/api/v1/projects/all/${id}`, {
      headers,
    });
  }
}
