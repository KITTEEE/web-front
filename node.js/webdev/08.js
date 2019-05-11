const http = require('http');
const ss = require('./05-1.js');
const url = require('url');
const queryString = require('querystring');
http.createServer((req,res) => {
    //启动静态资源服务
    if(req.url.startsWith('/www')) {
        ss.staticServer(req,res,__dirname);
    }

    // 动态资源
    if(req.url.startsWith('/login')) {
        // get请求处理
        if(req.method == 'GET') {
            let param = url.parse(req.url,true).query;
            if(param.username == 'admin' && param.password == '123'){
                res.end('get success');
            }else {
                res.end('get fail');
            }
        }
        // post 请求处理
        if(req.method == 'POST') {
            let pdata = '';
            req.on('data',(chunk) => {
                pdata += chunk;
            });
            req.on('end',()=>{
                let obj = queryString.parse(pdata);
                if(obj.username == 'admin' && obj.password == '123') {
                    res.end('post success')
                }else {
                    res.end('post fail')
                }
            });
        }
    }
}).listen(3000,() => {
    console.log('running...')
})