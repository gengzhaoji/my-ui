import{_ as E,c as _,e as m,w as k,a as g,r as F,o as C,V as h,b as t,d as e}from"./app.3a525c0f.js";const f={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:s,createVNode:l,openBlock:c,createElementBlock:d}=h;function p(a,n){const i=s("my-img-upload");return c(),d("div",null,[l(i,{modelValue:a.imgFile,"onUpdate:modelValue":n[0]||(n[0]=u=>a.imgFile=u)},null,8,["modelValue"])])}const{ref:o}=h;return{render:p,...{setup(a,{expose:n}){n();const u={imgFile:o([]),ref:o};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}}}}()}},b=JSON.parse('{"title":"MyImgUpload \u56FE\u7247\u4E0A\u4F20","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027"}],"relativePath":"ui/guide/MyImgUpload.md","lastUpdated":1664273809000}'),B=g('<h1 id="myimgupload-\u56FE\u7247\u4E0A\u4F20" tabindex="-1">MyImgUpload \u56FE\u7247\u4E0A\u4F20 <a class="header-anchor" href="#myimgupload-\u56FE\u7247\u4E0A\u4F20" aria-hidden="true">#</a></h1><p>\u57FA\u4E8E<a href="https://element-plus.org/zh-CN/component/upload.html" target="_blank" rel="noopener noreferrer"><code>el-upload</code></a>\u8FDB\u884C\u5C01\u88C5\uFF0C\u5C01\u88C5\u56FE\u7247\u4E0A\u4F20\uFF0C\u6587\u4EF6\u8BE6\u60C5\u4E0B\u8F7D\u3001\u5220\u9664\u529F\u80FD\uFF0C\u6269\u5C55\u4E3A\u6269\u5C55\u4E3A <code>elForm</code> \u5B50\u5143\u7D20\uFF0C\u62E5\u6709 <code>elFormItem</code> \u7684\u529F\u80FD\u3002</p><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h2>',3),v=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("template")]),t("span",{class:"token punctuation"},">")]),e(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("my-img-upload")]),e(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("imgFile"),t("span",{class:"token punctuation"},'"')]),e(),t("span",{class:"token punctuation"},"/>")]),e(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("template")]),t("span",{class:"token punctuation"},">")]),e(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("script")]),e(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[e(`
`),t("span",{class:"token keyword"},"import"),e(),t("span",{class:"token punctuation"},"{"),e(" ref "),t("span",{class:"token punctuation"},"}"),e(),t("span",{class:"token keyword"},"from"),e(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),e(`
`),t("span",{class:"token keyword"},"const"),e(" imgFile "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("script")]),t("span",{class:"token punctuation"},">")]),e(`
`)])])],-1),A=g('<h2 id="\u5C5E\u6027" tabindex="-1">\u5C5E\u6027 <a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>modelValue</td><td>v-model \u7ED1\u5B9A\u7684\u503C</td><td>Array</td><td></td><td></td></tr><tr><td>fileSize</td><td>\u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u7684\u9650\u5236</td><td>Number</td><td></td><td>10</td></tr><tr><td>download</td><td>\u662F\u5426\u5141\u8BB8\u4E0B\u8F7D\u56FE\u7247</td><td>Boolean</td><td></td><td>true</td></tr><tr><td>limit</td><td>\u4E0A\u4F20\u56FE\u7247\u6570\u91CF</td><td>Number</td><td></td><td></td></tr></tbody></table>',2);function y(s,l,c,d,p,o){const r=F("render-demo-0"),a=F("demo");return C(),_("div",null,[B,m(a,{sourceCode:`<template>
    <my-img-upload v-model="imgFile" />
</template>
<script setup>
import { ref } from 'vue';
const imgFile = ref([]);
<\/script>
`},{highlight:k(()=>[v]),default:k(()=>[m(r)]),_:1}),A])}var V=E(f,[["render",y]]);export{b as __pageData,V as default};
