<template>
<div>
    <div id="home">  
        <div class="warp">
          <!--首页头部 -->
            <Header></Header>
            <Search></Search>
          <!-- 首页轮播 -->
            <Banner></Banner>

            <!-- 首页抢购部分  -->
            <Activity></Activity>
      </div>   
    </div>
    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
        <router-view></router-view>
    </transition>
</div>
</template>

<script>
import Banner from "@/components/home/Banner.vue";
import Activity from "@/components/home/Activity.vue";
import Search from "@/components/home/Search.vue";
import Header from "@/components/home/Header.vue";
export default {
  components: {
    Banner,
    Activity,
    Search,
    Header
  },
 
  methods:{

  }

};
</script>

<style>


</style>
