<template>
<div class="tab-control">
    <div v-for="(item,index) in titles" :key="item.index" class="item"
    :class="{active:index===currentindex}"
    @click="itemclick(index)">
        <span>{{item}}</span>
    </div>
</div>
</template>
 
<script>
export default {
 name: 'tebControl',
 props:{
     titles:{
         type:Array,
         default(){
             return []
         }
     }
 },
 data(){
     return{
currentindex:0
     }  
 },
 methods:{
     itemclick(index){
         this.currentindex=index
         this.$emit('tabclick', index)
     }
 }
}
</script>
 
<style scoped>
 .tab-control{
     display: flex;
     text-align: center;
     height: 40px;
     line-height: 40px;
     font-size: 14px;
     background: #fff;
 }
 .item{
     flex: 1;
 }
 .active{
     color: var(--color-hight-text);
 }
 .active span{
     padding: 5px 0;
     border-bottom: 3px solid var(--color-tint);
 }

</style>