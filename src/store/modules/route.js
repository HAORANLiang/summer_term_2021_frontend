import vueRouter from '@/router/index'

const state = {
    routes: vueRouter.options.routes.filter(obj => {
        return true
    })
}

const actions = {
    addRoute(context, value) {
        console.log('no-error')
        context.state.routes.push(value)
        context.commit('ADD_ROUTE', value)
    }
}

const mutations = {
    ADD_ROUTE(state, value) {
        vueRouter.addRoute(value)
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
