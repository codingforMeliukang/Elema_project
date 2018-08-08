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
           
          <goods></goods>
       
         


      </div>
      
        
    </div>
</div>
</template>

<script>
import {getHomeAddressData,getHomebannerGoodsData,getHomeRestaurantsData} from './../../services/homedata.js'
import Banner from '@/components/home/Banner.vue'
import Goods  from  './../../components/foodlist/FoodList.vue' 
export default {
    components:{
        Banner,
        Goods
    },
    data(){
        return{
           restaurantsobj:{
                latitude:22.63336,        //纬度
                longitude:113.814549,      //经度 
                offset:0,
                limit:8,
           } 
        }
    },
    created(){
        getHomebannerGoodsData(this.restaurantsobj).then(result=>{

            console.log(result)

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
