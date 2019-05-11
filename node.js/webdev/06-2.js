const http = require('http')
const path = require('path')
const url = require('url');

http.createServer((req,res)=>{
    console.log(req.url)
    // 如果设为 true，则返回的 URL 对象的 query 属性会是一个使用 querystring 模块的 parse() 生成的对象 { username: 'zhangsan', password: '1234' }
    // 如果设为 false，则 query 会是一个未解析未解码的字符串。 默认为 false。 query: 'username=zhangsan&password=1234',
    let obj = url.parse(req.url,true);
    console.log(obj);
    res.end(obj.query.username + '=====' + obj.query.password)
}).listen(3000,()=>{
    console.log('running...');
})