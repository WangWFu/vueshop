<template>
  <div id="detail">
    <childnavbar></childnavbar>
    <detailinfo :list="list" />
    <detailbottombar @addcart="addCart" />
  </div>
</template>
 
<script>
import childnavbar from "./childcomponents/detialnavbar";
import detailbottombar from "./childcomponents/detailBottomBar";
import detailinfo from "./childcomponents/detailinfo";

import { getDetail } from "network/detail.js";
import { Toast } from "vant";
export default {
  name: "detail",
  data() {
    return {
      iid: "",
      list: [],
      isLogin: false
    };
  },
  components: {
    childnavbar,
    detailbottombar,
    detailinfo,
    [Toast.name]: Toast
  },
  methods: {
    addCart() {
      const goodslist = {
        iid: this.iid,
        imgurl: this.list.imgurl,
        name: this.list.name,
        price: this.list.price
      };
      console.log(goodslist);
      if (this.isLogin) {
        this.$store.dispatch("setCartData", goodslist);
        Toast("添加购物车成功");
      } else {
        Toast("你还未登录！");
      }
    }
  },
  created() {
    //获取id
    this.iid = this.$route.params.id;

    //获取对应数据
    getDetail(this.iid).then(res => {
      this.list = res.data.productList[this.iid - 1];
    });
     //从缓存获取登录状态
    let login=JSON.parse(localStorage.getItem('userList'));
    if(login!=null){
      this.isLogin = true
    }
  }
};
</script>
 
<style scoped>
#detail {
  position: relative;
  z-index: 10;
  background-color: #fff;
}
</style>