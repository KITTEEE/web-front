/* 
    Express 之 HelloWorld
*/

const express = require('express');
const app = express();

//绑定路由
app.get('/', (req, res) => {
    res.send('Hello World!')
});

const server = app.listen(3000,'localhost', () => {
     // 监听的域名或者IP
     var host = server.address().address;
     // 监听的端口
     var port = server.address().port;
    console.log('Example app listening at http://%s:%s',host,port);
})