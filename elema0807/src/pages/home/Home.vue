<template>

<page ref="foods">
    <div>
     
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
             <food-list v-for="(item,index) in restaurantsData" :key="index" :resdata="item"  ></food-list>
      </div>
      

            
    </div>

    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
        <router-view></router-view>
    </transition>


</page>

</template>

<script>
import {getHomeAddressData,getHomebannerGoodsData,getHomeRestaurantsData} from './../../services/homedata.js'

import Banner from '@/components/home/Banner.vue'

import FoodList  from  './../../components/foodlist/FoodList.vue' 
import Activity from '@/components/home/Activity.vue'
import Page from '@/components/page/Page.vue'
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
        Header,
        Page,
        FoodList
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
    methods:{
       
       
    },
    created(){
        getHomeRestaurantsData(this.restaurantsobj).then(result=>{
            this.restaurantsData=result
            console.log(this.restaurantsData)

        })

    },
    mounted(){
                 
            this.$center.$on('refreshDom',()=>{
                 console.log('更新dom')
            this.$nextTick(()=>{
                this.$refs.foods.refreshDOM();
            })
        })
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
