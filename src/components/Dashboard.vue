<template>
  <div>
    <type-nav />
    <div class="page-wrapper">
        <div class="row">
            <div class="col-6">
                <div class="widget">
                    <div class="widget-title">Charts</div>
                    <div class="widget-content">
                        <Chart :chartData="this.barChart" :chartId="'barChart'"/>
                    </div>
                </div>
            </div>
            <div class="col-3">
              <div class="widget">
                <div class="widget-title">Type Round Charts</div>
                <div class="widget-content">
                    <Chart :chartData="this.DoughnutChart" :chartId="'donutChart'"/>
                </div>
              </div>
            </div>
            <div class="col-3">
              <div class="widget">
                <div class="widget-title">Type Colors</div>
                <div class="widget-content">
                    <TypeColor />
                </div>
              </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <div class="row">
                    <div class="col-12">
                        <div class="widget">
                            <div class="widget-title">Type Cards</div>
                            <div class="widget-content">
                                <div class="row">
                                    <div class="col-6">
                                        <Card :behaviorCard="behaviorCard"/>
                                    </div>
                                    <div class="col-6">
                                        <Card :behaviorCard="behaviorCard2"/>
                                    </div>
                                    <div class="col-6">
                                        <Card :behaviorCard="behaviorCard2"/>
                                    </div>
                                    <div class="col-6">
                                        <Card :behaviorCard="behaviorCard"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="widget">
                            <div class="widget-title">Typhography</div>
                            <div class="widget-content">
                                <Typography />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="widget">
                <div class="widget-title">Type Button</div>
                <div class="widget-content">
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  import TypeNav from '../components/TypeNav.vue';
  import Chart from '../components/Chart.vue';
  import TypeColor from '../components/TypeColor.vue';
  import Card from '../components/Card.vue';
  import Typography from '../components/Typography.vue';
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
                }, 
                behaviorCard: {
                  type: 'card primary',
                  title: 'Example title default',
                  subTitle: 'Example Paragraph'
                },
                behaviorCard2: {
                  type: 'card secondary',
                  title: 'Example title default',
                  subTitle: 'Example Paragraph'
                },

        }
    },
    components:{
        TypeNav,
        Chart,
        TypeColor,
        Card,
        Typography,
    },
    computed:{
        className() {
          return `card ${this.behaviorCard.type}`;
        }
    },

  };
</script>