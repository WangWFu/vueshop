import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex);
const state ={
    //购物车数据
    cartList:[]
}
//创建对象
const store=new Vuex.Store({
    state,
    mutations,
    actions,
    getters
  })
export default store