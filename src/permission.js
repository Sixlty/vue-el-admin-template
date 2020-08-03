import router from './global/router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { asyncRoutes } from './global/router'
import { getToken } from './global/utils/auth'

const whiteList = ['/login']

const permissionList = ['首页']
const realRoutes = filterAsyncRoutes(asyncRoutes, permissionList)

router.addRoutes(realRoutes) // 异步添加路由
// 下面这种方法不可用来做router的权限控制，router.options与实际路由不同步，它返回的只是一开始定义的路由而已,但是可以用来存储异步路由，方便侧边栏读取
router.options.routes = router.options.routes.concat(realRoutes)

router.beforeEach((to, from, next) => {
  Nprogress.start()
  if(getToken()) { // 用户已登录
    if(to.path === '/login') {
      next('/')
    } else {
      next()
    }
    Nprogress.done()
  } else {
    if(whiteList.includes(to.path)) { // 白名单中存在该路由
      next()
      Nprogress.done()
    } else { // 遇事不决，跳回登录
      next('/login')
      Nprogress.done()
    }
  }
})

function filterAsyncRoutes(asyncRoutes = [], permissionList) {
  return asyncRoutes.filter(val => {
    if(val.children) {
      val.children = filterAsyncRoutes(val.children, permissionList)
    }
    return hasPermission(val, permissionList)
  })
}

function hasPermission(route, permissionList) {
  if(route.meta && route.meta.permissionName) {
    return route.meta.permissionName.reduce((bool, val) => {
      return bool || permissionList.includes(val)
    }, false)
  }
}

function resetRouter() {

}
