import { Component, ViewChild } from '@angular/core';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexDataLabels,
  ApexLegend,
  ApexStroke,
  ApexPlotOptions,
  ApexStates,
  ApexTheme,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  fill: any;
  stroke: ApexStroke;
  states: ApexStates;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  theme: ApexTheme;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
};
@Component({
  selector: 'app-donutchart-card',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './donutchart-card.component.html',
  styleUrl: './donutchart-card.component.css',
})
export class DonutchartCardComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [55, 41, 17, 15],
      chart: {
        height: 160,
        parentHeightOffset: 0,
        type: 'donut',
        dropShadow: {
          enabled: true,
          color: '#111',
          top: -1,
          left: 3,
          blur: 3,
          opacity: 0.1,
        },
      },
      stroke: {
        width: 0,
      },
      plotOptions: {
        pie: {
          donut: {
            size: '60%',
          },
        },
      },
      labels: ['Products', 'Services', 'Hardware', 'ocasional'],
      dataLabels: {
        style: {
          colors: ['white'],
        },
        dropShadow: {
          blur: 2,
          opacity: 0.8,
        },
      },
      states: {
        hover: {
          filter: {
            type: 'none',
          },
        },
      },
      theme: {
        mode: 'light',
        palette: 'palette1',
      },
      title: {
        text: 'Sales Category',
      },
      responsive: [
        {
          breakpoint: 1535,
          options: {
            chart: {
              parentHeightOffset: 0,
              height: 160,
            },
          },
        },
        {
          breakpoint: 1281,
          options: {
            chart: {
              parentHeightOffset: 0,
              height: 200,
            },
          },
        },
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
      ],
    };
  }
}
