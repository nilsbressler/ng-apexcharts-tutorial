import { Component, Input, OnInit } from '@angular/core';
import {
  ChartOptions,
  CircleChartViewModel,
  isCircleChartViewModel,
} from './types';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-circle-chart',
  templateUrl: './circle-chart.component.html',
  styleUrls: ['./circle-chart.component.scss'],
  standalone: true,
  imports: [NgApexchartsModule],
})
export class CircleChartComponent implements OnInit {
  @Input() options: CircleChartViewModel = {
    percentage: 42,
    label: 'Placeholder',
    chartSize: 400,
    labelOptions: {
      nameFontSize: '100%',
      namePosition: 60,
      valueFontSize: '4.5em',
      valuePosition: 0,
    },
    showLabel: true,
    chartColors: {
      mainColor: '#705293',
      nameColor: '#1a1a1a',
      valueColor: '#1a1a1a',
      trackColor: '#989898',
    },
    responsive: {
      breakpoint: 768,
      chartHeight: 250,
      labelOptions: {
        nameFontSize: '90%',
        namePosition: 35,
        valueFontSize: '3em',
        valuePosition: -10,
      },
    },
  };

  chartOptions: ChartOptions;

  /**
   * Validates if the provided options object conforms to the CircleChartViewModel interface.
   * If validation fails, logs an error with the provided options.
   * Regardless of validation, initializes chartOptions using createChartOptions.
   * */
  constructor() {
    if (!isCircleChartViewModel(this.options)) {
      console.error('Invalid CircleChartViewModel provided:', this.options);
    }
    this.chartOptions = this.createChartOptions(this.options);
  }

  /**
   * Performs the same validation and initialization steps as the constructor.
   */
  ngOnInit() {
    if (!isCircleChartViewModel(this.options)) {
      console.error('Invalid CircleChartViewModel provided:', this.options);
    }
    this.chartOptions = this.createChartOptions(this.options);
  }

  /**
   * Constructs and returns chart configuration options based on validated CircleChartViewModel.
   * Sets properties such as series (percentage), colors (mainColor),
   * chart type ('radialBar'), sparkline (enabled), chart height,
   * radialBar track background and strokeWidth, hollow size, dataLabels for name and value,
   * labels (single label), and responsive options for different breakpoints.
   */
  private createChartOptions(options: CircleChartViewModel): ChartOptions {
    return {
      series: [options.percentage],
      colors: [options.chartColors.mainColor],
      chart: {
        type: 'radialBar',
        sparkline: { enabled: true },
        height: options.chartSize,
      },
      plotOptions: {
        radialBar: {
          track: {
            background: options.chartColors.trackColor,
            strokeWidth: '100%',
            margin: 0,
          },
          hollow: {
            size: '58%',
          },
          dataLabels: {
            name: {
              show: options.showLabel,
              offsetY: options.labelOptions.namePosition,
              fontSize: options.labelOptions.nameFontSize,
              color: options.chartColors.nameColor,
            },
            value: {
              show: true,
              offsetY: options.labelOptions.valuePosition,
              fontSize: options.labelOptions.valueFontSize,
              color: options.chartColors.valueColor,
            },
          },
        },
      },
      labels: [options.label],
      responsive: [
        {
          breakpoint: options.responsive.breakpoint,
          options: {
            chart: {
              height: options.responsive.chartHeight,
            },
            plotOptions: {
              radialBar: {
                dataLabels: {
                  name: {
                    fontSize: options.responsive.labelOptions.nameFontSize,
                    offsetY: options.responsive.labelOptions.namePosition,
                  },
                  value: {
                    fontSize: options.responsive.labelOptions.valueFontSize,
                    offsetY: options.responsive.labelOptions.valuePosition,
                  },
                },
              },
            },
          },
        },
      ],
    };
  }
}
