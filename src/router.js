import VueRouter from 'vue-router'


import homeC from './components/tabbox/home.vue'
import memberC from './components/tabbox/member.vue'
import shopcarC from './components/tabbox/shopcar.vue'
import searchC from './components/tabbox/search.vue'



let router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: homeC },
        { path: '/member', component: memberC },
        { path: '/shopcar', component: shopcarC },
        { path: '/search', component: searchC }
    ],
    linkActiveClass: 'mui-active'
})

export default router