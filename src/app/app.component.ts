import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { donutChartOptions } from './helpers/donutChartOptions';
import { areaChartOptions } from './helpers/areaChartOptions';
import { barChart } from './helpers/barChart';
import { oneLineBar } from './helpers/oneLineBar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  chart = new Chart(donutChartOptions);
  areaSplineChart = new Chart(areaChartOptions);
  barChart = new Chart(barChart);
  oneLineBar = new Chart(oneLineBar);
}
