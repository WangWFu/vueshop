<template>
    <div class="info">
        <div class="item-info">
            <p>{{moneynum}}.00元</p>
            <span>我的余额</span>
        </div>
        <div class="item-info">
            <p>{{bnum}}个</p>
            <span>我的优惠</span>
        </div>
        <div class="item-info">
            <p>{{gnum}}分</p>
            <span>我的积分</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'mymoney',
    data(){
        return{
            moneynum:0,
            bnum:0,
            gnum:0
        }
    },
    methods: {
        
    }
}
</script>
<style scoped>
.info{
    display: flex;
}
.item-info{
    display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
    flex: 1;
    height: 70px;
    background-color: #fff;
}
.item-info:nth-of-type(1),.item-info:nth-of-type(2){
    border-right: 1px solid #eee;
}
.item-info span{
    font-size: 12px;
    padding: 5px;
}
</style>