import Vue from 'vue'
import Router from 'vue-router'
import home from '@/home'
import category from '@/category'
import zone from '@/zone'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'home'}
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/category',
      name: 'category',
      component: category
    },
    {
      path: '/zone',
      name: 'zone',
      component: zone
    }
  ]
})
