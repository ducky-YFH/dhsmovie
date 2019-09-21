import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$axios = axios

import scroller from '@/components/Scroller'
Vue.component('scroller', scroller)

import loading from '@/components/Loading'
Vue.component('loading', loading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
