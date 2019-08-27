/* 抽离路由模块 */
import VueRouter from 'vue-router'
import account from './main/Account.vue'
import login from './main/Login.vue'
import goodlist from './subcom/Goodlist.vue'
import register from './subcom/Register.vue'
const router = new VueRouter({
    routes: [
        {
            path:'/account',
            component:account,
            /* 路由嵌套 */
            children:[
                {path:'goodlist',component:goodlist},
                {path:'register',component:register}
            ]
        },
        {
            path:'/login',
            component:login
        }
    ]
})
export default router