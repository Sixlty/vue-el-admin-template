import Vue from 'vue'
import router from './global/router'
import App from './App.vue'
import Less from 'less'

Vue.use(Less)

import './global/style/index.less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './global/store'
import './permission'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
