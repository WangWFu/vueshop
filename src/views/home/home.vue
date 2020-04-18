<template>
  <div id="home" class="wrapper">
    <navbar class="nav-home">
      <div slot="center">购物街</div>
    </navbar>
    <tebControl 
    :titles="['流行','精选','新款']" 
    v-show="isShowTab" 
    class="tab" 
    ref="tabcontrol1" 
    @tabclick="tabclick"/>

    <scroll class="content" ref="scroll" :probe-type="3" @backScroll="contentscroll">
      <!-- 轮播图 -->
      <home-swiper :imglist="banners" ref="offsettop" @imgLoad="imgLoad" />
      <!-- 推荐分类 -->
      <recommends :list="recommends" ref="recomoffsetTop"/>
      <!-- 本周流行 -->
      <!-- <feature-views></feature-views> -->
      <!-- tebControl -->
      <tebControl :titles="['流行','精选','新款']" @tabclick="tabclick" ref="tabcontrol2" />
      <!-- 商品展示 -->
      <goodsList :goods="goodslist" />
    </scroll>
    <!-- 回到顶部，监听组件的原生事件必须要用到native修饰符 -->
    <backTop @click.native="backclick" v-show="isshowTop" />
  </div>
</template>
<script>
import navbar from "components/common/navbar/navbar.vue";
import tebControl from "components/content/tabControl/tabControl";
import homeSwiper from "./childComponents/homeSwiper";
import recommends from "./childComponents/recommends";
// import featureViews from './childComponents/featureViews'
import goodsList from "components/content/goods/goodsList";
import backTop from "components/content/BackTop/backtop";
import scroll from "components/common/BScroll/bscroll";

import { getHomeBanner, getgood, getHomeRecommends } from "network/home.js";
export default {
  name: "home",
  components: {
    navbar,
    tebControl,
    homeSwiper,
    recommends,
    // featureViews,
    goodsList,
    backTop,
    scroll
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goodslist: [],

      isshowTop: false,

      tabOffsetTop: 0, //获取的offsetTop值，此处为固定值

      isShowTab: false
    };
  },
  created() {
    this.getHomeBanner();
    this.getgood();
    this.getHomeRecommends();
  },

  methods: {
    // 请求多个数据
    getHomeBanner() {
      getHomeBanner().then(res => {
        // console.log(res);
        this.banners = res.data.bannerList;
        //  this.recommends=res.data.recommend;
      });
    },
    getHomeRecommends() {
      getHomeRecommends().then(res => {
        // console.log(res);
        this.recommends = res.data.recommendsList;
      });
    },
    getgood() {
      getgood().then(res => {
        // console.log(res.data);
        this.goodslist = res.data.productList;
      });
    },

    //回到顶部
    backclick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    //监听滚动的位置
    contentscroll(pos) {
      //1、回到顶部
      this.isshowTop = -pos.y >= 1500;

      //2、tabbar吸顶
      this.isShowTab = -pos.y > this.tabOffsetTop;
      // this.curPos = pos ? -pos.y :0
    },

    //tabbar切换
    tabclick(index) {
      this.$refs.tabcontrol1.currentindex = index;

      this.$refs.tabcontrol2.currentindex = index;
    },

    /**
     * 获取图片加载完成后的offsetTop
     */
    imgLoad() {
      //  console.log(this.$refs.offsettop.$el.offsetTop);
      //   console.log(this.$refs.tabcontrol2.$el.offsetTop);
      //   console.log(this.$refs.recomoffsetTop.$el.offsetTop);
        //获取tab的offsetTop
      this.tabOffsetTop = this.$refs.tabcontrol2.$el.offsetTop;
    }
    
  }
};
</script>
<style  scoped>
.home {
  padding-top: 44px;
  position: relative;
  height: 100vh;
}
.nav-home {
  color: #fff;
  background: var(--color-tint);
}
.tab {
  position: relative;
  z-index: 9;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>