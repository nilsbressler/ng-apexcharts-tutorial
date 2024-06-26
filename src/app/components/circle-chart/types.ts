import {
  ApexChart,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
} from "ng-apexcharts";

export interface ChartOptions {
  series: ApexNonAxisChartSeries;
  colors: Array<string>;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  labels: Array<string>;
}

export interface CircleChartViewModel {
  percentage: number;
  color: string;
  label: string;
  showLabel: boolean;
}
