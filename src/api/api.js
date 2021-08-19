// appfront/src/api/api.js
import axiosInstance from './index'

const axios = axiosInstance


export const postNub = (first, second) => {
    return axios.get(`http://101.200.150.87/jian`, {
        params: {
            first: first,
            second: second
        }
    }
    )
}