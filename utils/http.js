import {
    baseUrl,
    appkey
} from '../config/config'
const Fly = require('../utils/wx')
const fly = new Fly();
fly.interceptors.request.use((config,promise)=>{
    //给所有请求添加自定义header
    config.headers["X-Tag"]="flyio";
    config.headers["appkey"]=appkey;
    return config;
})
fly.config.baseURL= baseUrl
export {
    fly
}