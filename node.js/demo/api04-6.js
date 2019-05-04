/* 
    文件操作案例（初始化目录结构）
*/

const fs = require('fs');
const path = require('path');

let root = 'C:\\Users\\kkk\\Desktop';
let fileContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div>welcome to this</div>
</body>
</html>
`;

let initData = {
    projectName : 'mydemo',
    data : [{
        name : 'img',
        type : 'dir'
    },{
        name : 'js',
        type : 'dir'
    },{
        name : 'css',
        type : 'dir'
    },{
        name : 'index.html',
        type : 'file'
    }]
}

fs.mkdir(path.join(root,initData.projectName),(err) => {
    if(err) return;
    initData.data.forEach((item) => {
        if(item.type == 'dir') {
            //创建子目录
            fs.mkdirSync(path.join(root,initData.projectName,item.name));
        }else if(item.type == 'file') {
            // 创建文件并写入内容
            fs.writeFileSync(path.join(root,initData.projectName,item.name),fileContent);
        }
    });
});