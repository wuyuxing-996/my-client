import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Index from '@/pages/Index'
import User from '@/pages/User'

Vue.use(Router)

//定义路由，每个路由都是一个组件，每个组件由路径，组件名称，嵌套子组件等等组成
let routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/index',
        component: Index,
        name: '首页',
      },
      {
        path: '/user',
        component: User,
        name: '用户',
      }
    ]
  }
]

const router = new Router({
  mode: 'history',//历史记录模式，去掉#
  routes: routes
})

export default router
