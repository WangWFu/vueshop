<template>
  <div id="detail">
       <childnavbar></childnavbar>
       <detailinfo :list="list"/>
       <detailbottombar @addcart="addCart"/>
    </div>
</template>
 
<script>
import childnavbar from './childcomponents/detialnavbar'
import detailbottombar from './childcomponents/detailBottomBar'
import detailinfo from './childcomponents/detailinfo'

import {getDetail} from "network/detail.js"

export default {
 name: 'detail',
 data(){
     return{
         iid:'',
         list:[]
     }
 },
  components: {
        childnavbar,
        detailbottombar,
        detailinfo
    },
    methods:{
        addCart(){
            const goodslist = {
            iid:this.iid,
            imgurl: this.list.imgurl,
            name : this.list.name,
            price : this.list.price
            }
            console.log(goodslist);
            

            this.$store.dispatch('setCartData',goodslist)
        }
    },
    beforeCreated(){
        //进入详情页隐藏tabbar
        this.$store.commit('setTabBarShow',false)
    },
    // 路由离开的时候恢复tabBar
  beforeRouteLeave(to, from, next) {
    this.$store.commit("setTabBarShow", true);
    next();
  },
    created(){
      //获取id
      this.iid = this.$route.params.id

      //获取对应数据
    getDetail(this.iid).then(res =>{
        // console.log(res.data.productList);
        // console.log(this.iid);
        // console.log(res.data[this.iid-1]);
        this.list = res.data.productList[this.iid-1]
        // let list = res.data.map(item =>{
        //     return {
        //         id:item.id
        //     }
        // })
        // .
        // filter(item =>{
        //     return item.id === this.iid
        // })
        console.log(this.list);
        
    })
  },
}
</script>
 
<style scoped>
 #detail{
     position: relative;
     z-index: 10;
     background-color: #fff;
 }
</style>