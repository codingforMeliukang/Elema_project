<template>
    <div class="search-wrapper">
        <div class="headSearch">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fangdajing"></use>
            </svg>
            <span>搜索饿了么商家、商品名称</span>
        </div>   
    </div>
    
</template>

<script>
export default {
   
};
</script>

<style>
.search-wrapper{
    background-image: linear-gradient(90deg,#0af,#0085ff);
    padding: 8px 14px;
}
.search-wrapper.top{
    position: absolute;
	top: 0;
	left: 0;
}
.headSearch {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 0.96rem;
  height: 9.6vw;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 0.026667rem;
  border-radius: 0.266667vw;
  background: #fff;
  color: #999;
  font-size: 0.373333rem;
}
.headSearch svg {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}
.headSearch span {
  font-size: 14px;
  font-family: simsun;
}
</style>
