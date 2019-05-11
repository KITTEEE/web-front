/* 
    get请求参数
*/
const url = require('url')
// let str = url.parse('http://baidu.com/abc/qqq?flag=1&username=zhangsan')
// console.log(str)
/* 
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'baidu.com',
  port: null,
  hostname: 'baidu.com',
  hash: null,
  search: '?flag=1&username=zhangsan',
  query: 'flag=1&username=zhangsan',
  pathname: '/abc/qqq',
  path: '/abc/qqq?flag=1&username=zhangsan',
  href: 'http://baidu.com/abc/qqq?flag=1&username=zhangsan' }
*/
let obj = {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'baidu.com',
    port: null,
    hostname: 'baidu.com',
    hash: null,
    search: '?flag=1&username=zhangsan',
    query: 'flag=1&username=zhangsan',
    pathname: '/abc/qqq',
    path: '/abc/qqq?flag=1&username=zhangsan',
    href: 'http://baidu.com/abc/qqq?flag=1&username=zhangsan' 
}
let str = url.format(obj);
console.log(str);

