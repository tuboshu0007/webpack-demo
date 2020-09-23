import VueRouter from 'vue-router'


import home from './components/mainmenu/home.vue'
import photo from './components/mainmenu/photo.vue'
import shopcar from './components/mainmenu/shopcar.vue'
import search from './components/mainmenu/search.vue'
import artlist from './components/submenu/artlist.vue'
import artinfo from './components/submenu/artinfo.vue'
import comment from './components/subcomponent/comment.vue'
import photoinfo from './components/subcomponent/bing-photo-info.vue'


let router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: home },
        { path: '/photo', component: photo },
        { path: '/shopcar', component: shopcar },
        { path: '/search', component: search },
        { path: '/home/artlist', component: artlist },
        { path: '/home/artlist/artinfo/:id', component: artinfo },
        { path: '/comment', component: comment },
        { path: '/photo/info', component: photoinfo, name: 'photoInfo' }
    ],
    linkActiveClass: 'mui-active'
})

export default router