import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Mock from './network/mock'
import { request } from './network/request'
import { Image, Lazyload } from 'vant'
import store from './store'
// import Fastclick from 'fastclick'

Vue.config.productionTip = false

Vue.use(Image)
//使用图片懒加载
Vue.use(Lazyload)


//减少300毫秒延迟
// Fastclick.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

request({
  url: 'http://localhost:3000'
}).then(res => {
  // console.log(res);

}).catch(err => {
  console.log(err);

})