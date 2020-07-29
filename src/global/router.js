import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const commonRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('~/login/views'),
    meta: {
      title: '登录',
    }
  }
]

const router = new Router({
  routes: commonRoutes // (缩写) 相当于 routes: routes
})

export default router