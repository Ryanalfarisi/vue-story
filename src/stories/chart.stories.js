import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, object, number } from "@storybook/addon-knobs";
import { withInfo } from 'storybook-addon-vue-info';
import Chart from '../components/Chart.vue';

export const BarChart = {
type: 'bar',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9','10','11','12', '13', '14', '15', '16', '17', '18', '19', '20','21','22'],
        datasets: [{
            label: '# of Votes',
            data: [90, 75, 30, 59, 24, 32, 75, 30, 59, 24, 32, 90, 75, 30, 59, 24, 32, 75, 30, 59, 24, 32 ],
            backgroundColor: '#36454c',
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
};
export const DoughnutChart = {
  type: 'doughnut',
    data: {
      labels: ["category 1", "category 2", "category 3"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#36454c", "#d2d4cf","#ffffff"],
          data: [30,50,20],
          borderColor:["#36454c", "#d2d4cf","#ffffff"],
          hoverBackgroundColor:["#36454c", "#d2d4cf","#ffffff"],
        }
      ]
    },
    options: {
      title: {
        display:false,
      }
    }
};

storiesOf('Chart', module)
.addDecorator(withKnobs).addDecorator(withInfo)
    .add('Bar Chart', () => {
    return {
      components: { Chart },
      template: `<Chart :chartData="chartData" :chartId="'myChart'" :height="200"/>`,
      props: {
        chartData: {
          type: Object,
          default: object("chartData", { ...BarChart })
        },
        chartId : String,
        height: Number
      }
    }
  },
  {
    info: {}
  }).add('Doughnut Chart', () => {
    return {
      components: { Chart },
      template: `<Chart :chartData="chartData" :chartId="'myChart'" :height="600"/>`,
      props: {
        chartData: {
          type: Object,
          default: object("chartData", { ...DoughnutChart })
        },
        chartId : String,
        height : Number
      }
    }
  },
  {
    info: {}
  })
