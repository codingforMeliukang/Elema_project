<template>
    <!-- 抢购活动页 -->
    <div class="activity">
        <div class="act-left">
            <h3>品质套餐</h3>
            <div class="act-left-intro">搭配齐全吃得好</div>
            <div class="act-left-now">立即抢购></div>
            <div class="act-left-img">
                <img src="//fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt="">
            </div>
        </div>

        <div class="act-right">
            <h3 class="act-right-h">限量抢购</h3>
            <div class="act-left-intro">超值美味9.9元起</div>
            <div class="act-right-count"><span class="act-right-h">2002</span>人正在抢></div>
            <div class="act-right-img">
                <img src="//fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .activity{
        margin-bottom: 8px;
        padding: 0 10px;
        display: flex;
    }

    .act-left,.act-right{
        flex: 1;
        height: 128px;
        position: relative;
        padding: 12px 0 0 15px;
        background: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
    }
    .act-left{
        margin-right: 3px;
    }

    .activity img{
        width:120px;
        height: 80px;
        position: absolute;
        right: 0;
        bottom: 0;
    }
    .activity h3{
        font-size: 16px;
        font-weight: 900;
    }
    .act-right-h{
        color: red
    }

    .act-left-intro,.act-right-intro{
        font-size: 14px;
        margin-bottom: 5px;
    }

    .act-left-now,.act-right-count{
        font-size: 12px
    }
</style>
