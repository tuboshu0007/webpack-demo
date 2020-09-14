
import Vue from 'vue/dist/vue'

import app from './App.vue'


//路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入bootsrap样式
import 'bootstrap/dist/css/bootstrap.min.css'


//导入 Mint-UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//导入MUI样式
import './lib/mui/css/mui.min.css'
import './lib/mui/js/mui'

let vm = new Vue({
    el: "#app",
    data: {
        msg: 1234
    },
    render: createElement => createElement(app)
})
