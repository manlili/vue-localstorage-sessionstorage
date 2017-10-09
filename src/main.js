import Vue from 'vue'
import App from './App'

import localStorage from './local-storage'
Vue.use(localStorage)

Vue.localStorage.set('someNumber', 789)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
