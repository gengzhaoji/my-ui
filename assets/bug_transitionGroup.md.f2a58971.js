import{_ as s,c as n,o as a,a as p}from"./app.14664fbb.js";const d=JSON.parse('{"title":"TransitionGroup \u4E1D\u6ED1\u5207\u6362","description":"","frontmatter":{},"headers":[],"relativePath":"bug/transitionGroup.md","lastUpdated":1744794834000}'),l={name:"bug/transitionGroup.md"},e=p(`<h1 id="transitiongroup-\u4E1D\u6ED1\u5207\u6362" tabindex="-1">TransitionGroup \u4E1D\u6ED1\u5207\u6362 <a class="header-anchor" href="#transitiongroup-\u4E1D\u6ED1\u5207\u6362" aria-hidden="true">#</a></h1><p>\u81EA\u5B9A\u4E49<code>ref</code>\u5C5E\u6027\u89E3\u51B3</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { customRef } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> *</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param {* \u53D8\u91CF\u503C} value</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param {* \u5EF6\u8FDF\u65F6\u95F4} delay</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @returns</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">export function transitionGroupRef(value, delay = 350) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return customRef((track, trigger) =&gt; ({</span></span>
<span class="line"><span style="color:#A6ACCD;">        get() {</span></span>
<span class="line"><span style="color:#A6ACCD;">            track();</span></span>
<span class="line"><span style="color:#A6ACCD;">            return value;</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        set(newValue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            value = null;</span></span>
<span class="line"><span style="color:#A6ACCD;">            trigger();</span></span>
<span class="line"><span style="color:#A6ACCD;">            setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                value = newValue;</span></span>
<span class="line"><span style="color:#A6ACCD;">                trigger();</span></span>
<span class="line"><span style="color:#A6ACCD;">            }, delay);</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">    }));</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,3),o=[e];function t(r,c,i,A,C,u){return a(),n("div",null,o)}var D=s(l,[["render",t]]);export{d as __pageData,D as default};
