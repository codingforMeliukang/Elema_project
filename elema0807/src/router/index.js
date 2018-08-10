import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//引入每一个组件
import Home from '@/pages/home/Home.vue'
import Discover from '@/pages/discover/Discover.vue'
import Order from '@/pages/order/Order.vue'
import Mine from '@/pages/mine/Mine.vue'
import RestaurantDetail from '@/components/restaurants/RestaurantDetail.vue'

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
    component: Order
  },
  {
    path: '/mine',
    name: 'page4',
    component: Mine
  },
   {
    path: '/restaurants/:id',
    name: 'restaurants',
    component: RestaurantDetail
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
