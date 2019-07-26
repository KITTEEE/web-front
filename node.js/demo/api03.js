/* 
    路径操作
*/

const path = require('path');

// path.basename  获取路径最后一部分
// console.log(path.basename('/foo/bar/baz/asdf/quux.html')); //quux.html
// console.log(path.basename('/foo/bar/baz/asdf/quux.html','.html')); //quux

// path.dirname 获取文件的路径，不包括文件
// console.log(__dirname);
// console.log(path.dirname('/abc/qqq/www/abc'));// /abc/qqq/www/

// path.extname 获取文件扩展名
// console.log(path.extname(path.basename('/foo/bar/baz/asdf/quux.html')));
// console.log(path.extname('index.html')); // .html

// 路径的格式化处理
// path.format()  obj -> string
// path.parse()  string -> obj
// let obj = path.parse(__filename);
// console.log(obj);
/* 
{ root: 'D:\\', // 文件根路径
  dir: 'D:\\webfront\\node.js\\demo',  //文件全路径
  base: 'api03.js',  // 文件全名
  ext: '.js', // 文件后缀
  name: 'api03' // 文件名称 }
*/
// let strpath = path.format(obj);
// console.log(strpath); // D:\webfront\node.js\demo\api03.js

// path.isAbsolute() 判断是否为绝对路径
// console.log(path.isAbsolute('./foo/bar')); // false
// console.log(path.isAbsolute('/foo/bar')); // true
// console.log(path.isAbsolute('C:/foo/..')); // true

// path.join() 拼接路径（..表示上层路径；.表示当前路径）,在连接路径的时候会格式化路径
// console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '../')); //\foo\bar\baz\asdf\


// path.normalize() 规范化路径
// console.log(path.normalize('/foo/bar//baz/asdf/quux/..')); // \foo\bar\baz\asdf
// console.log(path.normalize('C:\\temp\\\\foo\\bar\\..\\')); // C:\temp\foo\

// path.relative() 计算相对路径
// console.log(path.relative('C:\\orandea\\test\\aaa','C:\\orandea\\impl\\bbb')); // ..\..\impl\bbb

// path.resolve() 解析路径 方法将路径或路径片段的序列解析为绝对路径。
// console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')); // D:\webfront\node.js\demo\wwwroot\static_files\gif\image.gif

// 两个特殊属性 delimiter、sep
console.log(path.delimiter); // \ 环境变量分隔符 (windows是 ;  Linux 是 : )
console.log(path.sep); // ; 表示路径分隔符 (windows 是 \ ， Linux 是 /)






