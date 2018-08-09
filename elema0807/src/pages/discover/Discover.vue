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
    font-size: .48rem;
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
</style>
