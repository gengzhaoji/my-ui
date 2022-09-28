# 遵循标准

* 必须以4个有序字符开始：编码为 U+003C LESS-THAN SIGN 的小于号, 编码为 U+0021 EXCLAMATION MARK 的感叹号, 编码为 U+002D HYPHEN-MINUS 横线, 编码为 U+002D HYPHEN-MINUS横线 ，即 “<!–”
在此之后是注释内容，注释的内容有以下限制：
* 不能以单个 “>” (U+003E) 字符开始
* 不能以由 “-“（U+002D HYPHEN-MINUS）和 ”>” (U+003E) 组合的字符开始，即 “->”
* 不能包含两个连续的 U+002D HYPHEN-MINUS 字符，即 “–”
* 不能以一个 U+002D HYPHEN-MINUS 字符结束，即 “-”

标准写法:
```
<!--Comment Text-->
```
错误写法：
```
<!-->The Wrong Comment Text-->

<!--->The Wrong Comment Text-->

<!--The--Wrong--Comment Text-->

<!--The Wrong Comment Text--->
```
参考[#Comments](https://www.w3.org/TR/2014/REC-html5-20141028/syntax.html#comments)

## 团队约定

### 单行注释

一般用于简单的描述，如某些状态描述、属性描述等

注释内容前后各一个空格字符，注释位于要注释代码的上面，单独占一行

推荐:
```html
<!-- Comment Text -->
<div>...</div>
```
不推荐
```html
<div>...</div><!-- Comment Text -->	
	
<div><!-- Comment Text -->
    ...
</div>
```

### 模块注释

一般用于描述模块的名称以及模块开始与结束的位置

注释内容前后各一个空格字符，<!-- S Comment Text --> 表示模块开始，<!-- E Comment Text --> 表示模块结束，模块与模块之间相隔一行

推荐:
```html
<!-- S Comment Text A -->	
<div class="mod_a">
    ...
</div>
<!-- E Comment Text A -->
	
<!-- S Comment Text B -->	
<div class="mod_b">
    ...
</div>
<!-- E Comment Text B -->
```
不推荐:
```html
<!-- S Comment Text A -->
<div class="mod_a">
    ...
</div>
<!-- E Comment Text A -->
<!-- S Comment Text B -->	
<div class="mod_b">
    ...
</div>
<!-- E Comment Text B -->
```



