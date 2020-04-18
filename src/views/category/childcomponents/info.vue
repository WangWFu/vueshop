<template>
  <div class="wrap">
    <!-- <goodlist :goods="goodslist" class="list"/> -->
    <div v-for="(item,index) in goodslist" :key="index" class="info">
      <img v-lazy="item.imgurl" alt class="img" />

      <p class="goodsname">{{item.name}}</p>
    </div>
  </div>
</template>
<script>
import { getgood } from "network/home.js";
export default {
  name: "info",
  data() {
    return {
      goodslist: []
    };
  },
  components: {},
  created() {
    this.getgood();
  },
  methods: {
    getgood() {
      getgood().then(res => {
        console.log(res.data);
        this.goodslist = res.data.productList;
      });
    }
  }
};
</script>
<style scoped>
.wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
}

.img {
  width: 85px;
  border-radius: 5px;
  margin-bottom: 7px;
}
.goodsname {
  width: 85px;
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
/* .img {
  width: 85px;
  border-radius: 5px;
}
.good-info{
    width:85px;
    overflow: hidden;
}
 .goodsname{
white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
} */
/* .good-info {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 4px;
  text-align: center;
  overflow: hidden;
}
.goodsname {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.good-price {
  color: palevioletred;
} */
</style>