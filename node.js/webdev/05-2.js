const http = require('http')
const ss = require('./05-1.js')
const path = require('path')

http.createServer((req,res)=>{
    ss.staticServer(req,res,path.join(__dirname,'www'));
}).listen(3000,()=>{
    console.log('running...');
})