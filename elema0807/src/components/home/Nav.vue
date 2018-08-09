<template>
    <!-- 导航栏 -->
    <div class="nav">
        <!-- 综合排序 -->
        <div class="rank">
            综合排序▼
            <div class="rankAll">
                <li v-for="(item,index) in rankArr" :key='index'></li>
            </div>
        </div>

        <!-- 距离最近 -->
        <div class="distance">
            距离最近
        </div>

        <!-- 品质联盟 -->
        <div class="quality">
            品质联盟
        </div>

        <!-- 筛选 -->
        <div class="filt">
            筛选 ↓
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            rankArr:[
                '综合排序',
                '好评优先',
                '销量最高',
                '起送价最低',
                '配送最快',
                '配送费最低',
                '人均从低到高'
            ]
        }
    }
}
</script>

<style scoped>
    .nav{
        width: 100%;
        height: 40px;
        color: #666;
        font-size: 14px;
        display: flex;
        text-align: center;
        justify-content: space-between;
    }

    .rank{
        flex: 1;
    }

    .distance{
        flex: 1
    }

    .quality{
        flex: 1
    }

    .filt{
        flex: 1
    }




















</style>
