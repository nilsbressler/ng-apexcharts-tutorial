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

export interface SplineChartViewModel {
  series: ApexAxisChartSeries;
  categories: Array<string>;
  colors: Array<string>;
}
