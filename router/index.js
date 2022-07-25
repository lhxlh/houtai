import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import('../views'),
        redirect: 'home',
        children: [
            {
                path: 'user',
                name: 'user',
                component: () => import('../views/User'),
            },
            {
                path: 'mall',
                name: 'mall',
                component: () => import('../views/Mall'),
            },
            {
                path: 'home',
                name: 'home',
                component: () => import('../views/Home'),
            },
            {
                path: 'page1',
                name: 'page1',
                component: () => import('../views/other/pgOne.vue'),
            },
            {
                path: 'page2',
                name: 'page2',
                component: () => import('../views/other/pgTwo.vue'),
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login'),
    }
]

let router = new VueRouter({
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    store.commit('getToken')
    const token = store.state.cookie.token
    if (!token && to.name !== 'login') {
        next({ name: 'login' })
    } else if (token && to.name === 'login') {
        next({ name: 'home' })
    } else {
        next()
    }
})

export default router