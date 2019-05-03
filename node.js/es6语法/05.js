/* 
    箭头函数的使用
*/
// before
// function foo () { 
//     console.log('hello');
// }
// foo();

//使用箭头函数(等效的)
// let foo = () => console.log('hello');
// foo(); // hello

// function foo(v) { 
//     return v;
// }

// let foo = v => v;
// let ret = foo(2);
// console.log(ret); // 2 

// let foo = (a,b) => console.log(a+b);
// foo(); // NaN
// foo(1,2); // 3

//多条语句需用 {} 包住
// let foo = (a,b) => {
//     let c = 4;
//     console.log(a+b+c);
// }
// foo(1,2); // 7

// let arr = [123,456,789];
// // before
// arr.forEach(function(ele,index){
//     console.log(ele,index); // 123 0   456 1  789 2 
// });
// //使用箭头函数
// arr.forEach((ele,index) => {
//     console.log(ele,index); // 123 0   456 1  789 2
// });

/* 
    箭头函数使用的注意事项
    1. 箭头函数中的 this 取决于函数的定义，而不是调用
    2. 箭头函数不可以 new
    3. 箭头函数不可用 arguments 获取参数列表，可以使用reset参数代替
*/
// 1. 
// function foo () {
    //使用call调用foo时，这里的this其实就是call的第一个参数
    // console.log(this);
    // setTimeout(()=> {
        // console.log(this.num);
//     },100);
// }
// foo();//打印的是 node.js 的环境
// foo.call({num:1}); // { num: 1}
// foo.call({num:2,age:12}); // 2

// 2.
// let foo = () => { this.num = 123; };
// new foo();// foo is not a constructor

// 3.
// let foo = (a,b) => {
//     // console.log(a,b);// 1,2
//     console.log(arguments);// 这种方式获取不到实参
// }
// foo(1,2);
// let foo = (...param) => {
//     console.log(...param); // 123 456
// }
// foo(123,456);