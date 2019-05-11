/* 
    路由（根据路径和请求方式进行路径的份发）
    http 常用的路由处理
    get  查询
    post 增加
    put  更新
    delete 删除
*/
const express = require('express');
const app = express();

// 使用 use 和 all 可以处理所有路由请求 
app.all('/',(req,res) =>{
    res.send('ok');
})

//基本的路由处理
// app.get('/',(req,res) => {
//     res.send('get data');
// });

// app.post('/',(req,res) => {
//     res.send('post data');
// })

// app.put('/',(req,res) => {
//     res.send('put data');
// })

// app.delete('/',(req,res) => {
//     res.send('delete data');
// })

app.listen(3000,()=>{
    console.log('running...');
})

