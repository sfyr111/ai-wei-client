import 'common/js/main'

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
// import store from './store'
// import store from 'pages/index/store'
import store from 'store'
// const Home = r => require.ensure([], () => r(require('@/components/HelloFromVux')), 'home')

Vue.use(VueRouter)

const routes = [{
  path: '/'
}]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

Vue.prototype.$log = console.log.bind(console)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
