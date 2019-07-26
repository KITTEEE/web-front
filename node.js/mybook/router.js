/* 
    路由模块
*/
const express = require('express');
const router = express.Router();
const service = require('./service.js');

//路由处理

// 渲染主页
router.get('/',service.showIndex);
//添加图书(跳转到添加图书的页面)
router.get('/toAddBook',service.toAddBook);
router.post('/addBook',service.addBook);
router.get('/toEditBook',service.toEditBook);
router.post('/editBook',service.editBook);

module.exports = router;