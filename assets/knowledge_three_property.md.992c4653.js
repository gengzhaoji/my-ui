import{_ as s,c as n,o as a,a as l}from"./app.b8918201.js";const i=JSON.parse('{"title":"THREEJS \u6027\u80FD\u4F18\u5316","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5173\u952E\u70B9","slug":"\u5173\u952E\u70B9"}],"relativePath":"knowledge/three/property.md","lastUpdated":1690968742000}'),o={name:"knowledge/three/property.md"},p=l(`<h1 id="threejs-\u6027\u80FD\u4F18\u5316" tabindex="-1">THREEJS \u6027\u80FD\u4F18\u5316 <a class="header-anchor" href="#threejs-\u6027\u80FD\u4F18\u5316" aria-hidden="true">#</a></h1><h2 id="\u5173\u952E\u70B9" tabindex="-1">\u5173\u952E\u70B9 <a class="header-anchor" href="#\u5173\u952E\u70B9" aria-hidden="true">#</a></h2><ol><li>\u5C3D\u91CF\u5171\u7528\u51E0\u4F55\u4F53\u548C\u6750\u8D28</li><li>\u5C3D\u91CF\u4F7F\u7528 clone \u65B9\u6CD5</li><li>\u6CE8\u610F\u6A21\u578B\uFF0C\u8D34\u56FE\u538B\u7F29</li><li>\u5220\u9664\u6A21\u578B\u65F6\uFF0C\u5C06\u6750\u8D28\u548C\u51E0\u4F55\u4F53\u4ECE\u5185\u5B58\u4E2D\u6E05\u9664</li></ol><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">//\u5220\u9664group</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">deleteGroup</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">group</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getObjectByName</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">group</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//\u5220\u9664\u6389\u6240\u6709\u7684\u6A21\u578B\u7EC4\u5185\u7684mesh</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">group</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">traverse</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">instanceof</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Mesh</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">geometry</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dispose</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//\u5220\u9664\u51E0\u4F55\u4F53</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">material</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dispose</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//\u5220\u9664\u6750\u8D28</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">group</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ol start="5"><li>\u5408\u7406\u6267\u884C\u6E32\u67D3\u65B9\u6CD5<code>.render()</code></li></ol><p>Threejs \u6E32\u67D3\u5668\u7684<code>.render()</code>\u65B9\u6CD5\u6BCF\u6B21\u6267\u884C\u90FD\u9700\u8981\u8C03\u7528\u5927\u91CF\u7684 <code>CPU\u3001GPU</code> \u7B49\u786C\u4EF6\u8D44\u6E90\uFF0C\u6240\u4EE5\u4E3A\u4E86\u63D0\u9AD8\u6E32\u67D3\u6027\u80FD\uFF0C\u53EF\u4EE5\u8003\u8651\u5C3D\u91CF\u51CF\u5C11<code>.render()</code>\u7684\u6267\u884C\u6B21\u6570\uFF0C\u8FD9\u91CC\u8BF4\u7684\u5C3D\u91CF\u51CF\u5C11<code>.render()</code>\u7684\u6267\u884C\u6B21\u6570\uFF0C\u4E0D\u662F\u7B80\u5355\u5730\u8BF4\u8D8A\u5C11\u8D8A\u597D\uFF0C\u800C\u662F\u8981\u5728\u8003\u8651\u6E32\u67D3\u6548\u679C\u7684\u57FA\u7840\u4E0A\u51CF\u5C11<code>.render()</code>\u7684\u6267\u884C\u6B21\u6570\u3002\u5982\u679C\u573A\u666F\u6709\u52A8\u753B\u6548\u679C\uFF0C\u5C31\u5FC5\u987B\u5468\u671F\u6027\u6267\u884C<code>.render()</code>\u66F4\u65B0 <code>canvas</code> \u753B\u5E03\u56FE\u50CF\uFF0C\u5982\u679C\u573A\u666F\u9ED8\u8BA4\u662F\u9759\u6001\u7684\uFF0C\u6CA1\u6709\u52A8\u753B\uFF0C\u6BD4\u5982\u5C55\u793A\u4E00\u4E2A\u4EA7\u54C1\u3001\u5EFA\u7B51\u6216\u673A\u68B0\u96F6\u4EF6\u7684\u4E09\u7EF4\u6A21\u578B\uFF0C\u53EA\u9700\u8981\u5728\u9F20\u6807\u65CB\u8F6C\u7F29\u653E\u4E09\u7EF4\u6A21\u578B\uFF0C\u89E6\u53D1<code>.render()</code>\u6267\u884C\u5373\u53EF\uFF0C\u5728\u6CA1\u6709\u53D1\u751F\u9F20\u6807\u4E8B\u4EF6\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u4E0D\u6267\u884C<code>.render()</code>\u3002</p><p>\u4E0D\u63A7\u5236 <code>Threejs</code> \u6E32\u67D3\u5668\u6E32\u67D3\u5E27\u7387\uFF0C\u901A\u8FC7\u6D4F\u89C8\u5668\u63D0\u4F9B\u7684 <code>requestAnimationFrame()</code> \u51FD\u6570\u5B9E\u73B0\u5468\u671F\u6027\u6E32\u67D3\uFF0C\u7406\u60F3\u7684\u60C5\u51B5\u4E0B <code>requestAnimationFrame()</code> \u53EF\u4EE5\u5B9E\u73B0\u6E32\u67D3\u5E27\u7387 <code>60FPS</code>\uFF0C\u5982\u679C <code>threejs</code> \u9700\u8981\u6E32\u67D3\u7684\u573A\u666F\u7684\u6BD4\u8F83\u590D\u6742\u6216\u8005\u8BF4\u6D4F\u89C8\u5668\u6240\u5728\u8BBE\u5907\u786C\u4EF6\u6027\u80FD\u4E0D\u597D\uFF0C\u53EF\u80FD\u9ED8\u8BA4\u6267\u884C\u6548\u679C\u8FBE\u4E0D\u5230 <code>60FBS</code>\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">requestAnimationFrame</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">render</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">renderer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">camera</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u5BF9\u4E8E\u5927\u591A\u6570\u4E00\u822C\u5904\u4E8E<strong>\u9759\u6001</strong>\u7684\u4E09\u7EF4\u573A\u666F\uFF0C\u53EF\u4EE5\u4E0D\u4E00\u76F4\u5468\u671F\u6027\u6267\u884C<code>threejs</code>\u6E32\u67D3\u5668\u65B9\u6CD5<code>.render()</code>\uFF0C\u6839\u636E\u9700\u8981\u6267\u884C<code>.render()</code>\uFF0C\u6BD4\u5982\u901A\u8FC7\u9F20\u6807\u65CB\u8F6C\u6A21\u578B\uFF0C\u5C31\u901A\u8FC7\u9F20\u6807\u4E8B\u4EF6\u89E6\u53D1<code>.render()</code>\u6267\u884C\uFF0C\u6216\u8005\u5728\u67D0\u4E2A\u65F6\u95F4\u6BB5\u51FA\u73B0\u52A8\u753B\uFF0C\u5C31\u5728\u8FD9\u4E2A\u65F6\u95F4\u6BB5\u5468\u671F\u6027\u6267\u884C<code>.render()</code>\uFF0C\u8FC7\u4E86\u8FD9\u4E2A\u65F6\u95F4\u6BB5\uFF0C\u5C31\u6062\u590D\u539F\u6765\u72B6\u6001\u3002</p><p>\u6BD4\u5982\u9F20\u6807\u63A7\u4EF6<code>OrbitControls</code>\uFF0C\u5F53\u901A\u8FC7<code>OrbitControls</code>\u63A7\u4EF6\u65CB\u8F6C\u7F29\u653E\u4E09\u7EF4\u6A21\u578B\u7684\u65F6\u5019\uFF0C\u89E6\u53D1\u6E32\u67D3\u5668\u8FDB\u884C\u6E32\u67D3\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u6E32\u67D3\u51FD\u6570</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">renderer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">camera</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> controls </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">OrbitControls</span><span style="color:#A6ACCD;">(camera)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//\u76D1\u542C\u9F20\u6807\u4E8B\u4EF6\uFF0C\u89E6\u53D1\u6E32\u67D3\u51FD\u6570\uFF0C\u66F4\u65B0canvas\u753B\u5E03\u6E32\u67D3\u6548\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;">controls</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">change</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> render)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ol start="6"><li>\u9875\u9762\u9500\u6BC1\u65F6\u624B\u52A8\u8C03\u7528<code>dispose</code>\u65B9\u6CD5\uFF0C\u6E05\u9664\u5EF6\u65F6</li><li>\u51CF\u5C11\u6A21\u578B\u9762\u6570\uFF0C\u5FC5\u8981\u53EF\u4EE5\u7528\u6CD5\u7EBF\u8D34\u56FE\u589E\u52A0\u6A21\u578B\u7EC6\u8282\u66FF\u4EE3</li><li>\u5728\u5FAA\u73AF\u6E32\u67D3\u4E2D\u907F\u514D\u4F7F\u7528\u66F4\u65B0 \u8FD9\u91CC\u7684\u66F4\u65B0\u6307\u7684\u662F\u5F53\u524D\u7684\u51E0\u4F55\u4F53\u3001\u6750\u8D28\u3001\u7EB9\u7406\u7B49\u53D1\u751F\u4E86\u4FEE\u6539\uFF0C\u9700\u8981 Three.js \u91CD\u65B0\u66F4\u65B0\u663E\u5B58\u7684\u6570\u636E\uFF0C\u5177\u4F53\u5305\u62EC\uFF1A</li></ol><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u51E0\u4F55\u4F53\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">geometry</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">verticesNeedUpdate </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//\u9876\u70B9\u53D1\u751F\u4E86\u4FEE\u6539</span></span>
<span class="line"><span style="color:#A6ACCD;">geometry</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">elementsNeedUpdate </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//\u9762\u53D1\u751F\u4E86\u4FEE\u6539</span></span>
<span class="line"><span style="color:#A6ACCD;">geometry</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">morphTargetsNeedUpdate </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//\u53D8\u5F62\u76EE\u6807\u53D1\u751F\u4E86\u4FEE\u6539</span></span>
<span class="line"><span style="color:#A6ACCD;">geometry</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">uvsNeedUpdate </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//uv\u6620\u5C04\u53D1\u751F\u4E86\u4FEE\u6539</span></span>
<span class="line"><span style="color:#A6ACCD;">geometry</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">normalsNeedUpdate </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//\u6CD5\u5411\u53D1\u751F\u4E86\u4FEE\u6539</span></span>
<span class="line"><span style="color:#A6ACCD;">geometry</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">colorsNeedUpdate </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//\u9876\u70B9\u989C\u8272\u53D1\u751F\u7684\u4FEE\u6539</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u6750\u8D28\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">material</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">needsUpdate </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u7EB9\u7406\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">texture</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">needsUpdate </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u5B83\u4EEC\u53D1\u751F\u66F4\u65B0\uFF0C\u5219\u5C06\u5176\u8BBE\u7F6E\u4E3A <code>true</code>\uFF0C<code>Three.js</code> \u4F1A\u901A\u8FC7\u5224\u65AD\uFF0C\u5C06\u6570\u636E\u91CD\u65B0\u4F20\u8F93\u5230\u663E\u5B58\u5F53\u4E2D\uFF0C\u5E76\u5C06\u914D\u7F6E\u9879\u91CD\u65B0\u4FEE\u6539\u4E3A <code>false</code>\u3002\u8FD9\u662F\u4E00\u4E2A\u5F88\u8017\u8FD0\u884C\u6548\u7387\u7684\u8FC7\u7A0B\uFF0C\u6240\u4EE5\u6211\u4EEC\u5C3D\u91CF\u53EA\u5728\u9700\u8981\u7684\u65F6\u5019\u4FEE\u6539\uFF0C\u4E0D\u8981\u653E\u5230 <code>render()</code> \u65B9\u6CD5\u5F53\u4E2D\u5FAA\u73AF\u8BBE\u7F6E\u3002</p>`,14),e=[p];function c(r,t,y,F,D,A){return a(),n("div",null,e)}var d=s(o,[["render",c]]);export{i as __pageData,d as default};