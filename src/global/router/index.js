import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const commonRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('~p/login'),
    meta: {
      title: '登录',
    }
  }
]

export const asyncRoutes = [
  {
    path: '/404',
    name: '404',
    component: () => import('~p/404'),
    meta: {
      title: '无法找到该页面',
    }
  }
]

const router = new Router({
  routes: commonRoutes // (缩写) 相当于 routes: routes
})

export default router