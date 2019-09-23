/* 
    声明变量的关键字： let const
    let 声明的变量不存在预解析(变量提升）
*/

// let 声明的变量不存在预解析(变量提升）
// console.log(flag);
// var flag = 1; //undefined
// let flag = 1; // ReferenceError: flag is not defined
// -----------------------------------------------------
//let 在同一个作用域内，声明的变量不允许重复
// let flag = 1;
// let flag = 2;
// SyntaxError: Identifier 'flag' has already been declared
// console.log(flag);
// -----------------------------------------------------

// ES6 引入了块级作用域
// 块内部定义的变量，外部无法访问
// if(true) {
//     // var flag = 1;//1
//     let flag = 1;//  flag is not defined
// }
// console.log(flag);//let声明块之外的是访问不到的
/* 
{
    var flag = 1;
    这也是块级作用域
}
 */
/* 
for(let i = 0; i < 3 ; i++) {
    //for循环括号中声明的变量只能在循环中使用
    console.log(i); //0 1 2
}
console.log(i); // var:3,  let: i is not defined
*/

//块级作用域内部，变量只能先声明再使用

//====================================================

// 使用 const 声明常量
// const 声明的常量不允许重新赋值
// const 必须初始化

/* 
const n = 1;
n = 2;  
*/