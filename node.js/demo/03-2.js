/* 
    引入模块
*/
var module = require('./03.js');

//exports导出后引入使用
// var ret = module.sum(12,13);
// console.log(ret);

//module 导出后引入使用
var ret = module(2,3);
console.log(ret);