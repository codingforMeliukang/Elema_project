<template>
  <div id="app">

    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <nav class="tabs">
      <router-link class="tab" :to="{name: 'page1'}">首页</router-link>
      <router-link class="tab" :to="{name: 'page2'}">发现</router-link>
      <router-link class="tab" :to="{name: 'page3'}">订单</router-link>
      <router-link class="tab" :to="{name: 'page4'}">我的</router-link>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body, #app{
  width: 100%;
  height: 100%;

}
.tabs{
  width: 100%;
  height: 49px;
  background: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
}
.tabs .tab{
  flex: 1;
  text-align: center;
  line-height: 49px;
  font-size: 14px;
}
.tabs .tab.router-link-active{
  font-size: 16px;
  font-weight: bold;
  color: lightcoral;
}
.page{
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 49px;
  background: #fff;
}
.page.subpage{
  bottom: 0;
  z-index: 5;
}

</style>
