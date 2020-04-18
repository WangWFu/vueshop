<template>
    <div>
        <navbar class="nav-bar">
            <div slot="center">我的</div>
        </navbar>
        <login @goLogin="goLogin" :phone="phone" :username="username" :cur-login="isLogin"/>
        <mymoney/>
        <mylist></mylist>
    </div>
</template>
<script>
import navbar from "components/common/navbar/navbar";
import mylist from './childcomponents/mylist'
import login from './childcomponents/login'
import mymoney from './childcomponents/mymoney'

export default {
    name:'my',
    data(){
        return{
            isLogin:false,
            phone:'',
            username:''
        }
    },
    components:{
         navbar,
         mylist,
         login,
         mymoney
    },
    methods:{
        goLogin(){
            this.$router.push("/login")
        }
    },
    activated(){
        let list=JSON.parse(localStorage.getItem('userList'));
        if(list!==null){
            this.isLogin = true;
            this.username = list[0].name;
            this.phone = list[0].phone
        }
        
    },
}
</script>
<style  scoped>
.nav-bar{
    background-color: var(--color-tint);
    color: #fff;
}
</style>