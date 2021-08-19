import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const constRoutes = [
    {
        path: '/home',
        component: () => import('@/views/home/index'),
        meta: {
            title: 'HOME'
        }
    },
    {
        path: '/about',
        component: () => import('@/views/about/index'),
        meta: {
            title: 'ABOUT'
        }
    },
    {
        path: '/login',
        component: () => import('@/views/login/index'),
        meta: {
            title: 'LOGIN'
        }
    },
    {
        path: '/unit',
        component: () => import('@/views/unit/index'),
        meta: {
            title: 'UNIT'
        }
    },
    {
        path: '/multiply',
        component: () => import('@/views/Multiply'),
        meta: {
            title: 'Multiply'
        }
    },
    {
        path: '/division',
        component: () => import('@/views/division/index'),
        meta: {
            title: 'DIVISION',
        }
    },
    {
        path: '/jian',
        component: () => import('@/views/jian'),
        meta: {
            title: 'JIAN',
        }
    },
    {
        path: '/plus',
        component: () => import('@/views/plus'),
        meta: {
            title: 'PLUS',
        }
    }
]

let vueRouter = new VueRouter({
    routes: constRoutes,
})

export default vueRouter
