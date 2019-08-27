import Vue from 'vue'
import app from './App.vue'
import router from './router.js'
import VueRouter from 'vue-router'
/* 通过 Vue.use() 安装路由功能 */
Vue.use(VueRouter)
/* 引入 Mint UI 全部组件 */
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);
/* 导入 MUI 样式 */
import mui from '../lib/mui/css/mui.css'

var vm = new Vue({
    el:'#app',
    data:{},
    methods:{},
    render: createElement => createElement(app),
    router
})