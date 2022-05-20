// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'

//创建并暴露一个路由器
export default new VueRouter({
  routes: [
    {
      path: '/about',
      component: About,
    },
    {
      // 一级路由，路径加'/'
      path: '/home',
      component: Home,
      children: [
        {
          // 二级路由，路径不加'/'
          path: 'news',
          component: News,
        },
        {
          path: 'message',
          component: Message,
        },
      ],
    },
  ],
})
