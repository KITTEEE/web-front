/* 
    文件操作
*/
const fs = require('fs');
// 异步的 fs.stat(文件路径，回调函数)
console.log(1);
fs.stat('./data.txt', (err, stats) => {
    // console.log(err);
    //一般回调函数的第一个参数是错误对象，如果 err 为 null 表示无错，否则表示报错
    if (err) return;
    if (stats.isFile()) {
        console.log('文件');
    } else if (stats.isDirectory()) {
        console.log('目录');
    }
    console.log(stats);
    console.log(2.1);
    /* 
        Stats {
        dev: 2866051194,
        mode: 33206,
        nlink: 1,
        uid: 0,
        gid: 0,
        rdev: 0,
        blksize: 4096,
        ino: 844424930850131,
        size: 0,
        blocks: 0,
        atimeMs: 1556957142116.9558,
        mtimeMs: 1556957142116.9558,
        ctimeMs: 1556957142116.9558,
        birthtimeMs: 1556957142116.9558,
        atime: 2019-05-04T08:05:42.117Z, // 文件访问时间
        mtime: 2019-05-04T08:05:42.117Z, // 文件状态信息发生变化的时间(如文件权限改变)
        ctime: 2019-05-04T08:05:42.117Z, // 文件数据发生变化的时间
        birthtime: 2019-05-04T08:05:42.117Z // 文件创建时间 }
    */
});
console.log(3);

// 同步的 fs.stat 没有回调参数
console.log(1);
let ret = fs.statSync('./data.txt');
console.log(ret);
console.log(2.2);