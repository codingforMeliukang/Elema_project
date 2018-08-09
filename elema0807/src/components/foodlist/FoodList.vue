<template>
   <div class="foodlist">
        <div class="section">
            <div class="foodsinfo">
                <div class="foodlogo">
                    <div class="logomain">
                        <img :src="mainresdata.image_path|formatimg" alt="">
                    </div>
                </div>

                <div class="foodcontent">

                    <section class="foodsamestyle">
                        <h3 class="shopname">{{mainresdata.name}}</h3>
                        <ul class="saveticket">
                            <li v-for="(item,index) in mainresdata.supports" :key="index">
                                <span v-if="item.icon_name">{{item.icon_name}}</span>
                            </li>

                    
                        </ul>
                    </section>

                    <section class="foodsamestyle mid">
                        <div class="foodevaluate">
                            <div class="star">★★★☆☆</div>
                            <span class="score">{{mainresdata.rating}}</span>
                            <span class="salenum">月售{{mainresdata.recent_order_num}}单</span>    
                        </div>
                        <div class="dilivery" v-if="mainresdata.delivery_mode">蜂鸟专送</div>
                    </section>

                    <section class="foodsamestyle">
                        <div class="moneytips">
                            <span>¥{{mainresdata.float_minimum_order_amount}}起送</span>
                            <span class="mt4">|</span>
                            <span>配送费¥{{mainresdata.float_delivery_fee}}</span>
                        </div>
                        <div class="distantime">
                            <span class="distance">{{(mainresdata.distance/1000).toFixed(2)}}km</span>
                            <span class="mt4">|</span>
                            <span>{{mainresdata.order_lead_time}}分钟</span>
                        </div>
                    </section>

                </div>
            </div>

<!--模板下层的活动信息-->

            <div class="foodactivity">
                <section class="activetop foodstype">
                    <span class="fsicon">{{mainresdata.flavors[0].name}}</span>
                    <span class="fsicon">品质联盟</span>
                    <span class="popularity">
                        
                        <img class="popimg" src="//fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!20x20r/gravity/Center/crop/20x20/" alt="">
                        <span >口碑人气店</span>
                    </span>

                </section>
                <div class="space"></div>
                <section class="activetop">
                    <div class="activitytype">

                        <div v-for="(item,index) in mainresdata.activities" :key="index" v-if="index<activitynum">
                            <span class="actop" :style="{ background:'#'+item.icon_color }">{{item.icon_name}}</span>
                            <span>{{item.description}}</span>  
                        </div>
                    </div>

                    <div class="activitynum" v-if="mainresdata.activities.length>0" @click="showActy()">
                        <span >{{mainresdata.activities.length}}个活动</span>
                        <span>▼</span>
                
                    </div>

                </section>

            </div>
        </div>
   </div>

</template>

<script>

export default {
    props:{
        resdata:Object,
    },
    data(){
        return{
            mainresdata:this.resdata.restaurant,
            activitynum:2,
        }
    },
    methods:{
        showActy(){
            if(this.activitynum==2){
                this.activitynum=this.mainresdata.activities.length+1
            }
            else if(this.activitynum==this.mainresdata.activities.length+1){
                this.activitynum=2
            }

            this.$center.$emit('refreshDom')
            console.log(this.$center)
         
        }
    },
    created(){
   
    }

}
</script>

<style scoped>
  
.section{
    position: relative;
    padding: 15px 0px;
    border-bottom: 1px solid #eee;
    background: #ffffff;
    color: #666;
    font-size: 12px;

}
.foodsinfo{
    padding: 0 10px;
    display: flex;
    align-items: stretch;
    -webkit-box-align: stretch;

}
.foodlogo{
   position: relative;
   flex: none;
   -webkit-box-flex: 0;

}
.logomain{
    height: 65px;
    width: 65px;
}
.logomain img{
    width: 100%;
}
.foodcontent{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
    overflow: hidden;
    padding-left: 10px;
    -webkit-box-pack: justify;
}
.foodsamestyle{
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    color: #666;

}
.shopname{
    color: #333;
    font-weight: 700;
    font-size: 16px;
    display: flex;
}
.saveticket{
    margin-left: 10px;
    display: flex;
}
.saveticket>li{
    position: relative;
    height: 13px;
    width: 13px;
    margin-left: 3px;
    border: 1px solid #ddd;
    font-size: 10px;
    line-height: 13px;
    border-radius: 2px;
}
.foodevaluate{
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
}
.mid{
    height: 14.5px;
}
.star{
    color: #666;
    margin-right: 4px;
    position: relative;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
}
.score{
    margin-right: 4px;
}
.dilivery{
    display: flex;
    align-items: center;
    padding-left:0 4px;
    overflow: hidden;
   white-space: nowrap;
    background: #0098ff;
    color: #ffffff;
    text-align: center;
   
}
.distantime{
    color: #ddd;
}
.mt4{
    margin:0 2px;
    color: #ddd;
}
.foodactivity{
    padding-left: 85px;
    margin-top: 10px;
    flex-direction: column;
    display: flex;
}
.activetop{
    display: flex;
    overflow: hidden;
    
}
.foodstype{
    color: rgb(102, 102, 102);
   
}
.foodstype .fsicon{
    border:1px solid #ddd;
    border-color: rgb(221, 221, 221);
    margin: 0px 4px;
}
.popularity{
    color: #e8470b;
    margin-left: 2px;
    display: flex;
}
.popimg{
    width: 10px;
    height: 10px;
    margin: 3px 4px 0px 4px;
    position: relative;

}
.space{
    height: 13.5px;
}
.activitytype{
    margin-right: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    flex: 1;
}
.activitytype div{
    margin-right: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
     overflow: hidden;
    width: 100%;
    display: flex;
    margin: 4px 0px;
}
.activitytype div span:nth-child(2){
    margin-right: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    flex: 1;
    margin-left: 4px;
}
.actop{
    border-radius: 3px;
    padding: 0 2px;
    color: #ffffff; 
}
.reduce{
    background-color: rgb(240, 115, 115);;
    border-radius: 3px;
    padding: 0 2px;
    color: #ffffff; 
   
}
.activitynum{
    margin-right: 4px;
}
</style>

