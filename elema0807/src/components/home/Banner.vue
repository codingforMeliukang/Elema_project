<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <li v-for="(item,index) in swiperArrOne" :key='index'
                @click="changePage(index)">
                    <img :src='swiperArrOne[index].image_hash|formatimg'>
                    <span>{{swiperArrOne[index].name}}</span>
                </li>
            </div>
            <div class="swiper-slide">
                <li v-for="(item,index) in swiperArrTwo" :key='index'>
                    <img :src='swiperArrTwo[index].image_hash|formatimg'>
                    <span>{{swiperArrTwo[index].name}}</span>
                </li>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>

import {getHomebannerGoodsData} from '../../services/homedata.js'
export default {
    data(){
        return{
            pageList:{},
            bannerdata:{
                  latitude:22.4,        //纬度
                  longitude:112.4, 
            },
            swiperArr:[],
            swiperArrOne:[],
            swiperArrTwo:[],
        }
        
    },
    methods:{
        changePage(index){
            let id = this.swiperArrOne[index].id
            console.log(id)
            console.log(index)
            this.$router.push({name:'foods',path:'/foods'})
            
            this.$center.$emit('idData',id)
        }
    },

    created(){
        
    },

    mounted(){

        getHomebannerGoodsData(this.bannerdata).then(result=>{
            // console.log(result)
            this.pageList = result;
            // console.log(this.pageList.data[0])
            // console.log(this.pageList.data[1])
            var swiperArr = this.pageList.data[0].entries
            
            console.log(swiperArr)

            var swiperArrOne = [];
            var swiperArrTwo = [];
            
            swiperArrOne = swiperArr.slice(0,10);
            swiperArrTwo = swiperArr.slice(10,13)
        
            this.swiperArrOne = swiperArrOne;
            this.swiperArrTwo = swiperArrTwo

            console.log(this.swiperArrOne)
            console.log(this.swiperArrTwo)
        })

        var mySwiper = new Swiper('.swiper-container', {
            direction : 'horizontal',
            pagination : '.swiper-pagination',
            loop:true
        })
    }
}
</script>

<style scoped> 

    .swiper-container{
        width: 100%;
        height: 160px;
        padding-top: 10px;
    }

    .swiper-slide li{
        height: 55px;
        width: 20%;
        text-align: center;
        float: left;
        font-size: 12px;
        margin-bottom: 10px
    }

    .swiper-slide li img{
        width: 80%;
        height: 40px; 
        position: relative;
        left: 8px;
    }

</style>
