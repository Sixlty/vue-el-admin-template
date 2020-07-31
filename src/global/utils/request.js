import axios from 'axios'
import store from '~g/store'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: process.env.VUE_BASE_API,
  timeout: 15000,
})

service.interceptors.request.use(
  config => {
    let headers = {

    }

    if(store.getters.token) {
      headers.Authorization = 'Bearer ' + store.getters.token
    } else {

    }
    return config
  },
  error => {
    Message.error('网络错误')
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data

    if(res.code === 0) { // 数据返回成功

      return res.data || res
    } else {
      Message.error(res.msg)
      return Promise.reject(new Error(res.msg || 'Error'))
    }
  },
  error => {
    Message.error('服务器错误')
    return Promise.reject(error)
  }
)

export default service