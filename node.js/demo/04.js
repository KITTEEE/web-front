/* 
    global导出（不常用）
    node.js会根据文件路径，知道已经加载的模块
    已加载的文件会缓存，
*/
console.log('hello world');
var flag = 4;

global.flag = flag;