## this 的指向情况

1. 普通函数中的 this  >  window
2. 构造函数中的 this  >  当前构造函数创建的对象
3. 方法中的 this  >  方法所属的对象
4. 事件处理中的 this >  事件源，谁调用该事件 this 就指向谁



## 面向对象与原型

### 创建对象的方式

1. **通过 new Object()  创建**

```javascript
var p = new Object();
p.name = 'zs';
p.age = 14;
p.sayHi = function() {
    console.log('hello' + this.name)
}
console.log(p.sayHi());

```

 每次都通过 new Object() 比较麻烦，可以通过下面的简写形式来创建

2. **通过简写形式对象字面量来创建**

```javascript
var person = {
    name:'zs',
    age:14,
    sayHi:function() {
        console.log(this.name,'hi!');
    }
}
```

如果采用这种方式，那么要创建多个 person 对象的时候，就要重复写很多次，可以采用下面的工厂方法创建来解决重复问题

3. **工厂函数方法创建**

```javascript
function createPerson(name,age) {
	return {
        name:name,
        age:age,
        sayHi:function() {
            console.log(this.name);
        }
    }
}
var zhangsan = createPerson('zhangsan',15);
console.log(zhangsan); // {name: "zhangsan", age: 15, sayHi: ƒ} 仅仅返回了一个对象
```

这样封装确实是优化了很多，但是这样仅仅是返回了一个对象，无法识别具体是哪个对象的实例。因此，还是前三种方法都不建议使用，**创建对象还是要使用下面这种通过构造函数来创建**



### 通过构造函数创建对象

```javascript
function Person(name,age) {
    this.name = name;
    this.age = age;
    this.sayHi = function() {
        console.log(this.name + 'hi');
    }
}
var zhangsan = new Person('zhangsan',15); // Person {name: "zhangsan", age: 15, sayHi: ƒ} 返回了具体的由 Person 对象创建的实例
```

通过构造函数创建对象的时候，具体发生了哪些步骤：

1. 会在内存中创建一个新对象
2. 将构造函数的作用域赋给新对象（因此 this 便指向了这个新对象）
3. 执行构造函数中的代码
4. 返回新的对象

上述步骤用伪代码演示如下：

```javascript
function Person(name,age) {
    // 当使用 new 操作符调用 Person 的时候，这里会先创建一个新的对象
    var instance = {}
    // 然后让内部的 this 指向这个对象
    this = instance
    // 然后开始执行其他代码
    this.name = name;
    this.age = age;
    this.sayHi = function() {
        console.log(this.name + 'hi');
    }
    // 最后会在结尾处返回 this ，也就是 instance
    return this;
}
```

**实例对象的Constructor 属性**

使用构造函数创建一个实例对象后，实例对象中会有一个 constructor 属性，该属性指向创建该实例的构造函数。起初constructor 是用来识别对象类型的，但是如果要识别对象类型，还是使用 `instanceof`操作符更可靠

```javascript
console.log(p1.constructor === Person); // true
console.log(p1.constructor === p2.constructor); // true
console.log(p1 instanceof Person) // true
console.log(p2 instanceof Person) // true
```

**构造函数中存在的问题**

使用构造函数创建对象时，如果构造函数中有一些不变的内容，那么这样创建多个对象时，就会有多个重复的内容，会多占用一些内存，造成内存的浪费，如：

```javascript
function Person(name,age) {
    this.name = name;
    this.age = age;
    this.type = 'human';
    this.sayHi = function () {
         console.log(this.name + 'hi');
    }
}
var p1 = new Person('Tom', 18)
var p2 = new Person('Jack', 16)
console.log( p1.type === p2.type)
console.log( p1.sayHi === p2.sayHi) // 输出 false 说明创建了多个 sayHi
```

解决方法：

将可以共享的多个函数定义到构造函数外，或放在一个对象中，如：

```javascript
// 这样可能会造成全局命名冲突问题
function sayHi(){
    console.log(...) 
}
function Person(){
	this.sayHi = sayHi        
}
// 把共享的函数都放在一个对象中
var fn = {
    sayHi:function(){...},
    sayHello:function(){...}
}
function Person() {
    this.sayHi = fn.sayHi;
    this.sayHello = fn.sayHello;
}
```

这种处理方法固然可以，但是代码看起来缺格格不入，我们可以使用原型来优雅地解决



### 原型

**任何函数(包括构造函数)，都有一个 prototype 属性，该属性是一个对象，这个对象的属性和方法，都会被函数(或构造函数)所拥有**

可以利用原型属性来优雅解决上述问题

```javascript
function Person() { ... } 
// 利用构造函数的 prototype 对象
Person.prototype.type = 'human';
Person.prototype.sayHi = function() {}
console.log(Person.prototype) // {type: "human", sayHi: ƒ, constructor: ƒ}
var p1 = new Person();
var p2 = new Person();
console.log(p1.sayHi === p2.sayHi) // 返回true 
```

**构造函数、原型、实例 三者之间的关系**

![构造函数-实例-原型之间的关系](media/构造函数-实例-原型之间的关系.png)

**prototype 对象中的 constructor 属性**

prototype 对象中有一个默认的 constructor 属性，该属性指向 prototype 所在函数。起 constructor 是用来识别对象类型的，但是如果要识别对象类型，还是使用 `instanceof`操作符更可靠

```javascript
// constructor 指向 prototype 所在的函数
console.log(Person.prototype.constructor === Person) // true

// 使用 instanceof 操作符更加可靠
console.log(p1.constructor === Person); // true
console.log(p1.constructor === p2.constructor); // true
console.log(p1 instanceof Person) // true
console.log(p2 instanceof Person) // true
```

**__proto\_\_ 指针**

通过构造函数得到的实例对象中有一个指向构造函数的 prototype 对象的 __proto\_\_ 指针，\_\_proto\_\_ 是一个非标准属性

```javascript
function Person() {}
var p1 = new Person();
console.log(p1.__proto__ === Person.prototype) // true 
```



### 原型链

**每个构造函数的实例都有一个 __proto\_\_ 属性，这个属性指向这个实例的原型对象 prototype，然后原型对象中也有\_\_proto\_\_ 属性指向它的原型对象，就在这样的不断指向中最终指向 null  ，形成一条原型链**

**当代码读取某个对象实例的某个属性时，都会在原型链上执行一次搜索：先从对象实例开始搜索这个属性，若找到了该属性，则返回该属性的值；若找不到，则来到 __proto\_\_ 指向的原型对象中查找，如果在原型对象中找到了该属性，则返回该属性值；若找不到，则继续沿原型链向上找，如果一直到末端还没有找到，则返回 undefined 。**

```javascript
function Person(){ ... }
Person.prototype.sayHi = function() { ... }
var p1 = new Person();
var p2 = new Person();
// 执行这句代码的时候，会先在 p1 这个实例身上搜索有没有 sayHi 属性，结果找不到，那么就会去 p1 的原型(prototype)上去找，结果找到了，则返回了sayHi;
p1.sayHi()
// 这一句同理，也就是为什么 p1.sayHi === p2.sayHi 会返回 true
p2.sayHi()

console.log(p1.proto)
console.log(p1.__proto__.__proto__)
console.log(p1.__proto__.__proto__.__proto__)
```

注意点：

**实例对象在读取原型对象成员的时候都会在原型链上查找，而在设置属性值的时候，实际上不会搜索原型链而是直接在对象上添加属性**

```javascript
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.sayHi = function() {
    console.log(this.name + ',hi');
}
Person.prototype.test = 'abc';
var p1 = new Person('zhangsan',14);
var p2 = new Person('lisi',15);
p1.name = 'wangwu'
// 这里只是往实例对象中添加了 test 属性，而不是在原型链中找到并修改 test
p1.test = '123'
console.log(p1.name,p1.test); // wangwu 123
console.log(p2.name,p2.test); // lisi abc
```



### 建议的原型书写

之前在给对象添加原型属性的时候都要写一遍 Person.prototype ，为了减少不必要的输入，**可以用一个包含所有属性和方法的对象的字面量来重写原型对象**，不过这样会带来一个问题就是**对象会丢失它的 constructor 成员，所以在重写原型对象的时需要手动将 constructor 指向正确的构造函数**。写法如下

```javascript
function Person(name,age) {
    this.name = name;
    this.age = age;
}
Person.prototype = {
    constructor: Person,
    type: 'human',
    sayHi: function() {
        console.log(this.name + ',hi');
    }
}
```

- 私有成员（一般就是非函数成员）放到构造函数中
- 共享成员（一般就是方法）放到原型对象中
- 如果重置了 `prototype` 记得修正 `constructor` 的指向



静态成员与实例成员





## 继承

### call 方法和 bind 方法

bind() 方法改变 this 的指向，并返回一个函数

```javascript
function fn(x,y) {
    console.log(this);
    console.log(x + y);
}
var o = {
    name : 'zs'
}
var f = fn.bind(o,1,2);
f(); // {name:'zs'} 3
```

call 方法改变 this 指向并立即执行函数

```javascript
function fn(x,y) {
    console.log(this);
    console.log(x + y);
}
var o = {
    name : 'zs'
}
fn.call(o,2,3); // { name:'zs' } 7
```



### JS 实现继承的方法

#### 原型继承 + 借用构造函数继承

```javascript
// 父类
function Person(name,age,sex) {
	this.name = 'zs';
	this.age = 14;
	this.sex = '男';
}
Person.prototype.sayHi = function() {
    console.log(hello + 'this.name');
}
// 子类
function Student(name,age,sex,score) {
    // 利用 call 改变函数 this 指向，把当前 student 对象传入到 Person 中实现继承
    Person.call(this,name,age,sex); // 借用构造函数继承
		this.score = 100;
}
Student.prototype.exam = function () {
    console.log(this.score);
}
// 通过 new Person() 将原本 Student的原型对象(Student.prototype) 改变成 Person 的实例对象
// 而 Person 的实例对象又会有 __proto__ 指向 Person 的原型对象(Person.prototype)
// 这样就可以实现继承到 Person 原型对象中的方法
Student.prototype = new Person(); // 原型继承 通过原型让子类型继承父类型中的方法
// 要记住设置回原来的 constructor 属性
Student.prototype.constructor = Student;
function Teacher(name,age,sex,salary) {
 	Person.call(this,name,age,sex);
    this.salary = salary;
}
Teacher.prototype.getSalary = function() {
    console.log(this.salary)
}
Teacher.prototype = new Person();
Teacher.prototype.constructor = Teacher;

var p1 = new Person('zs',14,'男');
console.dir(p1);
var s1 = new Student('lisi',15,'男');
console.dir(s1);
var t1 = new Teacher('wangwu', 16, '女');
console.dir(t1);

```



## 函数进阶

### 函数定义方式

1. **函数声明**

```javascript
function fn(){}
```

2. **函数表达式**

```javascript
var fn = function () {}
```

3. new Function （不用） 此例说明函数也是对象

```javascript
var fn = new Function('a','b','console.log(a + b)');
fn(1,2);
console.dir(fn);
```

**函数声明和函数表达式的区别**

1. 函数声明方式必须要有函数名，函数声明方式会有函数提升，在预解析阶段已经创建，声明前后都已调用
2. 函数表达式 类似变量赋值，可以不用有函数名，函数表达式没有变量提升，所以必须在表达式执行过后才能调用。



### 函数中 this 的指向

**函数内部的this，是由函数调用的时候来确定其指向的**

按函数调用方式不同， this 指向也会有所不同

1. **普通函数调用，this 指向 window**

```javascript
function fn() {
    console.log(this); // window
}
fn(); // 相当于 window.fn()  此时 this 指向 window
```

2. **方法调用  this 指向调用该方法的对象**

```javascript
var obj = {
    fn:function(){
        console.log(this)
    }
}
obj.fn();
```

3. **构造函数调用，构造函数内部 this 指向构造函数所创建的对象**
4. **作为事件的处理函数，this 指向触发该事件的对象**

```javascript
var btn = document.getElementsByTagName('body');
btn.onclick = function() {
    console.log(this); // 这里 this 指向 body
}
```

5. **作为定时器参数，this 指向window**

```javascript
setInterval(function() {
    console.log(this); // 这里 this 指向 window
},1000)
```

总结：

| 调用方式     | 非严格模式     | 备注                         |
| ------------ | -------------- | ---------------------------- |
| 普通函数调用 | window         | 严格模式下是 undefined       |
| 构造函数调用 | 实例对象       | 原型方法中 this 也是实例对象 |
| 对象方法调用 | 该方法所属对象 | 紧挨着的对象                 |
| 事件绑定方法 | 绑定事件对象   |                              |
| 定时器函数   | window         |                              |



### call 、apply 、bind 三个方法的应用

#### call 的应用

call 方法有多个参数，第一个参数为设置函数内部 this 的指向，其他参数对应函数的参数。

fun.call(thisArg，arg1，arg2，....)

此外，call 的返回值就是函数的返回值。

```javascript
// call 的应用演示
// 1. 通过数组的方法来操纵伪数组
var obj = {
    0 : 100,
    1 : 10,
    2 : 11,
    3 : 20,
    length : 4
}
// obj['4'] = 30;
// obj.length++;
// console.log(obj); // {0: 100, 1: 10, 2: 11, 3: 20, 4: 30, length: 5}
Array.prototype.push.call(obj,30);
console.log(obj); // {0: 100, 1: 10, 2: 11, 3: 20, 4: 30, length: 5}
Array.prototype.splice.call(obj,0,3);
console.log(obj); // {0: 20, 1: 30, length: 2}

// 2. 
var obj = {
	name: 'zs'
};
console.log(obj.toString()); // [object object]
var arr = [5, 9];
console.log(arr.toString()); // 5,9
console.dir(Object.prototype.toString.call(arr)); // [object,Array]
```

#### apply 的应用

apply 方法和 call 方法类似，区别在于 apply 只有两个参数，第一个参数是函数 this 指向，第二个是以数组形式呈现的参数列表。

fun.call(thisArg，[arg1,arg2,arg3....])

```javascript
// apply的应用案例：将数组展开成参数使用
// 1. Math 的 max 方法没办法求数组中的最大值,可以通过 apply 来实现 Math.max 求数组中的最大值
var arr = [5, 10, 1, 3, 6]
console.log(Math.max(arr)) // NaN
console.log(Math.max.apply(Math,arr)); // 10

// 2.console.log的应用
var arr = [1,2,3]
console.log(arr); // (3) [1, 2, 3]
console.log(1,2,3); // 1,2,3
console.log.apply(console,arr); // 1,2,3
```

#### bind 的应用

bind 方法有多个参数，第一个参数为设置函数内部 this 指向( 与 apply 和 call 相同 )，其他参数则对应函数的参数( 和 call 相同)，和 call 和 apply 不同的是，bind 方法不会调用函数，而是把函数复制一份并返回。

```javascript
// bind 的应用案例
// 案例 1 
x = 9;
var module = {
    x:81,
    getX : function() {
        return this.x;
    }
}
module.getX() // 81  此时 this 指向 module
var retrieveX = module.getX;
retrieveX() // 9  此时 this 指向 window
// 创建一个新的函数，将 this 绑定到 module 对象去
var boundGetX = retrieveX.bind(module);
boundGetX() // 81

// 案例 2
var obj = {
    name : 'zs',
    fn : function() {
        setInterval(function(){
            console.log(this.name); // 此时 this 指向为 window，没有 name 属性
        }.bind(this),1000) // 这里 bind 里的 this 指向调用时的实例对象
    }
}
obj.fn();

// 案例 3 
btn.onclick = function() {
    // 事件处理中的 this 指向的是触发该事件的对象
    // 可以通过 bind 来改变事件处理函数中的 this 指向
}.bind(obj);
```



### 函数对象中的其他成员

1. arguments 实参集合
2. caller 函数的调用者
3. length 形参的个数
4. name 函数的名称

```javascript
// 实例
function fn(x,y,z) {
    console.log(fn.arguments);
    // Arguments(3)[10,20,30,callee:ƒ,Symbol(Symbol.iterator): ƒ] 
    console.log(arguments.callee === fn); // true
    console.log(fn.caller); // f()
    console.log(fn.length); // 3
    console.log(fn.name); // fn
}
function f() {
    fn(10,20,30)
}
f();
```



### 高阶函数的概念

**高阶函数即：1. 函数可以作为参数   2. 函数可以作为返回值**

函数作为参数

```javascript
function eat(callback) {
    setTimeout(function() {
        console.log('吃完了')
        callback();
    },1000)
}
eat(function(){
    console.log('去唱歌');
})

// 模拟 sort 内部实现

```

函数作为返回值

```javascript
function getFun(type) {
    return function(obj) {
        return Object.prototype.toString.call(obj) === type
    }
}
var isArray = getFun('[object Array]')
var isObject = getFun('[object Object]')
console.log(isArray([])) // true
console.log(isObject({})) // true

// 生成随机整数
```



## 函数闭包

### 闭包的概念

在 JS 中，只有函数内部的子函数才能读取局部变量，而闭包就是能够读取其他函数内部变量的函数(作用域)，可以理解为定义在一个函数内部的函数。

在一个作用域中可以访问另一个作用域的变量。

本质上，闭包是将函数内部和外部连接起来的桥梁。

闭包使得函数(作用域)执行完毕后不会立即被清除，而依旧存在于内存中。



### 闭包的作用

**用处：**

1. 可以读取函数内部的变量

2. 让这些变量的值始终保存在内存中，不会在外层函数调用后被自动清除

**优点：**

1. 变量长期驻扎在内存中；

2. 避免全局变量的污染；

**缺点：**

​	常驻内存，会增大内存的使用量，使用不当会造成内存泄露



### 闭包示例

```javascript
// 简单示例
function fun() {
    var n = 10;
    return function(){
        return n;
    }
}
var f = fun();
console.log(f());

// 给 li 添加点击事件 输出对应索引
var heroes = document.getElementById('heroes');
var list = heroes.children;
for(var i = 0; i < list.length; i++) {
    (function(i){
        list[i].onclick = function(){
            console.log(i);
        }
    })(i)
}

// 定时器中的使用
console.log('start')
for(var i = 0; i < 3; i++) {
    (function(i) {
        setTimeout(function(){
            console.log(i)
        },0)
    })(i)
}
console.log('end');
```

```javascript
<div id="box">
	<button size="12">按钮1</button>
    <button size="14">按钮2</button>
    <button size="16">按钮3</button>
</div>
<script>
	function changeSize(size) {
    	return function () {
        	document.body.style.fontSize = size + 'px'
		}
	}
    var box = document.getElementById('box');
    var btns = box.children;
    for( var i = 0; i < btns.length; i++ ){
    	var btn = btns[i];
        var size = btn.getAttribute('size');
        btn.onclick = changeSize(size);
	}
</script>
```



### 闭包思考题

思考题 1：

```javascript
var name = "The Window";
var object = {
  name: "My Object",
  getNameFunc: function () {
    return function () {
      return this.name;
    };
  }
};

console.log(object.getNameFunc()())
```

思考题 2：

```javascript
var name = "The Window";　　
var object = {　　　　
  name: "My Object",
  getNameFunc: function () {
    var that = this;
    return function () {
      return that.name;
    };
  }
};
console.log(object.getNameFunc()())
```



## 对象的拷贝

### 浅拷贝

拷贝对象时，浅拷贝只是复制了对象 (数组) 的引用地址，两个对象指向同一个内存地址，所以修改其中任意的值，另一个值都会随之变化，这就是浅拷贝。

```javascript
// 浅拷贝示例
var obj1 = {
    name: 'zs',
	age: 14,
    sex: '男',
    dog: {
    	name: '金毛',
        age: 2,
        yellow: '黄色'
	}
}
var obj2 = {};
for(var key in obj1){
    obj2[key] = obj1[key]
}
console.dir(obj2); 
obj1.dog.name = 'xxx'
console.dir(obj2); // dog.name 属性被改变
```



### 深拷贝

深拷贝是将对象及值复制过来，两个对象修改其中任意的值另一个值不会改变，这就是深拷贝。

```javascript
var obj1 = {
	name: 'zs',
	age: 14,
    sex: '男',
    dog: {
    	name: '金毛',
        age: 2,
        yellow: '黄色'
	}
}
var obj2 = {}
// 1. 应用递归方法实现深拷贝
function deepCopy1(o1,o2){
	for(var key in o1) {
		var item = o1[key];
		if(item instanceof Object){
			o2[key] = (item instanceof Array) ? [] : {};
			deepCopy(item,o2[key]);
		}else {
			o2[key] = item
		}
	}
}
// 2. 应用 json 方法实现深拷贝
function deepCopy2(o1,o2) {
	o2 = JSON.parse(JSON.stringify(o1))
    return o2;
}
deepCopy(obj1, obj2);
console.log(obj2);
obj1.dog.name = 'xxx';
console.log(obj2);
```

