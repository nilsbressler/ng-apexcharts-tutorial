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
    chartColors: {
      mainColor: '#705293',
      labelColor: '#1a1a1a',
      valueColor: '#1a1a1a',
      trackColor: '#989898',
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
    const textOptions = {
      labelFontSize: options.textOptions?.labelFontSize ?? '100%',
      labelPositionY: options.textOptions?.labelPositionY ?? 40,
      valueFontSize: options.textOptions?.valueFontSize ?? '4em',
      valuePositionY: options.textOptions?.valuePositionY ?? 0,
    };

    const chartSize = options.chartSize ?? 300;

    const showLabel = options.showLabel ?? true;

    return {
      series: [options.percentage],
      colors: [options.chartColors.mainColor],
      chart: {
        type: 'radialBar',
        sparkline: { enabled: true },
        height: chartSize,
      },
      plotOptions: {
        radialBar: {
          track: {
            background: options.chartColors.trackColor,
            strokeWidth: '100%',
            margin: 0,
          },
          hollow: {
            size: '60%',
          },
          dataLabels: {
            name: {
              show: showLabel,
              offsetY: textOptions.labelPositionY,
              fontSize: textOptions.labelFontSize,
              color: options.chartColors.labelColor,
            },
            value: {
              show: true,
              offsetY: textOptions.valuePositionY,
              fontSize: textOptions.valueFontSize,
              color: options.chartColors.valueColor,
            },
          },
        },
      },
      labels: [options.label],
      responsive:
        options.responsive?.map(r => ({
          breakpoint: r.breakpoint,
          options: {
            chart: {
              height: r.chartHeight,
            },
            plotOptions: {
              radialBar: {
                dataLabels: {
                  name: {
                    fontSize:
                      r.textOptions?.labelFontSize ?? textOptions.labelFontSize,
                    offsetY:
                      r.textOptions?.labelPositionY ??
                      textOptions.labelPositionY,
                  },
                  value: {
                    fontSize:
                      r.textOptions?.valueFontSize ?? textOptions.valueFontSize,
                    offsetY:
                      r.textOptions?.valuePositionY ??
                      textOptions.valuePositionY,
                  },
                },
              },
            },
          },
        })) ?? [],
    };
  }
}
