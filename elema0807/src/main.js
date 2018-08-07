import Vue from 'vue'
import App from './App'//根组件
import router from './router'//路由对象
import store from './store'//数据管理对象


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
