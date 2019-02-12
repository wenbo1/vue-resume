import Cookies from 'js-cookie'

const TokenKey = 'Resume-Token'

export default {
  getToken () {
    return Cookies.get(TokenKey)
  },
  setToken (token) {
    return Cookies.set(TokenKey, token)
  },
  removeToken () {
    return Cookies.remove(TokenKey)
  }
}
