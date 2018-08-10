<template>
    <div id="warp">
        <div class="header">
            <div class="header-top">
                <span>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIzMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2LjU1MiA1LjYzM0wxNC41MDggMy41OSAyLjI0MyAxNS44NTMgMTQuNTA4IDI4LjQxbDIuMDQ0LTIuMDQzLTEwLjIyLTEwLjUxM3oiLz48L3N2Zz4=" alt="">
                </span>
                <h1>{{name}}</h1>
            </div>
            <div class="header-list">
                <ul>
                    <li v-for="(item,index) in headerList" :key='index'>{{headerList[index].name}}</li>
                </ul>
                <div class="more">
                    ↓
                </div>
            </div>
        </div>
        <div class="menu">
            <div class="menu-top">
                <div class="menu-top-left">
                    省心套餐
                </div>
                <div class="menu-top-right">
                    更多》
                </div>
            </div>
            <div class="menu-mid">
                <ul>
                    <li>
                        <img src="//fuss10.elemecdn.com/c/be/4297a8193e90067639fd5c3dbfaeejpeg.jpeg?imageMogr/format/webp/thumbnail/!220x220r/gravity/Center/crop/220x220/" alt="">
                        <p class="foodname">虾+蟹双拼</p>
                        <p class="evaluate">87人好评</p>
                        <p class="price">￥28元</p>
                    </li>
                    <li>
                        <img src="//fuss10.elemecdn.com/2/dd/e5cdbe0134b7b6220ff5152af0210jpeg.jpeg?imageMogr/format/webp/thumbnail/!220x220r/gravity/Center/crop/220x220/" alt="">
                        <p class="foodname">虾+蟹双拼</p>
                        <p class="evaluate">87人好评</p>
                        <p class="price">￥28元</p>
                    </li>
                    <li>
                        <img src="//fuss10.elemecdn.com/c/e3/2b78ead4f0c5c5b57bc5c1040b9c7jpeg.jpeg?imageMogr/format/webp/thumbnail/!220x220r/gravity/Center/crop/220x220/" alt="">
                        <p class="foodname">虾+蟹双拼</p>
                        <p class="evaluate">87人好评</p>
                        <p class="price">￥28元</p>
                    </li>
                </ul>
            </div>
        </div>
        <Nav></Nav>
        <food-list v-for="(item,index) in restaurantsData" :key="index" :resdata="item"  ></food-list>
    </div>
</template>

<script>
import Nav from '@/components/home/Nav.vue'
import FoodList from '@/components/foodlist/FoodList.vue'
import {getHomeTitleList,getHomeRestaurantsData} from '../../services/homedata.js'
export default {
    components:{
        Nav,
        FoodList
    },
    data(){
        return{
            headerList:[],
            name:'',
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

    },

    
    mounted(){

        console.log(this.$route.params)
        this.id = this.$route.params.id;
        this.name =  this.$route.params.name;
        var requestObj = {
            id:this.id,
            longitude:'114.2222',
            latitude:'29.2231'
        }
        
        getHomeTitleList(requestObj).then(result=>{
            
            var headerData = result;
            this.headerList = headerData.data;
          
        })
       

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
    .header{
        width: 100%;
        height: 84px;
        background: #0085ff;
        color: #fff
    }

    .header-top{
        height: 44px;
        width: 100%;
        line-height: 44px;
        text-align: center;
        position: relative;
        font-size: 18px;
    }

    .header-top span{
        position: absolute;
        top: 13px;
        left: 5px;
    }

    .header-top span img{
        height: 18px;
        width: 12px;
    }

    .header-list{
        width:100%;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        position: relative;
    }

    .header-list ul{
        height: 40px;
        z-index: 1;
        overflow: auto
    }

    .header-list li{
        float: left;
        color: #fff;
        margin-right: 5px;
        margin-left: 5px;
    }

    .header-list .more{
        position: absolute;
        top: 0;
        right: 0;
        z-index: 10;
        width: 40px;
        height: 100%;
        line-height: 40px;
        text-align: center;
    }

    .menu-top{
        
        height: 20px;
        line-height: 20px;
        margin-top:10px;
        padding: 0 5px 0 5px;
    }

    .menu-top .menu-top-left{
        float: left;
        font-weight: bold;
        font-size: 18px;
    }

    .menu-top .menu-top-right{
        float: right;
        font-size: 14px;
    }

    .menu-mid{
        box-sizing: border-box;
        height: 223px;
        width: 100%;
        display: flex;
        padding: 5px;
    }

    .menu-mid ul{
        width: 100%;
        display: flex;
    }

    .menu-mid li{
        float: left;
        flex: 1;
        padding: 5px
    }

    .menu-mid img{
        max-width: 120px;
        max-height: 120px
    }

    .foodname{
        color: #333;
        font-size: 16px;
        margin-top: 2px;
        overflow: hidden;
        font-weight: bold
    }

    .evaluate{
        color: gray;
        font-size: 12px;
        margin-top: 2px
    }

    .price{
        color: #333;
        font-size: 14px;
        margin-top: 2px;
        font-weight: bold
    }
</style>
