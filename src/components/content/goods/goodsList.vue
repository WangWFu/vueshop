<template>
  <div class="goodlist">
    <goodsListItem v-for="item in goods" :key="item.index" :item="item"></goodsListItem>
  </div>
</template>
 
<script>
import goodsListItem from "components/content/goods/goodsListItem";
export default {
  name: "goodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    goodsListItem
  }
};
</script>
 
<style scoped>
.goodlist{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 4px;
}
</style>