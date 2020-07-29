import Vue from 'vue'
import router from './global/router'
import App from './App.vue'
import Less from 'less'

Vue.use(Less)

import './global/app.less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
