import 'common/js/main'

import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.$log = console.log.bind(console)

/* eslint-disable no-new */
new Vue({
  render: h => h(App)
}).$mount('#favorite')
