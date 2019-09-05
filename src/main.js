import Vue from 'vue'

import App from './app'
import router from './router'
import store from './store'

import './plugins/register-sw'
import './plugins/webfonts'

Vue.config.productionTip = process.env.NODE_ENV !== 'production'
Vue.config.performance = process.env.NODE_ENV !== 'production'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
