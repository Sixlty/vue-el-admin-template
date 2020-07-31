import userApi from '~g/api/user'

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
      userApi.login(account).then(res => {
        console.log(res)
      })
    }
  }
  
}