/* 
    模块文件后缀 3 种情况 ： .js .json .node
    若不同后缀同名，会按照上面三个顺序去加载
    .js 后缀可省略
*/
/* 
    require('./04.js');
    require('./04.js');
    require('./04.js');
    require('./04.js');
    console.log(global.flag); 
*/

var m = require('./04.json');
console.log(typeof m);//{ username: 'zhangsan', age: '24' }
console.log(m.username);//zhangsan