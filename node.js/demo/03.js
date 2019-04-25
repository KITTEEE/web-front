/* 
    模块化：exports module require

    传统的模块化开发缺点：
    1. 命名冲突  （张三和李四给变量起了相同名字）
    2. 文件依赖  （js前后引入顺序和关系等）

    前端标准的模块化规范：
    1. AMD - require.js
    2. CMD - sea.js

    服务器的模块化规范：
    1. CommonJs - Node.js

    1. 定义模块：
    一个js文件就是一个模块，模块内部的成员相互独立
    2. 模块成员的导出和引入：
    模块成员需要导出后才能被使用
    exports导出
    exports.xx = xxx;
    引入： var ret = require('../xx.js');
    module 导出：
    module.exports = xxx;
    引入：
*/

var sum = function(a,b) {
    return parseInt(a) + parseInt(b);
}
//exports导出模块成员
exports.sum = sum;

//module 导出模块成员
module.exports = sum;

