import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../Layout'

Vue.use(Router)

export const commonRoutes = [
  {
    path: '/',
    name: 'index',
    component: Layout,
    meta: {
      title: 'index',
      icon: 'el-icon-switch-button'
    }
  },
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('~p/login'),
    meta: {
      title: '登录',
      icon: 'el-icon-switch-button'
    }
  },
  {
    path: '/404',
    name: '404',
    component: Layout,
    meta: {
      title: '无法找到该页面',
      icon: 'el-icon-switch-button'
    },
    children: [
      {
        path: '101',
        name: '101',
        component: () => import('~p/404'),
        meta: {
          title: '324',
          icon: 'el-icon-switch-button'
        },
      }
    ]
  },
]

// 异步权限路由
export const asyncRoutes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Layout,
    meta: {
      title: '首页',
      icon: 'el-icon-switch-button',
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