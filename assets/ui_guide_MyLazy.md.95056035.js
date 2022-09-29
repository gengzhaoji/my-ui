import{_ as h,c as D,e as k,w as y,a as F,b as e,d as n,r as _,o as g,V as f}from"./app.83e6ec99.js";const b={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:s,createVNode:o,withCtx:u,openBlock:p,createElementBlock:l}=f;function c(i,m){const d=s("my-form"),a=s("my-lazy");return p(),l("div",null,[o(a,null,{default:u(()=>[o(d,{model:i.formModel,formItem:[{label:"\u540D\u79F0",prop:"name",required:!0},{label:"\u5E74\u9F84",prop:"year",itemType:"number"},{label:"\u6027\u522B",prop:"sex",itemType:"select"}],"label-width":"60px"},null,8,["model"])]),_:1})])}const{ref:t}=f;return{render:c,...{setup(i,{expose:m}){m();const a={formModel:t({name:"",year:"",sex:""}),ref:t};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}}}()}},M=JSON.parse('{"title":"MyLazy \u61D2\u6E32\u67D3","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u63D2\u69FD","slug":"\u63D2\u69FD"}],"relativePath":"ui/guide/MyLazy.md","lastUpdated":1664273809000}'),v=F('<h1 id="mylazy-\u61D2\u6E32\u67D3" tabindex="-1">MyLazy \u61D2\u6E32\u67D3 <a class="header-anchor" href="#mylazy-\u61D2\u6E32\u67D3" aria-hidden="true">#</a></h1><p>\u8BE5\u7EC4\u4EF6\u7528\u6237\u5185\u5BB9\u8FC7\u591A\uFF0C\u6EDA\u52A8\u5230\u9700\u8981\u6E32\u67D3\u7684 <code>dom</code> \u65F6\uFF0C\u624D\u8FDB\u884C\u6E32\u67D3\uFF0C\u4F7F\u7528<code>import { useIntersectionObserver } from &#39;@vueuse/core&#39;; </code>\u65B9\u6CD5\u8FDB\u884C\u76D1\u542C\u3002</p><p><a href="https://vueuse.org/" target="_blank" rel="noopener noreferrer">@vueuse/core</a></p><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h2>',4),x=e("div",{class:"language-vue"},[e("pre",null,[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),n("template")]),e("span",{class:"token punctuation"},">")]),n(`
    `),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),n("my-lazy")]),e("span",{class:"token punctuation"},">")]),n(`
        `),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),n("my-form")]),n(`
            `),e("span",{class:"token attr-name"},":model"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),n("formModel"),e("span",{class:"token punctuation"},'"')]),n(`
            `),e("span",{class:"token attr-name"},":formItem"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),n(`[
                { label: '\u540D\u79F0', prop: 'name', required: true },
                { label: '\u5E74\u9F84', prop: 'year', itemType: 'number' },
                { label: '\u6027\u522B', prop: 'sex', itemType: 'select' },
            ]`),e("span",{class:"token punctuation"},'"')]),n(`
            `),e("span",{class:"token attr-name"},"label-width"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),n("60px"),e("span",{class:"token punctuation"},'"')]),n(`
        `),e("span",{class:"token punctuation"},"/>")]),n(`
    `),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),n("my-lazy")]),e("span",{class:"token punctuation"},">")]),n(`
`),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),n("template")]),e("span",{class:"token punctuation"},">")]),n(`

`),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),n("script")]),n(),e("span",{class:"token attr-name"},"setup"),e("span",{class:"token punctuation"},">")]),e("span",{class:"token script"},[e("span",{class:"token language-javascript"},[n(`
`),e("span",{class:"token keyword"},"import"),n(),e("span",{class:"token punctuation"},"{"),n(" ref "),e("span",{class:"token punctuation"},"}"),n(),e("span",{class:"token keyword"},"from"),n(),e("span",{class:"token string"},"'vue'"),e("span",{class:"token punctuation"},";"),n(`

`),e("span",{class:"token keyword"},"const"),n(" formModel "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token function"},"ref"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"{"),n(`
    `),e("span",{class:"token literal-property property"},"name"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token string"},"''"),e("span",{class:"token punctuation"},","),n(`
    `),e("span",{class:"token literal-property property"},"year"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token string"},"''"),e("span",{class:"token punctuation"},","),n(`
    `),e("span",{class:"token literal-property property"},"sex"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token string"},"''"),e("span",{class:"token punctuation"},","),n(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),n(`
`)])]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),n("script")]),e("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),C=e("h2",{id:"\u63D2\u69FD",tabindex:"-1"},[n("\u63D2\u69FD "),e("a",{class:"header-anchor",href:"#\u63D2\u69FD","aria-hidden":"true"},"#")],-1),E=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"\u63D2\u69FD\u540D"),e("th",null,"\u8BF4\u660E")])]),e("tbody",null,[e("tr",null,[e("td",null,"-"),e("td",null,"\u6E32\u67D3\u5185\u5BB9")])])],-1);function B(s,o,u,p,l,c){const t=_("render-demo-0"),r=_("demo");return g(),D("div",null,[v,k(r,{sourceCode:`<template>
    <my-lazy>
        <my-form
            :model="formModel"
            :formItem="[
                { label: '\u540D\u79F0', prop: 'name', required: true },
                { label: '\u5E74\u9F84', prop: 'year', itemType: 'number' },
                { label: '\u6027\u522B', prop: 'sex', itemType: 'select' },
            ]"
            label-width="60px"
        />
    </my-lazy>
</template>

<script setup>
import { ref } from 'vue';

const formModel = ref({
    name: '',
    year: '',
    sex: '',
});
<\/script>
`},{highlight:y(()=>[x]),default:y(()=>[k(t)]),_:1}),C,E])}var w=h(b,[["render",B]]);export{M as __pageData,w as default};
