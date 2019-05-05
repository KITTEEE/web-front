/* 
    初步实现服务器功能
    response.end([data][, encoding][, callback])
    如果指定了 data，则相当于调用 response.write ，之后再调用 response.end(callback)。
*/
const http = require('http');

// // 创建服务器对象
// let server = http.createServer();
// // 给对象绑定请求事件
// server.on('request',(req,res) => {
//     res.end('ok');
// });
// //监听端口
// server.listen(3000);

// --------------------
http.createServer((req,res) => {
    res.end('hi');
}).listen(3000,'172.16.110.146',() => {
    console.log('server start up success!');
});