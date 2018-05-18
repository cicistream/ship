import Vue from 'vue'
import Router from 'vue-router'
import home from '@/home'
import category from '@/category'
import zone from '@/zone'
import detail from '@/detail'
import myAlbum from '@/myAlbum'
import like from '@/like'
import idol from '@/idol'
import result from '@/result'
import album from '@/albumDetail'
import set from '@/set'
import newAlbum from '@/newAlbum'
import upload from '@/upload'
import fans from '@/fans'
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
      redirect: { name: 'myAlbum'},
      children: [
        {
          path: 'myAlbum',
          name: 'myAlbum',
          component: myAlbum
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
      path: '/detail/:id',
      name: 'detail',
      component: detail
    },
    {
      path: '/result/:tag',
      name: 'result',
      component: result
    },
    {
      path: '/album/:album',
      name: 'album',
      component: album
    },
    {
      path: '/newAlbum',
      name: 'newAlbum',
      component: newAlbum
    },
    {
      path: '/upload',
      name: 'upload',
      component: upload
    },
    {
      path: '/set/:id',
      name: 'set',
      component: set
    },
    {
      path: '/fans/:id',
      name: 'fans',
      component: fans
    },
  ]
})
