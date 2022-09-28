# 代码风格

## 代码格式化
样式书写一般有两种：一种是紧凑格式 (Compact)
```css
.rdc{ display: block;width: 50px;}
```
一种是展开格式
```css
.rdc{
    display: block;
    width: 50px;
}
```
团队约定：同意使用展开格式书写

## 代码大小写

样式选择器，属性名，属性值关键字全部使用小写字母书写，属性字符串允许使用大小写。

```css
/* 推荐 */
.rdc{
	display:block;
}
	
/* 不推荐 */
.RDC{
	DISPLAY:BLOCK;
}
```

## 分号

每个属性声明末尾都要加分号；

```css
.rdc {
    width: 100%;
    height: 100%;
}
```

## 代码易读性

左括号与类名之间一个空格，冒号与属性值之间一个空格

```css 
/* 推荐 */
.rdc { 
    width: 100%; 
}
/* 不推荐 */
.rdc{ 
    width:100%;
}
```

逗号分隔的取值，逗号之后一个空格

```css 
/* 推荐 */
.rdc {
    box-shadow: 1px 1px 1px #333, 2px 2px 2px #ccc;
}
/* 不推荐 */
.rdc {
    box-shadow: 1px 1px 1px #333,2px 2px 2px #ccc;
}
```

为单个css选择器或新申明开启新行

```css 
/* 推荐 */
.rdc, 
.rdc_logo, 
.rdc_hd {
    color: #ff0;
}
.nav{
    color: #fff;
}
/* 不推荐 */
.rdc,.rdc_logo,.rdc_hd {
    color: #ff0;
}.nav{
    color: #fff;
}
```

颜色值 rgb() rgba() hsl() hsla() rect() 中不需有空格，且取值不要带有不必要的 0

```css 
/* 推荐 */
.rdc {
    color: rgba(255,255,255,.5);
}
/* 不推荐 */
.rdc {
    color: rgba( 255, 255, 255, 0.5 );
}
```

不要为 0 指明单位

```css 
/* 推荐 */
.rdc {
    margin: 0 10px;
}
/* 不推荐 */
.rdc {
    margin: 0px 10px;
}
```

## 属性书写顺序

属性书写顺序:

* 布局定位属性：display / position / float / clear / visibility / overflow
* 自身属性：width / height / margin / padding / border / background
* 文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word
* 其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient …

```css
.rdc {
    display: block;
    position: relative;
    float: left;
    width: 100px;
    height: 100px;
    margin: 0 10px;
    padding: 20px 0;
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    color: #333;
    background: rgba(0,0,0,.5);
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
```
[mozilla官方属性顺序推荐](https://www.mozilla.org/zh-CN/css/base/content.css)

## CSS3浏览器私有前缀写法

CSS3 浏览器私有前缀在前，标准前缀在后

```css
.rdc {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
```
