<template>
    <div class="tab-item" @click="routerclick">
        <div v-if="!isactive"><slot name="item-img"></slot></div>
        <div v-else><slot name="item-img-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>
<script>
export default {
    name:'tabitem',
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'deeppink'
        }
    },
    data(){
        return{
            // isactive:true
        }
    },
    computed:{
        isactive(){
            // 判断地址是否激活
            return this.$route.path.indexOf(this.path)!==-1
        },
        activeStyle(){
            return this.isactive?{color:this.activeColor}:{}
        }
    },
    methods:{
        routerclick(){
            this.$router.replace(this.path) 
        }
    }
}
</script>
<style scoped>
.tab-item{
  flex: 1;
  text-align: center;
}
.tab-item img{
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
}

</style>