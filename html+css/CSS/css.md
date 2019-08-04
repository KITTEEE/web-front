## CSS 的三种引入方式

**行内式：**通过标签的 style 属性来设置

**内嵌式：**通过写在 html 文档的 head 标签里，用 style 标签定义

**外链式：**将所有样式放在一个或多个 css 文件里，再在 html 中通过 link 标签引入，或通过 @import 导入

```html
<link href="a.css" type="text/css" rel="stylesheet">// 推荐
```

```css
<style>
	@import url("样式文件地址")
</style>
```

```
link 和 @import 的区别
1. @import只有导入样式表的作用，而 link 不仅可以加载 css 文件还可以定义 RSS、rel 属性等
2. @import 在页面加载完毕后才加载，link 在页面加载的时候加载
3. @import 低版本浏览器不支持，link 无兼容问题
4. 可以通过 js 操作 dom 来插入 link 标签改变样式，@import 则不行。
```

**三者的样式权重：行内 > 内嵌 > 外链**



## CSS 中的选择器

### 标签、类、id 选择器

**标签选择器：**能够快速为页面中同类型的标签同一样式，但不能设计差异化样式

**类选择器：**可以为元素对象定义单独或相同的样式。

命名规范：

```
1. 长名称或词组可以使用横线来为选择器命名
2. 不建议使用 _ 下划线来命名 CSS 选择器。
3. 不用纯数字或中文来命名。
```

**id 选择器：**用法与类选择器相同，id 是唯一的，只能对应某一个具体元素。



### 复合选择器

**交集选择器**：两个选择器构成，第一个为标签选择器，第二个为 class 或 id 选择器，两者之间不能有空格。交集选择器比较少用。

```css
// 带有类名为 test 的 h3 应用这个效果
h3.test{ color:red; font-size:25px }
```

**并集选择器**：任意选择器通过逗号连接而成，可以用在某些选择器定义的样式部分相同和完全相同的情况

```css
// 类名为 test 的元素，h3 元素， div 元素，li 元素都应用这个效果
.test,h3,div,li { color: red; font-size: 25px}
```

**后代选择器**：用来选择元素或元素组的后代（子孙后代都会选择到）

```css
// 类名为 test 的元素下的 div 元素下的所有 h3 都应用这个效果
.test div h3{ color:red; font-size: 25px }
```

**子元素选择器**：只能选择作为某元素子元素的元素(只会选择子元素，不会选择到孙子或重孙等更下一代的元素)，使用 > 连接。

```css
.test > h3 { color: red; font-size: 25px;}
```



### 伪类选择器

**链接伪类选择器**

- **:link** 链接未访问时
- **:visited** 连接已访问
- **:hover** 鼠标移动到链接上
- **:active** 链接点击时

**结构伪类选择器（CSS3新增）**

- **:first-child :** 选取其父元素的首个子元素
- **:last-child :** 选取其父元素的最后一个子元素
- **:nth-child(n) :** 选取其父元素的第 n 个子元素，不论元素类型
- **:nth-last-child(n) :** 从最后一个子元素开始计数，选取其父元素的第 n 个子元素

**n 的取值可以是数字，公式（如 n，2n 等），或关键词（如：odd 奇数、even 偶数）**

- **:target** 目标伪类选择器，可用于选取当前活动的目标元素，如目录跳转

```css
ul li:first-child { color : red }
ul li:nth-child(4) { color : blue}
:target { color:red;font-size:30px }
```



### 伪元素选择器 (CSS3)

- **::first-letter：**选择文本的第一个单词或字（首字下沉效果）
- **::fitst-line：**文本第一行
- **::selection :** 改变选中文本的时的样式（默认为蓝底白字）
- **::before 和 ::after ：在选择元素的开始位置或结束位置创建一个元素，该元素为行内元素，必须结合 content 属性使用**

```css
div::before { content: "开始"}
div::after { content: "结束"}
```

```
1. CSS3的规范里“:”用来表示伪类，“::”用来表示伪元素。
2. :after、:before 在旧版本里是伪元素，但是在高版本浏览器下:after、:before会被自动识别为::after、::before，这样做的目的是用来做兼容处理。
```



### 属性选择器

| **选择器               | **示例 | **含义                              |
| ---------------------- | ------ | ----------------------------------- |
| **E[attr]\******       |        | 存在attr属性即可                    |
| **E[attr=val]\******   |        | 属性值完全等于val                   |
| **E[attr\*=val]\****** |        | 属性值里包含val字符并且在“任意”位置 |
| **E[attr^=val]\******  |        | 属性值里包含val字符并且在“开始”位置 |
| **E[attr$=val]\******  |        | 属性值里包含val字符并且在“结束”位置 |

```html
<ul>
	<li type='fruit' color='green'>西瓜</li>
	<li type='vegetable' color='greenyellow'>西兰花</li>
	<li type='meat'>牛肉</li>
	<li type='meat hot'>猪肉</li>
	<li type='drink hot'>可乐</li>
	<li type='drink hot'>雪碧</li>
	<li price='very-cheap'>红酒</li>
	<li price='very'>白酒</li>
</ul>
```

```css
/* 获取到 拥有 type 属性的元素 */
li[type] {
  border: 1px solid gray;
}
/* 获取 属性等于某个值的 元素 属性值 可以使用 引号进行包裹 */
li[type="vegetable"] {
  background-color: green;
}
/* 使用空格分隔的 多个属性 其中有某个属性即可获取 */
li[type~="hot"] {
  font-size: 40px;
}
/* 获取以某个属性开头的语法  */
li[color^='green'] {
  background-color: orange;
}
/* 获取以某个值 结尾的属性 */
li[type$='t']{
  color: hotpink;
  font-weight: 900;
}
/* 获取 属性中 拥有某个值的 元素 */
li[type*=ea] {
  font-size: 100px;
}
/*  如果属性的值 只有very 也能够获取  用来获取 多个属性 并且 使用-连接 */
li[price|='very'] {
  background-color: darkred;
}
```



### 其他选择器

多类名选择器：给标签指定多个类名来达到更多的选择目的。

```html
<div class="font14 font20 container"></div>
```

通配符选择器：

```html
* {
	margin:0;
	padding:0
}
```



## CSS 的三大特性

### 层叠

* **层叠性指的是同一个元素可以有多种CSS样式叠加**

* 如果作用了相同属性(样式冲突)，则根据优先级来决定最终样式

* 如果优先级相同，则按照书写顺序来决定最后的样式。

### 继承

* **继承性指的是子元素会继承父元素的某些样式**

* 想要给子元素设置一个可继承的属性，只需在父元素设置即可

* 可继承的属性：

  ```
  1. font 系列属性：如 font-weight/font-family/font-size/font-style
  2. 文本系列属性：如 text-align/line-height/word-spacing/letter-spacing/color
  3. 元素可见性 visibility
  ```

### 优先级

给元素设定样式时，由于设定的方式(如行内、内嵌、外链、选择器等)不同，因此会产生不同的权重，权重的高低形成了设置样式时的优先级，优先级越高则优先应用此样式。

* 权重计算

  | 继承或者* 的贡献值       | 0,0,0,0  |
  | ------------------------ | -------- |
  | 每个元素（标签）贡献值为 | 0,0,0,1  |
  | 每个类，伪类贡献值为     | 0,0,1,0  |
  | 每个ID贡献值为           | 0,1,0,0  |
  | 每个行内样式贡献值       | 1,0,0,0  |
  | 每个!important贡献值     | ∞ 无穷大 |

  注意：各数位之间是没有进 1 的，如不会有10 个标签选择器赶上一个类选择器的情况

* !important > 行内样式 > ID选择器 > 类选择器 > 标签 > 通配符 > 继承 > 浏览器默认属性

```
权重是优先级的算法，层叠是优先级的表现
```



## CSS的块与行 display

### 块级元素 block

块级元素通常会读字占据一整行或多整行，可设置宽度和高度对齐等，常用于网页布局和网页结构搭建

常见块级元素：<h1>~<h6>，<p>，<div> ，<ul>，<ol>，<li> 等

块级元素特点：

- **默认容器的宽度为 100%，因此总是从新行开始**
- **宽度高度，内外边距，行高都可控制**
- 可容纳行内元素及其他块元素



### 行内元素 inline

行内元素不占有独立区域，仅依靠自身内容或图片大小来支撑结构，一般不可以设置宽高或对齐等属性，常用于控制页面中文本的样式

常见行内元素：<a>，<span>，<strong>，<b>，<em>，<i>

行内元素特点：

- **默认宽度为其本身 content 内容的宽度** ，因此和相邻行内元素在一行上
- **无法设置宽度和高度，但水平方向的内外边距可以设置，垂直方向内外边距无法设置**
- 行内元素只能容纳文本或其他行内元素

```
1. 只有 文字 才能组成段落,因此 p 里面不能放块级元素，同理还有这些标签h1,h2,h3,h4,h5,h6,dt，他们都是文字类块级标签，里面不能放其他块级元素。
2. 链接里面不能再放链接
```



### 行内块元素 inline-block

常见行内块元素：<img>，<input>，<td> 等

行内块元素特点：

- 默认宽度为其本身内容的宽度
- 宽高度，内外边距和行高都可以设置
- 和相邻行内元素获取行内块元素在一行上



## CSS 盒模型

### 标准盒模型

CSS 盒模型本质上是一个盒子，它包括了 content(实际内容)、padding(内边距)、border(边框)、margin(外边距)。

所有的 html 元素都可以看成一个盒子，盒模型一般用来设计和布局。

**元素边框 border**

```css
// border-style可取值为:none,solid(单实线),dashed(虚线),dotted(点线),double(双实线)
border:border-width || border-style || border-color
```

**元素内边距 padding**

边框 border 与内容 content 的距离。

设置为三个值的时候，第一个值为 上，第二个值为左右，第三个之为下。

**元素外边距 margin**

盒子边框以外的距离。



### content 的宽度和高度

大多数浏览器，如Firefox、IE6及以上版本都采用了W3C规范

符合CSS规范的盒子模型的总宽度和总高度的计算原则是：

```
盒子的总宽度 = width + 左右内边距之和 + 左右边框宽度之和 + 左右外边距之和
```

```css
盒子的总高度 = height+上下内边距之和+上下边框宽度之和+上下外边距之和
```

```
注意
1. width 和 height 仅适用于块级元素，对行内元素无效
2. 计算盒子的总高度时，还需考虑上下两个盒子垂直外边距合并的情况
```

padding 不影响盒子大小的情况：当没有给块级元素指定宽度时，padding 不会影响盒子的宽度。	



### box-sizing 属性

**box-sizing 用来指定盒模型大小的计算方式。**

根据参数不同有两种不同的情况：

1. **box-sizing : content-box; 盒子大小为 width + padding + border**
2. **box-sizing : border-box; 盒子大小为 width，padding 和 border 是包含到width里面的**

默认为 content-box



### 外边距合并问题

使用 margin 定义块元素的垂直外边距时，可能会出现外边距的合并。

1. **相邻块元素垂直外边距的合并**（外边距塌陷）

   上下两个相邻的块级元素，如果上边的元素有 margin-bottom ，下边的元素有 margin-top，则他们之间的间距为两者之间的较大者，而不是两者之和。

2. **嵌套块元素垂直外边距的合并**

   在两个嵌套的块元素中，如果父元素没有上内边距及边框，则父元素的上外边距会与子元素的上外边距发生合并，合并后的值为两者中的较大者。即视父元素的上外边距为 0 也会发生合并。

   解决方法：

   * 为父元素定义亿像素的上边框或上内边距

   * 为父元素添加 overflow：hidden



### 外边距实现盒子居中

如果一个盒子满足一下两个条件：

* 盒子为块级元素
* 盒子具有宽度 width

则可以给盒子的左右外边距都设置为 auto，使得盒子水平居中

```css
div { width: 100px; margin:0 auto; }
```



### 盒模型布局稳定性

某些情况下，使用 width、padding、margin 等都能完成基本的布局，但由于这三个属性都有一定的不稳定性(比如 margin 塌陷等)，实际工作中，按稳定性划分，优先使用 

```
width > padding > margin
```

原因：

1. margin 有外边距合并问题，以及在 ie6 下有 margin 加倍的 bug
2. padding 会影响盒子的大小，需要进行加减计算
3. width 没有问题，经常使用宽度剩余法、高度剩余法来做布局。



### border-radius、box-shadow（CSS3）

* border-radius

* box-shadow

```css
box-shadow: 水平阴影 垂直阴影 模糊距离 阴影尺寸 阴影颜色 内外阴影(inset/outset)
```



## CSS 浮动

浮动是指，使设置了浮动属性的元素脱离标准文档流的控制，并移动到其父元素指定位置的过程。

浮动一开始的作用是做图片的文字环绕效果。

现在浮动经常用来使盒子在一行排列，利用这个特点来进行网页布局。

```
将元素的 display 设置为 inline-block 也可以使得元素在一行排列，但是元素与元素之间会有间隙，而使用浮动的话不会。
```



### 浮动的特性*

1. **浮动会脱离标准文档流，不占有原来的位置，压在文档流之上。（即漂浮，因此其他元素会顶替其位置）**

2. **浮动的元素总是找离他最近的父元素来对齐，且不会超过父元素的内边距范围**。

3. **浮动的元素的排列与上一个块级元素有关，如果上一个元素有浮动，则浮动元素会与其顶部对齐，若上一个元素没有浮动，则浮动元素会与其底部对齐。**

   **因此，一个父盒子里的子盒子必须全部浮动，才能使他们在一行对齐显示。**

4. **元素添加浮动属性后，会具有行内块的特性（即有宽高，在一行显示）。**



### 清除浮动





## 字体样式属性

### font-size 设置字号大小

单位解释：em rem px 

```
1. 网页中普遍使用 14px+
2. 尽量使用偶数数字自豪，ie6等老式浏览器支持奇数字号时会有 bug
```



### font-family 设置字体

**font-family** 可同时指定多个字体，中间以逗号隔开，表示如果浏览器不支持第一个字体，则尝试下一个字体。网页中常用字体有宋体、微软雅黑、黑体等。

**unicode 字体**：在 CSS 中设置字体名称可以写中文，但是在不同文件编码的文件中容易出现乱码错误，因此可以将中文转成 unicode 编码。如设置字体为 微软雅黑的 unicode 字体可设置为 

```css
font-family : "\5FAE\8F6F\96C5\9ED1"  // 表示字体为微软雅黑
```

避免字体名称乱码问题，还可以使用英文来替代，如：

```css
font-family: "Microsoft Yahei"
```

可以通过 escape() 来测试属于什么字体

| 字体名称    | 英文名称        | Unicode 编码         |
| ----------- | --------------- | -------------------- |
| 宋体        | SimSun          | \5B8B\4F53           |
| 新宋体      | NSimSun         | \65B0\5B8B\4F53      |
| 黑体        | SimHei          | \9ED1\4F53           |
| 微软雅黑    | Microsoft YaHei | \5FAE\8F6F\96C5\9ED1 |
| 楷体_GB2312 | KaiTi_GB2312    | \6977\4F53_GB2312    |
| 隶书        | LiSu            | \96B6\4E66           |
| 幼园        | YouYuan         | \5E7C\5706           |
| 华文细黑    | STXihei         | \534E\6587\7EC6\9ED1 |
| 细明体      | MingLiU         | \7EC6\660E\4F53      |
| 新细明体    | PMingLiU        | \65B0\7EC6\660E\4F53 |

```
1. 中文字体需要加""，引文字体一般不需要加引号。
2. 若字体名中包含 空格、#、$、等符号，则英文字体需要加""，如 font-family:"Times New Roman"
3. 设置英文字体时，英文字体名必须位于中文字体名之前。
4. 尽量使用系统默认字体
```



### font-weight 字体粗细

可用属性有 normal(400)、bold(700)、bolder、lighter，以及 100 ~ 900 (100 的整数倍)，实际开发中更常用数字来表示。



### font-style 字体风格

可用属性有 normal 、italic(斜体)、oblique(倾斜)。

平时很少给文字加斜体，反而喜欢给斜体标签(em / i) 改为 normal 样式。



### font 综合设置字体样式

可以使用 font 来对字体的样式来做综合设置，语法格式如：

```css
div { font: font-style font-weight font-size/lineheight font-family;}
```

必须按照上述样式顺序书写，否则不起作用。

不需要设置的属性可以省略，但是 font-size 和 font-family 属性必须写，否则不起作用。



## 外观样式属性

### color 文本颜色

color 有三种取值方式：

1. 预定义颜色值(如: red/blue)
2. 十六进制颜色值(如: #FF0000) 
3. RGB代码(如: 红色可表示为 rgb ( 255,0,0 ) 或 rgb( 100%,0%,0% ) 百分号不能省略)



### line-height 行间距

line-height 常用属性值有三种 px 、em 、和 百分比%，实际工作中用的较多的是 px

一般行距比字号大 7/8 个像素就 ok



### text-align、text-indent

**text-align：**设置文本内容对齐方式，可用属性有 left (左对齐) ，right (右对齐)，center (居中对齐)

**text-indent：**设置首行缩进，可设置不同单位的数值，设置 em 是相对字符宽度倍数，设置 百分比% 是相对浏览器窗口宽度，允许使用负值，一般使用 em。1 em 就是一个字的宽度。



### letter-spacing、word-spacing

**letter-spacing：**用于定义字间距，属性值可为不同单位数值，允许使用负值，默认为 normal

**word-spacing：**用于定义英文单词之间的间距，对中文字符无效，属性值同 letter-spacing

两者都可对英文进行设置，不同的是 letter-spacing 定义为字母之间的间距，word-spacing 定义为英文单词之间的间距。



### 颜色半透明及文字阴影 (CSS3)

CSS3 中可以设置颜色为半透明，语法如下：

```css
color:rgba(r,g,b,a) //a 为设置透明度，取值为 0~1 之间 
```

CSS3 中可使用 text-shadow 来为文字设置阴影效果，语法如下：

```css
// text-shadow:水平阴影位置 垂直阴影位置 模糊距离 阴影颜色
text-shadow:3px 4px 5px rgba(0,0,0,.5)
```

前两项必填，后两项可选填。



## 	CSS 背景 (background)

常用属性有：

* background-color  背景颜色
* **bakcground-image  背景图片**
* background-repeat   背景图片是否平铺
* background-position  背景图片的位置
* background-attachment  背景是固定还是滚动

### background-image

```css
background-image:(url)
```

指定一张图片展示在背景中(CSS3支持多张)，图片没有覆盖到的地方会被背景颜色填充。

背景图片的 url 提倡不加引号

### background-repeat

```css
background-repeat : repeat | no-repeat | repeat-x | repeat-y
```

设置背景图片时，默认图片在水平和垂直方向平铺铺满整个元素

### background-position

```css
background-position : 长度单位或方位名词
```

参数：长度单位(px等)或方位名词( top | center | left | right | bottom )

### background-attachment 背景附着

```css
background-attachment: scroll || fixed // 默认 scroll
```

scroll ：背景图像随着内容滚动

fixed : 背景图像固定



### background 属性简写

background 属性简写的书写顺序并没有强制的标准，建议写法如下：

```css
background: color url() repeat attachment position
```



### background-size 背景缩放（CSS3）

background-size 用来设置图片的尺寸，像设置 img 的尺寸一样，可设置的参数有：

* 长度单位或百分比，设置百分比时参照盒子的宽高
* cover  自动调整缩放比例，保证图片铺满背景。若有溢出则隐藏。
* contain 自动调整缩放比例，保证图片完整显示在背景中。



### 多背景(CSS3)

设置背景图片时以逗号分隔可以设置多张背景图片

```css
background:url(test1.jpg) no-repeat scroll 10px 20px/50px 60px,
	   url(test1.jpg) no-repeat scroll 10px 20px/70px 90px ,
	   url(test1.jpg) no-repeat scroll 10px 20px/110px 130px c #aaa;
```

如果设置的多张背景图片间存在着重叠关系，则前面的背景图会覆盖在后面的背景图之上。所以为了避免背景色盖住背景图，通常将背景色定义在最后一组上。