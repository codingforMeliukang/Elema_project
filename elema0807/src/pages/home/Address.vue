<template>
    <div id="address" class="page subpage">
        <header class="header">
            <div class="arrow-left" @click="backAction()">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIzMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2LjU1MiA1LjYzM0wxNC41MDggMy41OSAyLjI0MyAxNS44NTMgMTQuNTA4IDI4LjQxbDIuMDQ0LTIuMDQzLTEwLjIyLTEwLjUxM3oiLz48L3N2Zz4=">
            </div>
            <div class="my">选择收货地址</div>
        </header>
        <div class="addressBox">
            <div class="city">
                <span>深圳</span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-sanjiao-copy"></use>
                </svg>
            </div>
            <div class="addressInp">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-fangdajing"></use>
                </svg>
                <input type="search" placeholder="请输入地址" class="index-2V7cn_0">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        backAction(){
            this.$router.back();
        }
    }
}
</script>

<style>
.header {
  width: 100%;
  height: 44px;
  background-image: linear-gradient(90deg, #0af, #0085ff);
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
.addressBox{
    display: flex;
    background-color: #fff;
}
.city{
    align-items: center;
    padding-left: 15px;
    display: flex;
}
.city span{
    width: 40px;
    color: #333;
    margin-right: 4px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
}
.addressInp{
    position: relative;
    padding: 10px 15px;
    flex: 1;
}
.addressInp svg{
    position: absolute;
    width: 14px;
    height: 14px;
    left: 21px;
    top: 22px;
}
.index-2V7cn_0 {
    width: 100%;
    line-height: 9px;
    color: #999;
    padding: 9px 18px 9px 25px;
    background: #f2f2f2;
}
</style>
