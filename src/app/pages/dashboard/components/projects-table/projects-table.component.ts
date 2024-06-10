import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../../core/interface/project.interface';

@Component({
  selector: 'app-projects-table',
  standalone: true,
  imports: [],
  templateUrl: './projects-table.component.html',
  styleUrl: './projects-table.component.css',
})
export class ProjectsTableComponent implements OnInit {
  @Input() projects: Project[] = [];

  ngOnInit(): void {}
}
