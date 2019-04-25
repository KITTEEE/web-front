/* 
    字符串相关扩展
    includes() 判断字符串中是否包含指定的子串
               第一个参数表示匹配的字符串，第二个参数表示从第几个开始匹配
    startsWith() 
    endsWith()

*/

// console.log('hello,world'.includes('world'));//true
// console.log('hello world'.includes('world',7));//false
// console.log('hello world'.includes('world',6));//true

// var url = 'admin/index.php';
// console.log(url.startsWith('admin')); // true
// console.log(url.endsWith('php')); // true

/* 
    模板字符串
*/

var obj = {
    "username":"zhangsan",
    "age":"12",
    "gender":'男'
}
//before
var tag = '<div><span>' + obj.username + '</sapn><span>' + obj.age + '</sapn><span>' + obj.gender + '</sapn></div>';
console.log(tag);

//after 模板字符串，用 ` ` 包住，用 ${} 填充数据
function info (msg) {
    return msg + ' world';
}
var template = `
    <div>
        <span>${obj.username}</span>
        <span>${obj.age}</span>
        <span>${obj.gender}</span>
        <span>${1+1}</span>
        <span>${info('hello')}</span>
    </div>
`;
console.log(template);
/*     
    <div>
        <span>zhangsan</span>
        <span>12</span>
        <span>男</span>
        <span>2</span>
        <span>hello world</span>
    </div>
 */