/* 
    响应完整的页面信息
*/

const http = require('http');
const path = require('path');
const fs = require('fs');
const mime = require('./mime.json');
http.createServer((req, res) => {
        fs.readFile(path.join(__dirname, 'www', req.url), (err, fileContet) => {
            if (err) {
                // 没有找到对应的文件
                res.writeHead(404, {
                    'Content-Type': 'text/plain;charset=utf8'
                });
                res.end('页面找不到了');
            } else {
                // 默认文件类型
                let dtype = 'text/html';
                //获取请求文件的后缀
                let ext = path.extname(req.url);
                // 如果请求的文件合理，就获取到标准的响应格式
                if (mime[ext]) {
                    dtype = mime[ext];
                }
                // 如果请求的内容为文本，就设置成 utf8 编码
                if (dtype.startsWith('text')) {
                    dtype = dtype + '; charset=utf8';
                }
                // 设置响应头信息
                res.writeHead(200, {
                    'Content-Type': dtype
                });
                res.end(fileContet);
            }
        })
    }).listen(3000, () => {
            console.log('success run');
        })