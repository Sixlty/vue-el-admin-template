import userApi from '~g/api/user'
import { setToken, removeToken } from '../../utils/auth'
import { resetRouter } from '~g/router'

export default {
  state: {
    token: '',
    userInfo: '',
  },

  namespaced: true,

  mutations: {
    Set_Token(state, token) {
      state.token = token
    },
    Set_UserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },

  actions: {
    login({ commit }, account) {
      return new Promise((resolve, reject) => {
        userApi.login(account).then(res => {
          setToken(res.access_token)
          commit('Set_Token', res.access_token)
          resolve()
        }).catch(error => {
          reject()
        })
      })
    },

    getInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        userApi.getInfo().then(res => {
          commit('Set_UserInfo', res)
          resolve(res)
        }).catch(error => {
          reject()
        })
      })
    },

    logout({ commit }, account) {
      return new Promise(( resolve, reject ) => {
        removeToken()
        resetRouter()
      })
    }
  }
  
}