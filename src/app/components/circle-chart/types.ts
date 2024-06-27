import {
  ApexChart,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
} from 'ng-apexcharts';

export interface ChartOptions {
  series: ApexNonAxisChartSeries;
  colors: Array<string>;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  labels: Array<string>;
  responsive: Array<ApexResponsive>;
}

type ChartColors = {
  /**
   * The main color used in the chart.
   */
  mainColor: string;

  /**
   * The color used for the name label in the chart.
   */
  nameColor: string;

  /**
   * The color used for the value label in the chart.
   */
  valueColor: string;

  /**
   * The color used for the track background in the chart.
   */
  trackColor: string;
};

type ResponsiveOptions = {
  /**
   * The breakpoint for responsive adjustments in pixels.
   */
  breakpoint: number;

  /**
   * The height of the chart when responsive adjustments are applied.
   */
  chartHeight: number;

  /**
   * Options for configuring the labels when responsive adjustments are applied.
   */
  labelOptions: LabelOptions;
};

type LabelOptions = {
  /**
   * The font size for the name label in the chart.
   */
  nameFontSize: string;

  /**
   * The vertical position for the name label in the chart.
   */
  namePosition: number;

  /**
   * The font size for the value label in the chart.
   */
  valueFontSize: string;

  /**
   * The vertical position for the value label in the chart.
   */
  valuePosition: number;
};

export interface CircleChartViewModel {
  /**
   * The percentage value to be displayed in the circle chart.
   */
  percentage: number;

  /**
   * The label text to be displayed on the chart.
   */
  label: string;

  /**
   * The size of the chart in pixels.
   */
  chartSize: number;

  /**
   * Options for configuring the label displayed on the chart.
   */
  labelOptions: LabelOptions;

  /**
   * Flag indicating whether the label should be displayed.
   */
  showLabel: boolean;

  /**
   * Colors used for different parts of the chart.
   */
  chartColors: ChartColors;

  /**
   * Options for configuring the chart's responsiveness.
   */
  responsive: ResponsiveOptions;
}

// Type Guards
/**
 * Type guard function to check if an object conforms to the ChartColors interface.
 */
function isChartColors(obj: any): obj is ChartColors {
  return (
    obj !== undefined &&
    typeof obj === 'object' &&
    typeof obj.mainColor === 'string' &&
    typeof obj.nameColor === 'string' &&
    typeof obj.valueColor === 'string' &&
    typeof obj.trackColor === 'string'
  );
}

/**
 * Type guard function to check if an object conforms to the LabelOptions interface.
 */
function isLabelOptions(obj: any): obj is LabelOptions {
  return (
    obj !== undefined &&
    typeof obj === 'object' &&
    typeof obj.nameFontSize === 'string' &&
    typeof obj.namePosition === 'number' &&
    typeof obj.valueFontSize === 'string' &&
    typeof obj.valuePosition === 'number'
  );
}

/**
 * Type guard function to check if an object conforms to the ResponsiveOptions interface.
 */
function isResponsiveOptions(obj: any): obj is ResponsiveOptions {
  return (
    obj !== undefined &&
    typeof obj === 'object' &&
    typeof obj.breakpoint === 'number' &&
    typeof obj.chartHeight === 'number' &&
    isLabelOptions(obj.labelOptions)
  );
}

/**
 * Type guard function to check if an object conforms to the CircleChartViewModel interface.
 */
export function isCircleChartViewModel(obj: any): obj is CircleChartViewModel {
  return (
    obj !== undefined &&
    typeof obj === 'object' &&
    typeof obj.percentage === 'number' &&
    typeof obj.label === 'string' &&
    typeof obj.chartSize === 'number' &&
    isLabelOptions(obj.labelOptions) &&
    typeof obj.showLabel === 'boolean' &&
    isChartColors(obj.chartColors) &&
    isResponsiveOptions(obj.responsive)
  );
}
