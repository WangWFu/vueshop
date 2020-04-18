<template>
  <div class="cart-list">
    <scroll class="content">
      <!-- <cartitem v-for="(item,index) in cartList" :cartlist="item" :key="index">
      
      </cartitem> -->
        <div class="shop-item" v-for="(item,index) in cartList" :key="index">
          <div class="item-selector">
            <van-checkbox @change="itemChange" v-model="item.checked" checked-color="red" />
          </div>
          <div class="item-img">
            <img :src="item.imgurl" alt="商品图片" />
          </div>
          <div class="item-info">
            <div class="item-title">{{ item.name }}</div>
            <!-- <div class="item-desc">商品描述: {{ item.desc }}</div> -->
            <div class="info-bottom">
              <div class="item-price left">¥{{ item.price }}</div>
              <div class="item-count right">x{{ item.count }}</div>
            </div>
          </div>
        </div>
    </scroll>
    <van-submit-bar :button-text="`提交订单(${checkedlength})`" :price="totalPrice *100"  @submit="onSubmit">
      <van-checkbox @click="checkedAllClick" class="checked-all" v-model="checkedAll" checked-color="red">
        全选
      </van-checkbox>
    </van-submit-bar>
  </div>
</template>


<script>
import scroll from "components/common/BScroll/bscroll";
// import cartitem from "./cartitem";
import { Checkbox,SubmitBar   } from 'vant';
import { mapGetters,mapMutations } from "vuex";
import { Dialog } from 'vant';
export default {
  name: "cartinfo",
   data(){
      return{
          checkedAll:false,
      }
  },
  
  components: {
    scroll,
     [Checkbox.name]:Checkbox,
    [SubmitBar.name]:SubmitBar,
    Dialog
    // cartitem
    
  },
  computed: {
    ...mapGetters(["cartList",]),
    totalPrice(){
       return this.cartList.filter(item =>{
         return item.checked === true
       }).reduce((pre, item) =>{
         return pre + item.price * item.count
       },0)
     },
     checkedlength(){
       return this.cartList.filter(item =>{
         return item.checked ===true
       }).length
     }
  },
   methods:{
     ...mapMutations([
       'clearCartList',
       'setCartList'
     ]),
     //反选
        itemChange(){
          let result = this.cartList.filter(item => item.checked === true)
          
          this.checkedAll = result.length > 0 && result.length === this.cartList.length
        },
        //全选
        checkedAllClick(){
          this.cartList.forEach(item =>  item.checked = !this.checkedAll);
        },
        //提交
        onSubmit(){
          if(this.checkedlength === 0){
            this.$toast({
              type: "fail",
          message: `您还没有选中商品哦`,
          forbidClick: true,
          duration: 1500
            })
          }else{
            Dialog.confirm({
              title:"温馨提示",
              message: "您确定要提交订单吗?"
            })
            .then(() => {
              this.$toast({
              type: "success",
              message: `提交 ${this.checkedlength} 条数据成功`,
              forbidClick: true,
              duration: 1500
            })
            //提交清空购物车
            setTimeout(()=>{
              this.clearCartList();
              this.checkedAll = false
            },1500)
          })
          .catch(()=>{
            return false
          })
        }
    }
   },
   created(){
    let list = JSON.parse(localStorage.getItem('cartList')) || []
    if(list){
      this.setCartList(list)
    }
  },
}
</script>


<style  scoped>
/* .cart-list{
    height: calc(100% - 44px -49px);
} */
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}

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

/deep/ .van-submit-bar {
  bottom: 49px;
  border-top: 1px solid #cccccc;
}

/deep/ .van-submit-bar__text {
  text-align: center;
}
</style>