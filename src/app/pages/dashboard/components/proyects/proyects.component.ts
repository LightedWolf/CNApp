import { Component, Input, OnInit } from '@angular/core';
import { ProjectsTableComponent } from '../projects-table/projects-table.component';
import { Project } from '../../../../core/interface/project.interface';
import { ProjectsService } from '../../../../services/projectsService/projects.service';
import { LoginService } from '../../../../services/login/login.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-proyects',
  standalone: true,
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.css',
  imports: [ProjectsTableComponent, FormsModule],
})
export class ProyectsComponent implements OnInit {
  constructor(
    public loginService: LoginService,
    public projectService: ProjectsService,
    public router: Router
  ) {}
  ngOnInit(): void {
    this.getProjects();
  }
  route = this.router.url;
  projects: Project[] = [];
  project: Project = {
    name: '',
    costumer: '',
    state: '',
    owner: '',
  };
  getProjects() {
    const id = this.loginService.getId();
    this.projectService.getAllProjects(id).subscribe((response) => {
      this.projects = response.allProjects;
      console.log(this.projects);
    });
  }
  async setProject() {
    const id = this.loginService.getId();
    this.project.owner = id;

    try {
      this.projectService.createproject(this.project);
      this.getProjects();
      this.router
        .navigateByUrl('/home', { skipLocationChange: true })
        .then(() => {
          this.router.navigate(['/home/projects']);
        });
    } catch (error) {
      console.error(error);
    }
  }
  open(dialog: HTMLDialogElement) {
    dialog.showModal();
  }
  close(dialog: HTMLDialogElement) {
    dialog.close();
  }
}
