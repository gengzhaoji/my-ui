import{_ as s,c as n,o as a,a as l}from"./app.6056150c.js";const d=JSON.parse('{"title":"\u6587\u4EF6\u914D\u7F6E","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6587\u4EF6\u7ED3\u6784","slug":"\u6587\u4EF6\u7ED3\u6784"},{"level":2,"title":"coder \u6587\u4EF6\u5939","slug":"coder-\u6587\u4EF6\u5939"},{"level":2,"title":"src \u6587\u4EF6\u5939","slug":"src-\u6587\u4EF6\u5939"}],"relativePath":"ui/configuration.md","lastUpdated":1698721597000}'),p={name:"ui/configuration.md"},e=l(`<h1 id="\u6587\u4EF6\u914D\u7F6E" tabindex="-1">\u6587\u4EF6\u914D\u7F6E <a class="header-anchor" href="#\u6587\u4EF6\u914D\u7F6E" aria-hidden="true">#</a></h1><p>\u4F7F\u7528\u4E00\u4E2A\u6846\u67B6\uFF0C\u9996\u5148\u719F\u6089\u4ED6\u7684\u9879\u76EE\u6587\u4EF6\u7ED3\u6784\u3002</p><h2 id="\u6587\u4EF6\u7ED3\u6784" tabindex="-1">\u6587\u4EF6\u7ED3\u6784 <a class="header-anchor" href="#\u6587\u4EF6\u7ED3\u6784" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u251C\u2500 .vscode            vscode\u914D\u7F6E\uFF0C\u5305\u542B\u4EE3\u7801\u683C\u5F0F\u5316    \u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500 coder              \u4EE3\u7801\u751F\u6210\u5668                    \u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500 public             \u9759\u6001\u516C\u5171\u8D44\u6E90                  \u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500 src                \u6E90\u7801                          \u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500 .env.29            \u73AF\u5883\u53D8\u91CF                      \u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500 .gitignore         git\u5FFD\u7565\u914D\u7F6E\u6587\u4EF6               \u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500 eslintrc.js        eslintrc\u914D\u7F6E                  \u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500 index.html         \u5165\u53E3\u9875\u9762                      \u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500 package-lock.json  \u9501\u5B9A\u5B89\u88C5\u65F6\u7684\u5305\u7684\u7248\u672C\u53F7        \u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500 package.json       \u5305\u7BA1\u7406\u6587\u4EF6                    \u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500 index.html         \u5165\u53E3\u9875\u9762                      \u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500 README.md          \u8BF4\u660E\u6587\u6863                      \u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500 vite.config.js     vite\u914D\u7F6E\u6587\u4EF6                  \u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="coder-\u6587\u4EF6\u5939" tabindex="-1">coder \u6587\u4EF6\u5939 <a class="header-anchor" href="#coder-\u6587\u4EF6\u5939" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">coder</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u251C\u2500 schemas         \u4E1A\u52A1\u8BF7\u6C42\u914D\u7F6E\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u251C\u2500 templates       \u6A21\u677F\u914D\u7F6E\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502    \u251C\u2500 api.js     \u751F\u6210api\u8BF7\u6C42\u6A21\u677F</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502    \u2514\u2500 icons.js   \u751F\u6210\u5B57\u4F53\u56FE\u6807\u6A21\u677F</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u251C\u2500 config          \u751F\u6210\u8BF7\u6C42\u7684\u76F8\u5173\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2514\u2500 index.js        \u4EE3\u7801\u751F\u6210\u7684\u5165\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="src-\u6587\u4EF6\u5939" tabindex="-1">src \u6587\u4EF6\u5939 <a class="header-anchor" href="#src-\u6587\u4EF6\u5939" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">src</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u251C\u2500 api             \u7F51\u7EDC\u8BF7\u6C42\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502   \u2514\u2500 system.js   \u751F\u6210\u7684\u7F51\u7EDCAPI\u63A5\u53E3\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u251C\u2500 assets          \u9759\u6001\u6587\u4EF6\u8D44\u6E90</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u251C\u2500 components      \u5168\u5C40\u516C\u7528\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u251C\u2500 config</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502    \u251C\u2500 dict       \u6570\u636E\u5B57\u5178\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502    \u251C\u2500 index.js   \u9879\u76EE\u8BF7\u6C42\u524D\u7F00\u7B49\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u251C\u2500 extension       \u5E03\u5C40\uFF0C\u767B\u5F55\uFF0C404\u7B49\u9875\u9762</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u251C\u2500 router            \u8DEF\u7531\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502    \u251C\u2500 guarder.js        \u8DEF\u7531\u5B88\u536B</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502    \u251C\u2500 versionUpdate.js  \u9879\u76EE\u7248\u672C\u68C0\u6D4B\u66F4\u65B0</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u251C\u2500 store             pinia\u5168\u5C40\u6570\u636E\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502    \u251C\u2500 com.js       \u5168\u5C40\u516C\u7528\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502    \u251C\u2500 dict.js      \u5168\u5C40\u5B57\u5178\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502    \u251C\u2500 guarder.js   \u52A8\u6001\u8DEF\u7531</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502    \u251C\u2500 user.js      \u9879\u76EEtoken\u7B49\u7528\u6237\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502    \u2514\u2500 index.js     \u5165\u53E3\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u251C\u2500 style             \u9879\u76EE\u516C\u7528css</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u251C\u2500 utils             \u5DE5\u5177\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502    \u251C\u2500 directives   \u81EA\u5B9A\u4E49\u6307\u4EE4</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502    \u251C\u2500 axios.js     axios\u5C01\u88C5\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502    \u251C\u2500 convert.js   \u6570\u636E\u8F6C\u6362\u5DE5\u5177\u7C7B</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502    \u251C\u2500 cookie.js    cookie\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502    \u251C\u2500 date.js      \u65E5\u671F\u64CD\u4F5C\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502    \u251C\u2500 dom.js       dom\u64CD\u4F5C\u6A21\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502    \u251C\u2500 download.js  \u6587\u4EF6\u4E0B\u8F7D\u6A21\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502    \u251C\u2500 events.js    \u4E8B\u4EF6\u57FA\u7C7B</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502    \u251C\u2500 jsencrypt.js jsencrypt\u52A0\u5BC6</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502    \u251C\u2500 mixin.js     \u57FA\u672C\u589E\u5220\u6539\u67E5\u903B\u8F91</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502    \u251C\u2500 number.js    \u6570\u5B57\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502    \u251C\u2500 plugin.js    \u5168\u5C40\u63D2\u4EF6\u914D\u7F6E\u8D44\u6E90</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502    \u251C\u2500 regex.js     \u6B63\u5219\u8868\u8FBE\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502    \u251C\u2500 storage.js   \u7F13\u5B58\u64CD\u4F5C\u6A21\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502    \u251C\u2500 tree.js      \u6811\u7ED3\u6784\u6570\u636E\u5904\u7406\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502    \u251C\u2500 url.js       Url\u64CD\u4F5C\u6A21\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502    \u2514\u2500 util.js      \u5E38\u7528\u8F85\u52A9\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u251C\u2500 views           \u9879\u76EE\u9875\u9762\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u251C\u2500 App.vue         \u9879\u76EE\u6E32\u67D3\u5165\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2514\u2500 main.js         \u9879\u76EE\u542F\u52A8\u5165\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,8),c=[e];function o(r,i,A,t,C,y){return a(),n("div",null,c)}var j=s(p,[["render",o]]);export{d as __pageData,j as default};
