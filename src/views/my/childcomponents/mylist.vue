<template>
    <div class="list">
        <div class="profile-list-item">
      <van-icon class="profile-list-icon" name="manager" />
      <span>我的消息</span>
    </div>
    <div class="profile-list-item">
      <van-icon class="profile-list-icon" name="point-gift" />
      <span>积分商城</span>
    </div>
    <div class="profile-list-item">
      <van-icon class="profile-list-icon" name="gem" />
      <span>会员卡</span>
    </div>
    <div class="line"></div>
    <div class="profile-list-item">
      <van-icon class="profile-list-icon" name="shopping-cart" />
      <span>我的购物车</span>
    </div>
    <div class="profile-list-item">
      <van-icon class="profile-list-icon" name="good-job" />
      <span>点赞购物APP</span>
    </div>
    </div>
</template>
<script>
import { Icon } from 'vant';
export default {
    name:'mylist',
    components:{
       [Icon.name]:Icon
    }
}
</script>
<style scoped>
.list{
    margin-top:20px;
    border-top: 10px solid #eee;
}
.profile-list-item{
    height:40px;
    line-height: 40px;
    border-bottom: 1px solid #eee;
}
.profile-list-item:last-child{
    border-bottom: none;
}
.profile-list-icon{
    margin-left: 10px;
}
.profile-list-item span{
    padding-left:10px;
}
</style>