/* 
    变量的解构赋值

*/
/* 
以前的做法
var a = 1;
var b = 2;
var c = 3;

var a = 1,b = 2,c = 3; 
*/
/* 
    // 数组的解构赋值
    var [a,b,c] = [1,2,3];
    console.log(a,b,c);
    let [a,b,c] = [,2,];
    console.log(a,b,c);//undefied 2 undefined 
    let [a=111,b,c] = [,2,];
    console.log(a,b,c);//111 2 undefined 
*/

// --------------------------------------------

/* 
    // 对象的解构赋值
    let {foo,bar} = {foo:'hello',bar:'hi'};
    console.log(foo,bar); // hello hi
    let {foo,bar} = {bar:'hi',foo:'hello'};
    console.log(foo,bar); // hello hi
    
    //对象属性别名(有了别名，原来的名字会失效)
    let {foo:abc,bar} = {foo:'hello',bar:'hi'};
    console.log(foo,bar);// foo is not definded
    console.log(abc,bar);// hello hi
    
    //对象属性指定值
    let {foo:abc='111',bar} = {bar:'hi'};
    console.log(abc,bar);// 111 hi

    let {cos,sin,random} = Math;
    console.log(typeof cos); //function
    console.log(typeof sin); //function
    console.log(typeof random); //function
*/

//----------------------------------------------

/* 
    //字符串的解构赋值
    // let [a,b,c,d,e] = 'hello';
    // console.log(a,b,c,d,e); // h e l l o
    // let [a,b,c,d] = 'hello';
    // console.log(a,b,c,d); // h e l l
    // let [a,b,c,d,length] = 'hello';
    // console.log(a,b,c,d,length); // h e l l o 
    // let [a,b,c,d,e,length] = 'hello';
    // console.log(a,b,c,d,e,length); // h e l l o undefined 
    let {length} = 'hello';
    console.log(length); // 5 
*/
    
