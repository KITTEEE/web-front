/* 
    业务模块
*/  
const path = require('path');
const data = require('./data.json');
const fs = require('fs');

// 计算图书编号最大值
let maxBookCode = ()=> {
    let arr = [];
    data.forEach((item) => {
        arr.push(item.id);
    }) 
    return Math.max.apply(null,arr);
}

// 渲染主页面
exports.showIndex = (req,res) => {
    res.render('index',{list:data});
}
// 跳转到添加图书页面
exports.toAddBook = (req,res) => {
    res.render('addBook',{});
}
//添加图书保存数据
exports.addBook = (req,res)=>{
    console.log(req.body);
    let info = req.body;
    let book = {};
    for(let key in info) {
        book[key] = info[key];
    }
    book.id = maxBookCode() + 1;
    // console.log(book);
    data.push(book);
    // 把内存中的数据写入文件
    fs.writeFile(path.join(__dirname,'data.json'),JSON.stringify(data),(err) => {
        if(err) {
            res.send('server error');
        }
        // 写入成功后跳转到主页面
        res.redirect('/');
    })
}

// 跳转到编辑图书页面
exports.toEditBook = (req,res) => {
    console.log(req.query);
    let book = {};
    let id = req.query.id;
    data.forEach((item)=>{
        if(item.id == id) {
            console.log(item);
            book = item;
            return;
        }
    });
    console.log(book);
    res.render('editBook',book);
}
// 编辑图书更新数据
exports.editBook = (req,res) => {
    console.log(req.body);
    let info = req.body;
    data.forEach((item)=>{
        if(info.id == item.id) {
            for(let key in info) {
                item[key] = info[key];
            }
            return;
        }
    });
    fs.writeFile(path.join(__dirname,'data.json'),JSON.stringify(data),(err) => {
        if(err) {
            res.send('server error');
        }
        // 写入成功后跳转到主页面
        res.redirect('/');
    })
}