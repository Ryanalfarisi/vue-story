import Vue from 'vue'
import App from './App.vue'
import vSelect from 'vue-select'
import { plugin } from 'vue-fragment'
// Importing the global css file
import "@/assets/css/new-index.css"

Vue.use(plugin)
Vue.component('v-select', vSelect)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
