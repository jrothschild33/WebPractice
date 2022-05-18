//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入插件
import vueResource from 'vue-resource'
//引入store（如果store文件夹下只有index.js，可以简写为./store）
import store from './store'

//关闭Vue的生产提示
Vue.config.productionTip = false
//使用插件
Vue.use(vueResource)

//创建vm
new Vue({
  el: '#app',
  render: (h) => h(App),
  // 挂载store，用于管理vuex中的三个对象
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
  },
})
