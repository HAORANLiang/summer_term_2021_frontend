// appfront/src/api/api.js
import axiosInstance from './index'

const axios = axiosInstance

export const getAns = () => {return axios.get(`http://localhost:8000/jian`)}

export const postNub = (first, second) => {return axios.post(`http://localhost:8000/jian`, {'first': first, 'second': second})}