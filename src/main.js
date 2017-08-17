// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable*/
import Vue from 'vue'
import App from './App'
import router from './router'

import VueRx from 'vue-rx'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription' // Disposable if using RxJS4
import { Subject } from 'rxjs/Subject' // required for domStreams option
import Rx from 'rxjs/Rx'
import store from './store/'

Vue.config.productionTip = false

Vue.use(VueRx, {
  Rx,
  Observable,
  Subscription,
  Subject
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
