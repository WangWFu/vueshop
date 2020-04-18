import {request} from './request'

// 模拟数据
// export function getData(){
//     return request({
//         url:'http://mockjs.com/api'
//     })
// }
// 真实数据
export function getHomeBanner() {
    return request({
      // url: "/banner"
      url: "/getbanner"
    });
  }
  
  export function getHomeRecommends() {
    return request({
      // url: "/recommends"
      url:'/getrecommends'
    });
  }

export function getgood(){
  return request({
      url:'/',
  })
}