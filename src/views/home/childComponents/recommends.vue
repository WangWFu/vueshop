<template>
  <div class="recommends">
    <van-grid :column-num="3">
      <van-grid-item v-for="item in list" :key="item.key">
        <van-image :src="item.iconurl" />
        <span>{{item.name}}</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>
 
<script>
import { Grid, GridItem, Image } from "vant";
export default {
  name: "recommends",
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  }
  //  methods: {
  //      rimgLoad(){
  //          this.$emit('rimgLoad')
  //      }
  //  }
};
</script>

<style scoped>
.recommends{
  height: 280px;
}
/* .recommends{
       display: flex;
       text-align: center;
       padding: 10px 0 20px;
       border-bottom: 7px solid #eee;
   }

   .item{
       flex: 1;
   }
   .item img{
       width: 70px;
       height: 70px;
       border-radius: 50%;
   } */
</style>