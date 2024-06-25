import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, SplineChartViewModel } from './types';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-spline-chart',
  templateUrl: './spline-chart.component.html',
  styleUrls: ['./spline-chart.component.scss'],
  standalone: true,
  imports: [NgApexchartsModule]
})
export class SplineChartComponent implements OnInit {

  /**
   * The colors specified in the colors array
   * will be assigned in the order of the series.
   */
  @Input() options: SplineChartViewModel = {
    series: [],
    categories: [],
    colors: [],
  };

  chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [],
      colors: [],
      chart: {
        type: 'line',
        height: 350,
        toolbar: {
          show: false,
        },
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        categories: [],
      },
      title: {
        text: 'Spline Chart',
        align: 'left',
      },
    };
  }

  ngOnInit(): void {
    this.chartOptions = {
      ...this.chartOptions,
      series: this.options.series,
      colors: this.options.colors,
      xaxis: {
        categories: this.options.categories,
      },
    };
  }
}
