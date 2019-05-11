/* 
    静态资源托管
    
    可以指定虚拟目录
    可以指定多个目录作为静态资源目录
*/
const express = require('express');
const app = express();

// app.use(express.static('public')).listen(3000,()=>{
//     console.log('running....');
// });

// 虚拟目录，可创建多个 localhost:3000/static/hello.html
// app.use('/static',express.static('public')).listen(3000,()=>{
//     console.log('running....');
// });

// localhost:3000/static/hello.html  localhost :3000/hihao/hi.html 皆可访问
// let server = app.use('/static',express.static('public'));
// app.use('/nihao',express.static('hello'));
// server.listen(3000,()=>{
//     console.log('running..');
// })
//------------------------------------------------------------------------

app.use('/static',express.static('public'));
app.use('/nihao',express.static('hello'));
app.listen(3000,()=>{
    console.log('running...');
})