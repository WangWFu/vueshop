<template>
  <div class="login-bg">
    <van-uploader :after-read="afterRead">
      <div class="user-pic">
        <van-image :src="defaultPic" class="user-pic-img" fit="cover" round />
      </div>
    </van-uploader>
    <div class="user-info" @click="curLogin ? '' : goLogin()">
        <p v-if="curLogin">{{username}}</p>
        <p v-else>登录/注册</p>
        <div class="phone">
            <img src="@/assets/img/phone.png" alt="">
            <p v-if="curLogin">{{phone}}</p>
            <p v-else>暂未绑定手机号</p>
        </div>
        <div class="arrow_right">
            <img src="@/assets/img/arrow_right.png" alt="">
        </div>
    </div>
  </div>
</template>
<script>
import { Uploader } from "vant";
export default {
  name: "login",
  data(){
      return{
          defaultPic:require('@/assets/img/user.png'),
      }
  },
  props:{
      phone:{
          type:String,
          default(){
              return ''
          }
      },
      username:{
          type:String,
          default(){
              return ''
          }
      },
      curLogin:{
          type:Boolean,
          default(){
              return false
          }
      }
  },
  components: {
    [Uploader.name]: Uploader
  },
  methods:{
      goLogin(){
          this.$emit('goLogin')
      },
      afterRead(file){
        //   console.log(file);
          this.defaultPic=file.content
          localStorage.setItem('user-img',file.content)
      }
  },
  activated(){
      //缓存获取头像信息
      let src = localStorage.getItem('user-img');
    //   console.log(src);
      if(src !==null){
          this.defaultPic = src
      }
  }
};
</script>
<style scoped>
.login-bg{
    display: flex;
    align-items: center;
    height: 70px;
    padding-left: 20px;
    background-color:palevioletred
}
.user-pic{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    
    background-color: #fff;
    border-radius: 50%;
}
.user-pic-img{
    display: block;
    width: 50px;
    height: 50px;
}
.user-info{
   margin-left: 20px;
}
.user-info p:first-child{
    margin-left: 16px;
}
.user-info p:last-child{
    margin-left: 4px;
}
.phone{
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #fff;
    margin-top: 12px;
}
.arrow_right{
    position: absolute;
    top: 70px;
    right: 10px;
}
</style>