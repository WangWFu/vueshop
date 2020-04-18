<template>
  <div>
    <navbar class="nav-bar">
      <div slot="left" @click="backclick">
        <img src="@/assets/img/back.png" alt class="back_icon" />
      </div>
      <div slot="center">登录</div>
    </navbar>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
    <p class="register" @click="goRegister">未注册，注册一下</p>
  </div>
</template>
<script>
import { Form, Field, Button, Notify } from "vant";

import navbar from "components/common/navbar/navbar";

import {login} from 'network/login.js'

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      userList:[]
    };
  },
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button,
    [Notify.name]: Notify,
    navbar
  },
  methods: {
    
    onSubmit() {
      console.log(this.username);
      console.log(this.password);
      // let username = this.userList.filter(item =>{
      //   return item.name ===this.username
      // })
      // console.log(username);
       login(this.username,this.password).then(res => {
        console.log(res.data.userList);
        this.userList = res.data.userList
        if(this.userList.length){
          // localStorage.setItem(this.userList)
         localStorage.setItem('userList',JSON.stringify(this.userList))
         this.$router.push('/my')
        }else{
          this.$notify('用户名或密码错误')
        }
      });
    
    },
    goRegister() {
      this.$router.push("/register");
    },
      backclick() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.register {
  font-size: 14px;
  color: royalblue;
  margin-left: 180px;
}
.back_icon {
  width: 20px;
  height: 20px;
  margin-top: 12px;
}
</style>