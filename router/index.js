import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views'
import User from '../views/User'
import Mall from '../views/Mall'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'main',
        component: Main,
        children: [
            {
                path: 'user',
                name: 'user',
                component: User
            },
            {
                path: 'mall',
                name: 'mall',
                component: Mall
            },
            {
                path: 'home',
                name: 'home',
                component: Home
            },
        ]
    },
]

export default new VueRouter({
    routes,
    mode: 'history'
})