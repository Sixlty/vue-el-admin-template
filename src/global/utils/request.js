import axios from 'axios'
import { getToken } from '~g/utils/auth'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 15000,
})

service.interceptors.request.use(
  config => {
    let headers = {

    }
    
    if(getToken()) {
      headers.Authorization = 'Bearer ' + getToken()
    } else {
      headers.Authorization = 'Basic YXBpOnNlY3JldA=='
      headers.basic = 'eyJwZXJtaXNzaW9ucyI6W10sImZsYWciOmZhbHNlLCJ2YWx1ZVR5cGUiOiJOVU1CRVIifQ=='
    }
    config.headers = {...headers, ...config.headers}
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

    // 自定义逻辑
    if(res.code === 0 || !res.code) { // 数据返回成功

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