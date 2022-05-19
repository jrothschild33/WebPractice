import Vue from 'vue'
import Vuex from 'vuex'
// 导入各个模块文件
import countOptions from './count'
import personOptions from './person'
Vue.use(Vuex)

export default new Vuex.Store({
  // 暴露模块，可自定义名称
  modules: {
    countAbout: countOptions,
    personAbout: personOptions,
  },
})
