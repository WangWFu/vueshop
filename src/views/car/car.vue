<template>
    <div id="car">
        <navbar class="nav-bar">
            <div slot="center">购物车({{cartListlength}})</div>
        </navbar>
        <!-- <h2>{{$store.state.cartList}}</h2> -->
        <cartinfo/>
    </div>
</template>
<script>
import navbar from "components/common/navbar/navbar";
import cartinfo from './childcomponents/cartinfo';


import {mapGetters} from 'vuex'

export default {
    name:'car',
    components:{
        navbar,
        cartinfo,
       
    },
    computed:{
        ...mapGetters([
          'cartListlength'
        ])
    }
}
</script>
<style  scoped>
#car{
    width: 100%;
}
.nav-bar{
    background-color: var(--color-tint);
    color: #fff;
}
</style>