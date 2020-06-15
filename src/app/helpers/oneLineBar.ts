import { Options } from 'highcharts';

export const oneLineBar: Options = {
  chart: {

    type: 'bar',
    height: 100,
  },
  xAxis: {
    visible: false,
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
  },
  yAxis: {
    visible: false,
  },
  legend: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    series: {
      stacking: 'percent',
    } as any,
  },

  series: [
    {
      type: 'bar',
      color: '#506ef9',
      data: [10],
    },
    {
      type: 'bar',
      color: '#ccc',
      data: [1],
    },
  ],
};
