import {request} from './request'

export function login(name,password) {
    return request({
        url:'/getuser',
        params:{
            name,
            password
        }
    })
}