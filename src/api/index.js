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
  },
  getInfo () {
    return request({
      url: '/getInfo',
      method: 'get'
    })
  },
  getResume (user) {
    console.log(user)
    return request({
      url: '/resume/' + user,
      method: 'get'
    })
  },
  update (update) {
    const data = {
      update
    }
    return request({
      url: '/update',
      method: 'post',
      data
    })
  }
}
