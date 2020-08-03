import request from '../utils/request'
import qs from 'querystring'
import md5 from 'md5'

export default {
  login({ userName, password }) {
    // 自定义
    const obj = {
      grant_type: 'password',
      username: userName,
      password: md5(password),
    }
    return request.post('/oauth/token', qs.stringify(obj), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  }
}