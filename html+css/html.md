## 浏览器内核

浏览器内核又可以分成两部分：**渲染引擎**和 **JS 引擎**。

**渲染引擎**：它负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入 CSS 等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。
**JS 引擎**：解析 Javascript 语言，执行 javascript语言来实现网页的动态效果。

最开始渲染引擎和 JS 引擎并没有区分的很明确，后来 JS 引擎越来越独立，内核就倾向于只指渲染引擎。



### 常见浏览器内核

* **Trident ( IE 内核 )**

代表： IE、傲游、Avant、腾讯TT、猎豹安全浏览器、360极速浏览器、百度浏览器等。

国内很多的双核浏览器的其中一核便是 Trident，美其名曰 "兼容模式"。

Window10 发布后，IE 将其内置浏览器命名为 Edge，Edge 最显著的特点就是新内核 EdgeHTML

* **Gecko （ firefox ）**

Mozilla FireFox(火狐浏览器) 采用该内核，Gecko 的特点是代码完全公开，因此，其可开发程度很高，全世界的程序员都可以为其编写代码，增加功能。

* **Webkit ( Safari )**

苹果公司开发的浏览器

代表浏览器：傲游浏览器3、 Apple Safari (Win/Mac/iPhone/iPad)、Symbian手机浏览器、Android 默认浏览器

* **Blink/Chromium ( chrome )**

chrome 内核，Blink 实际上是 Webkit 的分支，大部分国产浏览器最新版都采用 Blink 内核



## Web 标准

WEB标准不是某一个标准，而是一系列标准的集合，包括 XHTML1.0、CSS2.0、DOM1.0 和 ECMA JavaScrit 等。**网页主要由三部分组成：结构（Structure）、表现（Presentation）和行为（Behavior）。**

**结构标准：**结构用于对网页元素进行整理和分类，主要包括XML和XHTML两个部分。

**表现标准：**表现用于设置网页元素的版式、颜色、大小等外观样式，主要指的是CSS。

**行为标准：**行为是指网页模型的定义及交互的编写，主要包括DOM和ECMAScript两个部分

**Web 标准的好处**

*1*、让Web的发展前景更广阔 
*2*、内容能被更广泛的设备访问(**可访问性**)：语义化的HTML（结构和表现相分离的HTML）编写的网页文件，更容易被屏幕阅读器识别
*3*、更容易被搜寻引擎搜索：语义化的HTML能更容易被搜索引擎解析，提升排名
*4*、降低网站流量费用
*5*、使网站更易于维护：只需更改CSS文件，就可以改变整站的样式
*6*、提高页面浏览速度

**可用性、可维护性、可访问性**

可用性：产品是否容易上手，用户体验怎么样，可用性好是企业的核心竞争力
可维护性：出现问题时，修复bug的成本低则维护性好，还有一点是代码能够被其他开发人员理解，毕竟我们不是一个人再做产品
可访问性：就是所有人（盲人）都能理解你的网页。



**Web 语义化**

* Web 语义化是指使用恰当语义的html标签、class类名等内容，让页面具有良好的结构与含义，从而让人和机器都能快速理解网页内容。

* 语义化的好处：
  1. 在页面丢失样式时，也能呈现出清晰的结构
  2. 有利于团队的开发和后期维护
  3. 有利于SEO（搜索引擎优化，搜索引擎通过爬取网页标签来判断内容）和 网络爬虫解析
  4. 屏幕阅读器会按照语义化的标签来 “读” 网页，便于无障碍阅读



## HTML

### 表格

**表格属性：**

| 属性名      | 含义                                 | 属性值           |
| ----------- | ------------------------------------ | ---------------- |
| border      | 表格边框（默认为无边框）             | 像素值           |
| cellspacing | 单元格与单元格之间的空白间距         | 像素值，默认为 2 |
| cellpadding | 单元格内容与单元格边框之间的空白间距 | 像素值，默认为 1 |

### 合并单元格

* 跨行合并：rowspan
* 跨列合并：colspan



### 表单域

<form action="url地址" method="提交方式" name="表单名称">
  各种表单控件
</form>

常用属性：

1. action：在表单收集到信息后，需要将信息传递给服务器进行处理，action属性用于指定接收并处理表单数据的服务器程序的url地址。
2. method：用于设置表单数据的提交方式，其取值为get或post。
3. name：**用于指定表单的名称，以区分同一个页面中的多个表单**。

### input 控件

**input 属性**

| 属性      | 属性值     | 描述                                            |
| --------- | ---------- | ----------------------------------------------- |
| type      | text       | 单行文本输入框                                  |
| type      | password   | 密码输入框                                      |
| type      | radio      | 单选按钮，给多个 radio 指定同一 name 属性为一组 |
| type      | checkbox   | 复选框，                                        |
| type      | button     | 普通按钮                                        |
| type      | submit     | 提交按钮                                        |
| type      | reset      | 重置按钮                                        |
| type      | image      | 图像形式                                        |
| type      | file       | 文件域                                          |
| name      | 用户自定义 | 控件的名称                                      |
| value     | 用户自定义 | input 控件中的默认文本值                        |
| size      | 正整数     | input 控件显示的宽度                            |
| checked   | checked    | 控件选项选中                                    |
| maxlength | 正整数     | 控件允许输入的最多字符数                        |

### label标签

用于绑定一个表单元素, 当点击label标签的时候, 被绑定的表单元素就会获得输入焦点。

for 属性规定 label 与哪个表单元素绑定。

```html
<label for="male">Male</label>
<input type="radio" name="sex" id="male">
<label for="female">Female</label>
<input type="radio" name="sex" id="female">
```



## HTML 和 HTML 5 的区别

### 文档类型设定

HTML4 ： <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"<http://www.w3.org/TR/html4/strict.dtd>">

HTML5 ：<!DOCTYPE html>



### 字符设定

<meta http-equiv="charset" content="utf-8">：HTML与XHTML中建议这样去写

<meta charset="utf-8">：HTML5的标签中建议这样去写



### 新增语义化标签

- header：定义文档的页眉 头部
- nav：定义导航链接的部分
- footer：定义文档或节的页脚 底部
- article：定义文章。
- section：定义文档中的节（section、区段）
- aside：定义其所处内容之外的内容 侧边
- datalist：定义选项列表，与 input 元素配合使用

```html
<input type="text" value="输入明星" list="star"/> <!--  input里面用 list -->
<datalist id="star">   <!-- datalist 里面用 id  来实现和 input 链接 -->  
	<option>刘德华</option>
    <option>刘若英</option>
    <option>刘晓庆</option>
    <option>郭富城</option>
    <option>张学友</option>
    <option>郭郭</option>
</datalist>
```

- fieldset ：可将表单内的相关元素分组，打包，与 legend 搭配使用

```html
<fieldset>
	<legend>用户登录</legend>  标题
    用户名: <input type="text"><br /><br />
    密　码: <input type="password">
</fieldset>
```



### 新增的 input 元素 type 属性

| **类型\******     | **使用示例\******       | **含义\******        |
| ----------------- | ----------------------- | -------------------- |
| **email\******    | <input type="email">    | 输入邮箱格式         |
| **tel\******      | <input type="tel">      | 输入手机号码格式     |
| **url\******      | <input type="url">      | 输入url格式          |
| **number\******   | <input type="number">   | 输入数字格式         |
| **search\******   | <input type="search">   | 搜索框（体现语义化） |
| **range\******    | <input type="range">    | 自由拖动滑块         |
| **time\******     | <input type="time">     | 小时分钟             |
| **date\******     | <input type="date">     | 年月日               |
| **datetime\****** | <input type="datetime"> | 时间                 |
| **month\******    | <input type="month">    | 月年                 |
| **week\******     | <input type="week">     | 星期 年              |



### 新增 input 元素的属性

| **属性\******         | **用法\******                                  | **含义\******                                                |
| --------------------- | ---------------------------------------------- | ------------------------------------------------------------ |
| **placeholder\******  | <input type="text" placeholder="请输入用户名"> | 占位符  当用户输入的时候 里面的文字消失  删除所有文字，自动返回 |
| **autofocus\******    | <input type="text" autofocus>                  | 规定当页面加载时 input 元素应该自动获得焦点                  |
| **multiple\******     | <input type="file" multiple>                   | 多文件上传                                                   |
| **autocomplete\****** | <input type="text" autocomplete="off">         | 规定表单是否应该启用自动完成功能  有2个值，一个是on 一个是off      on 代表记录已经输入的值  1.autocomplete 首先需要提交按钮  2.这个表单您必须给他名字 |
| **required\******     | <input type="text" required>                   | 必填项  内容不能为空                                         |
| **accesskey\******    | <input type="text" accesskey="s">              | 规定激活（使元素获得焦点）元素的快捷键   采用 alt + s的形式  |



### 新增多媒体标签

- embed：标签定义嵌入的内容

```html
<embed src="http://player.youku.com/player.php/sid/XMTI4MzM2MDIwOA==/v.swf" allowFullScreen="true" quality="high" width="480" height="400" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>
```

- audio：播放音频

  属性：autoplay 自动播放 、controls 是否显示播放控件，默认不显示、loop 循环播放，值为 -1 时无限循环

- video：播放视频

  属性：同 audio ，另外有 width 和 height 属性控制视频播放窗口的宽度和高度



### HTML 废弃标签

有浓厚的样式作用的标签，干涉了 css 的作用

```html
<b>加粗</b>
<u>下划线</u>
<i>倾斜</i>
<del>删除线</del>
<em>强调</em>
<strong>强调</strong>
<br /> 换行
```



## H5 新增 API

### 网络状态

window.navigator.onLine 和 window.navigator.offLine 事件可以通过 window 来监听当前的网络状态并返回一个布尔值



### 全屏显示

全屏显示可以是任何元素

存在兼容性问题，即使高版本浏览器也有兼容性问题

* requestFullScreen() 开启全屏显示
* cancelFullScreen() 关闭全屏显示，**取消全屏跟元素没有关系，直接 document.cancelFullScreen**
* document.fullScreen 属性检测当前是否处于全屏状态，**它不是一个方法**
* 全屏伪类选择器  : full-screen / : webkit-full-screen{}  / :moz-full-screen {}

不同浏览器需添加前缀 : 

webkitRequestFullScreen / mozRequestFullScreen / **msRequestFullscreen**

webkitCancelFullScreen / mozCancelFullScreen / **msCancelFullscreen**

webkitIsFullScreen  /  mozIsFullScreen



### 文件读取

* **Files 对象**

  H5 通过 type 为 file 的 input 表单上传文件后，能够得到一个 File 对象，File 对象中有一个 files 属性，里面存放的是上传文件列表。

* **FileReader 对象**

  FileReader 对象用来读取 File 对象中 files 里的文件内容，使用方法：

  ```javascript
  var reader = new FileReader();
  // FileReader 的实例方法
  // readAsDataURL() 以 DataURL 的形式读取文件
  // readAsText() 读取文件里的文本内容
  // 事件监听 onload ，当文件读取完成时调用
  // 属性  result  ，文件读取完成后会将读取结果放到 result 属性中
  reader.onload = function() {
      console.log(this.result)
  }
  ```



### 地理定位

* navigator.geolocation.getCurrentPosition(successCallback,errorCallback)

  获取当前地理位置信息

  成功获取地理信息后会调用自定义的 successCallback 函数，并返回一个包含位置信息的对象 position

  ```javascript
  position.coords.latitude 纬度
  position.coords.longtitude 经度
  position.coords.accuracy 精度
  position.coords.altitude 海拔高度
  ```

  获取地理信息失败会调用自定义的 errorCallback 函数并返回错误信息对象 error，可通过 error.code 查看具体的错误 

* navigator.geolocation.watchPosition(successCallback,errorCallback)

  监听当前地理位置信息

http://www.w3school.com.cn/html5/html_5_geolocation.asp



* 百度地图 API

  http://lbsyun.baidu.com/



### 拖拽 API

将需要拖拽的元素设置属性 draggable = true 即可让元素可拖拽，链接和图片默认是可以拖拽的，不需要设置这个属性

* 被拖动对象的触发事件

  **ondragstart** : 对象开始被拖动

  **ondrag** : 对象正在拖动的过程中

  **ondragend** : 对象拖动结束

* 目标对象触发的事件

  **ondragenter** : 被拖动对象进入目标对象

  **ondragover** : 被拖动对象停在目标对象上方

  **ondragleave** : 被拖动对象离开了目标对象

  **ondrop** ：被拖动对象在目标对象上释放

**注意：若想触发 ondrop 事件，就必须在 ondragover 事件中取消其默认行为**

* **event.dataTransfer**

  event.dataTransfer 对象用来保存被拖动的数据

  event.dataTransfer.setData("key",value) 一般在 ondragstart 时设置

  event.dataTransfer.getData("key") 一般在 ondrop 时获取



### Web 存储

**特性：**

1. 容量大，sessionStorage 约为 5M，loacalStorage 约为 20M
2. 只能存储字符串，可以将对象使用 JSON.stringify() 后存储
3. 设置和读取方便，页面刷新而不丢失数据

**window.sessionStorage**

生命周期为关闭浏览器窗口

在同一个窗口(页面)下的数据可以共享

**window.localStorage**

除非手动删除，否则永久生效，关闭页面也会存在

可以多窗口页面共享（同一浏览器共享）

**方法**

* setItem(key,value) 设置存储内容
* getItem(key,value) 读取存储内容
* removeItem(key) 删除键值为 key 的存储内容
* clear()  清除所有存储内容



**WebSQL，indexDB**



### 应用缓存

H5 可以通过创建一个 cache manifest 的文件来构建一个离线应用

* **优势**

  1. 可配置需要缓存的资源
  2. 网络无连接应用仍然可用
  3. 本地读取缓存，提升访问速度
  4. 减少请求，缓解服务器负担

* **用法**

  1. **创建缓存清单 xxx.appcache**

     缓存清单由三部分组成：**1. 顶行的 CACHE MANIFEST、2. CACHE 、3. NETWORK、4. FALLBACK**

  ```
  CACHE MANIFEST
  
  #CACHE里写需要缓存的资源
  CACHE:
  ./images/img1.jpg
  ./images/img2.jpg
  
  #NETWORK里写需要有网络才能访问的资源，无网络则不访问
  NETWORK: 
  ./images/img1.jpg
  ./images/img2.jpg
  
  #FALLBACK里写当某些资源访问不到的时候，用这些资源替换
  FALLBACK:
  ./images/img4.jpg ./images/img5.jpg
  ```

  	2. **在 html 标签中引入缓存清单**

  ```html
  <html lang="en" manifest="xxx.appcache"></html>
  ```

  注意

  ```javascript
  1. 可以指定多个 CACHE / NETWORK / FALLBACK，且没有顺序限制
  2. #表示注释
  3.chrome 可以通过 chrome://appcache-internals/工具和离线（offline）模式来调试管理应用缓存
  ```

  

### 多媒体组件方法

方法：load()、play()、pause()

属性：currentSrc、currentTime、duration

事件：oncanplay，  ontimeupdate，onended 等

[**参考文档**](http://www.w3school.com.cn/tags/html_ref_audio_video_dom.asp)

http://www.w3school.com.cn/tags/html_ref_audio_video_dom.asp