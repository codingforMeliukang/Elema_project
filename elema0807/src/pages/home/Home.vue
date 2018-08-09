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

            <div class="recommend">
                —— 推荐商家 ——
            </div>

            <Nav></Nav>
      </div>
      
        
    </div>
    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
        <router-view></router-view>
    </transition>
</div>
</template>

<script>

import Banner from '@/components/home/Banner.vue'
import Activity from '@/components/home/Activity.vue'
import Nav from '@/components/home/Nav.vue'
import Foods from '@/pages/home/Foods.vue'
import Search from "@/components/home/Search.vue";
import Header from "@/components/home/Header.vue";
export default {
    components:{
        Banner,
        Activity,
        Nav,
        Foods,
        Search,
        Header
    }
    
}
    


</script>

<style>



    .headInp input{
        width: 100%;
        height: 40px;
        border: none;
        text-align: center
    }
    
    .recommend{
        width:100%;
        height: 36px;
        line-height: 36px;
        text-align: center;
        color: #000;
        font-size: 14px
    }

</style>
