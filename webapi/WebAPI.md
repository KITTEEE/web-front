## 获取页面元素

1. 根据 id 获取元素（常用） : document.getElementById('idname')

2. 根据标签名获取元素（常用）：**获取到的divs是一个动态集合，即如果页面上增加了一个 div ，则 divs 会也会动态增加**

   document.getElementsByTagName('tagname')

3. 根据类名获取元素（**IE9 后才支持**）

   document.getElementsByClassName('classname') 

4. 根据选择器获取元素 ( **IE8 后才支持** )：

   document.querySelector（）只返回获取到的第一个元素 

   document.querySelectorAll（）能获取全部元素

   ```javascript
   // 
   var text = document.querySelecotr('#text');
   console.log(text); // 只获取到一个 id 名为 text 的元素
   
   // 
   var boxes = document.querySelectorAll('.box');
   console.log(boxes) // 可获取全部类名为 box 的元素
   
   ```



## 事件

### 事件三要素

1. 事件源：触发(被)事件的元素

2. 事件名称：如 click 点击事件

3. 事件处理：事件触发后要执行的代码(函数形式)



## 属性操作

### 非表单元素属性

**href、title、id、src、className**



- **innerHTML和innerText的区别**

1. innerHTML 获取内容时，如果内容中有标签，会把标签也获取到。
2. innerText 获取内容时，如果内容中有标签，会把标签过滤掉，而且会把前后的换行和空白也去掉。 
3. innerHTML 设置内容时，如果内容带有标签，会以HTML的方式来解析
4. innerText 设置内容时，如果内容中带有表i按，会在网页上把标签显示出来 ( html 中的转义符 )

- **innerText、textContent兼容性处理**

1. innerText 和 textContent 都是获取元素内部文本，谷歌浏览器两个都支持；新版火狐两个都支持但旧版火狐只支持 textContent；新版的 IE 两个都支持，但旧版 IE 只支持 innerText。

2. 浏览器兼容性处理：

   在一些框架中，其他的浏览器兼容性处理也是类似的原理

   ```javascript
   // 通过typeof的返回值来判断浏览器是否支持某元素的某个属性
   var box = document.getElementById('box');
   console.log(typeof box.a) // 当属性不存在时会返回 undefined
   console.log(typeof box.id) // 当属性存在时会返回该属性的类型
   
   // 因此 innerText 和 textContent 兼容性处理可以这样做
   function getInnerText(element) {
       if(typeof element.innerText === 'string') {
           return element.innerText
       }else {
           return element.textContent
       }
   }
   ```

- **HTML转义符**

  ```javascript
  "		&quot;
  '		&apos;
  &		&amp;
  <		&lt;   // less than  小于
  >		&gt;   // greater than  大于
  空格	   &nbsp;
  ©		&copy;
  ```



### 表单元素属性

- value 用于大部分表单元素的内容获取(option除外)
- type 可以获取input标签的类型(输入框或复选框等)
- disabled 禁用属性
- checked 复选框选中属性
- selected 下拉菜单选中属性



### 自定义属性操作

- getAttribute() 获取标签行内属性

- setAttribute() 设置标签行内属性(内置属性和自定义属性皆可设置)

- removeAttribute() 移除标签行内属性

- 与element.属性的区别: 上述三个方法用于获取任意的行内属性。

  ```javascript
  var box = document.getElementById('box');
  
  // 以下只能获得 box 的内置属性，获取不到我们自定义的属性
  console.log(box.age); // undefined
  console.log(box.personId); // undefined 
  
  // 获取自定属性需要使用 getAttribute()
  console.log(box.getAttribute('personId')) // 1
  console.log(box.getAttribute('age')); // 18
  
  // 设置/改变属性值 setAttribute()
  box.setAttribute('age','20');
  box.setAttribute('class','aaa')
  console.log(box.getAttribute('age')); // 20 
  console.log(box.className); // aaa
  
  //  移除属性值 removeAttribute()
  box.removeAttribute('class');
  box.removeAttribute('age');
  console.log(box.className); // ""
  console.log(box.getAttribute('age')); // null
  ```




### 样式操作

- 使用style方式设置的样式显示在标签行内

```javascript
var box = document.getElementById('box');
box.style.width = '100px';
box.style.height = '100px';
box.style.backgroundColor = 'red';
```

- 注意

  通过样式属性设置宽高、位置的属性类型是字符串，需要加上px

### 类名操作

- 修改标签的className属性相当于直接修改标签的类名

```javascript
var box = document.getElementById('box');
box.className = 'show';
```



## Node 节点

### 节点属性

- nodeType  节点的类型
  - 1 元素节点  （如 p 标签）
  - 2 属性节点  
  - 3 文本节点 （text  包括空格）
- nodeName  节点的名称(标签名称)
- nodeValue  节点值
  - 元素节点的nodeValue始终是null

```javascript
function Node(option) {
  this.id = option.id || '';
  this.nodeName = option.nodeName || '';
  this.nodeValue = option.nodeValue || '';
  this.nodeType = 1;
  this.children = option.children || [];
}

var doc = new Node({
  nodeName: 'html'
});
var head = new Node({
  nodeName: 'head'
});
var body = new Node({
  nodeName: 'body'
})
doc.children.push(head);
doc.children.push(body);

var div = new Node({
  nodeName: 'div',
  nodeValue: 'haha',
});

var p = new Node({
  nodeName: 'p',
  nodeValue: '段落'
})
body.children.push(div);
body.children.push(p);

function getChildren(ele) {
  for(var i = 0; i < ele.children.length; i++) {
    var child = ele.children[i];
    console.log(child.nodeName);
    getChildren(child);
  }
}
getChildren(doc);
```



### 节点层级

重点讲父子属性，兄弟属性画图讲解 

```javascript
var box = document.getElementById('box');
console.log(box.parentNode);
console.log(box.childNodes);
console.log(box.children);
console.log(box.nextSibling);
console.log(box.previousSibling);
console.log(box.firstChild);
console.log(box.lastChild);
```

- 注意

  childNodes和children的区别，**childNodes获取的是子节点，children获取的是子元素**

  **nextSibling和previousSibling获取的是节点，获取元素对应的属性是 nextElementSibling 和 previousElementSibling 获取的是元素**

  **nextElementSibling和previousElementSibling有兼容性问题，IE9以后才支持**



### 动态创建元素

* document.write()

  使用 document.write() 创建的元素会覆盖掉之前的整个页面

* document.createElement()

  ```javascript
  var p = document.createElement('p');
  p.innerText = 'hello';
  p.style.color = 'red';
  var box = document.getElementById('box');
  box.appendChild(p);
  ```

* innerHTML属性

  通过元素的 innerHTML 属性给其传入一个字符串来动态创建元素，由于创建的是字符串，所以会有性能问题，需要避免在循环中重复使用，可以借助字符串或数组的方式来进行替换，再设置给 innerHTML 来进行优化，优化后的性能跟createElement相近。

  ```javascript
  // 每次使用 innerHTML 时，都会使得页面重绘(重新生成 dom 树)
  // innerHTML 优化
  var array = ['<ul>'];
  var box = document.getElementById('box');
  btn.onclick = function () {
  	for (var i = 0; i < datas.length; i++) {
      	var data = datas[i];
          array.push('<li>' + data + '</li>');
  	}
      array.push('</ul>');
      box.innerHTML = array.join("");
  }
  ```

  

### 元素操作的方法

* createElement()
* appendChild()
* removeChild()
* insertBefore()  把元素插入到页面的指定位置
* replaceChild()  把当前元素的标签进行替换

```javascript
// insertBefore() 演示
var li = document.createElement('li');
li.innerText = 'abc';
// 把 li 插入到 ul 中的第二个子元素之前
ul.insertBefore(li,ul.children[1]);
// 把 ul 中的第一个子元素替换为 div
var div = document.createElement('div');
ul.replaceChild(div,ul.children[0])
```



## 事件操作

### 事件注册

事件注册的三种方式

* 通过给事件名赋予事件处理函数

  这种方法无法给对象的同一个事件注册多个事件处理函数

```javascript
// 示例
btn.onclick = function() {
    console.log('hello world');
}
```

* addEventListener

  第一个参数为事件名称(没有 on )，第二个参数为事件处理函数，第三个参数决定事件阶段为捕获还是冒泡，true 为捕获，false 为冒泡，默认为 false

  可以给同一个目标的同一个事件注册多个事件处理函数

```javascript
btn.addEventListener('click',function(){
    alert('hello world')
})
```

* attachEvent

  IE 老版本特有的方法 ( IE 6-10 )。第一个参数为事件名称，要加上 on

```javascript
btn.attachEvent('onclick',function() {
    console.log('hello world')
})
```

处理注册事件的兼容性问题

```javascript
function addEventListener(element,eventName,fn) {
    if(element.addEventListener) {
        element.addEventListener(eventName,fn);
    }else if(element.attachEvent) {
        element.attachEvent('on' + eventName,fn);
    }else {
        element['on' + eventName] = fn;
    }
}
```



### 事件移除

事件移除的三种方式

* 事件 = null

```javascript
btn.onclick = function() {
    console.log('hello world');
    btn.onclick = null // 移除事件
}
```

* removeEventListener( ' 事件名称 '，事件处理函数)

  使用 addEventListener 后想要移除事件，事件处理函数就不能为匿名函数

```javascript
function btnClick(){
    console.log('hello world');
    this.removeEventListener('click',btnClick);
}
btn.addEventListner('click',btnClick)
```

* detachEvent()

  detachEvent 兼容性同 attachEvent 一样在老版本 IE 支持

```javascript
function btnClick() {
    console.log('hello world');
    this.detachEvent('onclick',btnClick)
}
btn.attachEvent('onclick',btnClick);
```

事件移除的兼容性处理

```javascript
function removeEventListener(element,eventName,fn) {
    if(element.removeEventListener) {
        element.removeEventListener(eventName,fn)
    }else if( element.detachEvent ) {
        element.detachEvent('on' + eventName,fn)
    } else {
        element['on' + eventName] = null;
    }
}
```



### 事件的三个阶段

* **第一个阶段： 事件捕获阶段：事件由页面元素接收，逐级向下，到具体的元素**

* 第二个阶段： 执行当前点击的元素(目标) : 具体的元素本身

* **第三个阶段： 事件冒泡阶段：跟捕获相反，具体元素本身，逐级向上，到页面元素**

注意：attachEvent 只有事件冒泡，没有事件捕获。e.eventPhase 属性可以查看事件触发时所处的阶段



### 事件委托

**事件委托，又称为事件代理，即把原本需要绑定在子元素的响应事件（click、keydown......）委托给父元素，让父元素担当事件监听的职务。其原理是事件冒泡机制。**

事件委托有个优点，就是新添加的元素还会有之前的事件。



### 事件对象

在注册事件的时候可以通过传入事件参数 ( e ) ，可以获取到事件发生的时候和事件相关的一些数据。

* e 是事件对象，在老版本的 IE 中，事件对象是 window.event，处理事件对象的浏览器兼容性问题可以使用 e = e || window.event 来解决
* e.eventPhase 是表示事件的阶段 **1-事件捕获  2-目标  3-事件冒泡**
* e.target 表示真正触发事件的对象，在老版本 IE 中使用 e.srcElement。处理 e.target 的浏览器兼容性问题可以使用 var target = e.target || e.srcElement
* e.currentTarget 表示事件所属的对象，同 this
* e.type 事件的名称

```javascript
// 假设有一个 ul,给当前点击的 ul 中的 li 高亮显示
// 可以通过事件委托机制，将 li 的事件处理委托到 ul 中
ul.onclick = function(e) {
    // 获取到当前点击的 li
    // e.target 是真正触发事件的对象
	e.target.style.backgroundColor = 'red'
}
```

* e. clientX、e.clientY 获取鼠标在可视区域内的坐标

* e.pageX、e.pageY 获取鼠标在当前页面中的坐标（ IE 9 之后才支持，有兼容性问题）

  处理兼容性问题：pageX = clientX  + 页面横向滚动的距离

```javascript
// 如何获取页面滚动距离
// 一些浏览器使用 document.body.scrollLeft
// 一些浏览器使用 document.documentElement.scrollLeft
function getScroll() { // 获取页面滚动距离
	var scrollX = document.body.scrollLeft || document.documentElement.scrollLeft;
    var scrollY = document.body.scrollTop || document.documentElement.scrollTop;
    return {
    	scrollX: scrollX,
        scrollY: scrollY
	}
}
function getPageScroll(e) {
    e = e || window.event;
    var pageX = e.clientX + getScroll(e).scrollX;
    var pageY = e.clientY + getScroll(e).scrollY;
    return {
        pageX : pageX,
        pageY : pageY
    }
}
```



### 取消事件默认行为

* 在事件处理函数中 return false 
* 使用 **e.preventDefault()** ，标准方式
* IE 老版本中使用 **e.returnValue = true**



### 阻止事件冒泡

* **e.stopPropagation()**，标准方式
* IE 老版本中使用 **e.cancelBubble = true**，标准中已废弃