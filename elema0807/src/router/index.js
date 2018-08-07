import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//引入每一个组件
import Home from '@/components/Home.vue'
import Discover from '@/components/Discover.vue'
import Setting from '@/components/Setting.vue'
import Mine from '@/components/Mine.vue'

// 配置
const routes = [
  {
    path: '/home',
    name: 'page1',
    component: Home
  },
  {
    path: '/discover',
    name: 'page2',
    component: Discover
  },
  {
    path: '/setting',
    name: 'page3',
    component: Setting
  },
  {
    path: '/mine',
    name: 'page4',
    component: Mine
  },
  {
    // path: '/',
    path: '**',
    //重定向
    redirect: '/home'
  }
  
];

export default new Router({
  routes
})
