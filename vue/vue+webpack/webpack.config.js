
const path = require('path');
const webpack = require('webpack')
/* 导入在内存中生成 html 页面的插件
   只要是插件，都一定要放到 plugins 里，插件的作用有：
   1. 自动在内存中根据指定页面生成一个内存页面
   2. 自动把打包好的 bundle.js 追加到页面中去 */
const htmlwebpackplugin = require('html-webpack-plugin');
/* 结合 vue-loader 使用来解析 vue 文件 */
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    // 入口，表示需要使用webpack打包哪个文件
    entry:path.join(__dirname,'src/main.js'), 
    // 输出文件的相关配置
    output:{ // 
        path:path.join(__dirname,'dist'), // 文件路径
        filename:'bundle.js' // 文件名称
    },
    /* 实现浏览器自动打开等操作 */
    devServer:{
        open:true,
        port:3000,
        contentBase:'src',
        /* 如果要开启热更新需要引入 webpack plugins */
        hot:true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlwebpackplugin({ // 创建一个在内存中生成 html 页面的插件
            // 指定模板页面，会根据页面路径去生成内存中的页面
            template:path.join(__dirname,'src/index.html'), 
            // 内存中的页面名
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{ // 这个节点用于配置所有第三方模块加载器
        rules:[ // 第三方模块的匹配规则; use 表示调用哪些第三方模块来来处理 test 所匹配到的文件，调用的顺序是从后往前
            {test:/\.css$/,use:['style-loader','css-loader']}, // 配置处理 css 文件的处理规则
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']}, // 配置处理 less 文件的处理规则
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.vue$/,use:'vue-loader'}
        ]
    },
    resolve:{
        alias: {
            // 修改 vue 被导入时候的包的路径
            // "vue$":"vue/dist/vue.js"
        }
    }
}

// webpack-dev-server 的实时打包构建
// 1. npm i webpack-dev-server -D 本地安装
// 2. 由于本地安装所以无法当作脚本命令在 shell 中运行，可以在 package.json 中配置 dev 或 server 然后直接 npm run dev/server
//    而且 webpack-dev-server 还需要在本地安装 webpack 依赖 
// 3. webpack-dev-server 帮我们打包生成的 bundle.js 文件没有存放到磁盘上
//   而是直接托管到电脑内存中(项目根目录中的虚拟文件)，这样做的原因是能够更快
// 4. 常用命令 webpack-dev-server --open --port 3000 --contentBase src --hot
// --open 启动后自动打开浏览器  --port 设置服务器端口 --contentBase 指定路径  --hot 热更新，实现局部更新而不是整个更新

