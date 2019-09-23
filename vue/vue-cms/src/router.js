/* 抽离路由模块 */
import home from './component/tabbar/HomeContainer.vue'; // 主页 tabbar
import member from './component/tabbar/MemberContainer.vue'; // 会员 tabbar
import search from './component/tabbar/SearchContainer.vue'; // 搜索 tabbar
import shopcar from './component/tabbar/ShopcarContainer.vue'; // 购物车 tabbar
import newslist from './component/news/NewsList.vue';// 新闻列表页面
import newsinfo from './component/news/NewsInfo.vue';// 新闻详情页面
import photolist from './component/photos/PhotoList.vue'// 图片浏览页面
import photoinfo from './component/photos/PhotoInfo.vue' // 图片详情页
import VueRouter from 'vue-router'

const router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home' },
        {path:'/home',component:home,},
        {path:'/home/newslist',component:newslist},
        {path:'/home/newsinfo/:id',component:newsinfo},
        {path:'/home/photolist',component:photolist},
        {path:'/home/photolist/photoinfo/:id',component:photoinfo},
        {path:'/member',component:member},
        {path:'/search',component:search},
        {path:'/shopcar',component:shopcar}
    ],
    linkActiveClass:'mui-active' // router-active 时使用的样式
})
export default router