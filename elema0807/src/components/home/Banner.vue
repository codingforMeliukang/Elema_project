<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <li>
                    <img :src='swiperData[index].url'>
                    <span>{{swiperData[index].name}}</span>
                </li>
            </div>
            <div class="swiper-slide">slider2</div>
        </div>
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
                }
            ]
        }
        
    }
}
</script>

<style> 
    .swiper-slide li{
        height: 55px;
        width: 20%;
        text-align: center;
        float: left;
    }

    .swiper-slide li img{
        width: 80%
    }
</style>
