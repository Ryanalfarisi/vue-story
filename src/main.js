import Vue from 'vue'
import App from './App.vue'
import vSelect from 'vue-select'
// Importing the global css file
import "@/assets/css/new-index.css"
import 'vue-select/dist/vue-select.css';

Vue.component('v-select', vSelect)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
