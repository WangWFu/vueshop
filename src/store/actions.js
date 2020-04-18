import {ADD_COUNTER,ADD_TO_CART} from './type'

export default{
    setCartData({state,commit}, data){
        let result = state.cartList.find(item =>{
            return item.iid === data.iid
        })
        if(result){
            commit(ADD_COUNTER,result)
        }else{
            data.count =1;
            commit(ADD_TO_CART,data)
        }
    }
}