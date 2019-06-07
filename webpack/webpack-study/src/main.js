/* 项目的入口文件 */

import $ from 'jquery'

// webpack 默认只能打包 js 类型的文件，无法处理非 js 类型的文件
// 若需要 webpack 打包一些非 js 类型的文件，需要手动安装一些第三方 loader 加载器 
/* 
   比如想要打包 css 类型的文件，需要安装 style-loader 和 css-loader 
   再在 webpack.config.js 里新增 modules 节点，来做第三方loader加载器配置 
   modules 节点有个 rules 属性，它是个数组，存放着所有第三方文件的匹配和处理规则 
*/  
import './css/index.css'
// 打包 less 需要 npm i less-loader less -D
import './css/index.less'
// 打包 sass 需要 cnpm sass-loader node-sass -D
import './css/index.scss' 

$(function () {
    $('li:odd').css('backgroundColor', 'red')
    $('li:even').css('backgroundColor', function () {
      return '#' + 'D97634'
    })
})

// 注意： webpack 处理第三方文件类型的过程：
// 1. 发现这个 要处理的文件不是JS文件，然后就去 配置文件中，查找有没有对应的第三方 loader 规则
// 2. 如果能找到对应的规则， 就会调用 对应的 loader 处理 这种文件类型；
// 3. 在调用loader 的时候，是从后往前调用的；
// 4. 当最后的一个 loader 调用完毕，会把 处理的结果，直接交给 webpack 进行 打包合并，最终输出到  bundle.js 中去

// 当直接在控制台输入 webpack 命令时
// 1. webpack 会发现没有通过命令形式给他指定入口和出口
// 2. webpack 就会去项目根目录中查找 webpack.config.js 的配置文件
// 3. 找到配置文件后 webpack会去解析文件，解析完毕后会得到导出的配置对象
// 4. 拿到配置对象后，根据配置对象里指定的入口和出口来进行打包构建