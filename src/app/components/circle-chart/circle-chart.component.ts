import { Component, Input, OnInit } from "@angular/core";
import { ChartOptions, CircleChartViewModel } from "./types";
import { NgApexchartsModule } from "ng-apexcharts";

@Component({
  selector: "app-circle-chart",
  templateUrl: "./circle-chart.component.html",
  styleUrls: ["./circle-chart.component.scss"],
  standalone: true,
  imports: [NgApexchartsModule],
})
export class CircleChartComponent implements OnInit {
  @Input() options: CircleChartViewModel = {
    percentage: 42,
    color: "#000000",
    label: "Placeholder",
    showLabel: false,
  };

  chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [],
      colors: [],
      chart: {
        type: "radialBar",
        sparkline: { enabled: true },
      },
      plotOptions: {
        radialBar: {
          track: {
            background: "#b9cada",
            strokeWidth: "100%",
            margin: 0,
          },
          hollow: {
            size: "58%",
          },
          dataLabels: {
            name: {
              show: true,
              offsetY: 60,
              fontSize: "100%",
              color: "#1a1a1a",
            },
            value: {
              show: true,
              offsetY: 10,
              fontSize: "7em",
              color: "#705293",
            },
          },
        },
      },
      labels: [this.options.label],
    };
  }

  ngOnInit(): void {
    this.chartOptions = {
      ...this.chartOptions,
      series: [this.options.percentage],
      colors: [this.options.color],
      plotOptions: {
        radialBar: {
          ...this.chartOptions.plotOptions.radialBar,
          dataLabels: {
            ...this.chartOptions.plotOptions.radialBar?.dataLabels,
            name: {
              ...this.chartOptions.plotOptions.radialBar?.dataLabels?.name,
              show: this.options.showLabel,
            },
            value: {
              ...this.chartOptions.plotOptions.radialBar?.dataLabels?.value,
            },
          },
        },
      },
    };
  }
}
