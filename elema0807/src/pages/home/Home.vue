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
          <!-- 餐馆列表  -->
            <food-list v-for="(item,index) in restaurantsData" :key="index" :resdata="item"></food-list>
      </div>
      
        
    </div>
</div>
</template>

<script>
import {getHomeAddressData,getHomebannerGoodsData,getHomeRestaurantsData} from './../../services/homedata.js'
import Banner from '@/components/home/Banner.vue'

import FoodList  from  './../../components/foodlist/FoodList.vue' 
import Activity from '@/components/home/Activity.vue'
export default {
    components:{
        Banner,
        FoodList,
        Activity
},
    data(){
        return{
           restaurantsobj:{
                latitude:22.63336,        //纬度
                longitude:113.814549,      //经度 
                offset:0,
                limit:8,
                
           },
            restaurantsData:[]
        }
    },
    created(){
        getHomeRestaurantsData(this.restaurantsobj).then(result=>{
            this.restaurantsData=result
            console.log(this.restaurantsData)

        })

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
