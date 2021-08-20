
import service from './index'

export const postNub = (first, second) => {
    // console.log('@', first, second)
    return service.get(`/jian`, {
        params: {
            first: first,
            second: second
        }
    })
}
