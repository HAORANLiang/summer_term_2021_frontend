// appfront/src/api/api.js
import axiosInstance from './index'

const axios = axiosInstance


export const postNub = (first, second) => {return axios.post(`http://101.200.150.87/jian`, {'first': first, 'second': second})}