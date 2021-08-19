import axiosInstance from './index'

const axios = axiosInstance

export const postParams = (first,second) => {return axios.post(`http://101.200.150.87/plus`, {'first': first,'second':second})}

