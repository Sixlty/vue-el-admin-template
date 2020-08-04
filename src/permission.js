import router from '~g/router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { asyncRoutes } from './global/router'
import { getToken } from './global/utils/auth'
import store from '~g/store'

const whiteList = ['/login', '/404']

router.beforeEach((to, from, next) => {
  Nprogress.start()
  console.log(to)
  if(getToken()) { // 用户已登录
    if(to.path === '/login') {
      next({
        path: '/dashboard'
      })
    } else {
      if(!store.state.user.userInfo) { // 已有权限列表了
        store.dispatch('user/getInfo').then(res => {
          const permissionList = ['首页']
          const realRoutes = filterAsyncRoutes(asyncRoutes, permissionList)

          router.addRoutes(realRoutes) // 异步添加路由
          // 下面这种方法不可用来做router的权限控制，router.options与实际路由不同步，它返回的只是一开始定义的路由而已,但是可以用来存储异步路由，方便侧边栏读取
          router.options.routes = router.options.routes.concat(realRoutes)
          console.log(realRoutes)
          // 会报 Redirected when going from "/login" to "/dashboard" via a navigation guard. 原因是：首先next里面带参数时会被认为是一个新路由再次触发这个拦截器，而先后的路径一样便会被认为重定向问题
          // next({...to, replace: true})

          // 页面会渲染不出来，可以确定的是，是因为此路由是由addRoutes添加引起的，debug之后发现此函数并不是异步的
          // 初步认为是addRoutes之后才添加对此路由路径的解析，而此时的to是早已经解析后的name为null的路由，所以路由组件不能成功渲染出来，需要重新进入该路由
          // next()

          if(!to.name) { // 如果第一次调取用户信息时，将要前往路由的name不存在，说明异步路由还未完成
            router.replace(to)
          } else {
            next()
          }
        }).catch(error => {

          store.dispatch('user/logout').then(res => {
            next({
              path: '/login'
            })
          })
        })
      } else {
        next()
      }

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
  } else {
    return true
  }
}
