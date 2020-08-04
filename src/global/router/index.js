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
  },
  {
    path: '/404',
    name: '404',
    component: () => import('~p/404'),
    meta: {
      title: '无法找到该页面',
    }
  },
]

// 异步权限路由
export const asyncRoutes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('~p/dashboard'),
    meta: {
      title: '首页',
      permissionName: ['首页']
    }
  },
  { path: '*', redirect: '/404' }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: commonRoutes // (缩写) 相当于 routes: routes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router