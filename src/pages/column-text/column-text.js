import 'common/js/main'

import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import store from 'store'

Vue.use(VueRouter)

const routes = []
const router = new VueRouter({
  // mode: 'history'
  routes
})

Vue.config.productionTip = false

Vue.prototype.$log = console.log.bind(console)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-text')
