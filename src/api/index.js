import request from '@/utils/request'

export default {
  login (username, password) {
    const data = {
      username,
      password
    }
    return request({
      url: '/login',
      method: 'post',
      data
    })
  },
  logout () {
    return request({
      url: '/logout',
      method: 'post'
    })
  },
  register (username, password) {
    const data = {
      username,
      password
    }
    return request({
      url: '/register',
      method: 'post',
      data
    })
  }
}
