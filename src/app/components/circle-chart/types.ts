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

/**
 * **mainColor**: The main color used in the chart.<br>
 * **labelColor**: The color used for the name label in the chart. <br>
 * **valueColor**: The color used for the value label in the chart. <br>
 * **trackColor**: The color used for the track background in the chart. <br>
 */
type ChartColors = {
  mainColor: string;
  labelColor: string;
  valueColor: string;
  trackColor: string;
};

/**
 * **breakpoint**: The breakpoint for responsive adjustments in pixels.<br>
 * **chartHeight**: The height of the chart when responsive adjustments are applied. <br>
 * **labelOptions**: **(Optional)** Options for configuring the labels when responsive adjustments are applied. <br>
 */
type ResponsiveOptions = {
  breakpoint: number;
  chartHeight: number;
  textOptions?: TextOptions;
};

/**
 * **labelFontSize**: The font size for the name label in the chart.<br>
 * **labelPositionY**: The vertical position for the name label in the chart. <br>
 * **valueFontSize**: The font size for the value label in the chart. <br>
 * **valuePositionY**: The vertical position for the value label in the chart. <br>
 */
type TextOptions = {
  labelFontSize: string;
  labelPositionY: number;
  valueFontSize: string;
  valuePositionY: number;
};

/**
 * **percentage**: The percentage value to be displayed in the circle chart.<br>
 * **label**: The label text to be displayed on the chart. <br>
 * **chartColors**: Colors used for different parts of the chart. <br>
 * **textOptions**: **(Optional)** Options for configuring the text displayed on the chart. <br>
 * **chartSize**: **(Optional)** The size of the chart in pixels. <br>
 * **showLabel**: **(Optional)** Flag indicating whether the label should be displayed. <br>
 * **responsive**: **(Optional)** Options for configuring the chart's responsiveness. <br>
 */
export interface CircleChartViewModel {
  percentage: number;
  label: string;
  chartColors: ChartColors;
  textOptions?: TextOptions;
  chartSize?: number;
  showLabel?: boolean;
  responsive?: Array<ResponsiveOptions>;
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
    typeof obj.labelColor === 'string' &&
    typeof obj.valueColor === 'string' &&
    typeof obj.trackColor === 'string'
  );
}

/**
 * Type guard function to check if an object conforms to the TextOptions interface.
 */
function isTextOptions(obj: any): obj is TextOptions {
  return (
    obj !== undefined &&
    typeof obj === 'object' &&
    typeof obj.labelFontSize === 'string' &&
    typeof obj.labelPositionY === 'number' &&
    typeof obj.valueFontSize === 'string' &&
    typeof obj.valuePositionY === 'number'
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
    (obj.labelOptions === undefined || isTextOptions(obj.labelOptions))
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
    isChartColors(obj.chartColors) &&
    (obj.textOptions === undefined || isTextOptions(obj.textOptions)) &&
    (obj.chartSize === undefined || typeof obj.chartSize === 'number') &&
    (obj.showLabel === undefined || typeof obj.showLabel === 'boolean') &&
    (obj.responsive === undefined ||
      (Array.isArray(obj.responsive) &&
        obj.responsive.every(isResponsiveOptions)))
  );
}
