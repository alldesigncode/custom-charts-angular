import { Options } from 'highcharts';

export const donutChartOptions: Options = {
  chart: {
    type: 'pie',
    plotShadow: false,
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      innerSize: '99%',
      borderWidth: 40,
      borderColor: null,
      slicedOffset: 20,
      dataLabels: {
        connectorWidth: 0,
      },
    },
  },
  title: {
    verticalAlign: 'middle',
    floating: true,
    text: '$ 600,000.00',
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      type: 'pie',
      data: [
        { name: 'a', y: 1, color: '#eeeeee' },
        { name: 'b', y: 2, color: '#393e46' },
        { name: 'c', y: 3, color: '#00adb5' },
        { name: 'd', y: 4, color: '#eeeeee' },
        { name: 'e', y: 5, color: '#506ef9' },
      ],
    },
  ],
};
