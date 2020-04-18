<template>
  <div class="side">
  <scorll class="content">
    <van-sidebar v-model="activeKey" >
          <van-sidebar-item title="时尚套装" />
          <van-sidebar-item title="百搭T恤" />
          <van-sidebar-item title="短款外套" />
          <van-sidebar-item title="家具用品" />
          <van-sidebar-item title="男装T恤" />
          <van-sidebar-item title="男鞋" />
          <van-sidebar-item title="连衣裙" />
          <van-sidebar-item title="牛仔裤" />
          <van-sidebar-item title="运动鞋" />
          <van-sidebar-item title="半身裙" />
        </van-sidebar>
   </scorll>
   
 
  </div>
</template>

<script>
import scorll from "components/common/BScroll/bscroll";
import { Sidebar, SidebarItem } from "vant";
export default {
  name: "sidebar",
  data(){
      return{
          activeKey:0
      }
  },
  components: {
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
  scorll
  }
};
</script>
<style scoped>
.side{
  width:100%;
}
.content{
  position: fixed;
  top: 44px;
  right: 0;
  bottom: 49px;
  left: 0;
  overflow: hidden;
  width: 85px;
}
</style>