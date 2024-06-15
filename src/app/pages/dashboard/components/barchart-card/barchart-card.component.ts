import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ChartComponent,
  ApexResponsive,
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
  responsive: ApexResponsive[];
};

@Component({
  selector: 'app-barchart-card',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './barchart-card.component.html',
  styleUrl: './barchart-card.component.css',
})
export class BarchartCardComponent implements OnInit {
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
        height: 310,
        type: 'bar',
      },
      title: {
        text: 'Sales',
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      },
      responsive: [
        {
          breakpoint: 450,
          options: {
            chart: {
              height: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
        {
          breakpoint: 1536,
          options: {
            chart: {
              parentHeightOffset: 0,
              height: 175,
            },
          },
        },
      ],
    };
  }
  ngOnInit(): void {
    this.getMonthlySales();
    this.chart;
  }
  getMonthlySales() {
    const id = this.loginService.getId();

    try {
      this.financeService.getMonthlySales(id).subscribe((response) => {
        console.log(response.salesBymonth);
        this.chartOptions.series![0].data = response.salesByMonth;
      });
    } catch (error) {
      console.error(error);
    }
  }
}
