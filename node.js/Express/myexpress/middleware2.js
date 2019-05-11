/* 
    中间件挂载方式和执行过程
    use
    路由方式：get post put delete
*/

// 路由级中间件

const express = require('express');
const app = express();

// 第一个路由，一个路由可以有多个中间件
app.get('/',(req,res,next) => {
    console.log(1);
    // 不写next()的话，不会执行第二个中间件
    // next();
    // next('route') 作用是跳转到下一个路由,不会执行这个路由里的其他中间件
    next('route');
},(req,res) => {
    console.log(2);
    res.send('abc');
});

//第二个路由
app.get('/',(req,res) => {
    console.log('3')
    res.send('hello');
})
// ----------------------------------------------------------------------

// var cb0 = function(req,res,next) {
//     console.log('cb0');
//     next();
// }
// var cb1 = function(req,res,next) {
//     console.log('cb1');
//     next();
// }
// var cb2 = function(req,res) {
//     res.end('hello from c')
// }
// app.get('/example',[cb0,cb1,cb2]);

app.listen(3000,()=>{
    console.log('running...');
})
