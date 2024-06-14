import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FinanceReport } from '../../../../core/interface/financeReport.interface';
import { LoginService } from '../../../../services/login/login.service';
import { FinanceService } from '../../../../services/finance/finance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ReportsComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private financeService: FinanceService,
    private router: Router
  ) {}
  reports: FinanceReport[] = [];
  report: FinanceReport = {
    description: '',
    type: undefined!,
    currency: '',
    value: undefined!,
    createdBy: '',
    date: undefined,
    project: '',
    lastUpdated: undefined,
  };
  gettedReport: FinanceReport = {
    _id: '',
    description: '',
    type: '',
    currency: '',
    value: 0,
    createdBy: '',
    date: undefined,
    project: '',
    lastUpdated: undefined,
  };
  ngOnInit(): void {
    this.getReports();
  }
  getReports() {
    const id = this.loginService.getId();
    this.financeService.getAllReports(id).subscribe((response) => {
      this.reports = response.allReports;
    });
  }
  open(dialog: HTMLDialogElement) {
    dialog.showModal();
  }
  close(dialog: HTMLDialogElement) {
    dialog.close();
  }
  async setReport() {
    const id = this.loginService.getId();
    this.report.createdBy = id;
    try {
      console.log(this.report);
      this.financeService.createReport(this.report).subscribe();
      this.getReports();
      this.router
        .navigateByUrl('/home', { skipLocationChange: true })
        .then(() => {
          this.router.navigate(['/home/reports']);
        });
    } catch (error) {
      console.error(error);
    }
  }
  async getAReport(id: string) {
    try {
      this.financeService.getAReport(id).subscribe((response) => {
        this.gettedReport = response.report;
      });
    } catch (error) {
      console.error(error);
    }
  }
  async updateReports() {
    const id = this.gettedReport._id;
    const reportData = this.gettedReport;
    const currentDate = new Date();
    const date = currentDate;
    this.gettedReport.lastUpdated = date;
    try {
      this.financeService.updateAReport(id, reportData).subscribe();
      this.getReports();
      this.router
        .navigateByUrl('/home', { skipLocationChange: true })
        .then(() => {
          this.router.navigate(['/home/reports']);
        });
    } catch (error) {
      console.error(error);
    }
  }
  async deleteReport() {
    const id = this.gettedReport._id;
    try {
      this.financeService.deleteAReport(id).subscribe();
      this.getReports();
      this.router
        .navigateByUrl('/home', { skipLocationChange: true })
        .then(() => {
          this.router.navigate(['/home/reports']);
        });
    } catch (error) {
      console.error(error);
    }
  }
}
