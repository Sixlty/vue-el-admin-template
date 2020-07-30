import Vue from 'vue'

// 响应式的全局store，不用observable则不会自动更新View
export const store = Vue.observable({
  userInfo: {
    name: 'kobe'
  }
})

export const mutations = {
  setUserInfo(Info) {
    store.userInfo = Info
  }
}