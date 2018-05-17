// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import axios from 'axios'
import 'mint-ui/lib/style.css'
import { EINPROGRESS } from 'constants';
import globalRouter from './common';

Vue.use(MintUI)
var h1style = require('./main.css');

Vue.config.productionTip = false
Vue.use(globalRouter);
Vue.prototype.$http = axios ;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
