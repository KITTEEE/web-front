/* 
    函数扩展
    1. 参数默认值
    2. 参数解构赋值
    3. rest 参数
    4. ...扩展运算符
*/

/* 
    // 参数默认值
    //before
    function foo1(param) {
        let p = param || 'hello';
        console.log(p);
    }
    foo(); //hello
    foo('hi');// hi

    //after
    function foo2(param='hello'){
        console.log(param);
    }
    foo2(); // hello
    foo2('hi'); // hi
*/

// ------------------------------------------------

/* 
    // 参数解构赋值
    
    function foo({username='lisi',age='13'} = {}){
        console.log(username,age);
    }
    // foo();//会报错,可传入一个空对象
    //空对象
    foo(); //undefined undefined
    //默认值
    foo(); // lisi 13
    foo({username:'zhangsan',age:'15'}); // zhangsan 15
*/

// -------------------------------------------------

/* 
    //reset参数(剩余参数)
    //会将剩余参数封装到数组中
    function foo (a,b,...param) { 
        console.log(a);
        console.log(b);
        console.log(param);
    }
    foo(1,2,3,4); // 1 2 [3,4]
*/

/* 
    //扩展运算符 ...
    //将数组拆分为多个参数 与 reset相反
    //before
    function foo (a,b,c,d,e) { 
        console.log(a + b + c + d + e);
    }
    foo(1,2,3,4,5); // 15
    let arr = [1,2,3,4,5];
    foo.apply(null,arr); // 15
    // 应用扩展运算符
    foo(...arr); // 15

    // 合并数组
    let arr1 = [1,2,3];
    let arr2 = [4,5,6];
    let arr3 = [...arr1,...arr2];
    console.log(arr3);
*/

