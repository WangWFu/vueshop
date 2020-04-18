<template>
  <!-- <swiper>
        <swiperitem v-for="item in imglist" v-bind:key="item.key">
          <img :src="item.banner" alt="" @load="imgLoad">
        </swiperitem>
  </swiper>-->
  <div>
    <van-swipe :autoplay="3000" style="height:260px">
      <van-swipe-item v-for="(item, index) in imglist" :key="index">
        <img v-lazy="item.banner" @load="imgLoad" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
// import {swiper,swiperitem} from 'components/common/swiper'
import { Swipe, SwipeItem } from "vant";
import { Lazyload } from "vant";
export default {
  name: "homeSwiper",
  props: {
    imglist: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isload: false
    };
  },
  components: {
    // swiper,
    // swiperitem
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  methods: {
      //监听图片加载完成
    imgLoad() {
      if (!this.isload) {
        this.$emit("imgLoad");
        this.isload = true;
      }
    }
  }
};
</script>

<style scoped>
img{
  height: 260px;
}
</style>