/* 
    全局成员概述
    __filename  __dirname
    
*/

console.log(__filename);//D:\webfront\node.js\demo\02.js 包含文件名称的全路径
console.log(__dirname);//D:\webfront\node.js\demo 文件的路径

//定时函数

// var timer = setTimeout(function(){
//     console.log(123);
// },3000);
// setTimeout(function(){
//     clearTimeout(timer);
// },4000);

// global.console.log(456);
/* argv是一个数组，默认情况下，前两项数据分别是：
    Node.js环境的路径；当前执行的js文件的全路径
    从第三个参数开始表示命令行数    
*/

console.log(process.argv);
// [ 'D:\\dev\\nodejs\\node.exe',
//   'D:\\webfront\\node.js\\demo\\02.js' ]

// 打印当前系统的位数
console.log(process.arch);//x64


