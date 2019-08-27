/* 在 webpack 环境下使用 vue */

/* 1. 安装并导入 vue */
// import Vue from 'vue' // 这里导入的 Vue 是运行时的阉割版，不是完整版，需要修改导包的路径
/* 修改导包路径的第一种方法，直接修改路径 */
// import Vue from '../node_modules/vue/dist/vue.js'
/* 修改导包路径的第二种方法，这里直接引入，在 webpack 配置文件中设置 resolve 的 alias 属性 */
import Vue from 'vue'

/* 2. 使用 render 渲染组件，同时安装 vue 文件依赖 */
/* webpack 默认不支持解析 vue 文件，所以需要下载相应的 loader */
/* cnpm i vue-loader vue-template-compiler -s {test:/\.vue$/,use:['vue-loader']}*/
/* 新版本 webpack 还需配置 VueLoaderPlugin 插件才能使用 */
import login from './login.vue'

var vm = new Vue({
  el: "#app",
  data: {
    msg: '123123'
  },
  methods: {},
  /* 使用 runtime-only 的 vue 文件无法使用 component 属性来注册组件，因此要使用 render 来渲染 */
  // components:{
  //   login
  // }
  // render:function(createElement){
  //   return createElement(login);
  // }
  render:createElement => createElement(login)
})

/* export 尝试 */
import test,{message1 as m1,message2 as m2} from './test.js'
console.log(test.title)
console.log(test.content)
// console.log(message1,message2);
console.log(m1,m2)