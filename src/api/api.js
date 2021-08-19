import axiosInstance from './index'

const service = axiosInstance

export function getPlusResult(data) {
    return service({
        url: '/plus',
        method: 'GET',
        data,
    })
}

export function getJianResult(data) {
    return service({
        url: '/jian',
        method: 'GET',
        data,
    })
}

export function getMutiplyResult(data) {
    return service({
        url: '/mutiply',
        method: 'GET',
        data,
    })
}

export function getDivisionResult(data) {
    return service({
        url: '/division',
        method: 'GET',
        data,
    })
}
