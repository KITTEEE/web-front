/* 
    第三方中间件 body-parser
*/
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// 挂载内置中间件
app.use(express.static('public2'));

// 挂载参数处理中间件(post)
app.use(bodyParser.urlencoded({extended:false}));

// 处理 get 提交参数
app.get('/login',(req,res) => {
    // console.log(req);
    let data = req.query;
    console.log(data);
    res.send('get data');
})

//处理 post 提交参数
app.post('/login',(req,res) => {
    let data = req.body;
    // console.log(data);
    if(data.username == 'admin' && data.password == '123'){
        res.send('success');
    }else {
        res.send('fail')
    }
})

app.listen(3000,() => {
    console.log('running...')
})