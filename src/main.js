import Vue from 'vue'
import App from './App'
import Storage from './index'
Vue.use(Storage)

Vue.localStorage.set('someNumber', 123)
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
