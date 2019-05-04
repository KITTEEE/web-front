/* 
    写文件操作
    fs.writeFile(文件路径,data,[options:默认为utf8],回调函数)
    异步地将数据写入到一个文件，如果文件已存在则覆盖该文件
    data 可以是 字符串 或 buffer
*/
const fs = require('fs');
const path = require('path');
let strpath = path.join(__dirname,'data.txt');
fs.writeFile(strpath,'world',(err) => {
    if(err) return;
    if(!err) {
        console.log('文件写入成功！');
    }
});
let buf = Buffer.from('hi')
fs.writeFile(strpath,buf,(err) => {
    if(!err) {
        console.log('文件写入成功！');
    }
});

// 同步操作
// fs.writeFileSync(strpath,'tom and jerry');
