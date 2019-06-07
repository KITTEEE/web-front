// 项目入口文件

console.log('ok')

import '../src/css/index.less'
// 如果要通过路径的形式引入 node_modules 中相关的文件，
// 可以直接省略路径前面的 node_modules 直接写包的名称，然后后面跟上具体的文件路径
// 不写 node_modules 这一层目录 ，默认 就会去 node_modules 中查找
import 'bootstrap/dist/css/bootstrap.css'