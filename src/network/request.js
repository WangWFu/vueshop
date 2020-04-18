import axios from 'axios'


export function request(config) {
    const url3 = "http://localhost:3000"
    let configs = {

        baseURL: url3
    };
    const instance = axios.create(configs)

    //拦截器
    //1、请求拦截
    instance.interceptors.request.use(config => {
        // console.log(config);
        return config

    }, err => {
        // console.log(err);

    })

    // //发送真正的网络请求
    return instance(config)

}