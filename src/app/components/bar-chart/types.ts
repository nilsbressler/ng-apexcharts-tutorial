import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexXAxis,
} from 'ng-apexcharts';
import { SplineChartViewModel } from '../spline-chart/types';

export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  colors: Array<string>;
}

/**
 * **title**: The text to be displayed as the title of the chart.<br>
 * **position**: The position of the title on the chart ('left', 'center', or 'right'). <br>
 */
type TitleOptions = {
  title: string;
  position: 'left' | 'center' | 'right';
};

/**
 * **series**: Data series to be displayed on the bar chart.<br>
 * **categories**: Categories for the x-axis of the chart. <br>
 * **colors**: Colors used for the data series in the chart. <br>
 * **titleOptions**: Options for configuring the chart title. <br>
 * **chartHeight**: **(Optional)** Height of the chart in pixels. <br>
 * **showToolbar**: **(Optional)** Flag indicating whether the chart's toolbar should be displayed. <br>
 */
export interface BarChartViewModel {
  series: ApexAxisChartSeries;
  categories: Array<string>;
  colors: Array<string>;
  titleOptions: TitleOptions;
  chartHeight?: number;
  showToolbar?: boolean;
}

// Type Guards
/**
 * Type guard function to check if an object conforms to the TitleOptions interface.
 */
function isTitleOptions(obj: any): obj is TitleOptions {
  return (
    typeof obj === 'object' &&
    'title' in obj &&
    typeof obj.title === 'string' &&
    'position' in obj &&
    (obj.position === 'left' ||
      obj.position === 'center' ||
      obj.position === 'right')
  );
}

/**
 * Type guard function to check if an object conforms to the BarChartViewModel interface.
 */
export function isBarChartViewModel(obj: any): obj is SplineChartViewModel {
  return (
    typeof obj === 'object' &&
    Array.isArray(obj.series) &&
    Array.isArray(obj.categories) &&
    Array.isArray(obj.colors) &&
    isTitleOptions(obj.titleOptions) &&
    (obj.chartHeight === undefined || typeof obj.chartHeight === 'number') &&
    (obj.showToolbar === undefined || typeof obj.showToolbar === 'boolean')
  );
}
