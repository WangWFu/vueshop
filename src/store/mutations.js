import {ADD_COUNTER,ADD_TO_CART,CLEAR_CART_LIST,SET_CART_LIST} from './type'
import {Toast} from 'vant'

export default{
    setTabBarShow(state,bol){
        state.tabBarShow = bol
    },
    [ADD_COUNTER](state,data){
        data.count++;
        Toast({
            type: "success",
            message: `当前商品数量为${data.count}`,
            // 弹框的时候禁止点击
            forbidClick: true,
            duration: 1500
          });
        localStorage.setItem('cartList',JSON.stringify(state.cartList))
    },
    [ADD_TO_CART](state,data){
        data.checked = false
        state.cartList.push(data)
        Toast({
            type: "success",
            message: `加入购物车成功`,
            // 弹框的时候禁止点击
            forbidClick: true,
            duration: 1500
          });
          localStorage.setItem('cartList',JSON.stringify(state.cartList))
    },
    [CLEAR_CART_LIST](state){
        //判断选中哪些数据，过滤没选中的数据返回一个新数组
        let result = state.cartList.filter(item => item.checked !== true)
        if(result.length ===0){
            localStorage.removeItem('cartList')
            state.cartList = []
        }else{
            state.cartList = result;
            localStorage.setItem('cartList',JSON.stringify(state.cartList))
        }
    },
    //本地缓存
    [SET_CART_LIST](state,data){
        state.cartList =data
    }
}