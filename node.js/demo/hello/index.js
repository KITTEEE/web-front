/* 
    包入口文件
    执行的两种方式：
    1. node .    执行package.json里的 main
    2. npm run xxx  执行script里的某个命令
*/
var template = require('art-template');
var html = template(__dirname + '/tpl-user.art', {
    user: {
        name: 'kite'
    }
});
console.log(html);//  <h2>kite</h2>
