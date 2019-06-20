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