import { Component, Input, ViewChild } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
} from 'ng-apexcharts';
import { FinanceService } from '../../../../services/finance/finance.service';
import { LoginService } from '../../../../services/login/login.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-barchart-card',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './barchart-card.component.html',
  styleUrl: './barchart-card.component.css',
})
export class BarchartCardComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(
    public financeService: FinanceService,
    public loginService: LoginService
  ) {
    this.chartOptions = {
      series: [
        {
          name: 'sales',
          data: [],
        },
      ],
      chart: {
        parentHeightOffset: 0,
        height: 170,
        type: 'bar',
      },
      title: {
        text: 'Sales',
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      },
    };
  }
  ngOnInit(): void {
    this.getMonthlySales();
  }
  getMonthlySales() {
    const id = this.loginService.getId();

    try {
      this.financeService.getMonthlySales(id).subscribe((response) => {
        this.chartOptions.series![0].data = response.salesByMonth;
      });
    } catch (error) {
      console.error(error);
    }
  }
}
