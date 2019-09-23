## 函数

**函数返回值**

```javascript
如果函数没有显示的使用 return 语句 ，那么函数有默认的返回值：undefined
如果函数使用 return 语句，那么跟在 return 后面的值，就成了函数的返回值
如果函数使用 return 语句，但是 return 后面没有任何值，那么函数的返回值也是：undefined
函数使用return语句后，这个函数会在执行完 return 语句之后停止并立即退出，也就是说return后面的所有其他代码都不会再执行。

推荐的做法是要么让函数始终都返回一个值，要么永远都不要返回值。
```

**函数中的 arguments**

```
arguments 是函数的一个内置属性对象，其中存储了传递的所有实参，arguments 也是一个伪数组，可以进行遍历
```

**命名函数与匿名函数**

```javascript
// 1. 此函数为命名函数
function fun(){
	console.log('hellow');
}
// 2. 此函数为匿名函数,匿名函数没有名字，无法单独存在。
function () {
	console.log('hello');
}
```

想要使用匿名函数，可以：1. 将匿名函数赋值给变量，通过变量调用。 2. 匿名函数自调用

```javascript
// 通过变量调用：
var fn = function () {
	console.log('hello');
}
fn();
// 匿名函数函数自调用
(function (){
	console.log('hello');	
})();
```

**函数也是一种数据类型**

```javascript
function fn(){
	console.log('hello');
}
console.log(typeof fn); // function
```

**函数可作为参数和返回值**

```javascript
// 因为函数也是一种数据类型，所以函数也可以作为另一个函数的参数或这返回值
function fun1(){
	var a = 10;
	return a;
}
function fun2(fun){
	var b = 11;
	return function(){
		console.log(fun() + b);
	}
}
var result = fun2(fun1);// 这里的result接收的是一个函数
result();
```



## 作用域和预解析

**作用域：**变量可以起作用的范围

**全局变量：**在任何地方都能访问到的变量，对应全局作用域

**局部变量：**只在固定的代码片段内才可以访问到的变量，例如函数内部定义的变量，对应局部作用域 ( 在函数内部不使用 var 声明的变量是全局变量，但是不推荐使用这种方式 )

**块级作用域**：ES5之后的才有的概念，即用 花括号 {} 包裹住的范围



### 作用域链

函数能够制造作用域结构，那么只要是 js 代码，就至少有一个作用域 ( 即全局作用域 ) ；如果代码中有函数，这个函数就会在全局作用域中构成另一个作用域；若函数中还有函数，原本函数的作用域就又诞生了另一个作用域。

将所有的作用域列出来可以形成一个结构：函数内指向函数外的链式结构，这被称为作用域链。

```javascript
var num = 456; --- 0 级作用域
function f1() { --- 1 级作用域
	var num = 123
    function f2() { --- 2级作用域
        console.log(num);  
    }
    f2();
}
f1();// 输出 123，调用时会现在本作用域中寻找变量，若找到则赋值，若找不到则会向上级作用域寻找，以此类推。 
```

![06-2](media\06-2.png)



### 预解析

js 代码由浏览器中的 js 解释器来执行，它解释 js 代码的时候分为两个过程：1. 预解析 2. 代码执行。 

预解析的过程：

1. 把变量的声明提升到当前作用域的最前面，只会提升声明，不会提升赋值
2. 把函数的声明提升到当前作用域的最前面，只会提升声明，不会提升调用
3. 先提升 var，再提升function

```javascript
// 案例1
var a = 25;
function abc(){
	alert(a);
	var a = 10;
}
abc();
// 预解析后:
var a;
function abc(){
    var a
    alert(a); // undefined
    a = 10;
}
abc();

// 案例2
console.log(a);
function a() {
    console.log('aaaaa');
}
var a = 1;
console.log(a);
// 预解析后：
var a;
function a() {
    console.log('aaaa');
}
// 预解析过程中如果函数名和变量名相同，此时函数优先
console.log(a); // 打印出 function a
a = 1;
console.log(a);

// 案例 3
var num = 10;
fun();
function fun() {
  console.log(num);
  var num = 20;
}
//解析后
var num;
function fun() {
    var num;
    console.log(num);
    num = 20;
}
num = 10;
fun(); // undefined

// 案例 4
var a = 18;
f1();
function f1() {
  var b = 9;
  console.log(a);
  console.log(b);
  var a = '123';
}
//解析后
var a;
function f1() {
    var b;
    var a;
    b = 9;
	console.log(a); 
	console.log(b);
    a = '123';
}
a = 18;
f1();// undefined 9

// 案例 5
f1();
console.log(c);
console.log(b);
console.log(a);
function f1() {
  var a = b = c = 9;
  console.log(a);
  console.log(b);
  console.log(c);
}
// 解析后
function f1() {
    var a = 9;
    b = 9;
    c = 9;
	console.log(a);
	console.log(b);
	console.log(c);
}
f1(); // 9 9 9 9 9 undefied
console.log(c);
console.log(b);
console.log(a);
```



## 对象

**JavaScript 中有三种对象：自定义对象、内置对象(Math/Array/Date) 、浏览器对象**

**ECMAScript 中的对象：自定义对象、内置对象(Math/Array/Date)**

### 对象创建方式

1. 通过对象字面量创建

```javascript
var o = {
    name = 'zs';
    age = 12;
    sex: true,
	sayHi: function () {
    console.log(this.name);
  }
}
```

2. 通过 new Object() 创建

```javascript
var person = new Object(); // 在内存中创建了一个空对象
person.name = 'lisi';
person.age = 35;
person.job = 'actor';
person.sayHi = function() {
  console.log('Hello,everyBody');
}
```

3. 通过工厂方法(即一个方法)创建

```javascript
function createPerson(name,age,job) {
    var person = new Object();
    person.name = name;
    person.age = age;
    person.job = job;
    person.sayHi = function(){
        console.log('hello');
    }
    return person;
}
var zhangsan = createPerson('zhangsan',12,'actor');
```

4. 通过自定义构造函数创建

```javascript
function Person(name,age,job) {
	// this 指的是当前对象
	// 即如果 var p1 = new Person(...)，则 this 指的是 p1
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayHi = function(){
		console.log('hello');
	}
}
var person = new person('zhangsan',12,'actor')
```



### new 的执行过程

1. 在内存中创建一个新的空对象
2. 让 this 指向这个新的空对象
3. 执行构造函数，将构造函数中的属性和方法添加到这个新对象中
4. 返回这个新的对象



### this 的指向

函数在定义的时候 this 是不确定的，只有在调用的时候才能确定，有以下三种调用情况

**函数中的 this :**  这时函数内部的 this 指向全局 window

```javascript
function fun() {
	console.log(this);
}
fun(); // Window
```

**对象方法中的 this :** 被该对象调用，指向的是该对象

```javascript
var p = {
    name : 'zs',
	sayHi: function (){
		console.log(this);
	}
}
p.sayHi(); // Object {name:'zs',sayHi:function}
```

**构造函数中的 this :** 它是一个隐式对象，类似一个初始化的模型，所有的方法和属性都挂载在这个隐式对象上，后续再通过 new 关键字来调用，从而实现实例化

```javascript
function Person(){
    console.log(this)
}
var person = new Person(); // Person{}
```



### 对象的遍历和属性的删除

对象遍历：使用 for in

对象删除：delete object.attr

```javascript
// 遍历对象
var obj = {};
for (var i = 0; i < 10; i++) {
  obj[i] = i * 2;
}
for(var key in obj) {
  console.log(key + "==" + obj[key]);
}

// 删除对象属性
function fun() { 
  this.name = 'mm';
}
var obj = new fun(); 
console.log(obj.name); // mm 
delete obj.name;
console.log(obj.name); // undefined
```



### 内置对象

JavaScript 中的对象分为3种：内置对象、浏览器对象、自定义对象

JavaScript 提供多个内置对象：Math/Array/Number/String/Boolean...等

**Math对象**

```javascript
Math.PI						// 圆周率
Math.random()				// 生成随机数
Math.floor()/Math.ceil()	// 向下取整(取整)/向上取整(进1)
Math.round()				// 取整，四舍五入
Math.abs()					// 绝对值
Math.max()/Math.min()		// 求最大和最小值

Math.sin()/Math.cos()		// 正弦/余弦
Math.power()/Math.sqrt()	// 求指数次幂/求平方根
```

```javascript
// 案例 1 求10-20之间的随机数
function getRandomNumbers(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
var min = 10;
var max = 20;
getRandomNumbers(min,max);
// 案例 2 随机生成颜色RGB
function getRandomNumbers(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
function getRandomRgb() {
    var r = getRandomNumbers(0,255)
    var g = getRandomNumbers(0,255)
	var b = getRandomNumbers(0,255)
	console.log('rgb(' + r + ',' + g + ',' + b +')')
}
getRandomRgb()
// 案例 3 模拟实现 max()/ min()
var mymath = {
	max:function (){
    		var max = arguments[0];
    		for( var i = 1; i < arguments.length; i++) {
        		if(max < arguments[i]) {
            		max = arguments[i];
        		}
    		}
    		return max;
	}
    min:function (){
    		var min = arguments[0];
    		for( var i = 1; i < arguments.length; i++) {
        		if(min > arguments[i]) {
            		min = arguments[i];
        		}
    		}
    		return min;
	}
}
```

**Date对象**

Date 对象基于1970年1月1日（世界标准时间）起的毫秒数。

* Date 的构造函数

```javascript
new Date() // Sat Jun 08 2019 17:22:11 GMT+0800 (中国标准时间)
new Date(1498099000356) // Thu Jun 22 2017 10:36:40 GMT+0800 (中国标准时间)
new Date('2015-5-1') // 年-月-日 形式的字符串 Fri May 01 2015 00:00:00 GMT+0800 (中国标准时间)
new Date(2015, 4, 1)
```

* 获取 Date 的毫秒值

```javascript
// 使用 valueOf()
var now = new Date()
console.log(now.valueOf())

// 使用 Date.now() html5中提供的，有兼容性问题
var now2 = Date.now()

// 使用 + new Date()
var now3 = + new Date() // + 会使对象调用 valueOf() 方法
```

- 获取日期指定部分

```javascript
getTime()  	  // 返回毫秒数和valueOf()结果一样，valueOf()内部调用的getTime()
getMilliseconds() 
getSeconds()  // 返回0-59
getMinutes()  // 返回0-59
getHours()    // 返回0-23
getDay()      // 返回星期几 0周日   6周6
getDate()     // 返回当前月的第几天
getMonth()    // 返回月份，***从0开始***
getFullYear() //返回4位的年份  如 2016
```

```javascript
// 案例1 写一个函数，格式化日期对象，返回yyyy-MM-dd HH:mm:ss的形式
function DateFormat(date) {
    if(!date instanceof Date) {
        return;
    }
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hours = hours < 10 ? '0' + hours : hours;
  	minutes = minutes < 10 ? '0' + minutes : minutes;
  	seconds = seconds < 10 ? '0' + seconds :seconds;
    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
}
var date = new Date();
var dateformat = DateFormat(date);
console.log(dateformat);

// 案例2 计算时间差，返回相差的天/时/分/秒
function dateInterval(start,end) {
    var days,hours,minutes,seconds;
    var intervalSeconds = (end - start) / 1000;
    days = Math.round(intervalSeconds / 60 / 60 / 24);
    hours = Math.round(intervalSeconds / 60 / 60 % 24 );
    minutes = Math.round(intervalSeconds / 60 % 60 );
    seconds = Math.round(intervalSeconds % 60  );
    return {
        day:days,
        hour:hours,
        minute:minutes,
        second:seconds
    }
}
```



### 简单数据类型与复杂数据类型

简单数据类型：即基本数据类型(Number、NULL、undefined、String、Boolean)，也叫值类型，因为变量中存储中的是值本身

复杂数据类型：也叫引用数据类型，因为变量中存储的是值的地址，如对象，数组

**创建一个基本数据类型变量时，会在内存的栈中开辟一个空间存放变量的值，并将变量名指向它，当基本数据类型作为参数时，会在栈中开辟一个新的空间并复制实参的值，再将形参指向它。**

![1497497605587](media\1497497605587.png)

**创建一个复杂数据类型的变量时(如 new ) ，会先在内存的堆中开辟空间存放对象，并在内存的栈中开辟一个空间地址来指向堆中的那个对象。当复杂数据类型作为参数时，会在内存栈中开辟一个空间并复制原来实参的地址作为形参的地址，这个空间指向实参。**

![1497497865969](media\1497497865969.png)

```javascript
// 案例1
function Person(name,age,salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;
}
function f1(person) {
  person.name = "ls";
  person = new Person("aa",18,10);
}

var p = new Person("zs",18,1000);
console.log(p.name); // zs
f1(p);
console.log(p.name); // ls

// 案例 2
var num = 50;
function f1(num) {
    num = 60;
    console.log(num); // 60
}
f1(num);
console.log(num); // 50
```



### Array 对象

```javascript
// 1.使用构造函数创建数组对象
var arr = new Array();
var arr = new Array(1,2,3,4);

// 2. 使用字面量创建数组对象
var arr = [1,2,3];
```

```javascript
// 检测一个对象是否是数组 : 1.instanceof 关键字 2. Array.isArray() 方法
var arr = new Array();
arr instanceof Array // true
Array.isArray(arr); // true

var arr = new Array('zs',14,'abc')
// toString() 方法，把数组转换成字符串，用逗号分隔每一项
arr.toString();
// valueOf() 返回数组本身
arr.valueOf();
```

```javascript
//数组其他常用方法：
var arr = new Array('zs',14,'abc')
var str = arr.join('-');
console.log(str);
arr.reverse();
console.log(arr); // ["abc", 14, "zs"]
arr.shift();
console.log(arr) // [14,'abc']
arr.unshift('zs');
console.log(arr); // ['zs',14,'abc']

// 1 栈操作(先进后出)
push()
pop() 		//取出数组中的最后一项，修改length属性
// 2 队列操作(先进先出)
push()
shift()		//取出数组中的第一个元素，修改length属性
unshift() 	//在数组最前面插入项，返回数组的长度
// 3 排序方法
reverse()	//翻转数组
sort(); 	//即使是数组sort也是根据字符ASCII编码，从小到大排序
// 带参数的sort是如何实现的？

// 4 操作方法
concat()  	//用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
slice() 	//从当前数组中截取一个新的数组，不影响原来的数组，参数 start 从 0 开始, end 从 1 开始
splice()	//删除或替换当前数组的某些项目，参数 start, deleteCount, options(要替换的项目)
// 5 位置方法
indexOf()、lastIndexOf()   //如果没找到返回-1
// 6 迭代方法 不会修改原数组(可选)  html5
every()、filter()、forEach()、map()、some()
// 7 方法将数组的所有元素连接到一个字符串中。
join()
```

```javascript
// 案例1 找到数组中 a 出现的位置
var arr = ["c", "a", "z", "a", "x", "a"];
var index = 0;
while(index !== -1) {
    index = arr.indexOf('a',index);
    if(index !== -1) {
        console.log(index);
        index++
    }
}

//案例2 数组去重
var arr = ["c", "a", "z", "a", "x", "a"];
function clear(arr) {
    var o = {};
    for(var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if(o[item]){
            o[item] ++;
        }else {
            o[item] = 1;
        }
    }
    var newArr = [];
    for(var key in o) {
        if(o[key] == 1) {
            newArr.push(key);
        }else {
            if(newArr.indexOf(key) == -1) {
                newArr.push(key);
            }
        }
    }
    console.log(newArr);
    return newArr;
}
clear(arr);
```



### 基本包装类型

JS 中提供了三个特殊的简单类型 String / Number / Boolean

```javascript
var s1 = 'abc';
var s2 = s1.substring(5);
```

上面代码中，**s1 是一个基本类型，是没有任何属性或方法的；当调用 s1.substring()时，会先把 s1 包装成 String 类型的临时对象，再调用 substring 方法，最后销毁该临时对象**，等同于如下代码：

```javascript
var s1 = 'abc'
var _s1 = new String('abc');
var s2 = _s1.substring(5);
_s1 = null;
```

**创建基本包装类型的对象**

```javascript
var num = 18; // 数值基本类型
var num = Number('18') // 类型转换
var num = new Number(18) // 基本包装类型，对象

// Number 和 Boolean 基本包装类型基本不用，因为可能引起歧义,例如：
var b1 = new Boolean(false); // 注意，这里 b1的值是一个 Boolean 对象,而不是 false
var b2 = b1 && true; // true

```



### String 对象

**字符串不可变：字符串一旦被创建，它的值就不能被改变。**每新建一个字符串，都会开辟一块新的内存

```javascript
var s1 = 'abc';
s1[0] = 'd';
console.log(s1); // abc

// 下面的 lang 虽然输出了 JavaScript ，但是 lang 指向的已经不是原来的那块内存了
// 原来的 'Java',依然存在在内存中 
var lang = 'Java';
lang = lang + 'Script';
console.log(lang) // JavaScript
```

**String 对象常用方法**

```javascript
// 1 字符方法
charAt()    	// 获取指定位置处字符
charCodeAt()  	// 获取指定位置处字符的ASCII码
str[0]   		//HTML5，IE8+支持 和charAt()等效

// 2 字符串操作方法
concat()   		//拼接字符串，等效于+，+更常用 返回一个拼接后的字符串
// 下面方法的都是为了截取字符串，没有指定 end 或者 length 会自动截取到末尾
slice()    		//从start位置开始，截取到end位置，end取不到,返回截取后的字符串 
substring() 	//从start位置开始，截取到end位置，end取不到，返回截取后的字符串
substr()   		//从start位置开始，截取length个字符，返回截取后的字符串

// 3 位置方法
indexOf()   	//返回指定内容在元字符串中的位置，返回一个索引
lastIndexOf() 	//从后往前找，只找第一个匹配的，返回一个索引
// 4 去除空白   
trim()  		//只能去除字符串前后的空白
// 5 大小写转换方法
to(Locale)UpperCase() 	//转换大写
to(Locale)LowerCase() 	//转换小写
// 6 其它
search()  // 方法执行正则表达式和 String 对象之间的一个搜索匹配,方法返回匹配到的第一个索引，若匹配不到则返回 -1
replace()  // str.replace(regexp|substr, newSubStr|function)，只会替换第一个匹配，返回一个替换后的字符串
split()  // split() 方法使用指定的分隔符字符串将一个String对象分割成字符串数组
```

```javascript
// 案例
// 1. 字符下相关方法
// charAt()  返回指定索引的字符
var s1 = 'abcdef';
console.log(s1.charAt(0));
for(var i = 0; i < s1.length; i++) {
    console.log(s1.charAt(i));
}

// charCodeAt() 返回指定索引的字符的 ASCII 编码
var s1 = 'abcdef';
for(var i = 0; i < s1.length; i++ ){
    console.log(s1.charCodeAt(i));
}

// str[i]  H5 IE8+ 支持，和charAt() 等效
var s1 = 'abcdef';
for(var i = 0; i < s1.length; i++ ){
	console.log(s1[i])
}

// 截取字符串"我爱中华人民共和国"，中的"中华"
var str1 = '我爱中华人民共和国';
// slice()  从 start 位置开始，截取到 end ，end 取不到
str2 = str1.slice(2,4);
console.log(str2)
// substring() 同 slice()
// substr()  从 start 位置开始，截取 length 个字符
str3 = str1.substr(2,2);
console.log(str3);

// "abcoefoxyozzopp"查找字符串中所有o出现的位置
var str = 'abcoefoxyozzopp';
var index = 0;
while(index !== -1 ) {
	index = str.indexOf('o',index);
    if(index !== -1) {
    	console.log(index);
    	index++;
    }
}

// 把字符串中所有的o替换成!
var str = 'abcoefoxyozzopp';
var index = 0;
while (index !== -1) {
	index = str.indexOf('o', index);
    if (index !== -1) {
    	str = str.replace('o','!')
        index++;
     }
}
console.log(str)

// 把字符串中的所有空白去掉'   abc       xyz  a    123   '
var str = '   abc       xyz  a    123   ';
//  trim() 只能去除字符串前后的空白
s = str.trim();
console.log(s);
// split() 方法以指定方式分割字符串并返回一个数组
arr = str.split(' ');
console.log(arr);
// join() 方法以指定方式将数组拼接成字符串
str2 = arr.join('');
console.log(str2);

// 判断一个字符串中出现次数最多的字符，统计这个次数        
var str = 'abcoefoxyozzopp';
var o = {};
for(var i = 0; i < str.length; i++ ) {
	var item = str[i];
    if(o[item]) {
    	o[item]++;
    }else {
    	o[item] = 1;
    }
}
console.log(o);
var max = 0;
var char;
for(var key in o) {
	if(o[key] > max) {
		max = o[key];
		char = key;
	}
}
console.log(max);
console.log(char);

// 获取url中?后面的内容，并转化成对象的形式。例如：http://www.itheima.com/login?name=zs&age=18&a=1&b=2
var str = 'http://www.itheima.com/login?name=zs&age=18&a=1&b=2';
// 获取要截取字符串的首个索引
var index = str.indexOf('?') + 1;
// 截取字符串
str1 = str.substr(index);
str1 = str.substring(index);
console.log(str1);
// 以 & 来把字符串分割成数组
var arr = str1.split('&');
console.log(arr);
// 创建 url 后的对象内容
var o = {}
for(var i = 0; i < arr.length; i++) {
	var arr2 = arr[i].split('=');
	console.log(arr2);
	var key = arr2[0];
	var value = arr2[1];
	o[key] = value;
}
console.log(o);
```

