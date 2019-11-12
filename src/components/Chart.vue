<template>
  <div style="width:50%;">
      <canvas id="planet-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';
export default {
    name: 'card',
    props: {
      chartData: {
        type: Object,
        required: true,
      },
    },
    mounted() {
        this.createChart('planet-chart', this.planetChartData);
    },
    data() {
        return {
            planetChartData: this.chartData
        }
    },
    methods:{
        createChart(chartId, chartData) {
            const ctx = document.getElementById("planet-chart");
            const myChart = new Chart(ctx, {
            type: chartData.type,
            data: chartData.data,
            options: chartData.options,
            });
        }
    }
};
</script>