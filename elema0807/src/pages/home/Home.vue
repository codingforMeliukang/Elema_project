<template>
<div>
    <div id="home" class="page">  
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
  data() {

  },
  methods:{

  }

};
</script>

<style>


</style>
