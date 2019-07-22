import Vue from 'vue'
import Router from 'vue-router'
import Shoplist from './components/Shoplist.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'shoplist',
            component: Shoplist
        },
        {
            path: '/about/:name',
            name: 'about',
            component: About
        }
    ]
})