import{_ as e,c as a,o as s,a as n}from"./app.b8918201.js";const k=JSON.parse('{"title":"\u5B89\u5353\u8BC1\u4E66","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u751F\u6210\u8BC1\u4E66","slug":"\u751F\u6210\u8BC1\u4E66"},{"level":3,"title":"\u67E5\u770B\u8BC1\u4E66","slug":"\u67E5\u770B\u8BC1\u4E66"}],"relativePath":"knowledge/uniapp/keystore.md","lastUpdated":1680487169000}'),t={name:"knowledge/uniapp/keystore.md"},r=n(`<h1 id="\u5B89\u5353\u8BC1\u4E66" tabindex="-1">\u5B89\u5353\u8BC1\u4E66 <a class="header-anchor" href="#\u5B89\u5353\u8BC1\u4E66" aria-hidden="true">#</a></h1><p><a href="https://blog.markbob.cn/archives/uniapp%E5%8E%9F%E7%94%9Fapp%E6%9C%AC%E5%9C%B0%E6%89%93%E5%8C%85" target="_blank" rel="noopener noreferrer">\u79BB\u7EBF\u6253\u5305\u751F\u6210\u67E5\u770B\u8BC1\u4E66</a></p><h3 id="\u751F\u6210\u8BC1\u4E66" tabindex="-1">\u751F\u6210\u8BC1\u4E66 <a class="header-anchor" href="#\u751F\u6210\u8BC1\u4E66" aria-hidden="true">#</a></h3><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">keytool -genkey -alias testApp -keyalg RSA -keysize 2048 -validity 36500 -keystore appDemo.keystore</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u67E5\u770B\u8BC1\u4E66" tabindex="-1">\u67E5\u770B\u8BC1\u4E66 <a class="header-anchor" href="#\u67E5\u770B\u8BC1\u4E66" aria-hidden="true">#</a></h3><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">keytool -list -v -keystore test.keystore</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,6),o=[r];function p(l,c,i,d,_,h){return s(),a("div",null,o)}var u=e(t,[["render",p]]);export{k as __pageData,u as default};