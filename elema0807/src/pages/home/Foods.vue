<template>
    <div id="warp">
        <div class="header">
            <div class="header-top">
                <h1>美食</h1>
            </div>
            <div class="header-list">
                <ul>
                    <li v-for="(item,index) in headerList" :key='index'>{{headerList[index]}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import getHomeTitleList from '../../services/homedata.js'
export default {
    data(){
        return{
            headerList:['全部','简餐便当','小吃炸串','面食粥点']
        }
    },
    mounted(){
        this.$center.$on('idData',(data)=>{
            console.log('------')
            console.log(data)
            console.log('------')
        })
        // getHomeTitleList(id).then(result=>{
        //     console.log(result)
        // })
    }
}
</script>

<style>

</style>
