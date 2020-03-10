import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import VueMoment from 'vue-moment'
import Toasted from 'vue-toasted'
import App from './App.vue'

import 'bootswatch/dist/lumen/bootstrap.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueMoment)
Vue.use(Toasted, { duration: 1500 })

new Vue({
  render: h => h(App),
}).$mount('#app')
