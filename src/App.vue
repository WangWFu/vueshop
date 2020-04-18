<template>
  <div id="app">
     <keep-alive exclude="detail">
       <router-view></router-view>
     </keep-alive>
   <maintab v-show="tabBarShow"></maintab>
  </div>
</template>

<script>
import maintab from 'components/content/maintabbar/maintab'

import {mapGetters} from 'vuex'

export default {
  name: 'app',
  components: {
   maintab
  },
  computed:{
    ...mapGetters([
      'tabBarShow'
    ])
  }
}
</script>

<style scoped>
 @import 'assets/css/base.css'
</style>
