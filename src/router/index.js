/* eslint-disable*/
import Vue from 'vue'
import Router from 'vue-router'
import Loader from '@/components/Loader'
import ChannelList from '@/components/ChannelList'
import store from '../store/'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [{
    path: '/channelList',
    name: 'ChannelList',
    component: ChannelList
  }, {
    path: '/',
    name: 'Loader',
    component: Loader
  }]
})

router.beforeEach((to, from, next) => {
  switch (to.name) {
    case 'ChannelList':
      {
        if (store.getters.channelList.length < 1) {
          router.push('/')
        } else {
          next()
        }
        break;
      }
    default:
      {
        next()
        break;
      }

  }

})

router.afterEach((to, from, next) => {

  switch (to.name) {
    case 'Loader':
      {
        store.dispatch('fetchChannelList')
        break;
      }
    default:
      {
        break;
      }
  }
})

export default router
