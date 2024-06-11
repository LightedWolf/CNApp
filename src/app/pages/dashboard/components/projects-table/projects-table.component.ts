import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Project } from '../../../../core/interface/project.interface';
import { NgIf } from '@angular/common';
import { ProyectsComponent } from '../proyects/proyects.component';
import { FormsModule } from '@angular/forms';
import { ProjectsService } from '../../../../services/projectsService/projects.service';
import { LoginService } from '../../../../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-table',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './projects-table.component.html',
  styleUrl: './projects-table.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProjectsTableComponent implements OnInit {
  @Input() projects: Project[] = [];
  @Input() containerSize: string = '';
  @Input() tableSize: string = '';
  @Input() route: string = '';
  @Input() classTitle: string = '';
  constructor(
    private projectService: ProjectsService,
    public loginService: LoginService,
    public router: Router
  ) {}
  project: Project = {
    name: '',
    costumer: '',
    state: '',
    owner: '',
  };
  gettedProject: Project = {
    _id: '',
    name: '',
    costumer: '',
    state: '',
    owner: '',
  };
  async setProject() {
    const id = this.loginService.getId();
    this.project.owner = id;

    try {
      this.projectService.createproject(this.project).subscribe((response) => {
        console.log('Backend Response: ', response);
      });
      this.projectService.getAllProjects(id);
      this.router
        .navigateByUrl('/home', { skipLocationChange: true })
        .then(() => {
          this.router.navigate(['/home/projects']);
        });
    } catch (error) {
      console.error(error);
    }
  }
  async getAProject(id: any) {
    try {
      this.projectService.getAProject(id).subscribe((response) => {
        this.gettedProject = response.project;
        console.log('Backend Response: ', response);
      });
    } catch (error) {
      console.error(error);
    }
  }
  async updateProject() {
    const id = this.gettedProject._id;
    const costumerData = this.gettedProject;
    try {
      this.projectService
        .updateAProject(id, costumerData)
        .subscribe((response) => {
          console.log('Backend Response: ', response);
        });
      this.router
        .navigateByUrl('/home', { skipLocationChange: true })
        .then(() => {
          this.router.navigate(['/home/projects']);
        });
    } catch (error) {
      console.error(error);
    }
  }
  async deleteProject() {
    const id = this.gettedProject._id;
    try {
      this.projectService.deleteAProyect(id).subscribe((response) => {
        console.log('Backend Response: ', response);
      });
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

  ngOnInit(): void {}
}
