<template>
  <div class="wrap">
    <navbar class="nav-bar">
      <div slot="center">分类</div>
    </navbar>
     <sidebar class="sidebar"/>
    <scorll class="content">
        <info class="info" />
    </scorll>
  </div>
</template>
<script>
import navbar from "components/common/navbar/navbar";
import scorll from "components/common/BScroll/bscroll";
import sidebar from "./childcomponents/sideBar";
import info from "./childcomponents/info";
export default {
  name: "category",
  components: {
    sidebar,
    scorll,
    navbar,
    info
  }
};
</script>
<style  scoped>
.wrap{
  position: relative;
  height: 100vh;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 85px;
  right: 0;
  overflow: hidden;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}

</style>