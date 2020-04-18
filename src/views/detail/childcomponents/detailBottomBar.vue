<template>
  <div class="bottom">
    <van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
  <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
  <van-goods-action-button type="warning" text="加入购物车" @click="addToCart" />
  <van-goods-action-button type="danger" text="立即购买" @click="buyClick" />
</van-goods-action>
  </div>
</template>
<script>
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";
export default {
  name: "detailbottombar",
  components: {
    [GoodsAction.name]:GoodsAction,
    [GoodsActionIcon.name]:GoodsActionIcon,
    [GoodsActionButton.name]:GoodsActionButton
  },
  methods:{
      onClickIcon(){
          console.log('1111');
          
      },
      addToCart(){
          console.log('加入购物车');
          this.$emit('addcart')
      },
      buyClick(){
          console.log('立即购买');
          
      }

  }
};
</script>
<style scoped>

</style>