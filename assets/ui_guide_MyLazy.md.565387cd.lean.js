import{_ as h,c as D,e as d,w as y,a as F,b as n,d as t,r as _,o as g,V as f}from"./app.6056150c.js";const b={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:s,createVNode:o,withCtx:u,openBlock:p,createElementBlock:c}=f;function l(i,k){const m=s("my-form"),e=s("my-lazy");return p(),c("div",null,[o(e,null,{default:u(()=>[o(m,{model:i.formModel,formItem:[{label:"\u540D\u79F0",prop:"name",required:!0},{label:"\u5E74\u9F84",prop:"year",itemType:"number"},{label:"\u6027\u522B",prop:"sex",itemType:"select"}],"label-width":"60px"},null,8,["model"])]),_:1})])}const{ref:a}=f;return{render:l,...{setup(i,{expose:k}){k();const e={formModel:a({name:"",year:"",sex:""}),ref:a};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}}}()}},M=JSON.parse('{"title":"MyLazy \u61D2\u6E32\u67D3","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u63D2\u69FD","slug":"\u63D2\u69FD"}],"relativePath":"ui/guide/MyLazy.md","lastUpdated":1698052203000}'),v=F('<h1 id="mylazy-\u61D2\u6E32\u67D3" tabindex="-1">MyLazy \u61D2\u6E32\u67D3 <a class="header-anchor" href="#mylazy-\u61D2\u6E32\u67D3" aria-hidden="true">#</a></h1><p>\u8BE5\u7EC4\u4EF6\u7528\u6237\u5185\u5BB9\u8FC7\u591A\uFF0C\u6EDA\u52A8\u5230\u9700\u8981\u6E32\u67D3\u7684 <code>dom</code> \u65F6\uFF0C\u624D\u8FDB\u884C\u6E32\u67D3\uFF0C\u4F7F\u7528<code>import { useIntersectionObserver } from &#39;@vueuse/core&#39;; </code>\u65B9\u6CD5\u8FDB\u884C\u76D1\u542C\u3002</p><p><a href="https://vueuse.org/" target="_blank" rel="noopener noreferrer">@vueuse/core</a></p><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h2>',4),x=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("my-lazy")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("my-form")]),t(`
            `),n("span",{class:"token attr-name"},":model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("formModel"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},":formItem"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`[
                { label: `),n("span",{class:"token punctuation"},"'"),t("\u540D\u79F0"),n("span",{class:"token punctuation"},"'"),t(", prop: "),n("span",{class:"token punctuation"},"'"),t("name"),n("span",{class:"token punctuation"},"'"),t(`, required: true },
                { label: `),n("span",{class:"token punctuation"},"'"),t("\u5E74\u9F84"),n("span",{class:"token punctuation"},"'"),t(", prop: "),n("span",{class:"token punctuation"},"'"),t("year"),n("span",{class:"token punctuation"},"'"),t(", itemType: "),n("span",{class:"token punctuation"},"'"),t("number"),n("span",{class:"token punctuation"},"'"),t(` },
                { label: `),n("span",{class:"token punctuation"},"'"),t("\u6027\u522B"),n("span",{class:"token punctuation"},"'"),t(", prop: "),n("span",{class:"token punctuation"},"'"),t("sex"),n("span",{class:"token punctuation"},"'"),t(", itemType: "),n("span",{class:"token punctuation"},"'"),t("select"),n("span",{class:"token punctuation"},"'"),t(` },
            ]`),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"label-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("60px"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("my-lazy")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(" formModel "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"year"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),C=n("h2",{id:"\u63D2\u69FD",tabindex:"-1"},[t("\u63D2\u69FD "),n("a",{class:"header-anchor",href:"#\u63D2\u69FD","aria-hidden":"true"},"#")],-1),E=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"\u63D2\u69FD\u540D"),n("th",null,"\u8BF4\u660E")])]),n("tbody",null,[n("tr",null,[n("td",null,"default"),n("td",null,"\u6E32\u67D3\u5185\u5BB9")])])],-1);function B(s,o,u,p,c,l){const a=_("render-demo-0"),r=_("demo");return g(),D("div",null,[v,d(r,{sourceCode:`<template>
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
`},{highlight:y(()=>[x]),default:y(()=>[d(a)]),_:1}),C,E])}var w=h(b,[["render",B]]);export{M as __pageData,w as default};
