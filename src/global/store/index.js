import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

Vue.use(Vuex)

// const requireComponent = require.context(
//   // 其组件目录的相对路径
//   './modules',
//   // 是否查询其子目录
//   false,
//   // 匹配基础组件文件名的正则表达式
//   /[a-z]\w+\.(vue|js)$/
// )
// requireComponent.keys().forEach(fileName => {
//   const componentConfig = requireComponent(fileName)
//   console.log(componentConfig)
// })

export default new Vuex.Store({
  modules: {
    user,
  }
})