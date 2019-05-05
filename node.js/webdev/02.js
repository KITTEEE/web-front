/* 
    处理请求路径的分发
    1、req对象是Class: http.IncomingMessage的实例对象
    2、res对象是Class: http.ServerResponse的实例对象
*/
const http = require('http');

http.createServer((req,res) => {
    // req.url可以获取URL中的路径（端口之后部分）
    // console.log(req.url);
    if(req.url.startsWith('/index')) {
        // write向客户端响应内容,可以写多次
        res.write('This');
        res.write(' is');
        res.write(' index');
        res.write(' page.');
        // end方法用来完成响应，只能执行一次
        res.end(req.url);
    }else if(req.url.startsWith('/about')) {
        res.end('about');
    }else {
        res.end('hi');
    }
}).listen(3000,() => {
    console.log('start up success');
});