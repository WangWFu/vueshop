<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
name:'scroll',
props: {
    probeType:{
        type:Number,
        default:0
    }
},
data () {
    return {
        scroll:null
    }
},
mounted () {

      
     this.scroll=new BScroll(this.$refs.wrapper,{
         click:true,
         probeType:this.probeType
     })
     
    // this.$nextTick(() =>{
    //     this.scroll=new BScroll(this.$refs.wrapper,{})
    // })
    //监听滚动的位置
    if(this.probeType ===2 || this.probeType === 3){
     this.scroll.on('scroll',(pos) =>{
       this.$emit('backScroll', pos)
    })
    }
    
    // console.log(this.scroll);
    
},
methods: {
    //返回顶部
    scrollTo(x,y,time=500){
        this.scroll.scrollTo(x,y,time)
    },
    // refresh(){
    //     //只有当this.scroll创建完成后，才会执行this.scroll.refresh()
    //     this.scroll && this.scroll.refresh()
    // },
    // finishPullUp(){
    //     this.scroll && this.scroll.finishPullUp();
    // }
}
}
</script>

<style scoped>

</style>