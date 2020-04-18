<template>
  <div>
    <navbar class="nav-bar">
      <div slot="left" @click="backclick">
        <img src="@/assets/img/back.png" alt class="back_icon" />
      </div>
      <div slot="center">注册</div>
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
      <van-field
        v-model="tel"
        type="tel"
        label="手机号"
        placeholder="输入手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">注册</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import navbar from "components/common/navbar/navbar";

import { Form, Field, Button ,Notify} from "vant";
import {register,getusername} from 'network/register'
export default {
  name: "register",
  data() {
    return {
      username: "",
      password: "",
      tel: "",
      sms:''
    };
  },
  components: {
    navbar,
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button,
    [Notify.name]: Notify,
    navbar
  },
  methods: {
    onSubmit() {
      //查询用户名是否被使用
      getusername(this.username).then(res=>{
      console.log(res);
      console.log(res.data.username.length);
      if(res.data.username.length===0){
          register(this.username,this.password,this.tel).then(res=>{
          console.log(res.status);
          if(res.status===200){
            this.$notify({ type: 'success', message: '注册成功，快去登录吧'})
            setTimeout(()=>{
                this.$router.back()
            },3000)
           
          }else{
             this.$notify('注册失败')
          }
      })
      }else{
        this.$notify({ type: 'success', message: '用户名已被使用'})
      }
      })
    },
    backclick() {
      this.$router.back();
    }
  }
};
</script>
<style  scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.back_icon {
  width: 20px;
  height: 20px;
  margin-top: 12px;
}
</style>