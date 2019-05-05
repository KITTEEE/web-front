/* 
    响应静态页面
*/

const http = require('http');
const path = require('path');
const fs = require('fs');

let readFile = (url,res) => {
    fs.readFile(path.join(__dirname,'www',url),'utf8',(err,fileContent) => {
        if(err){
            res.end('server error');
        }else {
            res.end(fileContent);
        }
    });
}

http.createServer((req,res) => {
    if(req.url.startsWith('/index')) {
        readFile('index.html',res);
    }else if(req.url.startsWith('/about')) {
        readFile('about.html',res);
    }else if(req.url.startsWith('/list')) {
        readFile('list.html',res);
    } else {
        // 设置相应类型和编码
        res.writeHead(200,{'Content-Type':'text/plain; charset=utf8'});
        res.end('页面被叼走了');
    }
}).listen(3000,() => {
    console.log('success run');
});