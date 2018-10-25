import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: () => import('@/views/login')
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/maintainer',
      component: () => import('@/views/maintainer')
    }
  ]
})
