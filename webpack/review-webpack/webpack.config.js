
var path = require('path')
var htmlwebpackplugin = require('html-webpack-plugin')
module.exports = {
    // 指定入口和输出路径，简化打包命令
    entry:path.join(__dirname,'src/main.js'),
    output:{
        path:path.join(__dirname,'dist'),
        filename:'bundle.js'
    },
    plugins:[
        new htmlwebpackplugin({
            template:path.join(__dirname,'src/index.html'),
            filename:'index.html'
        })
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            // 可以通过`limit`指定进行base64编码的图片大小；只有小于指定字节（byte）的图片才会进行base64编码
            {test:/\.jpg|png|gif|jpeg$/,use:['url-loader?limit=35484&name=[hash:8]-[name].[ext]']}, // 处理 url 路径的 loader 模块
            {test:/\.eot|woff|woff2|svg|ttf$/,use:['url-loader']}
        ]
    }
}