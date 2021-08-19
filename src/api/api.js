<<<<<<< HEAD
=======
// appfront/src/api/api.js
>>>>>>> origin/zj
import axiosInstance from './index'

const axios = axiosInstance

<<<<<<< HEAD
export const postParams = (first,second) => {return axios.post(`http://101.200.150.87/plus`, {'first': first,'second':second})}

=======

export const postNub = (first, second) => {
    return axios.get(`http://101.200.150.87/jian`, {
        params: {
            first: first,
            second: second
        }
    }
    )
}
>>>>>>> origin/zj
