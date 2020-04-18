<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "tab"
};
</script>
<style scoped>
#tabbar{
  display: flex;
  background: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0px;
  height: 49px;
}

</style>