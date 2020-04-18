<template>
  <div class="cart-list">
    <div class="shop-item">
         <div class="item-selector">
          <van-checkbox @change="itemChange" v-model="cartlist.checked" checked-color="red"/>
        </div>
        <div class="item-img">
          <img :src="cartlist.imgurl" alt="商品图片" />
        </div>
        <div class="item-info">
          <div class="item-title">{{ cartlist.name }}</div>
          <!-- <div class="item-desc">商品描述: {{ item.desc }}</div> -->
          <div class="info-bottom">
            <div class="item-price left">¥{{ cartlist.price }}</div>
            <div class="item-count right">x{{ cartlist.count }}</div>
          </div>
        </div>
    </div>

    <!-- 底部订单栏 -->
    <!-- <van-submit-bar :button-text="`提交订单(${checkedLength})`" :price="totalPrice * 100" @submit="onSubmit">
      <van-checkbox @click="checkedAllClick" class="checked-all" v-model="checkedAll">
        全选
      </van-checkbox>
    </van-submit-bar> -->
    <van-submit-bar :button-text="`提交订单()`" :price="totalPrice * 100"  @submit="onSubmit">
      <van-checkbox @click="checkedAllClick" class="checked-all" v-model="checkedAll" checked-color="red">
        全选
      </van-checkbox>
    </van-submit-bar>
  </div>
</template>


<script>
import { Checkbox,SubmitBar   } from 'vant';

export default {
  name: "cartitem",
  data(){
      return{
          checkedAll:false,
          totalPrice:0
      }
  },
  props:{
    cartlist:{
        type:Object,
        default(){
            return {}
        }
    }
  },
  components: {
       scroll,
       [Checkbox.name]:Checkbox,
       [SubmitBar.name]:SubmitBar
  },
    methods:{
        itemChange(){

        },
        checkedAllClick(){},
        onSubmit(){}
    }
};
</script>


<style  scoped>
.shop-item {
  font-size: 0;
  display: flex;
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid #cccccc;
}

.shop-item:last-child {
  border-bottom: 0;
}

.item-selector {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12%;
}

/* .item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
} */

.item-img {
  padding: 5px;
}

.item-img img {
  display: block;
  width: 80px;
  height: 100px;
  border-radius: 5px;
}

.item-info {
  font-size: 17px;
  position: relative;
  overflow: hidden;
  width: 88%;
  padding: 5px 10px;
  color: #333333;
}

.item-info .item-desc {
  font-size: 14px;
  margin-top: 15px;
  color: #666666;
}
.info-bottom {
  position: absolute;
  right: 10px;
  bottom: 10px;
  left: 10px;
  margin-top: 10px;
}

.info-bottom .item-price {
  color: #ff4500;
}
</style>