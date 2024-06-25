import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, CircleChartViewModel } from './types';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-circle-chart',
  templateUrl: './circle-chart.component.html',
  styleUrls: ['./circle-chart.component.scss'],
  standalone: true,
  imports: [NgApexchartsModule]
})
export class CircleChartComponent implements OnInit {
  @Input() options: CircleChartViewModel = {
    series: [],
    colors: [],
    labels: undefined,
    showLabel: undefined,
  };

  chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [],
      colors: [],
      chart: {
        type: 'radialBar',
        sparkline: { enabled: true },
      },
      plotOptions: {
        radialBar: {
          track: {
            background: '#b9cada',
            strokeWidth: '100%',
            margin: 0,
          },
          hollow: {
            size: '58%',
          },
          dataLabels: {
            name: {
              show: true,
              offsetY: 0,
              fontSize: '15px',
              color: '#000000',
            },
            value: {
              show: true,
              offsetY: 0,
              fontSize: '15px',
              color: '#000000',
            },
          },
        },
      },
      labels: [],
      grid: {},
    };
  }

  ngOnInit(): void {
    this.chartOptions = {
      ...this.chartOptions,
      labels: this.options.labels || [],
      series: this.options.series,
      colors: this.options.colors,
      plotOptions: {
        radialBar: {
          ...this.chartOptions.plotOptions.radialBar,
          dataLabels: {
            ...this.chartOptions.plotOptions.radialBar?.dataLabels,
            name: {
              ...this.chartOptions.plotOptions.radialBar?.dataLabels?.name,
              show:
                this.options.showLabel ??
                this.chartOptions.plotOptions.radialBar?.dataLabels?.name?.show,
            },
            value: {
              ...this.chartOptions.plotOptions.radialBar?.dataLabels?.value,
            },
          },
        },
      },
    };
  }
}
