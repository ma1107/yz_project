// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/common.css'
import './assets/css/iconfont.css'
import YzPurpose from './pages/YzPurpose'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:c=>c(YzPurpose),
  router,
  components: { App },
  template: '<App/>'
})
