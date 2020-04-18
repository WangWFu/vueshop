<template>
    <div>
    <div class="gooditem">
       <img v-lazy="list.imgurl" alt="" class="img">
       <p>{{list.name}}</p>
       <p class="price">{{list.price}}.00</p>
   </div>
    </div>
</template>
<script>

export default {
    name:'detailinfo',
    data(){
        return{
           
        }
    },
    props:{
        list:{
           
        }
    }

}
</script>
<style scoped>
.img{
    width: 100%;
    height: 300px;
    border-radius: 5px;
   padding: 4px;
}
.price{
    color: palevioletred;
}
</style>