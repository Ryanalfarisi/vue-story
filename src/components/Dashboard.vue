<template>
  <div>
    <type-nav />
    <div class="page-wrapper">
        <Chart :chartData="this.barChart" :chartId="'barChart'"/>
        <Chart :chartData="this.DoughnutChart" :chartId="'donutChart'"/>
    </div>
  </div>
</template>

<script>
  import TypeNav from '../components/TypeNav.vue';
  import Chart from '../components/Chart.vue';
  export default {
    name: 'dashboard',
    data() {
        return {
            barChart : {
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
            },
            DoughnutChart : {
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
                }
        }
    },
    components:{
        TypeNav,
        Chart,
    },
    computed:{
        className() {
          return `card ${this.behaviorCard.type}`;
        }
    },

  };
</script>