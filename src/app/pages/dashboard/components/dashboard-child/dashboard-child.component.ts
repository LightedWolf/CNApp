import { Component, OnInit } from '@angular/core';
import { FinanceCardComponent } from '../finance-card/finance-card.component';
import { FinanceService } from '../../../../services/finance/finance.service';
import { LoginService } from '../../../../services/login/login.service';
import { ProjectsService } from '../../../../services/projectsService/projects.service';
import { ProjectsTableComponent } from '../projects-table/projects-table.component';
import { Project } from '../../../../core/interface/project.interface';

@Component({
  selector: 'app-dashboard-child',
  standalone: true,
  templateUrl: './dashboard-child.component.html',
  styleUrl: './dashboard-child.component.css',
  imports: [FinanceCardComponent, ProjectsTableComponent],
})
export class DashboardChildComponent implements OnInit {
  constructor(
    public financeService: FinanceService,
    public loginService: LoginService,
    public projectService: ProjectsService
  ) {}
  monthlySummary = {
    income: 0,
    expenses: 0,
    monthlyBalance: 0,
  };
  reports = [];
  projects: Project[] = [];
  weekSales = [];
  ngOnInit(): void {
    this.getMonthlySummary();
    this.getReports();
    this.getProjects();
    this.getWeekSales();
  }
  getMonthlySummary() {
    const id = this.loginService.getId();
    this.financeService.getMonthBalance(id).subscribe((response) => {
      this.monthlySummary = response.monthlySummary;
    });
  }
  getReports() {
    const id = this.loginService.getId();
    this.financeService.getAllReports(id).subscribe((response) => {
      this.reports = response.allReports;
    });
  }
  getProjects() {
    const id = this.loginService.getId();
    this.projectService.getAllProjects(id).subscribe((response) => {
      this.projects = response.allProjects;
    });
  }
  getWeekSales() {
    const id = this.loginService.getId();
    this.financeService.getWeekSales(id).subscribe((response) => {
      this.weekSales = response.weekSales;
      console.log(this.weekSales);
    });
  }
}
