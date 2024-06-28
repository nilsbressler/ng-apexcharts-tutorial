# AngularApexChart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

This Angular project demonstrates how to create custom components using ApexCharts for visualizing data. Below are the details of the main components and their usage:

## Components

### 1. Spline Chart Component

Displays a spline (line) chart.

#### Types & Interface

```ts
type TitleOptions = {
  title: string; // The text to be displayed as the title of the chart.
  position: 'left' | 'center' | 'right'; // The position of the title on the chart ('left', 'center', or 'right').
};

export interface BarChartViewModel {
  series: ApexAxisChartSeries; // Data series to be displayed on the spline chart.
  categories: Array<string>; // Categories for the x-axis of the chart.
  colors: Array<string>; // Colors used for the data series in the chart.
  titleOptions: TitleOptions; // Options for configuring the chart title.
  chartHeight?: number; // (Optional) Height of the chart in pixels.
  showToolbar?: boolean; // (Optional) Flag indicating whether the chart's toolbar should be displayed.
}
```

#### Usage:

- **Input:** SplineChartViewModel containing series, categories, colors, chartHeight, titleOptions and showToolbar.

```ts
@Input() options: SplineChartViewModel = {
    series: [
      {
        name: 'Laptops',
        data: [25, 48, 28, 55, 41, 73, 60, 85, 130],
      },
      {
        name: 'Tablets',
        data: [25, 58, 32, 47, 75, 60, 65, 60, 110],
      },
    ],
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    colors: ['#FF5733', '#5EFF33'],
    chartHeight: 350,
    titleOptions: {
      title: 'Placeholder',
      position: 'center',
    },
    showToolbar: true,
  };
```

---

- **Output:** Renders a line chart using ApexCharts.

```html
<apx-chart
  [series]="chartOptions.series"
  [colors]="chartOptions.colors"
  [chart]="chartOptions.chart"
  [xaxis]="chartOptions.xaxis"
  [stroke]="chartOptions.stroke"
  [title]="chartOptions.title">
</apx-chart>
```

### 2. Circle Chart Component

Shows a simple created single radial (circle) chart.

#### Types & Interface

```ts
type ChartColors = {
  mainColor: string; // The main color used in the chart.
  labelColor: string; // The color used for the name label in the chart.
  valueColor: string; // The color used for the value label in the chart.
  trackColor: string; // The color used for the track background in the chart.
};

type ResponsiveOptions = {
  breakpoint: number; // The breakpoint for responsive adjustments in pixels.
  chartHeight: number; // The height of the chart when responsive adjustments are applied.
  textOptions?: TextOptions; // (Optional) Options for configuring the labels when responsive adjustments are applied.
};

type TextOptions = {
  labelFontSize: string; // The font size for the name label in the chart.
  labelPositionY: number; // The vertical position for the name label in the chart.
  valueFontSize: string; // The font size for the value label in the chart.
  valuePositionY: number; // The vertical position for the value label in the chart.
};

export interface CircleChartViewModel {
  percentage: number; // The percentage value to be displayed in the circle chart.
  label: string; // The label text to be displayed on the chart.
  chartColors: ChartColors; // Colors used for different parts of the chart.
  textOptions?: TextOptions; // (Optional) Options for configuring the text displayed on the chart.
  chartSize?: number; // (Optional) The size of the chart in pixels.
  showLabel?: boolean; // (Optional) Flag indicating whether the label should be displayed.
  responsive?: Array<ResponsiveOptions>; // (Optional) Options for configuring the chart's responsiveness.
}
```

#### Usage:

- **Input:** CircleChartViewModel with percentage, labels, chartSize, labelOptions, showLabel, chartColors, and responsive visibility.

```ts
@Input() options: CircleChartViewModel = {
    percentage: 42,
    label: 'Placeholder',
    chartSize: 400,
    labelOptions: {
        nameFontSize: '100%',
        namePosition: 60,
        valueFontSize: '4.5em',
        valuePosition: 0,
    },
    showLabel: true,
    chartColors: {
        mainColor: '#705293',
        nameColor: '#1a1a1a',
        valueColor: '#1a1a1a',
        trackColor: '#989898',
    },
    responsive: {
        breakpoint: 768,
        chartHeight: 250,
        labelOptions: {
            nameFontSize: '90%',
            namePosition: 35,
            valueFontSize: '3em',
            valuePosition: -10,
        },
    },
};
```

---

- **Output:** Displays a radial chart using ApexCharts.

```html
<apx-chart
  [series]="chartOptions.series"
  [chart]="chartOptions.chart"
  [labels]="chartOptions.labels"
  [plotOptions]="chartOptions.plotOptions"
  [colors]="chartOptions.colors"
  [responsive]="chartOptions.responsive">
</apx-chart>
```

### 3.Bar Chart Component

Displays a bar chart.

#### Types & Interface

```ts
type TitleOptions = {
  title: string; // The text to be displayed as the title of the chart.
  position: 'left' | 'center' | 'right'; // The position of the title on the chart ('left', 'center', or 'right').
};

export interface BarChartViewModel {
  series: ApexAxisChartSeries; // Data series to be displayed on the bar chart.
  categories: Array<string>; // Categories for the x-axis of the chart.
  colors: Array<string>; // Colors used for the data series in the chart.
  titleOptions: TitleOptions; // Options for configuring the chart title.
  chartHeight?: number; // (Optional) Height of the chart in pixels.
  showToolbar?: boolean; // (Optional) Flag indicating whether the chart's toolbar should be displayed.
}
```

#### Usage

- **Input:** BarChartViewModel containing series, categories, colors, showToolbar, chartHeight and titleOptions.

```ts
@Input() options: BarChartViewModel = {
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
    chartHeight: 600,
    titleOptions: {
        title: 'Placeholder',
        position: 'center',
    },
};
```

---

- **Output:** Renders a bar chart using ApexCharts.

```html
<apx-chart
  [series]="chartOptions.series"
  [colors]="chartOptions.colors"
  [chart]="chartOptions.chart"
  [xaxis]="chartOptions.xaxis"
  [title]="chartOptions.title">
</apx-chart>
```

## View Models

For detailed information about the various view models used in this project, please refer to the `types.ts` files located in the components directory. These files offer comprehensive definitions and descriptions of each model's properties and structure. By consulting these type definitions, you can gain a precise understanding of the data structures and their specific attributes, ensuring accurate implementation and effective utilization within the application.

## Getting Started

1. **Installation:**

- Clone this repository to your local machine.
- Navigate to the project directory and run npm install to install dependencies.

2. **Running the Application:**

- Use ng serve for a dev server. Navigate to http://localhost:4200/ in your browser to view the app.

3. **Using Components:**

- Import the necessary components (SplineChartComponent, CircleChartComponent, BarChartComponent) into your Angular modules.
- Use the components in your templates with appropriate input bindings (options).

## Example Data

- Example data (splineChartOptions, circleChartOptions, barChartOptions) is provided in the AppComponent for demonstration purposes.
- Modify these options in app.component.ts to see changes reflected in the charts.

## Dependencies

- ng-apexcharts: Used for rendering ApexCharts in Angular components.
- Ensure NgApexchartsModule is imported in your module where these components are declared.

## Notes

- Customize the charts further by adjusting chart options in respective component files (spline-chart.component.ts, circle-chart.component.ts, bar-chart.component.ts).
- Refer to [ApexCharts documentation](https://apexcharts.com/docs/installation/) for advanced customization and additional features.
