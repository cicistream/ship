import Vue from 'vue'
import Router from 'vue-router'
import home from '@/home'
import category from '@/category'
import zone from '@/zone'
import detail from '@/detail'
import album from '@/album'
import like from '@/like'
import idol from '@/idol'

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
      component: zone,
      redirect: { name: 'album'},
      children: [
        {
          path: 'album',
          name: 'album',
          component: album
        },
        {
          path: 'like',
          name: 'like',
          component: like
        },
        {
          path: 'idol',
          name: 'idol',
          component: idol
        }
      ]
    },
    {
      path: '/detail/:picId',
      name: 'detail',
      component: detail
    },
  ]
})
