import { Component } from '@angular/core';
import {SplineChartViewModel} from "./components/spline-chart/types";
import {CircleChartViewModel} from "./components/circle-chart/types";
import {BarChartViewModel} from "./components/bar-chart/types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-apex-chart';

  splineChartOptions: SplineChartViewModel = {
    series: [
      {
        name: 'Laptops',
        data: [30, 42, 28, 55, 41, 63, 70, 85, 130],
      },
      {
        name: 'Tablets',
        data: [25, 38, 32, 47, 55, 60, 65, 80, 110],
      },
    ],
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    colors: ['#FF5733', '#5EFF33'],
  };

  circleChartOptions: CircleChartViewModel = {
    series: [45],
    labels: ['Cirle Chart'],
    colors: ['#bb33ff'],
    showLabel: true,
  };

  barChartOptions: BarChartViewModel = {
    series: [
      {
        name: 'Sales',
        data: [50, 65, 70, 80, 85, 90, 95, 100, 105]
      },
      {
        name: 'Expenses',
        data: [45, 55, 60, 65, 70, 75, 80, 85, 90]
      },
    ],
    categories: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9'],
    colors: ['#FF5733', '#111311']
  };
}
