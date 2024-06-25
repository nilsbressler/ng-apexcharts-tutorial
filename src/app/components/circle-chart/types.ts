import {
  ApexChart,
  ApexGrid,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
} from 'ng-apexcharts';

export interface ChartOptions {
  series: ApexNonAxisChartSeries;
  colors: Array<string>;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  labels: Array<string>;
  grid: ApexGrid;
}

export interface CircleChartViewModel {
  series: ApexNonAxisChartSeries;
  colors: Array<string>;
  labels: Array<string> | undefined;
  showLabel: boolean | undefined;
}
