import{_ as s,c as n,o as a,a as l}from"./app.b8918201.js";const i=JSON.parse('{"title":"\u76D1\u542C\u6D4F\u89C8\u5668\u5207\u5C4F\u529F\u80FD\u5B9E\u73B0(\u4E00)","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u76D1\u542C\u6D4F\u89C8\u5668\u5207\u5C4F\u529F\u80FD\u5B9E\u73B0(\u4E00)","slug":"\u76D1\u542C\u6D4F\u89C8\u5668\u5207\u5C4F\u529F\u80FD\u5B9E\u73B0-\u4E00"},{"level":3,"title":"\u76D1\u542C\u6D4F\u89C8\u5668\u5207\u5C4F\u529F\u80FD\u5B9E\u73B0(\u63A8\u8350)","slug":"\u76D1\u542C\u6D4F\u89C8\u5668\u5207\u5C4F\u529F\u80FD\u5B9E\u73B0-\u63A8\u8350"}],"relativePath":"knowledge/cutScreen.md","lastUpdated":1678083950000}'),p={name:"knowledge/cutScreen.md"},o=l(`<h3 id="\u76D1\u542C\u6D4F\u89C8\u5668\u5207\u5C4F\u529F\u80FD\u5B9E\u73B0-\u4E00" tabindex="-1">\u76D1\u542C\u6D4F\u89C8\u5668\u5207\u5C4F\u529F\u80FD\u5B9E\u73B0(\u4E00) <a class="header-anchor" href="#\u76D1\u542C\u6D4F\u89C8\u5668\u5207\u5C4F\u529F\u80FD\u5B9E\u73B0-\u4E00" aria-hidden="true">#</a></h3><p><code>docunment</code>\u4E2D\u7684\u4E8B\u4EF6 <code>visibilitychange</code></p><p><code>visibilitychange</code>\u4E8B\u4EF6\u4E2D\u6709\u4E00\u4E2A<code>visibilityState</code>\u5C5E\u6027\uFF0C\u6709\u4E24\u4E2A\u503C\uFF0C\u5206\u522B\u662F<em>hidden</em>\u548C<em>visible</em></p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">//\u6D4F\u89C8\u5668\u5207\u5C4F\u529F\u80FD\u5B9E\u73B0</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> pageSwitchRecord </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">$ref</span><span style="color:#A6ACCD;">([])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cutScreen</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">visibilitychange</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// document \u8EAB\u4E0A\u6709\u4E00\u4E2A\u5C5E\u6027\u53EB\u4F5C visibilityState</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// \u8868\u793A\u5F53\u524D\u9875\u9762\u662F\u663E\u793A\u6216\u8005\u9690\u85CF\u72B6\u6001</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">visibilityState</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hidden</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">title</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u7528\u6237\u5207\u5C4F\u5566</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">record</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                outTime</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Date</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getTime</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">leave</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">//\u5C06\u5F53\u524D\u65F6\u95F4\u6DFB\u52A0\u5230\u5168\u5C40\u7684pageSwitchRecord\u6570\u7EC4\u4E2D\u5728\u5207\u5C4F\u56DE\u6765\u662F\u8BA1\u7B97\u79BB\u5F00\u65F6\u95F4</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">pageSwitchRecord</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">record</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">title</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u7528\u6237\u56DE\u6765\u5566</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newTime</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Date</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getTime</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">\u7528\u6237\u5728</span><span style="color:#89DDFF;">\${</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Date</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">\u56DE\u6765\u4E86\uFF0C\u8017\u65F6</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">((newTime </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> pageSwitchRecord[</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">outTime) </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toFixed</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">s</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">pageSwitchRecord</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">cutScreen</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p><em>\u4E0A\u9762\u6240\u8FF0</em>\u7684\u65B9\u6CD5\u5E76\u4E0D\u80FD\u76D1\u542C\u6240\u6709\u6D4F\u89C8\u5668\u5207\u5C4F\u4E8B\u4EF6,\u4EE5\u4E0B<em>2</em>\u79CD\u60C5\u51B5\u4E0B<code>visibitychange</code>\u5C31\u4E0D\u80FD\u76D1\u542C\u5230\u5207\u5C4F\u4E8B\u4EF6\u3002</p><ul><li>\u4F7F\u7528<code>ALT+TAB</code>\u952E\u5207\u6362\u4E0D\u540C\u7684\u5E94\u7528\u65F6\u5E76\u4E0D\u4F1A\u89E6\u53D1\u4E0A\u9762\u7684\u65B9\u6CD5;</li><li>\u5F00\u6D4F\u89C8\u5668\u8C03\u8BD5\u9762\u677F\u540E\uFF0C\u5728\u8C03\u8BD5\u9762\u677F\u4E2D\u8FDB\u884C\u4EFB\u610F\u64CD\u4F5C\u4E5F\u4E0D\u4F1A\u89E6\u53D1;</li></ul><h3 id="\u76D1\u542C\u6D4F\u89C8\u5668\u5207\u5C4F\u529F\u80FD\u5B9E\u73B0-\u63A8\u8350" tabindex="-1">\u76D1\u542C\u6D4F\u89C8\u5668\u5207\u5C4F\u529F\u80FD\u5B9E\u73B0(\u63A8\u8350) <a class="header-anchor" href="#\u76D1\u542C\u6D4F\u89C8\u5668\u5207\u5C4F\u529F\u80FD\u5B9E\u73B0-\u63A8\u8350" aria-hidden="true">#</a></h3><p><em>\u4E3A\u4E86\u89E3\u51B3</em>\u4E0A\u9762\u51FA\u73B0\u7684\u4E24\u79CD\u76D1\u542C\u95EE\u9898,\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u7ED9<code>window</code>\u6DFB\u52A0\u4E24\u4E2A\u4E8B\u4EF6\u7684\u76D1\u542C\u5668,\u5F53\u5143\u7D20\u5931\u53BB\u7126\u70B9(<code>blur</code>)\u6216\u8005\u805A\u7126(<code>focus</code>)\u7684\u65F6\u5019\u89E6\u53D1,\u505A\u4E00\u4E9B\u63D0\u793A\u4FE1\u606F\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> pageSwitchRecord </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">$ref</span><span style="color:#A6ACCD;">([])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">leave</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">title</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u7528\u6237\u5207\u5C4F\u5566</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">record</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        outTime</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Date</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getTime</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">leave</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">pageSwitchRecord</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">record</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">enter</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">title</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u7528\u6237\u56DE\u6765\u5566</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newTime</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Date</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getTime</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">\u7528\u6237\u5728</span><span style="color:#89DDFF;">\${</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Date</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">\u56DE\u6765\u4E86\uFF0C\u8017\u65F6</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">((newTime </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> pageSwitchRecord[</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">outTime) </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toFixed</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">s</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">pageSwitchRecord</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">blur</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> leave)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">focus</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> enter)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,9),e=[o];function c(t,r,F,y,D,A){return a(),n("div",null,e)}var d=s(p,[["render",c]]);export{i as __pageData,d as default};