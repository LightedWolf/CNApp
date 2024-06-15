import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Project } from '../../core/interface/project.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient, private loginService: LoginService) {}
  apiURL: string = environment.API_URL;
  private getHeaders(): HttpHeaders {
    const token = this.loginService.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'x-token': token,
    });
  }

  createproject(project: Project): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post<any>(`${this.apiURL}/api/v1/projects/`, project, {
      headers,
    });
  }
  getAllProjects(id: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(`${this.apiURL}/api/v1/projects/all/${id}`, {
      headers,
    });
  }
  getAProject(id: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(`${this.apiURL}/api/v1/projects/${id}`, {
      headers,
    });
  }
  updateAProject(id: string | undefined, projectData: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.put(`${this.apiURL}/api/v1/projects/${id}`, projectData, {
      headers,
    });
  }
  deleteAProyect(id: string | undefined): Observable<any> {
    const headers = this.getHeaders();
    return this.http.delete(`${this.apiURL}/api/v1/projects/${id}`, {
      headers,
    });
  }
}
