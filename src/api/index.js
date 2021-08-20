import Vue from 'vue'
import Axios from 'axios'

// 标识是否使用本地接口还是服务器接口
let BUILD = false

const service = Axios.create({
    // withCredentials: true,       不能配置，服务器设置了cors
    baseURL: BUILD ? "http://localhost:8000" : 'http://101.200.150.87:8000'
})

// 通过拦截器处理csrf问题，这里的正则和匹配下标可能需要根据实际情况小改动
service.interceptors.request.use((config) => {
    config.headers['X-Requested-With'] = 'XMLHttpRequest'
    const regex = /.*csrftoken=([^;.]*).*$/
    config.headers['X-CSRFToken'] = document.cookie.match(regex) === null ? null : document.cookie.match(regex)[1]
    return config
})

service.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error)
    }
)

Vue.prototype.axios = service

export default service
