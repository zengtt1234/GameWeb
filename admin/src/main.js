import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'

import './css/style.css'

Vue.config.productionTip = false

import http from './http'
Vue.prototype.$http = http

//代码混用，让每个VUE的实例都拥有
Vue.mixin({
  computed:{
    mixinUploadUrl(){
      return this.$http.defaults.baseURL + 'upload'
    }
  },
  methods:{
    MixinGetAuthHeaders(){
      return {
        Authorization:`'Bearer' ${localStorage.token || ''}`
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
