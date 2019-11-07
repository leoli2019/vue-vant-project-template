import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 全局配置的页面默认title
import { baseTitle } from '@/config'

/* Router Modules */
import vantDemoModule from './modules/vant-demo'

const routes = [
  {
    name: 'home',
    meta: {
      title: 'vue-vant-project-template'
    },
    component: () => import('@/views/home')
  },
  {
    name: 'request',
    meta: {
      title: '请求数据'
    },
    component: () => import('@/views/request-demo')
  },
  ...vantDemoModule,
  {
    path: '*',
    redirect: '/home'
  }
]

// 根据 name 设置 path 参数
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '')
})

// 实例化理由
const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

// 设置页面title
router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title
  title ? (document.title = title) : (document.title = baseTitle)
  next()
})

export default router