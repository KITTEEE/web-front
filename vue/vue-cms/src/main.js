
import Vue from 'vue';
import app from './App.vue';
import router from './router.js';

// 引入 VueRouter
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 引入 VueResource
import VueResource from 'vue-resource';
Vue.use(VueResource)
// 全局配置请求的数据接口,请求的 url 路径直接使用相对路径，前面不能带 / 否则 不会启用根路径做拼接；
Vue.http.options.root = 'https://www.easy-mock.com/mock/5d6298681fc89667465ec0e5/vuestudy/';
// 全局启用 emulateJSON 选项
Vue.http.options.emulateJSON = true;

// 引入 Mui
import '../lib/mui/css/mui.css';
import '../lib/mui/css/icons-extra.css'

// 引入 Mint UI
import { Header,Swipe, SwipeItem,Button } from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name,Button)

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
  })

// 创建 Vue 实例
var vm = new Vue({
    el:"#app",
    data:{

    },
    methods:{

    },
    render:createElement => createElement(app),
    router
})
