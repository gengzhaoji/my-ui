# 语法选用

SASS有两种语法格式，一种是 SCSS (Sassy CSS)，另一种是缩进格式（Indented Syntax），有时称之为 Sass。

## SCSS

SCSS语法基于 CSS 语法扩展，每一个有效的 CSS 文件都是一个有效的具有相同含义的 SCSS 文件，换种说法就是 SCSS 能识别大多数的 CSS hacks 写法和浏览器前缀写法以及早期的 IE 滤镜写法，这种格式以 .scss 作为扩展名。

## SASS

Sass 使用 “缩进” 代替 “花括号” 表示属性属于某个选择器，用 “换行” 代替 “分号” 分隔属性，很多人认为这样做比 SCSS 更容易阅读，书写也更快速。缩进格式也可以使用 Sass 的全部功能，只是与 SCSS 相比个别地方采取了不同的表达方式，具体请查看 [the indented syntax reference](https://sass-lang.com/documentation/syntax)。这种格式以 .sass 作为拓展名。

## 团队约定

考虑到 SCSS 语法对 CSS 语法友好的兼容性和扩展性，我们在使用 SASS 编写样式的时候，统一使用 SCSS 语法

SCSS文件内

* 全部遵循 CSS 注释规范
* 不使用 /*! */ 注释方式
* 注释内不放 SASS 变量

标准的注释规范如下:
```css
/**
 * @desc File Info
 * @author liqinuo
 * @date 2015-10-10
 */

/* Module A
----------------------------------------------------------------*/
.mod_a {}

/* module A logo */
.mod_a_logo {}

/* module A nav */
.mod_a_nav {}


/* Module B
----------------------------------------------------------------*/
.mod_b {}

/* module B logo */
.mod_b_logo {}

/* module B nav */
.mod_b_nav {}
```

## 嵌套规范
### 选择器嵌套

```css
/* CSS */
.rdc {}
body .rdc {}

/* SCSS */
.rdc {
    body & {}
}

/* CSS */
.rdc {}
.rdc_cover {}
.rdc_info {}
.rdc_info_name {}

/* SCSS */
.rdc {
    &_cover {}
    &_info {
        &_name {}
    }
}
```
### 属性嵌套

```css
/* CSS */
.rdc {
    background-color: red;
    background-repeat: no-repeat;
    background-image: url(/img/icon.png);
    background-position: 0 0;
}

/* SCSS */
.rdc {
    background: {
        color: red;
        repeat: no-repeat;
        image: url(/img/icon.png);
        position: 0 0;
    }
}
```

## 变量

可复用属性尽量抽离为页面变量，易于统一维护

```css
// CSS
.rdc {
    color: red;
    border-color: red;
}

// SCSS
$color: red;
.rdc {
    color: $color;
    border-color: $color;
}
```
## 混合

根据功能定义模块，然后在需要使用的地方通过 @include 调用，避免编码时重复输入代码段

```css
// CSS
.rdc_1 {
    -webkit-border-radius: 5px;
    border-radius: 5px;
}
.rdc_2 {
    -webkit-border-radius: 10px;
    border-radius: 10px;
}

// SCSS
@mixin radius($radius:5px) {
    -webkit-border-radius: $radius;
    border-radius: $radius;
}
.rdc_1 {
    @include radius; //参数使用默认值
}
.rdc_2 {
    @include radius(10px);
}



// CSS
.rdc_1 {
    background: url(/img/icon.png) no-repeat -10px 0;
}
.rdc_2 {
    background: url(/img/icon.png) no-repeat -20px 0;
}

// SCSS
@mixin icon($x:0, $y:0) {
    background: url(/img/icon.png) no-repeat $x, $y;
}
.rdc_1 {
    @include icon(-10px, 0);
}
.rdc_2 {
    @include icon(-20px, 0);
}
```

## 站位选择器

如果不调用则不会有任何多余的 css 文件，占位选择器以 % 标识定义，通过 @extend 调用

```css
//scss
%borderbox {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.rdc {
    @extend %borderbox;
}
```

## extend继承

```css
// CSS
.rdc_1 {
    font-size: 12px;
    color: red;
}
.rdc_2 {
    font-size: 12px;
    color: red;
    font-weight: bold;
}

// SCSS
.rdc_1 {
    font-size: 12px;
    color: red;
}
.rdc_2 {
    @extend .rdc_1;
    font-weight: bold;
}

// 或者
%font_red {
    font-size: 12px;
    color: red;
}
.rdc_1 {
    @extend %font_red;
}
.rdc_2 {
    @extend %font_red;
    font-weight: bold;
}
```

## for循环

```css
/ CSS
.rdc_1 {background-position: 0 -20px;}
.rdc_2 {background-position: 0 -40px;}
.rdc_3 {background-position: 0 -60px;}

// SCSS
@for $i from 1 through 3 {
    .rdc_#{$i} {
        background-position: 0 (-20px) * $i;
    }
}
```
注意：#{} 是连接符，变量连接使用时需要依赖

## each 循环
```css
// CSS
.rdc_list {
    background-image: url(/img/rdc_list.png);
}
.rdc_detail {
    background-image: url(/img/rdc_detail.png);
}

// SCSS
@each $name in list, detail {
    .rdc_#{$name} {
        background-image: url(/img/rdc_#{$name}.png);
    }
}


// CSS
.rdc_list {
    background-image: url(/img/rdc_list.png);
    background-color: red;
}
.rdc_detail {
    background-image: url(/img/rdc_detail.png);
    background-color: blue;
}

// SCSS
@each $name, $color in (list, red), (detail, blue) {
    .rdc_#{$name} {
        background-image: url(/img/rdc_#{$name}.png);
        background-color: $color;
    }
}
```

## function 函数

```css
@function pxToRem($px) {
    @return $px / 10px * 1rem;
}
.rdc {
    font-size: pxToRem(12px);
}
```

## 运算规范

运算符之间空出一个空格

```css
.rdc {
    width: 100px - 50px;
    height: 30px / 5;
}
```

注意运算单位，单位同时参与运算，所以 10px 不等于 10，乘除运算时需要特别注意

```css
/ 正确的运算格式
.rdc {
    width: 100px - 50px;
    width: 100px + 50px;
    width: 100px * 2;
    width: 100px / 2;
}
```
