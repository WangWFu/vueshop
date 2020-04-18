import {request} from './request'

export function register(name,password,phone) {
    return request({
        url:'/register',
        params:{
            name,
            password,
            phone
        }
    })
}
export function getusername(name) {
    return request({
        url:'/getusername',
        params:{
            name
        }
    })
}