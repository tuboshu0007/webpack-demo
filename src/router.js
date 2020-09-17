import VueRouter from 'vue-router'


import home from './components/mainmenu/home.vue'
import member from './components/mainmenu/member.vue'
import shopcar from './components/mainmenu/shopcar.vue'
import search from './components/mainmenu/search.vue'
import artlist from './components/submenu/artlist.vue'
import artinfo from './components/submenu/artinfo.vue'
import comment from './components/subcomponent/comment.vue'


let router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: home },
        { path: '/member', component: member },
        { path: '/shopcar', component: shopcar },
        { path: '/search', component: search },
        { path: '/home/artlist', component: artlist },
        { path: '/home/artlist/artinfo/:id', component: artinfo },
        { path: '/comment', component: comment }
    ],
    linkActiveClass: 'mui-active'
})

export default router