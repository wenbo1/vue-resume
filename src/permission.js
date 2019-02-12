import router from './router/'
import token from '@/utils/auth' // getToken from cookie

const whiteList = ['/login', '/register']// no redirect whitelist

router.beforeEach((to, from, next) => {
  if (token.getToken()) { // determine if there has token
    // has token
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    // has no token
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next('/login') // 否则全部重定向到登录页
    }
  }
})

router.afterEach(() => {
})
