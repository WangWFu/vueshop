<template>
  <div id="app">
     <keep-alive exclude="detail">
       <router-view></router-view>
     </keep-alive>
   <maintab></maintab>
  </div>
</template>

<script>
import maintab from 'components/content/maintabbar/maintab'



export default {
  name: 'app',
  components: {
   maintab
  },
}
</script>

<style scoped>
 @import 'assets/css/base.css'
</style>
