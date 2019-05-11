/* 
    中间件就是处理过程中的一个环节，本质上是一个函数
*/

// 应用级中间件

const express = require('express');
const app = express();
let total = 0;
app.use('/user',(req,res,next) => {
    // 记录访问时间
    console.log(Date.now());
    // next 方法的作用是把请求传递到下一个中间件
    next();
});
app.use('/user',(req,res,next) => {
    // 记录访问日志
    console.log('访问了 /user');
    next();
});
app.use('/user',(req,res) => {
    total++;
    console.log(total);
    res.send('result')
});
app.listen(3000,() => {
    console.log('running...');
})