import {request} from './request'

export function getDetail(iid) {
    return request({
        url:'/',
        params:{
            iid
        }
    })
}