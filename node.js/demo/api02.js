/* 
    Buffer实例化
*/
//第一种实例化方法：new Buffer('str')
// let buf = new Buffer('hello');//不推荐
// console.log(buf);

//第二种实例化方法：Buffer.alloc,返回一个指定大小的新建的未初始化的 Buffer
// let buf2 = Buffer.alloc(10);//<Buffer 00 00 00 00 00 00 00 00 00 00>
// console.log(buf2);

// 第三种实例化方法：Buffer.from,返回一个新的 Buffer，其中包含提供的八位字节数组的副本。
// let buf3 = Buffer.from('buffer');
// console.log(buf3); // <Buffer 62 75 66 66 65 72>
// let buf4 = Buffer.from([0x62,0x75,0x66,0x66,0x65,0x72]);
// console.log(buf4.toString()); //buffer



/* 
    Buffer的静态方法
*/

// Buffer.isEncoding() 判断是否支持该编码
// console.log(Buffer.isEncoding('utf-8'));//true
// console.log(Buffer.isEncoding('gbk'));//false

//Buffer.isBuffer()  判断是否为Buffer
// let buf1 = Buffer.from('hello');
// console.log(Buffer.isBuffer(buf1)); //true 
// console.log(Buffer.isBuffer({})); //false

// Buffer.byteLength() 返回指定编码的字节长度，默认 utf-8
// let buf2 = Buffer.from('中国');
// console.log(Buffer.byteLength(buf2)); // 6
// let buf3 = Buffer.from('中国','ascii');
// console.log(Buffer.byteLength(buf3)); // 2

// Buffer.contact() 将一组 Buffer 对象合并为一个 Buffer 对象
// let buf4 = Buffer.alloc(2);
// let buf5 = Buffer.alloc(5);
// let buf6 = Buffer.concat([buf4,buf5]);
// console.log(buf6); //<Buffer 00 00 00 00 00 00 00>
// console.log(Buffer.byteLength(buf6)); // 7

/* 
    Buffer 实例方法
*/

// write() 方法   向 Buffer 对象中写入内容
let buf7 = Buffer.alloc(5);
buf7.write('hello',2,2); //第一个参数表示从 Buffer数组第二位开始写入，第二个参数表示写入两个字符 
console.log(buf7); // <Buffer 00 00 68 65 00>

// slice() 方法 截取新的 Buffer 对象，和 js 的 slice 方法相似
let buf8 = Buffer.from('hello');
let buf9 = buf8.slice(2,4);
console.log(buf9.toString()); // ll

// toJSON() 方法，不需要显式调用，当调用 JSON.stringify 时会自动调用 toJSON 方法
const buf10 = Buffer.from('hello');
const json = JSON.stringify(buf10);
console.log(json);
