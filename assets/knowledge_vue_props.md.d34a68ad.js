import{_ as s,c as p,o as a,a as n}from"./app.b8918201.js";const u=JSON.parse('{"title":"props \u6280\u5DE7","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/vue/props.md","lastUpdated":1698196870000}'),o={name:"knowledge/vue/props.md"},e=n(`<h1 id="props-\u6280\u5DE7" tabindex="-1">props \u6280\u5DE7 <a class="header-anchor" href="#props-\u6280\u5DE7" aria-hidden="true">#</a></h1><p>\u5728 Vue 3 \u4E2D\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 Props \u7684 validator \u51FD\u6570\u6765\u68C0\u67E5 props \u7684\u503C\u3002\u4F60\u53EF\u4EE5\u5728 validator \u51FD\u6570\u4E2D\u68C0\u67E5\u4F9D\u8D56\u4E8E\u5176\u4ED6 props \u503C\u7684 props \u662F\u5426\u5FC5\u4F20\u3002\u5982\u679C\u5FC5\u4F20\u7684 props \u56E0\u4E3A\u5176\u4ED6 props \u7684\u503C\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528 watch \u76D1\u542C\u53D8\u5316\u5E76\u4F7F\u7528 props \u505A\u51FA\u76F8\u5E94\u7684\u54CD\u5E94\u3002</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5047\u8BBE\u4F60\u6709\u4E24\u4E2A props\uFF1A<code>propA</code> \u548C <code>propB</code>\u3002\u5982\u679C <code>propA</code> \u7684\u503C\u4E3A <code>true</code>\uFF0C\u90A3\u4E48 <code>propB</code> \u5C31\u5FC5\u987B\u4F20\u9012\u3002\u4F60\u53EF\u4EE5\u8FD9\u6837\u5199\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  propA: Boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">  propB: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    required: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">    validator: function(value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (this.propA &amp;&amp; !value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.error(&#39;\u5982\u679CpropA\u4E3Atrue\uFF0C\u90A3\u4E48propB\u5FC5\u987B\u6307\u5B9A&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        return false;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\uFF0C<code>propB</code> \u4E0D\u662F\u5FC5\u4F20\u7684\uFF0C\u4F46\u662F\u5982\u679C\u4F20\u9012\u4E86\uFF0C\u90A3\u4E48\u4F1A\u901A\u8FC7 validator \u51FD\u6570\u68C0\u67E5\u3002\u5982\u679C\u4F20\u9012\u4E86 <code>propB</code>\uFF0C\u4F46\u662F <code>propA</code> \u7684\u503C\u4E3A <code>true</code>\uFF0C\u90A3\u4E48\u63A7\u5236\u53F0\u4F1A\u8F93\u51FA\u9519\u8BEF\u4FE1\u606F\u3002</p><p>\u5982\u679C\u4F60\u60F3\u54CD\u5E94 <code>propA</code> \u7684\u53D8\u5316\u5E76\u76F8\u5E94\u5730\u6539\u53D8 <code>propB</code> \u7684\u5FC5\u4F20\u72B6\u6001\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 watch\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">watch: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  propA(newValue, oldValue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.$options.props.propB.required = newValue;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6BCF\u5F53 <code>propA</code> \u7684\u503C\u53D1\u751F\u53D8\u5316\u65F6\uFF0Cwatch \u4F1A\u68C0\u67E5\u65B0\u7684 <code>propA</code> \u503C\u5E76\u76F8\u5E94\u5730\u66F4\u65B0 <code>propB</code> \u7684\u5FC5\u4F20\u72B6\u6001\u3002</p>`,8),l=[e];function c(r,t,d,A,i,C){return a(),p("div",null,l)}var y=s(o,[["render",c]]);export{u as __pageData,y as default};