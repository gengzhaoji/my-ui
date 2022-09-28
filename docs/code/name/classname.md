# ClassName

* 命名应尽量精短、明确
* 命名使用英文,必须以字母开头命名，且全部字母为小写，单词之间统一使用下划线 “_” 连接
* 样式名不能包含ad、guanggao、ads、gg是广告含义的关键词，避免元素被网页拓展、插件屏蔽
* 涉及数据、交互等需要联调的部分，禁止通过id选择器定义样式，以免开发过程中id名变化，引起页局错乱
# 命名原则

基于姓氏命名法，祖先模块不能出现下划线，除了是全站公共模块，如mod_系列的命名;

推荐:
```html
<div class="modulename">
	<div class="modulename_info">
		<div class="modulename_son"></div>
		<div class="modulename_son"></div>
		...
	</div>
</div>
	
<!-- 这个是全站公用模块，祖先模块允许直接出现下划线 -->
<div class="mod_info">
	<div class="mod_info_son"></div>
	<div class="mod_info_son"></div>
	...		
</div>
```

不推荐:
```html
<div class="modulename_info">
	<div class="modulename_info_son"></div>
	<div class="modulename_info_son"></div>
	...		
</div>
```

在子孙模块数量可预测的情况下，严格继承祖先模块的命名前缀

```html
<div class="modulename">
	<div class="modulename_cover"></div>
	<div class="modulename_info"></div>
</div>
```
当子孙模块超过4级或以上的时候，可以考虑在祖先模块内具有识辨性的独立缩写作为新的子孙模块

推荐:

```html
<div class="modulename">
	<div class="modulename_cover"></div>
	<div class="modulename_info">
    	<div class="modulename_info_user">
    		<div class="modulename_info_user_img">
    			<img src="" alt="">
    			<!-- 这个时候 miui 为 modulename_info_user_img 首字母缩写-->
    			<div class="miui_tit"></div>
    			<div class="miui_txt"></div>
    			...
    		</div>
    	</div>
    	<div class="modulename_info_list"></div>
	</div>
</div>
```

不推荐:

```html
<div class="modulename">
	<div class="modulename_cover"></div>
	<div class="modulename_info">
    	<div class="modulename_info_user">
    		<div class="modulename_info_user_img">
    			<img src="" alt="">
    			<div class="modulename_info_user_img_tit"></div>
    			<div class="modulename_info_user_img_txt"></div>
    			...
    		</div>
    	</div>
    	<div class="modulename_info_list"></div>
	</div>
</div>
```
