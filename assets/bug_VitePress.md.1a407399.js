import{_ as s,c as a,o as e,a as o}from"./app.b8918201.js";var l="/my-ui/build1.png",p="/my-ui/build2.png",n="/my-ui/build3.png";const A=JSON.parse('{"title":"VitePress \u6253\u5305\u62A5\u9519","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u89E3\u51B3\u7684\u65B9\u6CD5 1","slug":"\u89E3\u51B3\u7684\u65B9\u6CD5-1"},{"level":2,"title":"\u89E3\u51B3\u7684\u65B9\u6CD5 2","slug":"\u89E3\u51B3\u7684\u65B9\u6CD5-2"},{"level":2,"title":"\u539F\u7406\uFF1A","slug":"\u539F\u7406\uFF1A"}],"relativePath":"bug/VitePress.md","lastUpdated":1692946408000}'),r={name:"bug/VitePress.md"},c=o('<h1 id="vitepress-\u6253\u5305\u62A5\u9519" tabindex="-1"><a href="https://www.npmjs.com/package/vitepress-demo-editor" target="_blank" rel="noopener noreferrer">VitePress</a> \u6253\u5305\u62A5\u9519 <a class="header-anchor" href="#vitepress-\u6253\u5305\u62A5\u9519" aria-hidden="true">#</a></h1><p>\u6253\u5305\u62A5\u9519,\u63D0\u793A Error: Missing &quot;./preload-helper&quot; export in &quot;vite&quot; package</p><h2 id="\u89E3\u51B3\u7684\u65B9\u6CD5-1" tabindex="-1">\u89E3\u51B3\u7684\u65B9\u6CD5 1 <a class="header-anchor" href="#\u89E3\u51B3\u7684\u65B9\u6CD5-1" aria-hidden="true">#</a></h2><img src="'+l+'"><p>\u641C\u7D22 vite/preload-helper \u66FF\u6362\u4E3A \\0vite/preload-helper</p><img src="'+p+'"><p>&#39;vite/preload-helper&#39;-&gt;&#39;\\0vite/preload-helper&#39;</p><img src="'+n+`"><h2 id="\u89E3\u51B3\u7684\u65B9\u6CD5-2" tabindex="-1">\u89E3\u51B3\u7684\u65B9\u6CD5 2 <a class="header-anchor" href="#\u89E3\u51B3\u7684\u65B9\u6CD5-2" aria-hidden="true">#</a></h2><p>\u4E66\u5199 <code>vite</code> \u63D2\u4EF6\u5904\u7406</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u81EA\u5B9A\u4E49vite\u63D2\u4EF6\uFF0C\u5904\u7406vitepress\u6253\u5305 missing &#39;./preload-helper&#39; \u9519\u8BEF</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">apply</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">build</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">enforce</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pre</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">resolveId</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">includes</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vite/preload-helper</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vite/preload-helper</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">},</span></span>
<span class="line"></span></code></pre></div><h2 id="\u539F\u7406\uFF1A" tabindex="-1">\u539F\u7406\uFF1A <a class="header-anchor" href="#\u539F\u7406\uFF1A" aria-hidden="true">#</a></h2><p>\u56E0\u4E3A\u5728\u6E90\u7801\u4E2D\u4F7F\u7528\u4E86\u52A8\u6001\u7684<code>import</code>\u52A0\u8F7D\uFF0C\u6240\u4EE5\u5B9E\u9645\u88AB\u89E3\u6790\u4E3A\u5B58\u5728\u7684\u6A21\u5757\uFF0C\u7F16\u7801\u4E3A<code>\\x00vite/preload-helper</code>\uFF0C\u4F46\u662F\u5B9E\u9645 <code>&#39;vite/preload-helper&#39;</code> \u4E3A\u865A\u62DF\u6A21\u5757\uFF0C\u5E94\u8BE5\u7F16\u7801\u4E3A\u7F16\u7801\u4E3A<code>/@vite/preload-helper\\x00vite/preload-helper</code>\uFF0C\u6240\u4EE5\u5BFC\u81F4\u89E3\u7801\u56DE\u6765\u65F6\u89E3\u6790\u9519\u8BEF\uFF0C\u9020\u6210\u6253\u5305\u9519\u8BEF <code>Error: Missing &quot;./preload-helper&quot; export in &quot;vite&quot; package</code></p><ul><li><code>resolveId</code> \u94A9\u5B50 \u7528\u4E8E\u5904\u7406\u6A21\u5757\u8DEF\u5F84, \u5728 <code>vite</code> \u4E2D, \u6211\u4EEC\u53EF\u4EE5\u5728\u4EE3\u7801\u4E2D, \u5F15\u5165\u4E00\u4E2A\u4E0D\u5B58\u5728\u7684\u6A21\u5757\u8DEF\u5F84, \u800C\u5728 <code>resolveId</code> \u94A9\u5B50\u53EF\u4EE5\u83B7\u5F97\u6539\u8DEF\u5F84, \u7136\u540E\u5BF9\u4E8E\u8BE5\u8DEF\u5F84\u8FDB\u884C\u5904\u7406, \u4E3E\u4E2A\u4F8B\u5B50, \u6211\u4EEC\u53EF\u4EE5\u5728\u8FD9\u4E2A\u94A9\u5B50\u4E2D\u81EA\u5DF1\u5B9E\u73B0 <code>vite resolve.alias</code> \u7684\u529F\u80FD.</li></ul><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">resolveId</span><span style="color:#A6ACCD;">(id) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">startsWith</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">base</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">process</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cwd</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">src</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">@</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">base</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">},</span></span>
<span class="line"></span></code></pre></div><ul><li><code>load</code> \u94A9\u5B50 \u5E38\u7528\u4E8E\u52A0\u8F7D\u865A\u62DF\u6A21\u5757, \u5982\u4F55\u7406\u89E3\u8FD9\u4E2A\u865A\u62DF\u6A21\u5757\u5462, \u4E5F\u5C31\u662F, \u6211\u4EEC\u5728\u4EE3\u7801\u4E2D\u5F15\u5165\u4E00\u4E2A\u4E0D\u5B58\u5728\u7684\u6A21\u5757\u8DEF\u5F84, \u6BD4\u5982 <code>import msg from &#39;virtual:test-module&#39;</code>, \u6309 <code>vite</code> \u6587\u6863\u6240\u8BF4, \u6211\u4EEC\u9700\u8981\u5148\u5728\u4E0A\u9762\u7684 <code>resolveId</code> \u94A9\u5B50\u4E2D, \u5728\u8BE5\u8DEF\u5F84\u52A0\u4E0A\u4E00\u4E2A<code>\\0</code> \u4E3A\u524D\u7F00.</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u8FD9\u662F\u4E00\u4E2A\u6765\u81EA <code>Rollup</code> \u751F\u6001\u7CFB\u7EDF\u7684\u60EF\u4F8B\u3002\u8FD9\u53EF\u4EE5\u9632\u6B62\u5176\u4ED6\u63D2\u4EF6\u8BD5\u56FE\u5904\u7406\u8FD9\u4E2A <code>ID</code>\uFF08\u5982\u8282\u70B9\u89E3\u6790\uFF09\uFF0C\u800C\u50CF <code>sourcemap</code> \u8FD9\u6837\u7684\u6838\u5FC3\u529F\u80FD\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E9B\u4FE1\u606F\u6765\u533A\u5206\u865A\u62DF\u6A21\u5757\u548C\u666E\u901A\u6587\u4EF6\u3002<code>\\0</code> \u5728\u5BFC\u5165\u7684 <code>URL</code> \u4E2D\u4E0D\u662F\u4E00\u4E2A\u5141\u8BB8\u7684\u5B57\u7B26\uFF0C\u6240\u4EE5\u6211\u4EEC\u5FC5\u987B\u5728\u5BFC\u5165\u5206\u6790\u4E2D\u66FF\u6362\u5B83\u4EEC\u3002\u5728\u6D4F\u89C8\u5668\u4E2D\uFF0C\u4E00\u4E2A <code>0{id}</code> \u7684\u865A\u62DF <code>ID</code> \u6700\u7EC8\u88AB\u7F16\u7801\u4E3A <code>/@id/x00{id}</code>\u3002\u5728\u8FDB\u5165\u63D2\u4EF6\u5904\u7406\u7BA1\u9053\u4E4B\u524D\uFF0C\u8FD9\u4E2A <code>ID</code> \u4F1A\u88AB\u89E3\u7801\u56DE\u6765\u3002\u6240\u4EE5\u8FD9\u4E2A\u8FC7\u7A0B\u5728\u63D2\u4EF6\u94A9\u5B50\u4EE3\u7801\u4E2D\u5C06\u662F\u4E0D\u53EF\u89C1\u7684.</p></div>`,17),t=[c];function i(d,F,y,D,h,v){return e(),a("div",null,t)}var _=s(r,[["render",i]]);export{A as __pageData,_ as default};