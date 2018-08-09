<template>
    <div id="discover" class="page">
         <header class="header">
            <div class="arrow-left">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIzMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2LjU1MiA1LjYzM0wxNC41MDggMy41OSAyLjI0MyAxNS44NTMgMTQuNTA4IDI4LjQxbDIuMDQ0LTIuMDQzLTEwLjIyLTEwLjUxM3oiLz48L3N2Zz4=">
            </div>
            <div class="my">发现</div>
        </header>
        <div class="top-banner">
            <img src="https://fuss10.elemecdn.com/2/9f/cedf0f9959a7e699f81dba18d0aa6gif.gif" >
        </div>
        <div class="parts">
           <a href="javascript:;">
               <div class="content-wrapper">
                   <p class="title" style="color: rgb(255, 153, 0)">金币商城</p>
                   <p class="tips">0元好物在这里</p>
               </div>
               <img loading="" class="icon" src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/">
           </a>
           <a href="javascript:;">
               <div class="content-wrapper">
                   <p class="title" style="color: rgb(27, 169, 225)">推荐有奖</p>
                   <p class="tips">5元现金拿不停</p>
               </div>
               <img loading="" class="icon" src="https://fuss10.elemecdn.com/6/76/8d42eef97ff4c1c2b671085358541jpeg.jpeg?imageMogr/format/webp/">
           </a>
           <a href="javascript:;">
               <div class="content-wrapper">
                   <p class="title" style="color: rgb(237, 102, 96)">周边优惠</p>
                   <p class="tips">领取口碑好券</p>
               </div>
               <img loading="" class="icon" src="https://fuss10.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?imageMogr/format/webp/">
           </a>
        </div>
        <div class="favourable">
            <div class="activity-header">
                <span class="line left"></span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-naozhong"></use>
                </svg>
                限时好礼
                <span class="line right"></span>
            </div>
            <p class="activity-sub-title">金币换豪礼</p>
            <div class="activity-body">
                <a href="javascript:;" class="discover-food">
                    <img src="https://fuss10.elemecdn.com/c/66/89cc6ef54261bbd98b94deeff2546jpeg.jpeg?imageMogr/format/webp/">
                    <div>
                        <p class="food-name ui-ellipsis">3元饿了么红包</p>
                        <div food-info clearfix>
                            <div class="food-price">
                                <span class="price ui-ellipsis">
                                    <span>90金币</span>
                                </span>
                                <del class="original-price ui-ellipsis">¥3</del>
                            </div>
                        </div>
                    </div>
                    <span class="discount">限时优惠</span>
                </a>
                <a href="javascript:;" class="discover-food">
                    <img src="https://fuss10.elemecdn.com/5/78/5c1ca7ceca079926933ca418c9eb7jpeg.jpeg?imageMogr/format/webp/">
                    <div>
                        <p class="food-name ui-ellipsis">扫地机器人</p>
                        <div food-info clearfix>
                            <div class="food-price">
                                <span class="price ui-ellipsis">
                                    <span>9金币</span>
                                </span>
                                <del class="original-price ui-ellipsis">¥99</del>
                            </div>
                        </div>
                    </div>
                    <span class="discount">特价换购</span>
                </a>
                <a href="javascript:;" class="discover-food">
                    <img src="https://fuss10.elemecdn.com/0/d8/de4c1115cad90787fd3a64c897e5djpeg.jpeg?imageMogr/format/webp/">
                    <div>
                        <p class="food-name ui-ellipsis">黑胶晴雨伞</p>
                        <div food-info clearfix>
                            <div class="food-price">
                                <span class="price ui-ellipsis">
                                    <span>9金币</span>
                                </span>
                                <del class="original-price ui-ellipsis">¥109</del>
                            </div>
                        </div>
                    </div>
                    <span class="discount">特价换购</span>
                </a>
            
            </div>
            <p class="activity-more">
                查看更多
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-youjiantou-copy-copy"></use>
                </svg>
            </p>        
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  width: 100%;
  height: 44px;
  background-image: linear-gradient(90deg, #0af, #0085ff);
  position: sticky;
  top: 0px;
  z-index: 10;
}
.my {
  font-size: 18px;
  font-weight: 900;
  line-height: 44px;
  color: #fff;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.arrow-left {
  float: left;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.arrow-left img {
  width: 12px;
}
.parts {
  margin-bottom: 11px;
  background: #fff;
  border-top: 1px solid #eee;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}
.parts a {
  width: 43%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 15px;
  border-bottom: 1px solid #ededed;
}
.parts a .icon {
  width: 45px;
  height: 45px;
}
.parts a:nth-child(3n+1) {
    border-right: 1px solid #ededed;
}
.parts a:first-child {
  position: absolute;
  justify-content: space-between;
  align-items: flex-start;
  align-items: normal;
  height: 132px;
  padding: 23px 11px 6px 16px;
}
.content-wrapper {
  max-width: 82px;
}
.title {
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.parts a:first-child .icon {
  align-self: flex-end;
  width: 75px;
  height: 75px;
}
.parts a:nth-child(2),
.parts a:nth-child(3) {
  margin-left: 50%;
}
.favourable{
    margin-bottom: 11px;
    background: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
}
.activity-header{
    padding-top: 20px;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    color: #333;
}
.line {
    display: inline-block;
    margin: .213333rem .093333rem .173333rem;
    margin: 2.133333vw .933333vw 1.733333vw;
    border: 1px solid #333;
    width: .4rem;
    width: 4vw;
    height: 0;
    position: relative;
}
.line.left:after {
    right: -.066667rem;
    right: -.666667vw;
}
.line:after {
    position: absolute;
    top: -.066667rem;
    top: -.666667vw;
    content: "";
    background: #333;
    height: .133333rem;
    height: 1.333333vw;
    width: .133333rem;
    width: 1.333333vw;
    border-radius: 50%;
}
.line.right:after {
    left: -.066667rem;
    left: -.666667vw;
}
.activity-header svg{
    width: 17px;
    height: 17px;
}
.activity-sub-title {
    font-size: .293333rem;
    color: #999;
    text-align: center;
    padding-bottom: .213333rem;
}
.activity-body{
    padding: .32rem 0 .4rem .4rem;
    padding: 3.2vw 0 4vw 4vw;
    white-space: nowrap;
}
.discover-food {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    width: 2.96rem;
    width: 29.6vw;
    margin-right: .16rem;
    margin-right: 1.6vw;
}
.discover-food img {
    width: 4.32rem;
    width: 43.2vw;
    height: 2.933333rem;
    height: 29.333333vw;
    margin-bottom: .253333rem;
    margin-bottom: 2.533333vw;
    max-width: 100%;
}
.discover-food .food-name {
    font-size: .346667rem;
    color: #333;
    margin-bottom: .133333rem;
    margin-bottom: 1.333333vw;
}
.ui-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.discover-food .food-price {
    height: .64rem;
    height: 6.4vw;
    line-height: .64rem;
    line-height: 6.4vw;
}
.discover-food .price {
    font-size: .346667rem;
    height: .48rem;
    height: 4.8vw;
    line-height: .48rem;
    line-height: 4.8vw;
    color: #ff5339;
    margin-right: .093333rem;
    margin-right: .933333vw;
    max-width: 1.333333rem;
    max-width: 13.333333vw;
    display: inline-block;
    vertical-align: middle;
}
.discover-food .original-price {
    font-size: .293333rem;
    color: #aaa;
    max-width: 1.066667rem;
    max-width: 10.666667vw;
    display: inline-block;
    vertical-align: middle;
}
.discover-food .discount {
    position: absolute;
    top: 0;
    left: 0;
    font-size: .293333rem;
    color: #fff;
    background: #413d3c;
    padding: .066667rem;
    padding: .666667vw;
}
.activity-more {
    font-size: .346667rem;
    color: #999;
    text-align: center;
    padding: .4rem 0 .48rem;
    padding: 4vw 0 4.8vw;
}
.activity-more svg{
    width: 7px;
    height: 10px;
    margin-left: 5px;
    margin-bottom: 2px;
}
</style>
