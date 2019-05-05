/* 
    入口文件
 */
// var md = require('markdown-it')();
// var result = md.render('## markdown-it rulezz!')
// console.log(result);
const fs = require('fs');
const path = require('path');
const md = require('markdown-it')();

let tplPath = path.join(__dirname,'tpl.html');
let mdPath = path.join(__dirname,'demo.md');
let targetPath = path.join(__dirname,'demo.html');

fs.readFile(mdPath,'utf8',(err,data) => {
    if(err) return;
    let result = md.render(data);
    let tpl = fs.readFile(tplPath,'utf8',(err,tplData) => {
        tplData = tplData.replace('<%content%>',result);
        fs.writeFile(targetPath,tplData,(err)=> {
            console.log('转换完成');
        });
    });
});