<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <li v-for="(item,index) in swiperArrOne" :key='index'
                @click="changePage(item.id)">
                    <img :src='swiperData[index].url'>
                    <span>{{swiperArrOne[index].name}}</span>
                </li>
            </div>
            <div class="swiper-slide">
                <li v-for="(item,index) in swiperArrTwo" :key='index'>
                    <img :src='swiperData[index].url'>
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
            swiperData:[
                {
                    url:'//fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
                    name:'美食'
                },
                {
                    url:'//fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
                    name:'商超便利'
                },
                {
                    url:'//fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
                    name:'水果'
                },
                {
                    url:'//fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
                    name:'美食'
                },
                {
                    url:'//fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
                    name:'商超便利'
                },
                {
                    url:'//fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
                    name:'水果'
                },
                {
                    url:'//fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
                    name:'美食'
                },
                {
                    url:'//fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
                    name:'商超便利'
                },
                {
                    url:'//fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
                    name:'水果'
                },
                {
                    url:'//fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
                    name:'水果'
                }
            ],
            pageList:{},
            bannerdata:{
                  latitude:22.4,        //纬度
                  longitude:112.4, 
            },
            
            swiperArrOne:[],
            swiperArrTwo:[],
        }
        
    },
    methods:{
        changePage(id){

            console.log(id)
            this.$router.push({name:'foods',path:'/foods'})
            console.log(this.$center)
            this.$center.$emit('idData','nihao')
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
