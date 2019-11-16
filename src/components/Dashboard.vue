<template>
  <div>
    <type-nav />
    <div class="page-wrapper">
        <div class="row">
            <div class="col-6">
                <div class="widget">
                    <div class="widget-title benar">Charts</div>
                    <div class="widget-content">
                        <Chart :chartData="this.barChart" :chartId="'barChart'" :height="200"/>
                    </div>
                </div>
            </div>
            <div class="col-3">
              <div class="widget">
                <div class="widget-title">Type Round Charts</div>
                <div class="widget-content">
                    <Chart :chartData="this.DoughnutChart" :chartId="'donutChart'" :height="600"/>
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
            <div class="col-4">
                <div class="widget">
                    <div class="widget-title">Type Button</div>
                    <div class="widget-content">
                        <div style="margin-bottom:20px">
                            <Button-com :behaviorButton="{
                                shape: 'box',
                                type: 'btn btn-primary',
                                title: 'primary' 
                            }"/>
                            <Button-com  :behaviorButton="{
                                shape: 'box',
                                type: 'btn btn-secondary',
                                title: 'Secondary' 
                            }"/>
                            <Button-com  :behaviorButton="{
                                shape: 'box',
                                type: 'btn btn-default',
                                title: 'Default' 
                            }"/>
                        </div>
                        <div style="margin-bottom:20px">
                            <Button-com  :behaviorButton="{
                                shape: 'round',
                                type: 'btn btn-primary',
                                title: 'primary' 
                            }"/>
                            <Button-com  :behaviorButton="{
                                shape: 'round',
                                type: 'btn btn-secondary',
                                title: 'Secondary' 
                            }"/>
                            <Button-com  :behaviorButton="{
                                shape: 'round',
                                type: 'btn btn-default',
                                title: 'Default' 
                            }"/>
                        </div>
                        <div style="margin-bottom:20px">
                            <Button-com  :behaviorButton="{
                                shape: 'box',
                                type: 'btn btn nostyle',
                                title: 'No style' 
                            }"/>
                            <Button-com  :behaviorButton="{
                                shape: 'box',
                                type: 'btn link',
                                title: 'Link' 
                            }"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-2">
                <div class="widget">
                    <div class="widget-title">Type Select</div>
                    <div class="widget-content"> 
                        <input-select :behaviorSelect="{
                            prefix: 'primary',
                            option: ['number 1', 'number 2', 'number 3', 'number 4', 'number 5'],
                            disabled: false
                        }"/>
                        <input-select :behaviorSelect="{
                            prefix: 'default',
                            option: ['number 1', 'number 2', 'number 3', 'number 4', 'number 5'],
                            disabled: false
                        }"/>
                        <input-select :behaviorSelect="{
                            prefix: 'disable',
                            option: ['number 1', 'number 2', 'number 3', 'number 4', 'number 5'],
                            disabled: false
                        }"/>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="widget">
                    <div class="widget-title">Type Text Input</div>
                    <div class="widget-content">
                        <input-text :behaviorInput="{
                            type: 'input-primary',
                            text: 'Enter text here'
                        }"/>
                        <input-text :behaviorInput="{
                            type: 'active',
                            text: 'Enter text here'
                        }"/>
                        <input-text :behaviorInput="{
                            type: 'disable',
                            text: 'Enter text here'
                        }"/>
                    </div>
                </div>
            </div>
            <div class="col-5">
                <div class="widget">
                    <div class="widget-title">Type Pagination</div>
                    <div class="widget-content">
                        <Pagination :behaviorPagination="{
                            type: 'light'
                        }"/>
                        <Pagination :behaviorPagination="{
                            type: 'dark'
                        }"/>
                    </div>
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
  import ButtonCom from '../components/Button.vue';
  import InputSelect from '../components/InputSelect.vue';
  import InputText from '../components/InputText.vue';
  import Pagination from '../components/Pagination.vue';
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
        ButtonCom,
        InputSelect,
        InputText,
        Pagination,
    },
    computed:{
        className() {
          return `card ${this.behaviorCard.type}`;
        }
    },

  };
</script>