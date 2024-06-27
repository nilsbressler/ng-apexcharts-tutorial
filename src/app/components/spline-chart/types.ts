import {
  ApexAxisChartSeries,
  ApexChart,
  ApexStroke,
  ApexTitleSubtitle,
  ApexXAxis,
} from 'ng-apexcharts';

export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  colors: Array<string>;
}

type TitleOptions = {
  /**
   * The text to be displayed as the title of the chart.
   */
  title: string;

  /**
   * The position of the title on the chart ('left', 'center', or 'right').
   */
  position: 'left' | 'center' | 'right';
};

export interface SplineChartViewModel {
  /**
   * Data series to be displayed on the spline chart.
   */
  series: ApexAxisChartSeries;

  /**
   * Categories for the x-axis of the chart.
   */
  categories: Array<string>;

  /**
   * Colors used for the data series in the chart.
   */
  colors: Array<string>;

  /**
   * Options for configuring the chart title.
   */
  titleOptions: TitleOptions;

  /**
   * Height of the chart in pixels.
   */
  chartHeight: number;

  /**
   * Flag indicating whether the chart's toolbar should be displayed.
   */
  showToolbar: boolean;
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
 * Type guard function to check if an object conforms to the SplineChartViewModel interface.
 */
export function isSplineChartViewModel(obj: any): obj is SplineChartViewModel {
  return (
    typeof obj === 'object' &&
    Array.isArray(obj.series) &&
    Array.isArray(obj.categories) &&
    Array.isArray(obj.colors) &&
    isTitleOptions(obj.titleOptions) &&
    typeof obj.chartHeight === 'number' &&
    typeof obj.showToolbar === 'boolean' &&
    Array.isArray(obj.categories) &&
    Array.isArray(obj.colors)
  );
}
