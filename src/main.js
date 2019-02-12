import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import api from './api'
import token from './utils/auth'
import VueTouch from 'vue-touch'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import Loading from 'muse-ui-loading'
import 'muse-ui-loading/dist/muse-ui-loading.css'
import 'material-icons/iconfont/material-icons.scss'

import './permission'

Vue.config.productionTip = false

Vue.prototype.api = api
Vue.prototype.token = token

Vue.use(VueTouch, { name: 'v-touch' })
Vue.use(MuseUI)
Vue.use(Loading)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
