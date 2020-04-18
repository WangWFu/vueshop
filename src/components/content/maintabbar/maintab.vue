<template>
  <tab>
    <tabitem path="/home" activeColor="green">
      <img slot="item-img" src="@/assets/img/index.png" alt />
      <img slot="item-img-active" src="@/assets/img/indexsel.png" alt />
      <div slot="item-text">首页</div>
    </tabitem>
    <tabitem path="/category">
      <img slot="item-img" src="@/assets/img/categeory.png" alt />
      <img slot="item-img-active" src="@/assets/img/categeorysel.png" alt />
      <div slot="item-text">分类</div>
    </tabitem>
    <tabitem path="/car">
      <img slot="item-img" src="@/assets/img/shopcar.png" alt />
      <img slot="item-img-active" src="@/assets/img/shopcarsel.png" alt />
      <div slot="item-text">购物车</div>
    </tabitem>
    <tabitem path="/my">
      <img slot="item-img" src="@/assets/img/mine.png" alt />
      <img slot="item-img-active" src="@/assets/img/minesel.png" alt />
      <div slot="item-text">我的</div>
    </tabitem>
  </tab>
</template>

<script>
import tab from "components/common/tabbar/tab";
import tabitem from "components/common/tabbar/tab-item";
export default {
  name: "maintab",
  components: {
    tab,
    tabitem
  }
};
</script>

<style>
</style>