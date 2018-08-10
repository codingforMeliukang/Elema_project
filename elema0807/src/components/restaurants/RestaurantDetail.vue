<template>
    <div class="page">
        <h1>这是餐馆详情</h1>
    </div>
</template>

<script>
import {getRestaurantDetailData} from './../../services/homedata.js';
import tm from './../../tmp.js';
export default {
    data(){
        return{
          HomePassResValue:{},
          ThisPageResValue:{}
        }
    },
    created(){
        getRestaurantDetailData(this.$route.params.id).then(result=>{
            this.ThisPageResValue=result;
            console.log(this.ThisPageResValue)
        })
        this.HomePassResValue=tm.getResItem()
        console.log(this.HomePassResValue)
    }
    
}
</script>

<style>
.page{
    z-index: 5;
}
</style>










