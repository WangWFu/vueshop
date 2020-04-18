<template>
  <div>
    <navbar>
      <div slot="left" @click="backclick">
        <img src="@/assets/img/back.png" alt class="back_icon"/>
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item,index) in title"
          class="title-item"
          @click="titleclick(index)"
          :class="{active:currendindex===index}"
          :key="index"
        >{{item}}</div>
      </div>
    </navbar>
  
  </div>
</template>
 
<script>
import navbar from "components/common/navbar/navbar";



export default {
  name: "childnavbar",
  components: {
    navbar
  },
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currendindex: 0,
     
    };
  },
  
  methods: {
    titleclick(index) {
      this.currendindex = index;
    },
    backclick() {
      this.$router.back();
    }
  }
};
</script>
 
<style scoped>
.title {
  display: flex;
}
/* .title::before{
     position: absolute;
     top: 12px;
     left: 24px;
     content: '';
     width: 15px;
     height: 15px;
     border-top:1px solid transparent;
     border-left:1px solid ;
     border-bottom:1px solid ;
     border-right:1px solid transparent;
     transform: rotate(45deg)
 } */
.back_icon {
  width: 20px;
  height: 20px;
  margin-top: 12px;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-hight-text);
}

</style>