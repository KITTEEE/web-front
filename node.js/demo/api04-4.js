/* 
    大文件的流式操作
    fs.createReadStream() fs.createWriteStream()
*/
const fs = require('fs');
const path = require('path');

let spath = path.join(__dirname,'./file.rar');
let dpath = path.join('D:\\webfront\\node.js','file.rar');

// let readStream = fs.createReadStream(spath);
// let writeStream = fs.createWriteStream(dpath);
// 基于事件的处理方式
// let num = 1
// chunk 表示一个数据块，分块写入
// ‘data’是一个事件参数，在流将数据块传送给消费者后触发
// ‘end’ 是一个事件参数，在流中没有数据可供消费时触发。
// readStream.on('data',(chunk) => {
//     num ++;
//     writeStream.write(chunk);
// });
// readStream.on('end',() => {
//     console.log('文件处理完成' + num);
// }); 

// -------------------------------------------------

//另一种处理方式 pipe()
// pipe 管道 作用是直接把输入和输出流连接起来
// readStream.pipe(writeStream);

// ------------------------------------------------
// 最简单的大文件流式读写
fs.createReadStream(spath).pipe(fs.createWriteStream(dpath));