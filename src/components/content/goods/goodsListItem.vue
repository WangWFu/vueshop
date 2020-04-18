<template>
  <div @click="itemclick" class="wrap">
    <img v-lazy="item.imgurl" alt class="img" />
    <div class="good-info">
      <p class="goodsname">{{item.name}}</p>
      <p class="good-price">{{item.price}}.00</p>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "goodsListItem",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    itemclick() {
      //  console.log('---');
      this.$router.push("/detail/" + this.item.id);
    }
  }
};
</script>
 
<style scoped>
.wrap{
    width: 48%;
    padding-bottom: 40px;
    position: relative;
}
.img {
  width: 100%;
  border-radius: 5px;
}
.good-info{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 4px;
    text-align: center;
    overflow: hidden;
}
.goodsname{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.good-price{
    color: palevioletred;
}

</style>