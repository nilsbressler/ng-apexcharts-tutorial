import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {SplineChartComponent} from "./components/spline-chart/spline-chart.component";
import {CircleChartComponent} from "./components/circle-chart/circle-chart.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { BarChartComponent } from './components/bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTabGroup,
    MatTab,
    SplineChartComponent,
    CircleChartComponent,
    BarChartComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
