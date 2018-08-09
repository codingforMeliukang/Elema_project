<template>
<div class="page" ref="page">
    <div class="page-wrap">

        <slot/>

    </div>
</div>
</template>

<script>
export default {
    props: {
        onScroll: Function //监听是个函数，此时是个属性，可以用this.访问
    },
    methods: {
        refreshDOM(){
            this.scroll.refresh();           //更新 this.scroll
        }
    },
    mounted(){
        //创建滚动视图，让页面可以滚动
        let scroll = new IScroll(this.$refs.page, {
            //判断外部是否需要监听正在滚动的位置，监听
            probeType: this.onScroll?3:0
        });
        this.scroll = scroll;

        scroll.on('beforeScrollStart', ()=>{
            scroll.refresh();
        })
        
        scroll.on('scroll', ()=>{
            let disY = scroll.y-scroll.maxScrollY;
            this.onScroll(disY); //传值给this.onScroll，相当于给父组件挂载的函数传值
        })

        
    }

}
</script>

<style scoped>
.page{
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0;
  bottom: 49;
  background: #ebebeb;
  overflow: hidden;
}
</style>
