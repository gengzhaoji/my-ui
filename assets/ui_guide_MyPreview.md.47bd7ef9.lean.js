import{_ as C,c as E,e as k,w as m,a as _,r as h,o as w,V as v,b as e,d as t}from"./app.b8918201.js";const f={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:o,createVNode:c,openBlock:r,createElementBlock:p}=v;function l(n,a){const d=o("my-preview");return r(),p("div",null,[c(d,{url:n.previewUrl,onClose:a[0]||(a[0]=u=>n.previewUrl="")},null,8,["url"])])}const{ref:s}=v;return{render:l,...{setup(n,{expose:a}){a();const u={previewUrl:s(""),ref:s};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}}}}()}},U=JSON.parse('{"title":"MyPreview \u6587\u4EF6\u9884\u89C8","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027"}],"relativePath":"ui/guide/MyPreview.md","lastUpdated":1678083950000}'),F=_('<h1 id="mypreview-\u6587\u4EF6\u9884\u89C8" tabindex="-1">MyPreview \u6587\u4EF6\u9884\u89C8 <a class="header-anchor" href="#mypreview-\u6587\u4EF6\u9884\u89C8" aria-hidden="true">#</a></h1><p>\u8BE5\u7EC4\u4EF6\u4F7F\u7528<code>docx-preview</code>\u5B9E\u73B0 <code>word</code> \u6587\u6863\u7684\u9884\u89C8,\u4F7F\u7528<code>xlsx</code>\u5B9E\u73B0 <code>xlsx</code> \u6587\u6863\u7684\u9884\u89C8,\u8FD8\u5305\u542B\u56FE\u7247\u6587\u4EF6\u548C<code>pdf</code>\u7684\u9884\u89C8\u529F\u80FD\u3002</p><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h2>',3),g=e("div",{class:"language-vue"},[e("pre",null,[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("template")]),e("span",{class:"token punctuation"},">")]),t(`
    `),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("my-preview")]),t(),e("span",{class:"token attr-name"},":url"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),t("previewUrl"),e("span",{class:"token punctuation"},'"')]),t(),e("span",{class:"token attr-name"},"@close"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),t("previewUrl = "),e("span",{class:"token punctuation"},"'"),e("span",{class:"token punctuation"},"'"),e("span",{class:"token punctuation"},'"')]),t(),e("span",{class:"token punctuation"},"/>")]),t(`
`),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),t("template")]),e("span",{class:"token punctuation"},">")]),t(`

`),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("script")]),t(),e("span",{class:"token attr-name"},"setup"),e("span",{class:"token punctuation"},">")]),e("span",{class:"token script"},[e("span",{class:"token language-javascript"},[t(`
`),e("span",{class:"token keyword"},"import"),t(),e("span",{class:"token punctuation"},"{"),t(" ref "),e("span",{class:"token punctuation"},"}"),t(),e("span",{class:"token keyword"},"from"),t(),e("span",{class:"token string"},"'vue'"),e("span",{class:"token punctuation"},";"),t(`

`),e("span",{class:"token comment"},"// \u9884\u89C8\u7684\u6587\u4EF6\u5730\u5740"),t(`
`),e("span",{class:"token keyword"},"let"),t(" previewUrl "),e("span",{class:"token operator"},"="),t(),e("span",{class:"token function"},"ref"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"''"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),t(`
`)])]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),t("script")]),e("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),B=_('<h2 id="\u5C5E\u6027" tabindex="-1">\u5C5E\u6027 <a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>url</td><td>\u6587\u4EF6\u5730\u5740</td><td>String</td><td></td><td></td></tr></tbody></table>',2);function y(o,c,r,p,l,s){const i=h("render-demo-0"),n=h("demo");return w(),E("div",null,[F,k(n,{sourceCode:`<template>
    <my-preview :url="previewUrl" @close="previewUrl = ''" />
</template>

<script setup>
import { ref } from 'vue';

// \u9884\u89C8\u7684\u6587\u4EF6\u5730\u5740
let previewUrl = ref('');
<\/script>
`},{highlight:m(()=>[g]),default:m(()=>[k(i)]),_:1}),B])}var b=C(f,[["render",y]]);export{U as __pageData,b as default};
