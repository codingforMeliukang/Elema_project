<template>
   <div class="foodlist">
        <div class="section">

            <div class="foodsinfo">
                <div class="foodlogo">
                    <div class="logomain">
                        <img src="//fuss10.elemecdn.com/1/98/c12da153a993422c7e57c16668c0dpng.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/" alt="">
                    </div>
                </div>

                <div class="foodcontent">

                    <section class="foodsamestyle">
                        <h3 class="shopname">王鸡汤(景田店)</h3>
                        <ul class="saveticket">
                            <li>保</li>
                            <li>票</li>
                        </ul>
                    </section>

                    <section class="foodsamestyle mid">
                        <div class="foodevaluate">
                            <div class="star">★★★☆☆</div>
                            <span class="score">4.7</span>
                            <span class="salenum">月售2336单</span>    
                        </div>
                        <div class="dilivery">蜂鸟专送</div>
                    </section>

                    <section class="foodsamestyle">
                        <div class="moneytips">
                            <span>$20起送</span>
                            <span class="mt4">|</span>
                            <span>配送费$4.5</span>
                        </div>
                        <div class="distantime">
                            <span class="distance">2.25km</span>
                            <span class="mt4">|</span>
                            <span>32分钟</span>
                        </div>
                    </section>

                </div>
            </div>

<!--模板下层的活动信息-->

            <div class="activity">
                <section class="activetop foodstype">
                    <span class="fsicon">香锅砂锅</span>
                    <span class="fsicon">品质联盟</span>
                    <span class="popularity">
                        
                        <img class="popimg" src="//fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!20x20r/gravity/Center/crop/20x20/" alt="">
                        <span >口碑人气店</span>
                    </span>

                </section>
                <div></div>
                <section class="activetop">
                    <div class="activitytype">
                        <div>
                            <span>首页</span>
                            <span>新用户下单立减22元</span>  
                        </div>
                        <div>
                            <span>满</span>
                            <span>满22减22，满62减30，满98减39，满128减52，满188减69</span>  
                        </div>
                        
                        <div>
                            <span>满</span>
                            <span>满22减22，满62减30，满98减39，满128减52，满188减69</span>  
                        </div>
                        <div>
                            <span>满</span>
                            <span>满22减22，满62减30，满98减39，满128减52，满188减69</span>  
                        </div>
                    </div>
                    <div class="activitynum">
                        <span>活动</span>
                        <img src="" alt="">
                    </div>

                </section>

            </div>
        </div>
   </div>

</template>

<script>

export default {



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
.activity{
    padding-left: 85px;
    margin-top: 10px;
}
.activetop{
    display: flex;
   
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

}
</style>

