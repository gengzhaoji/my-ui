import{_ as s,c as n,o as a,a as l}from"./app.ba09d780.js";const A=JSON.parse('{"title":"\u8BED\u6CD5\u9009\u7528","description":"","frontmatter":{},"headers":[{"level":2,"title":"SCSS","slug":"scss"},{"level":2,"title":"SASS","slug":"sass"},{"level":2,"title":"\u56E2\u961F\u7EA6\u5B9A","slug":"\u56E2\u961F\u7EA6\u5B9A"},{"level":2,"title":"BEM \u89C4\u8303\uFF08ui \u5F00\u53D1\u89C4\u8303\uFF09","slug":"bem-\u89C4\u8303\uFF08ui-\u5F00\u53D1\u89C4\u8303\uFF09"},{"level":3,"title":"\u5D4C\u5957\u5199\u6CD5","slug":"\u5D4C\u5957\u5199\u6CD5"},{"level":2,"title":"\u5D4C\u5957\u89C4\u8303","slug":"\u5D4C\u5957\u89C4\u8303"},{"level":3,"title":"\u9009\u62E9\u5668\u5D4C\u5957","slug":"\u9009\u62E9\u5668\u5D4C\u5957"},{"level":3,"title":"\u5C5E\u6027\u5D4C\u5957","slug":"\u5C5E\u6027\u5D4C\u5957"},{"level":2,"title":"\u53D8\u91CF","slug":"\u53D8\u91CF"},{"level":2,"title":"\u6DF7\u5408","slug":"\u6DF7\u5408"},{"level":2,"title":"\u7AD9\u4F4D\u9009\u62E9\u5668","slug":"\u7AD9\u4F4D\u9009\u62E9\u5668"},{"level":2,"title":"extend \u7EE7\u627F","slug":"extend-\u7EE7\u627F"},{"level":2,"title":"for \u5FAA\u73AF","slug":"for-\u5FAA\u73AF"},{"level":2,"title":"each \u5FAA\u73AF","slug":"each-\u5FAA\u73AF"},{"level":2,"title":"function \u51FD\u6570","slug":"function-\u51FD\u6570"},{"level":2,"title":"\u8FD0\u7B97\u89C4\u8303","slug":"\u8FD0\u7B97\u89C4\u8303"}],"relativePath":"code/css/sass.md","lastUpdated":1678083950000}'),p={name:"code/css/sass.md"},o=l(`<h1 id="\u8BED\u6CD5\u9009\u7528" tabindex="-1">\u8BED\u6CD5\u9009\u7528 <a class="header-anchor" href="#\u8BED\u6CD5\u9009\u7528" aria-hidden="true">#</a></h1><p><a href="http://jimyuan.github.io/blog/2017/06/07/sass-preset-functions-learning.html" target="_blank" rel="noopener noreferrer">SASS</a> \u6709\u4E24\u79CD\u8BED\u6CD5\u683C\u5F0F\uFF0C\u4E00\u79CD\u662F SCSS (Sassy CSS)\uFF0C\u53E6\u4E00\u79CD\u662F\u7F29\u8FDB\u683C\u5F0F\uFF08Indented Syntax\uFF09\uFF0C\u6709\u65F6\u79F0\u4E4B\u4E3A Sass\u3002</p><h2 id="scss" tabindex="-1">SCSS <a class="header-anchor" href="#scss" aria-hidden="true">#</a></h2><p>SCSS \u8BED\u6CD5\u57FA\u4E8E CSS \u8BED\u6CD5\u6269\u5C55\uFF0C\u6BCF\u4E00\u4E2A\u6709\u6548\u7684 CSS \u6587\u4EF6\u90FD\u662F\u4E00\u4E2A\u6709\u6548\u7684\u5177\u6709\u76F8\u540C\u542B\u4E49\u7684 SCSS \u6587\u4EF6\uFF0C\u6362\u79CD\u8BF4\u6CD5\u5C31\u662F SCSS \u80FD\u8BC6\u522B\u5927\u591A\u6570\u7684 CSS hacks \u5199\u6CD5\u548C\u6D4F\u89C8\u5668\u524D\u7F00\u5199\u6CD5\u4EE5\u53CA\u65E9\u671F\u7684 IE \u6EE4\u955C\u5199\u6CD5\uFF0C\u8FD9\u79CD\u683C\u5F0F\u4EE5 .scss \u4F5C\u4E3A\u6269\u5C55\u540D\u3002</p><h2 id="sass" tabindex="-1">SASS <a class="header-anchor" href="#sass" aria-hidden="true">#</a></h2><p>Sass \u4F7F\u7528 \u201C\u7F29\u8FDB\u201D \u4EE3\u66FF \u201C\u82B1\u62EC\u53F7\u201D \u8868\u793A\u5C5E\u6027\u5C5E\u4E8E\u67D0\u4E2A\u9009\u62E9\u5668\uFF0C\u7528 \u201C\u6362\u884C\u201D \u4EE3\u66FF \u201C\u5206\u53F7\u201D \u5206\u9694\u5C5E\u6027\uFF0C\u5F88\u591A\u4EBA\u8BA4\u4E3A\u8FD9\u6837\u505A\u6BD4 SCSS \u66F4\u5BB9\u6613\u9605\u8BFB\uFF0C\u4E66\u5199\u4E5F\u66F4\u5FEB\u901F\u3002\u7F29\u8FDB\u683C\u5F0F\u4E5F\u53EF\u4EE5\u4F7F\u7528 Sass \u7684\u5168\u90E8\u529F\u80FD\uFF0C\u53EA\u662F\u4E0E SCSS \u76F8\u6BD4\u4E2A\u522B\u5730\u65B9\u91C7\u53D6\u4E86\u4E0D\u540C\u7684\u8868\u8FBE\u65B9\u5F0F\uFF0C\u5177\u4F53\u8BF7\u67E5\u770B <a href="https://sass-lang.com/documentation/syntax" target="_blank" rel="noopener noreferrer">the indented syntax reference</a>\u3002\u8FD9\u79CD\u683C\u5F0F\u4EE5 .sass \u4F5C\u4E3A\u62D3\u5C55\u540D\u3002</p><h2 id="\u56E2\u961F\u7EA6\u5B9A" tabindex="-1">\u56E2\u961F\u7EA6\u5B9A <a class="header-anchor" href="#\u56E2\u961F\u7EA6\u5B9A" aria-hidden="true">#</a></h2><p>\u8003\u8651\u5230 SCSS \u8BED\u6CD5\u5BF9 CSS \u8BED\u6CD5\u53CB\u597D\u7684\u517C\u5BB9\u6027\u548C\u6269\u5C55\u6027\uFF0C\u6211\u4EEC\u5728\u4F7F\u7528 SASS \u7F16\u5199\u6837\u5F0F\u7684\u65F6\u5019\uFF0C\u7EDF\u4E00\u4F7F\u7528 SCSS \u8BED\u6CD5</p><p>SCSS \u6587\u4EF6\u5185</p><ul><li>\u5168\u90E8\u9075\u5FAA CSS \u6CE8\u91CA\u89C4\u8303</li><li>\u4E0D\u4F7F\u7528 /_! _/ \u6CE8\u91CA\u65B9\u5F0F</li><li>\u6CE8\u91CA\u5185\u4E0D\u653E SASS \u53D8\u91CF</li></ul><p>\u6807\u51C6\u7684\u6CE8\u91CA\u89C4\u8303\u5982\u4E0B:</p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * @desc File Info</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * @author liqinuo</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * @date 2015-10-10</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* Module A</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">----------------------------------------------------------------*/</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">mod_a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* module A logo */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">mod_a_logo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* module A nav */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">mod_a_nav</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* Module B</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">----------------------------------------------------------------*/</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">mod_b</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* module B logo */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">mod_b_logo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* module B nav */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">mod_b_nav</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="bem-\u89C4\u8303\uFF08ui-\u5F00\u53D1\u89C4\u8303\uFF09" tabindex="-1"><a href="https://juejin.cn/post/6894265906596642829" target="_blank" rel="noopener noreferrer">BEM \u89C4\u8303</a>\uFF08ui \u5F00\u53D1\u89C4\u8303\uFF09 <a class="header-anchor" href="#bem-\u89C4\u8303\uFF08ui-\u5F00\u53D1\u89C4\u8303\uFF09" aria-hidden="true">#</a></h2><ul><li>\u5728\u5B9E\u9645\u9879\u76EE\u4E2D\uFF0C\u7ECF\u5E38\u53EF\u4EE5\u770B\u5230\u4EE5\u4E0B\u7C7B\u4F3C\u8FD9\u6837\u7684 css \u6837\u5F0F\uFF0C\u8FD9\u79CD\u5C31\u662F CSS \u547D\u540D\u89C4\u8303\u2014\u2014BEM \u601D\u60F3</li><li>BEM \u662F\u5757\uFF08block\uFF09\u3001\u5143\u7D20\uFF08element\uFF09\u3001\u4FEE\u9970\u7B26\uFF08modifier\uFF09\u7684\u7B80\u5199</li><li>\u4E3B\u8981<strong>\u7F3A\u70B9</strong>\u5C31\u662F\u547D\u540D\u5F88\u957F</li><li>__\u548C--\u7684\u533A\u522B <ul><li>__\u8868\u793A\u7684\u5C31\u662F\u4E0B\u7EA7\u5143\u7D20</li><li>--\u8868\u793A\u7684\u662F\u4E0D\u540C\u7684\u5F62\u6001</li><li>&amp;\u7B26\u53F7\u8868\u793A\u5D4C\u5957\u7684\u4E0A\u4E00\u7EA7</li><li>\u4F7F\u7528\u4E24\u4E2A\u8FDE\u63A5\u7B26\u548C\u4E0B\u5212\u7EBF\u662F<strong>\u4E3A\u4E86\u5757\u7EA7\u7684\u6837\u5F0F\u53EF\u4EE5\u4F7F\u7528-\u6765\u533A\u5206</strong></li></ul></li></ul><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">/* \u5757 */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">over</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* \u5143\u7D20 */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">over__row</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* \u4FEE\u9970\u7B26 */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">over__row--right</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5D4C\u5957\u5199\u6CD5" tabindex="-1">\u5D4C\u5957\u5199\u6CD5 <a class="header-anchor" href="#\u5D4C\u5957\u5199\u6CD5" aria-hidden="true">#</a></h3><div class="language-scss"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">over</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&amp;</span><span style="color:#89DDFF;">__row</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&amp;</span><span style="color:#89DDFF;">__row--right</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5D4C\u5957\u89C4\u8303" tabindex="-1">\u5D4C\u5957\u89C4\u8303 <a class="header-anchor" href="#\u5D4C\u5957\u89C4\u8303" aria-hidden="true">#</a></h2><h3 id="\u9009\u62E9\u5668\u5D4C\u5957" tabindex="-1">\u9009\u62E9\u5668\u5D4C\u5957 <a class="header-anchor" href="#\u9009\u62E9\u5668\u5D4C\u5957" aria-hidden="true">#</a></h3><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">/* CSS */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">body</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* SCSS */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    body &amp; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* CSS */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc_cover</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc_info</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc_info_name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* SCSS */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    &amp;_cover {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &amp;_info </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        &amp;_name {</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5C5E\u6027\u5D4C\u5957" tabindex="-1">\u5C5E\u6027\u5D4C\u5957 <a class="header-anchor" href="#\u5C5E\u6027\u5D4C\u5957" aria-hidden="true">#</a></h3><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">/* CSS */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-repeat</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> no-repeat</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">/img/icon.png</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* SCSS */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">        color: red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">repeat</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> no-repeat</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">/img/icon.png</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53D8\u91CF" tabindex="-1">\u53D8\u91CF <a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a></h2><p>\u53EF\u590D\u7528\u5C5E\u6027\u5C3D\u91CF\u62BD\u79BB\u4E3A\u9875\u9762\u53D8\u91CF\uFF0C\u6613\u4E8E\u7EDF\u4E00\u7EF4\u62A4</p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// CSS</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// SCSS</span></span>
<span class="line"><span style="color:#A6ACCD;">$color: red;</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> $color</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> $color</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6DF7\u5408" tabindex="-1">\u6DF7\u5408 <a class="header-anchor" href="#\u6DF7\u5408" aria-hidden="true">#</a></h2><p>\u6839\u636E\u529F\u80FD\u5B9A\u4E49\u6A21\u5757\uFF0C\u7136\u540E\u5728\u9700\u8981\u4F7F\u7528\u7684\u5730\u65B9\u901A\u8FC7 @include \u8C03\u7528\uFF0C\u907F\u514D\u7F16\u7801\u65F6\u91CD\u590D\u8F93\u5165\u4EE3\u7801\u6BB5</p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// CSS</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc_1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-border-radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border-radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc_2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-border-radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border-radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// SCSS</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@mixin</span><span style="color:#A6ACCD;"> radius($radius: 5px) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    -webkit-border-radius: $radius;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">border-radius</span><span style="color:#A6ACCD;">: $radius;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc_1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    @include </span><span style="color:#B2CCD6;">radius</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> //\u53C2\u6570\u4F7F\u7528\u9ED8\u8BA4\u503C</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc_2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    @include </span><span style="color:#B2CCD6;">radius</span><span style="color:#A6ACCD;">(10px)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// CSS</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc_1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">/img/icon.png</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> no-repeat </span><span style="color:#F78C6C;">-10px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc_2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">/img/icon.png</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> no-repeat </span><span style="color:#F78C6C;">-20px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// SCSS</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@mixin</span><span style="color:#A6ACCD;"> icon($x: 0, $y: 0) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    background: url(/img/icon</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">png</span><span style="color:#A6ACCD;">) </span><span style="color:#FFCB6B;">no-repeat</span><span style="color:#A6ACCD;"> $x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> $y;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc_1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    @include </span><span style="color:#B2CCD6;">icon</span><span style="color:#A6ACCD;">(-10px, 0)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc_2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    @include </span><span style="color:#B2CCD6;">icon</span><span style="color:#A6ACCD;">(-20px, 0)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7AD9\u4F4D\u9009\u62E9\u5668" tabindex="-1">\u7AD9\u4F4D\u9009\u62E9\u5668 <a class="header-anchor" href="#\u7AD9\u4F4D\u9009\u62E9\u5668" aria-hidden="true">#</a></h2><p>\u5982\u679C\u4E0D\u8C03\u7528\u5219\u4E0D\u4F1A\u6709\u4EFB\u4F55\u591A\u4F59\u7684 css \u6587\u4EF6\uFF0C\u5360\u4F4D\u9009\u62E9\u5668\u4EE5 % \u6807\u8BC6\u5B9A\u4E49\uFF0C\u901A\u8FC7 @extend \u8C03\u7528</p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">//scss</span></span>
<span class="line"><span style="color:#A6ACCD;">%borderbox </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-box-sizing</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> border-box</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">box-sizing</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> border-box</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    @extend %borderbox</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="extend-\u7EE7\u627F" tabindex="-1">extend \u7EE7\u627F <a class="header-anchor" href="#extend-\u7EE7\u627F" aria-hidden="true">#</a></h2><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// CSS</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc_1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc_2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-weight</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> bold</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// SCSS</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc_1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc_2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    @extend .rdc_1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-weight</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> bold</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u6216\u8005</span></span>
<span class="line"><span style="color:#A6ACCD;">%font_red </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc_1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    @extend %font_red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc_2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    @extend %font_red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-weight</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> bold</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="for-\u5FAA\u73AF" tabindex="-1">for \u5FAA\u73AF <a class="header-anchor" href="#for-\u5FAA\u73AF" aria-hidden="true">#</a></h2><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/ CSS </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc_1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-20px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc_2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-40px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc_3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-60px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// SCSS</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@for</span><span style="color:#A6ACCD;"> $i from 1 through 3 </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc_</span><span style="color:#A6ACCD;">#</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">$i</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">background-position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">-20px</span><span style="color:#A6ACCD;">) * $i</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6CE8\u610F\uFF1A#{} \u662F\u8FDE\u63A5\u7B26\uFF0C\u53D8\u91CF\u8FDE\u63A5\u4F7F\u7528\u65F6\u9700\u8981\u4F9D\u8D56</p><h2 id="each-\u5FAA\u73AF" tabindex="-1">each \u5FAA\u73AF <a class="header-anchor" href="#each-\u5FAA\u73AF" aria-hidden="true">#</a></h2><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// CSS</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc_list</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">/img/rdc_list.png</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc_detail</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">/img/rdc_detail.png</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// SCSS</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@each</span><span style="color:#A6ACCD;"> $name in list, detail </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc_</span><span style="color:#A6ACCD;">#</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">$</span><span style="color:#B2CCD6;">name</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">/img/rdc_#{$name}.png</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// CSS</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc_list</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">/img/rdc_list.png</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc_detail</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">/img/rdc_detail.png</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> blue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// SCSS</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@each</span><span style="color:#A6ACCD;"> $name, $color in (list, red), (detail, blue) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc_</span><span style="color:#A6ACCD;">#</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">$</span><span style="color:#B2CCD6;">name</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">/img/rdc_#{$name}.png</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> $color</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="function-\u51FD\u6570" tabindex="-1">function \u51FD\u6570 <a class="header-anchor" href="#function-\u51FD\u6570" aria-hidden="true">#</a></h2><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@function</span><span style="color:#A6ACCD;"> pxToRem($px) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">@return</span><span style="color:#A6ACCD;"> $px / 10px * 1rem</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> pxToRem(</span><span style="color:#F78C6C;">12px</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8FD0\u7B97\u89C4\u8303" tabindex="-1">\u8FD0\u7B97\u89C4\u8303 <a class="header-anchor" href="#\u8FD0\u7B97\u89C4\u8303" aria-hidden="true">#</a></h2><p>\u8FD0\u7B97\u7B26\u4E4B\u95F4\u7A7A\u51FA\u4E00\u4E2A\u7A7A\u683C</p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#A6ACCD;"> - </span><span style="color:#F78C6C;">50px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30px</span><span style="color:#A6ACCD;"> / </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6CE8\u610F\u8FD0\u7B97\u5355\u4F4D\uFF0C\u5355\u4F4D\u540C\u65F6\u53C2\u4E0E\u8FD0\u7B97\uFF0C\u6240\u4EE5 10px \u4E0D\u7B49\u4E8E 10\uFF0C\u4E58\u9664\u8FD0\u7B97\u65F6\u9700\u8981\u7279\u522B\u6CE8\u610F</p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/\u6B63\u786E\u7684\u8FD0\u7B97\u683C\u5F0F </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">rdc</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#A6ACCD;"> - </span><span style="color:#F78C6C;">50px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#A6ACCD;"> + </span><span style="color:#F78C6C;">50px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#A6ACCD;"> * </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#A6ACCD;"> / </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,45),e=[o];function c(r,t,D,y,C,F){return a(),n("div",null,e)}var d=s(p,[["render",c]]);export{A as __pageData,d as default};
