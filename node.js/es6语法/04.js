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
    //
*/
