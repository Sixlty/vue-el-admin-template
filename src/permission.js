import router from './global/router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from './global/utils/auth'

const whiteList = ['/login', '/404']

router.beforeEach((to, from, next) => {
  Nprogress.start()
  if(getToken()) { // 用户已登录
    // next('/login')
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