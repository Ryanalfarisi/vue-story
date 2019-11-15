<template>
  <div>
      <canvas :id="this.chartId" :height="this.height"></canvas>
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
      chartId: String,
      height: Number
    },
    mounted() {
        this.createChart(this.chartId, this.chartData);
    },
    data() {
        return {
            myChart: null
        }
    },
    methods:{
        createChart(chartId, chartData) {
            const ctx = document.getElementById(chartId);
            this.myChart = new Chart(ctx, {
                type: chartData.type,
                data: chartData.data,
                options: chartData.options,
            });
        }
    },
    beforeDestroy() {
       if(this.myChart) {
            this.myChart.destroy();
        }
    }
};
</script>