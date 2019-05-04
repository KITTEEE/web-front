/* 
    文件的读操作
    fs.readFile(文件路径,[编码],回调函数)
*/

const fs = require('fs');
const path = require('path');

let strpath = path.join(__dirname,'data.txt');
// console.log(strpath);
// 异步的 fs.readFile
fs.readFile(strpath,(err,data) => {
    if(err) return;
    console.log(data); //返回一个 Buffer 对象<Buffer 68 65 6c 6c 6f>
    console.log(data.toString()); // hello
});
// 加入编码参数,data获取到的是字符串
fs.readFile(strpath,'utf8',(err,data) => {
    if(err) return;
    console.log(data); // hello
});

// 同步的 fs.readFile
let ret = fs.readFileSync(strpath);
console.log(ret);