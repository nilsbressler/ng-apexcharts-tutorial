# AngularApexChart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

This Angular project demonstrates how to create custom components using ApexCharts for visualizing data. Below are the details of the main components and their usage:

## Components

### 1. Spline Chart Component

Purpose: Displays a spline (line) chart.

**Features:**

- Smooth curve for data points.
- Customizable series, categories, and colors.<br>

**Usage:**

- Input: SplineChartViewModel containing series, categories, and colors.
- Output: Renders a line chart using ApexCharts.

### 2. Circle Chart Component

**Purpose:** Shows a radial (circle) chart.

**Features:**

- Single or multiple series support.
- Customizable labels, colors, and label visibility.

**Usage:**

- Input: CircleChartViewModel with series data, labels, colors, and label visibility.
- Output: Displays a radial chart using ApexCharts.

### 3.Bar Chart Component

**Purpose:** Displays a bar chart.

**Features:**

- Vertical bar chart with multiple series.
- Customizable categories, series data, and colors.

**Usage:**

- Input: BarChartViewModel containing series, categories, and colors.
- Output: Renders a bar chart using ApexCharts.

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
