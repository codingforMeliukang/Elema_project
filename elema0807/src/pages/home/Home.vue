<template>
<div>
    <div id="home" class="page">  
      <div class="warp">
          <!--首页头部 -->
          <div class="head">
              <div class="headTop">
                  <span></span><span>深圳西部硅谷</span><span>↓</span>
              </div>
              <div class="headInp">
                  <input type="text" placeholder="搜索饿了么商家、商品名称">
              </div>   
          </div>
          <!-- 首页轮播 -->
            <Banner></Banner>

            <!-- 首页抢购部分  -->
            <Activity></Activity>
      </div>
      
        
    </div>
</div>
</template>

<script>
import Banner from '@/components/home/Banner.vue'
import Activity from '@/components/home/Activity.vue'
import Foods from '@/pages/home/Foods.vue'
export default {
    components:{
        Banner,
        Activity,
        Foods
    }
    
}
    
</script>

<style scoped>
    .head{
        
        height: 90px;
        background: #0085ff;
        padding: 10px 10px 0 10px;
    }

    .headTop{
        color: #fff;
        margin-bottom: 10px;
    }

    .headInp input{
        width: 100%;
        height: 40px;
        border: none;
        text-align: center
    }
    
</style>
