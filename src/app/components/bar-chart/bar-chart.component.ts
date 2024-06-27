import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, BarChartViewModel, isBarChartViewModel } from './types';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  standalone: true,
  imports: [NgApexchartsModule],
})
export class BarChartComponent implements OnInit {
  /**
   * The colors specified in the colors array
   * will be assigned in the order of the series.
   */
  @Input() options: BarChartViewModel = {
    series: [
      {
        name: 'Sales',
        data: [50, 65, 70, 80, 85, 90, 95, 100, 105],
      },
      {
        name: 'Expenses',
        data: [45, 55, 60, 65, 70, 75, 80, 85, 90],
      },
    ],
    categories: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9'],
    colors: ['#FF5733', '#111311'],
    showToolbar: true,
    chartHeight: 600,
    titleOptions: {
      title: 'Placeholder',
      position: 'center',
    },
  };

  chartOptions: ChartOptions;

  /**
   * Validates if the provided options object conforms to the BarChartViewModel interface.
   * If validation fails, logs an error with the provided options.
   * Regardless of validation, initializes chartOptions using createChartOptions.
   * */
  constructor() {
    if (!isBarChartViewModel(this.options)) {
      console.error('Invalid BarChartViewModel provided:', this.options);
    }
    this.chartOptions = this.createChartOptions(this.options);
  }

  /**
   * Performs the same validation and initialization steps as the constructor.
   */
  ngOnInit(): void {
    if (!isBarChartViewModel(this.options)) {
      console.error('Invalid BarChartViewModel provided:', this.options);
    }
    this.chartOptions = this.createChartOptions(this.options);
  }

  /**
   * Constructs and returns chart configuration options based on validated BarChartViewModel.
   * Sets properties such as series, colors, chart type ('bar'), chart height, toolbar visibility,
   * x-axis categories, and title text and alignment.
   */
  private createChartOptions(options: BarChartViewModel): ChartOptions {
    return {
      series: options.series,
      colors: options.colors,
      chart: {
        type: 'bar',
        height: options.chartHeight,
        toolbar: {
          show: options.showToolbar,
        },
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
