import axiosInstance from './index'

const axios = axiosInstance

export const getresult = (first,second) => {return axios.get(`http://101.200.150.87/plus`)}

