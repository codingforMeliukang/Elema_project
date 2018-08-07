<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <li v-for="(item,index) in swiperData" :key='index'>
                    <img :src='swiperData[index].url'>
                    <span>{{swiperData[index].name}}</span>
                </li>
            </div>
            <div class="swiper-slide">
                <li v-for="(item,index) in swiperData" :key='index'>
                    <img :src='swiperData[index].url'>
                    <span>{{swiperData[index].name}}</span>
                </li>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
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
            ]
        }
        
    },
    mounted(){
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
        height: 140px;
    }

    .swiper-slide li{
        height: 55px;
        width: 20%;
        text-align: center;
        float: left;
        font-size: 12px
    }

    .swiper-slide li img{
        width: 80%;
        height: 40px; 
        position: relative;
        left: 8px;
    }

</style>
