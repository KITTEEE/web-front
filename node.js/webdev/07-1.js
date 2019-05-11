/* 
    post参数处理
*/

const queryString = require('querystring');
const http = require('http');

// parse 方法的作用就是把字符串转成对象
// let param = 'username=list&password=123';
// let param = 'foo=bar&abc=xyz&abc=123'
// let obj = queryString.parse(param);
// console.log(obj);// { foo: 'bar', abc: [ 'xyz', '123' ] }

// //stringify 的作用是把对象转成字符串
// let obj1 = {
//     flag : 123,
//     abc : ['hello','hi']
// }
// let str1 = queryString.stringify(obj1);
// console.log(str1);

http.createServer((req,res) => {
    if(req.url.startsWith('/login')){
        let pdata = '';
        req.on('data',(chunk) => {
            // 每次获取一部分数据
            pdata += chunk;
            console.log(pdata)
        });
        req.on('end',()=>{
            // 这里才能得到完整数据
            console.log(pdata)
            let obj = queryString.parse(pdata);
            console.log(obj)
            res.end(obj.username + '---' + obj.password);
        })
    }
}).listen(3000,()=>{
    console.log('running...')
})
