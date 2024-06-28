import { Component } from '@angular/core';
import { SplineChartViewModel } from './components/spline-chart/types';
import { CircleChartViewModel } from './components/circle-chart/types';
import { BarChartViewModel } from './components/bar-chart/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Apex Charts';

  splineChartOptions: SplineChartViewModel = {
    series: [
      {
        name: 'Smartphones',
        data: [90, 135, 150, 135, 180, 195, 150, 225, 240],
      },
      {
        name: 'Smartwatches',
        data: [50, 75, 60, 65, 70, 45, 80, 125, 90],
      },
    ],
    categories: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    colors: ['#3366FF', '#FF3366'],
    chartHeight: 400,
    titleOptions: {
      title: 'Spline Chart',
      position: 'center',
    },
    showToolbar: true,
  };

  circleChartOptions: CircleChartViewModel = {
    percentage: 45,
    label: 'Cirle Chart',
    chartColors: {
      mainColor: '#9202c5',
      labelColor: '#092850',
      valueColor: '#34518a',
      trackColor: '#818181',
    },
  };

  barChartOptions: BarChartViewModel = {
    series: [
      {
        name: 'Sales',
        data: [50, 65, 70, 80, 85, 90, 95, 100, 105],
      },
      {
        name: 'Expenses',
        data: [45, 55, 60, 65, 70, 75, 80, 85, 90],
      },
    ],
    categories: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9'],
    colors: ['#FF5733', '#111311'],
    showToolbar: true,
    chartHeight: 500,
    titleOptions: {
      title: 'Bar Chart',
      position: 'left',
    },
  };
}
