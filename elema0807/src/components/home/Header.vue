<template>
    <div class="headTop">
        <div class="locationAddress">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-dingwei"></use>
            </svg>
            <span class="address">禧福阁深圳西部硅谷</span>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sanjiao"></use>
            </svg>
        </div> 
    </div>
</template>

<script>
export default {};
</script>

<style>
/* .head {
  height: 85px;
  background: #0085ff;
  padding: 10px 14px 0 14px;
} */

.headTop {
  background-image: linear-gradient(90deg, #0af, #0085ff);
  color: #fff;
  padding: 10px 14px 0 14px;
  height: 35px;
  line-height: 35px;
}
.locationAddress {
  width: 60%;
  font-weight: 700;
  display: inline-block;
  display: flex;
  align-items: center;
}
.locationAddress svg:nth-child(1) {
  width: 20px;
  height: 22px;
}
.address {
  font-size: 16px;
  max-width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 900;
}
</style>
