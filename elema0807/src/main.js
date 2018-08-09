import Vue from 'vue'
import App from './App'//根组件
import router from './router'//路由对象
import store from './store'//数据管理对象

import filters from './filters'
//为了非父子组件传值
Vue.prototype.$center = new Vue();

Vue.use(filters)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
