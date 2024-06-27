import { Component, Input, OnInit } from '@angular/core';
import {
  ChartOptions,
  isSplineChartViewModel,
  SplineChartViewModel,
} from './types';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-spline-chart',
  templateUrl: './spline-chart.component.html',
  styleUrls: ['./spline-chart.component.scss'],
  standalone: true,
  imports: [NgApexchartsModule],
})
export class SplineChartComponent implements OnInit {
  /**
   * The colors specified in the colors array
   * will be assigned in the order of the series.
   */
  @Input() options: SplineChartViewModel = {
    series: [
      {
        name: 'Laptops',
        data: [25, 48, 28, 55, 41, 73, 60, 85, 130],
      },
      {
        name: 'Tablets',
        data: [25, 58, 32, 47, 75, 60, 65, 60, 110],
      },
    ],
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    colors: ['#FF5733', '#5EFF33'],
    chartHeight: 350,
    titleOptions: {
      title: 'Placeholder',
      position: 'center',
    },
    showToolbar: true,
  };

  chartOptions: ChartOptions;

  /**
   * Validates if the provided options object conforms to the SplineChartViewModel interface.
   * If validation fails, logs an error with the provided options.
   * Regardless of validation, initializes chartOptions using createChartOptions.
   * */
  constructor() {
    if (!isSplineChartViewModel(this.options)) {
      console.error('Invalid SplineChartViewModel provided:', this.options);
    }
    this.chartOptions = this.createChartOptions(this.options);
  }

  /**
   * Performs the same validation and initialization steps as the constructor.
   */
  ngOnInit(): void {
    if (!isSplineChartViewModel(this.options)) {
      console.error('Invalid SplineChartViewModel provided:', this.options);
    }
    this.chartOptions = this.createChartOptions(this.options);
  }

  /**
   * Constructs and returns chart configuration options based on validated SplineChartViewModel.
   * Sets properties such as series, colors, chart type, height, toolbar visibility, stroke curve,
   * x-axis categories, and title text and alignment.
   */
  private createChartOptions(options: SplineChartViewModel): ChartOptions {
    return {
      series: options.series,
      colors: options.colors,
      chart: {
        type: 'line',
        height: options.chartHeight,
        toolbar: {
          show: options.showToolbar,
        },
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        categories: options.categories,
      },
      title: {
        text: options.titleOptions.title,
        align: options.titleOptions.position,
      },
    };
  }
}
