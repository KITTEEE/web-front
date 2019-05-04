/* 
    目录操作
    1、创建目录
    fs.mkdir(path[, mode], callback)
    fs.mkdirSync(path[, mode])
    2、读取目录
    fs.readdir(path[, options], callback)
    fs.readdirSync(path[, options])
    3、删除目录
    fs.rmdir(path, callback)
    fs.rmdirSync(path)
*/
const fs = require('fs');
const path = require('path');

// 创建目录
// fs.mkdir(path.join(__dirname,'abc'),(err) => {
//     console.log(err); // 返回 null 表示创建成功
//     // console.log('目录创建成功');
// });
// fs.mkdirSync(path.join(__dirname,'def'));

// ------------------------------------------------

//读取目录
// fs.readdir(__dirname,(err,files) => {
//     // console.log(files);
//     files.forEach((item,index) => {
//         fs.stat(path.join(__dirname,item),(err,stat) => {
//             if(err) return;
//             if(stat.isFile()) {
//                 console.log(item + '文件');
//             }else if(stat.isDirectory()) {
//                 console.log(item + '目录');
//             }
//         })
//     })
// });

// ---------------------------------------------------

// 删除目录
fs.rmdir(path.join(__dirname,'abc'),(err) => {
    console.log(err);
});
fs.rmdirSync(path.join(__dirname,'def'));
