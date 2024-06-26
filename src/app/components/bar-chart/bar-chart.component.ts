import { Component, Input, OnInit } from "@angular/core";
import { ChartOptions, BarChartViewModel } from "./types";
import { NgApexchartsModule } from "ng-apexcharts"; // Assuming you have defined ChartOptions and BarChartViewModel types somewhere

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.scss"],
  standalone: true,
  imports: [NgApexchartsModule],
})
export class BarChartComponent implements OnInit {
  /**
   * The colors specified in the colors array
   * will be assigned in the order of the series.
   */
  @Input() options: BarChartViewModel = {
    series: [],
    categories: [],
    colors: [],
  };

  chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [],
      colors: [],
      chart: {
        type: "bar",
      },
      stroke: {},
      xaxis: {
        categories: [],
      },
      title: {
        text: "Bar Chart",
        align: "left",
      },
    };
  }

  ngOnInit(): void {
    this.chartOptions = {
      ...this.chartOptions,
      series: this.options.series,
      xaxis: {
        categories: this.options.categories,
      },
      colors: this.options.colors,
    };
  }
}
