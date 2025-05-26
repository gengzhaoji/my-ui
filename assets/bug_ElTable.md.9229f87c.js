import{_ as s,c as a,o as n,a as l}from"./app.14664fbb.js";const C=JSON.parse('{"title":"\u6811\u5F62\u8868\u683C\u6570\u636E\u56DE\u663E\u95EE\u9898","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u95EE\u9898","slug":"\u95EE\u9898"},{"level":2,"title":"\u89E3\u51B3\u65B9\u6CD5","slug":"\u89E3\u51B3\u65B9\u6CD5"}],"relativePath":"bug/ElTable.md","lastUpdated":1678083950000}'),e={name:"bug/ElTable.md"},p=l(`<h1 id="\u6811\u5F62\u8868\u683C\u6570\u636E\u56DE\u663E\u95EE\u9898" tabindex="-1">\u6811\u5F62\u8868\u683C\u6570\u636E\u56DE\u663E\u95EE\u9898 <a class="header-anchor" href="#\u6811\u5F62\u8868\u683C\u6570\u636E\u56DE\u663E\u95EE\u9898" aria-hidden="true">#</a></h1><h2 id="\u95EE\u9898" tabindex="-1">\u95EE\u9898 <a class="header-anchor" href="#\u95EE\u9898" aria-hidden="true">#</a></h2><p><code>el-table</code> \u7EC4\u4EF6\uFF0C\u652F\u6301\u6811\u7C7B\u578B\u7684\u6570\u636E\u7684\u663E\u793A\u3002 \u5F53 <code>row</code> \u4E2D\u5305\u542B <code>children</code> \u5B57\u6BB5\u65F6\uFF0C\u88AB\u89C6\u4E3A\u6811\u5F62\u6570\u636E\uFF0C\u666E\u901A\u7684\u589E\u5220\u6539\u67E5\u6570\u636E\u6539\u53D8\u4E4B\u540E\uFF0C\u65E0\u6CD5\u66F4\u65B0\u89C6\u56FE\u3002</p><h2 id="\u89E3\u51B3\u65B9\u6CD5" tabindex="-1">\u89E3\u51B3\u65B9\u6CD5 <a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6CD5" aria-hidden="true">#</a></h2><p>\u901A\u8FC7 <code>loadFnResolve</code> \u8BB0\u5F55\u5C55\u5F00\u884C\u7684 <code>id</code>\uFF0C\u8C03\u6574\u61D2\u52A0\u8F7D\u7684 <code>lazyTreeNodeMap</code> \u7684\u503C\uFF0C\u4ECE\u800C\u8FBE\u5230\u6570\u636E\u66F4\u65B0\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">el-table</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">table</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        :data=&quot;list&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">row-key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">lazy</span></span>
<span class="line"><span style="color:#89DDFF;">        :load=&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">            (tree, treeNode, resolve) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                loadFnResolve</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(tree</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id);</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#82AAFF;">resolve</span><span style="color:#A6ACCD;">(tree</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">children);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">        @row-click=</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">            (row, column, event) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                event</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">currentTarget</span><span style="color:#89DDFF;">?.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.el-table__expand-icon</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">?.</span><span style="color:#82AAFF;">click</span><span style="color:#A6ACCD;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">    /&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">/** \u67E5\u8BE2\u6570\u636E\u5217\u8868 */</span></span>
<span class="line"><span style="color:#C3E88D;">let list = $ref([]),</span></span>
<span class="line"><span style="color:#C3E88D;">    loadFnResolve = new Set(),</span></span>
<span class="line"><span style="color:#C3E88D;">    table = $ref(null);</span></span>
<span class="line"><span style="color:#C3E88D;">function getList() {</span></span>
<span class="line"><span style="color:#C3E88D;">    listDept(queryParams).then((res) =&gt; {</span></span>
<span class="line"><span style="color:#C3E88D;">        list = res.data;</span></span>
<span class="line"><span style="color:#C3E88D;">        // \u8C03\u6574\u61D2\u52A0\u8F7D\u7684lazyTreeNodeMap\u7684\u503C\uFF0C\u4ECE\u800C\u8FBE\u5230\u6570\u636E\u66F4\u65B0\u3002</span></span>
<span class="line"><span style="color:#C3E88D;">        for (let key of loadFnResolve.keys()) {</span></span>
<span class="line"><span style="color:#C3E88D;">            table.$refs.myTable.store.states.lazyTreeNodeMap.value[key] = find(res.data, true, (item) =&gt; item.id === key).children;</span></span>
<span class="line"><span style="color:#C3E88D;">        }</span></span>
<span class="line"><span style="color:#C3E88D;">    });</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#C3E88D;">&lt;/script&gt;</span></span>
<span class="line"></span></code></pre></div>`,6),o=[p];function t(c,r,D,y,i,F){return n(),a("div",null,o)}var A=s(e,[["render",t]]);export{C as __pageData,A as default};
