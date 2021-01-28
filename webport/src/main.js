import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引用字体图标
import './assets/iconfont/iconfont.css'

//引用自定义组件
import Card from './components/Card.vue'
Vue.component('m-card', Card)
import ListCard from './components/ListCard.vue'
Vue.component('m-list-card',ListCard)

import './assets/scss/style.scss'
Vue.config.productionTip = false

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL:'http://localhost:3000/web/api'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
