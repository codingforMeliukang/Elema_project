<template>
  <div id="app">

    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <nav class="tabs">
      <router-link class="tab" :to="{name: 'page1'}">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-data_image_svgxml3"></use>
        </svg>
        <span>首页</span>
      </router-link>
      <router-link class="tab" :to="{name: 'page2'}">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-data_image_svgxml2"></use>
        </svg>
        <span>发现</span>
      </router-link>
      <router-link class="tab" :to="{name: 'page3'}">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-data_image_svgxml1"></use>
        </svg>
        <span>订单</span>
      </router-link>
      <router-link class="tab" :to="{name: 'page4'}">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-data_image_svgxml"></use>
        </svg>
        <span>我的</span>
      </router-link>
    </nav>

  </div>
</template>

<script>
import Vuex from 'vuex'
export default {
  name: "App",
  methods: {
  	...Vuex.mapActions({
  		getLocation: 'location/getLocation'
  	})
  },
  created(){
  	this.getLocation();
  }
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}
.tabs {
  width: 100%;
  height: 49px;
  background: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  z-index: 3;
}
.tabs .tab {
  flex: 1;
  text-align: center;
}
.tabs .tab.router-link-active {
 color: #0089dc;
}
.tabs .tab span{
  display: block;
}
.tabs .tab svg{
  width: 20px;
  height: 20px;
  margin-top: 5px;
}
.page {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 49px;
  background: #f2f2f2;
}
.page.subpage {
  bottom: 0;
  z-index: 5;
}
.slideInRight, .slideOutRight{
    animation-duration: 300ms;
}
</style>
