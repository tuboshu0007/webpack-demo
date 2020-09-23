
import Vue from 'vue/dist/vue'

import app from './App.vue'


//导入axios
import VueAxiosPlugin from 'vue-axios-plugin'
Vue.use(VueAxiosPlugin, {
    // 请求拦截处理
    reqHandleFunc: config => config,
    reqErrorFunc: error => Promise.reject(error),
    // 响应拦截处理
    resHandleFunc: response => response,
    resErrorFunc: error => Promise.reject(error)
})


//路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入路由模块
import router from './router'


//导入bootsrap样式
import 'bootstrap/dist/css/bootstrap.min.css'


//导入 Mint-UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//导入Mint-UI轮播图组件
Vue.use(MintUI)


//导入MUI样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'


//导入缩略图组件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

let vm = new Vue({
    el: "#app",
    data: {
        msg: 1234
    },
    router: router,
    render: createElement => createElement(app)
})

//定义全局过滤器
import moment from 'moment'
Vue.filter('dateFormat', function (dateStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dateStr).format(pattern)
})

