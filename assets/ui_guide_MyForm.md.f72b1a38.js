import{_,c as h,e as m,w as i,a as E,b as t,d as e,r as F,o as B,V as k}from"./app.3a525c0f.js";const b={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:p,createVNode:l,openBlock:r,createElementBlock:c}=k;function d(n,a){const s=p("my-form");return r(),c("div",null,[l(s,{model:n.formModel,formItem:[{label:"\u540D\u79F0",prop:"name",required:!0},{label:"\u5E74\u9F84",prop:"year",itemType:"number"},{label:"\u6027\u522B",prop:"sex",itemType:"select"}],"label-width":"60px"},null,8,["model"])])}const{ref:u}=k;return{render:d,...{setup(n,{expose:a}){a();const o={formModel:u({name:"",year:"",sex:""}),ref:u};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}}}(),"render-demo-1":function(){const{resolveComponent:p,createVNode:l,openBlock:r,createElementBlock:c}=k;function d(n,a){const s=p("my-form");return r(),c("div",null,[l(s,{model:n.formModel,formItem:[{label:"\u540D\u79F0",prop:"name",required:!0},{label:"\u5E74\u9F84",prop:"year",itemType:"number"}],"label-width":"60px",detail:!0},null,8,["model"])])}const{ref:u}=k;return{render:d,...{setup(n,{expose:a}){a();const o={formModel:u({name:"\u803F\u671D\u7EE7",year:28}),ref:u};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}}}(),"render-demo-2":function(){const{resolveComponent:p,createVNode:l,openBlock:r,createElementBlock:c}=k;function d(n,a){const s=p("my-form");return r(),c("div",null,[l(s,{model:n.formModel,formItem:[{label:"\u540D\u79F0",prop:"name",required:!0},{label:"\u5E74\u9F84",prop:"year",itemType:"number"},{label:"\u6D4B\u8BD51",prop:"name1"},{label:"\u6D4B\u8BD52",prop:"name2"},{label:"\u6D4B\u8BD53",prop:"name3"}],"label-width":"60px",colFlag:""},null,8,["model"])])}const{ref:u}=k;return{render:d,...{setup(n,{expose:a}){a();const o={formModel:u({}),ref:u};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}}}(),"render-demo-3":function(){const{resolveComponent:p,createVNode:l,openBlock:r,createElementBlock:c}=k;function d(n,a){const s=p("my-form");return r(),c("div",null,[l(s,{inline:"",query:"",model:n.formModel,formItem:[{label:"\u540D\u79F0",prop:"name",required:!0},{label:"\u5E74\u9F84",prop:"year",itemType:"number"},{label:"\u6D4B\u8BD51",prop:"name1"},{label:"\u6D4B\u8BD52",prop:"name2"},{label:"\u6D4B\u8BD53",prop:"name3"}],"label-width":"60px"},null,8,["model"])])}const{ref:u}=k;return{render:d,...{setup(n,{expose:a}){a();const o={formModel:u({}),ref:u};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}}}()}},I=JSON.parse('{"title":"MyForm \u8868\u5355","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u8BE6\u60C5","slug":"\u8BE6\u60C5"},{"level":2,"title":"\u6805\u683C\u5E03\u5C40","slug":"\u6805\u683C\u5E03\u5C40"},{"level":2,"title":"\u67E5\u8BE2\u8868\u5355","slug":"\u67E5\u8BE2\u8868\u5355"},{"level":2,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027"},{"level":2,"title":"\u63D2\u69FD","slug":"\u63D2\u69FD"}],"relativePath":"ui/guide/MyForm.md","lastUpdated":1664273809000}'),D=E('<h1 id="myform-\u8868\u5355" tabindex="-1">MyForm \u8868\u5355 <a class="header-anchor" href="#myform-\u8868\u5355" aria-hidden="true">#</a></h1><p>\u57FA\u4E8E<a href="https://element-plus.org/zh-CN/component/form.html" target="_blank" rel="noopener noreferrer"><code>el-form</code></a>\u8FDB\u884C\u5C01\u88C5\uFF0C\u5C01\u88C5\u4E86\u67E5\u8BE2 <code>form</code> \u8868\u5355\u4E00\u884C\u663E\u793A\uFF0C\u66F4\u591A\u5C55\u5F00\u67E5\u8BE2\u529F\u80FD\uFF0C\u4EE5\u53CA\u6839\u636E\u914D\u7F6E\u6570\u7EC4\u751F\u6210 <code>form</code> \u8868\u5355\uFF0C\uFF0C\u8868\u5355\u9ED8\u8BA4\u6821\u9A8C<code>rules</code>\u6570\u7EC4\uFF0C\u4EE5\u53CA\u5E38\u7528\u65B0\u589E\uFF0C\u8BE6\u60C5\u7B49\u5C55\u793A <code>form</code> \u8868\u5355\u3002</p><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h2>',3),y=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("template")]),t("span",{class:"token punctuation"},">")]),e(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("my-form")]),e(`
        `),t("span",{class:"token attr-name"},":model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("formModel"),t("span",{class:"token punctuation"},'"')]),e(`
        `),t("span",{class:"token attr-name"},":formItem"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e(`[
            { label: '\u540D\u79F0', prop: 'name', required: true },
            { label: '\u5E74\u9F84', prop: 'year', itemType: 'number' },
            { label: '\u6027\u522B', prop: 'sex', itemType: 'select' },
        ]`),t("span",{class:"token punctuation"},'"')]),e(`
        `),t("span",{class:"token attr-name"},"label-width"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("60px"),t("span",{class:"token punctuation"},'"')]),e(`
    `),t("span",{class:"token punctuation"},"/>")]),e(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("template")]),t("span",{class:"token punctuation"},">")]),e(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("script")]),e(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[e(`
`),t("span",{class:"token keyword"},"import"),e(),t("span",{class:"token punctuation"},"{"),e(" ref "),t("span",{class:"token punctuation"},"}"),e(),t("span",{class:"token keyword"},"from"),e(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),e(`

`),t("span",{class:"token keyword"},"const"),e(" formModel "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),e(`
    `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},","),e(`
    `),t("span",{class:"token literal-property property"},"year"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},","),e(`
    `),t("span",{class:"token literal-property property"},"sex"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},","),e(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("script")]),t("span",{class:"token punctuation"},">")]),e(`
`)])])],-1),C=t("h2",{id:"\u8BE6\u60C5",tabindex:"-1"},[e("\u8BE6\u60C5 "),t("a",{class:"header-anchor",href:"#\u8BE6\u60C5","aria-hidden":"true"},"#")],-1),g=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("template")]),t("span",{class:"token punctuation"},">")]),e(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("my-form")]),e(`
        `),t("span",{class:"token attr-name"},":model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("formModel"),t("span",{class:"token punctuation"},'"')]),e(`
        `),t("span",{class:"token attr-name"},":formItem"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e(`[
            { label: '\u540D\u79F0', prop: 'name', required: true },
            { label: '\u5E74\u9F84', prop: 'year', itemType: 'number' },
        ]`),t("span",{class:"token punctuation"},'"')]),e(`
        `),t("span",{class:"token attr-name"},"label-width"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("60px"),t("span",{class:"token punctuation"},'"')]),e(`
        `),t("span",{class:"token attr-name"},":detail"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("true"),t("span",{class:"token punctuation"},'"')]),e(`
    `),t("span",{class:"token punctuation"},"/>")]),e(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("template")]),t("span",{class:"token punctuation"},">")]),e(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("script")]),e(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[e(`
`),t("span",{class:"token keyword"},"import"),e(),t("span",{class:"token punctuation"},"{"),e(" ref "),t("span",{class:"token punctuation"},"}"),e(),t("span",{class:"token keyword"},"from"),e(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),e(`

`),t("span",{class:"token keyword"},"const"),e(" formModel "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),e(`
    `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},"'\u803F\u671D\u7EE7'"),t("span",{class:"token punctuation"},","),e(`
    `),t("span",{class:"token literal-property property"},"year"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"28"),t("span",{class:"token punctuation"},","),e(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("script")]),t("span",{class:"token punctuation"},">")]),e(`
`)])])],-1),v=t("h2",{id:"\u6805\u683C\u5E03\u5C40",tabindex:"-1"},[e("\u6805\u683C\u5E03\u5C40 "),t("a",{class:"header-anchor",href:"#\u6805\u683C\u5E03\u5C40","aria-hidden":"true"},"#")],-1),x=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("template")]),t("span",{class:"token punctuation"},">")]),e(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("my-form")]),e(`
        `),t("span",{class:"token attr-name"},":model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("formModel"),t("span",{class:"token punctuation"},'"')]),e(`
        `),t("span",{class:"token attr-name"},":formItem"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e(`[
            { label: '\u540D\u79F0', prop: 'name', required: true },
            { label: '\u5E74\u9F84', prop: 'year', itemType: 'number' },
            { label: '\u6D4B\u8BD51', prop: 'name1' },
            { label: '\u6D4B\u8BD52', prop: 'name2' },
            { label: '\u6D4B\u8BD53', prop: 'name3' },
        ]`),t("span",{class:"token punctuation"},'"')]),e(`
        `),t("span",{class:"token attr-name"},"label-width"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("60px"),t("span",{class:"token punctuation"},'"')]),e(`
        `),t("span",{class:"token attr-name"},"colFlag"),e(`
    `),t("span",{class:"token punctuation"},"/>")]),e(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("template")]),t("span",{class:"token punctuation"},">")]),e(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("script")]),e(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[e(`
`),t("span",{class:"token keyword"},"import"),e(),t("span",{class:"token punctuation"},"{"),e(" ref "),t("span",{class:"token punctuation"},"}"),e(),t("span",{class:"token keyword"},"from"),e(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),e(`

`),t("span",{class:"token keyword"},"const"),e(" formModel "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("script")]),t("span",{class:"token punctuation"},">")]),e(`
`)])])],-1),A=t("h2",{id:"\u67E5\u8BE2\u8868\u5355",tabindex:"-1"},[e("\u67E5\u8BE2\u8868\u5355 "),t("a",{class:"header-anchor",href:"#\u67E5\u8BE2\u8868\u5355","aria-hidden":"true"},"#")],-1),M=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("template")]),t("span",{class:"token punctuation"},">")]),e(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("my-form")]),e(`
        `),t("span",{class:"token attr-name"},"inline"),e(`
        `),t("span",{class:"token attr-name"},"query"),e(`
        `),t("span",{class:"token attr-name"},":model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("formModel"),t("span",{class:"token punctuation"},'"')]),e(`
        `),t("span",{class:"token attr-name"},":formItem"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e(`[
            { label: '\u540D\u79F0', prop: 'name', required: true },
            { label: '\u5E74\u9F84', prop: 'year', itemType: 'number' },
            { label: '\u6D4B\u8BD51', prop: 'name1' },
            { label: '\u6D4B\u8BD52', prop: 'name2' },
            { label: '\u6D4B\u8BD53', prop: 'name3' },
        ]`),t("span",{class:"token punctuation"},'"')]),e(`
        `),t("span",{class:"token attr-name"},"label-width"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("60px"),t("span",{class:"token punctuation"},'"')]),e(`
    `),t("span",{class:"token punctuation"},"/>")]),e(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("template")]),t("span",{class:"token punctuation"},">")]),e(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("script")]),e(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[e(`
`),t("span",{class:"token keyword"},"import"),e(),t("span",{class:"token punctuation"},"{"),e(" ref "),t("span",{class:"token punctuation"},"}"),e(),t("span",{class:"token keyword"},"from"),e(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),e(`

`),t("span",{class:"token keyword"},"const"),e(" formModel "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("script")]),t("span",{class:"token punctuation"},">")]),e(`
`)])])],-1),q=E('<h2 id="\u5C5E\u6027" tabindex="-1">\u5C5E\u6027 <a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>formItem</td><td><code>formItem</code> \u751F\u6210 <code>form</code> \u8868\u5355\u7684\u914D\u7F6E\u6570\u7EC4</td><td>Array</td><td>\u5FC5\u4F20</td><td></td></tr><tr><td>query</td><td>\u662F\u5426\u9ED8\u8BA4\u6DFB\u52A0\u67E5\u8BE2\u3001\u91CD\u7F6E\u6309\u94AE\uFF08\u67E5\u8BE2\u8868\u5355\uFF09</td><td>Boolean</td><td></td><td>false</td></tr><tr><td>rules</td><td><code>form</code> \u8868\u5355\u7684\u6821\u9A8C\u5BF9\u8C61</td><td>Object</td><td></td><td>{}</td></tr><tr><td>columns</td><td>\u9ED8\u8BA4\u4E00\u884C\u663E\u793A\u7684 <code>form-item</code> \u6570\u91CF \u9ED8\u8BA4\u4E3A 3 \u4E2A</td><td>Number</td><td></td><td>3</td></tr><tr><td>listenEl</td><td>\u662F\u5426\u76D1\u542C\u8BE5 <code>form</code> \u7684\u5BBD\u5EA6\u4EE5\u81EA\u9002\u5E94 \u4E00\u884C\u663E\u793A\u7684 <code>form-item</code> \u6570\u91CF (\u5FC5\u987B\u5728\u662F <code>query</code> \u4E3A <code>true</code> \u7684\u65F6\u5019\u624D\u4F1A\u751F\u6548\uFF0Ccolumns \u5C06\u5931\u6548)</td><td>Boolean</td><td></td><td>true</td></tr><tr><td>collapsible</td><td>\u662F\u5426\u652F\u6301\u8868\u5355\u9879\u5C55\u5F00\u3001\u6536\u8D77 (\u5FC5\u987B\u5728\u662F <code>query</code> \u4E3A <code>true</code> \u7684\u65F6\u5019\u624D\u4F1A\u751F\u6548)</td><td>Boolean</td><td></td><td>true</td></tr><tr><td>collapsed</td><td>\u521D\u59CB\u6536\u8D77\u8868\u5355\u9879\u76EE\uFF0C<code>collapsible=true</code> \u662F\u624D\u6709\u6548</td><td>Boolean</td><td></td><td>true</td></tr><tr><td>detail</td><td>\u8868\u5355\u662F\u5426\u4E3A\u8BE6\u60C5\u5C55\u793A\u8868\u5355</td><td>Boolean</td><td></td><td>false</td></tr><tr><td>colFlag</td><td>\u662F\u5426\u5F00\u542F\u8868\u5355\u54CD\u5E94\u5F0F</td><td>Boolean</td><td></td><td>true</td></tr></tbody></table><h2 id="\u63D2\u69FD" tabindex="-1">\u63D2\u69FD <a class="header-anchor" href="#\u63D2\u69FD" aria-hidden="true">#</a></h2><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u63D2\u69FD\u4F5C\u7528\u57DF</th></tr></thead><tbody><tr><td><code>item.prop</code></td><td>\u6BCF\u4E2A<code>formItem</code>\u5BF9\u8C61\u7684<code>prop</code>\u5373\u4E3A<strong>\u63D2\u69FD\u540D</strong></td><td><code>{model\uFF0Cprop\uFF0Citem}</code></td></tr></tbody></table>',4);function w(p,l,r,c,d,u){const f=F("render-demo-0"),n=F("demo"),a=F("render-demo-1"),s=F("render-demo-2"),o=F("render-demo-3");return B(),h("div",null,[D,m(n,{sourceCode:`<template>
    <my-form
        :model="formModel"
        :formItem="[
            { label: '\u540D\u79F0', prop: 'name', required: true },
            { label: '\u5E74\u9F84', prop: 'year', itemType: 'number' },
            { label: '\u6027\u522B', prop: 'sex', itemType: 'select' },
        ]"
        label-width="60px"
    />
</template>

<script setup>
import { ref } from 'vue';

const formModel = ref({
    name: '',
    year: '',
    sex: '',
});
<\/script>
`},{highlight:i(()=>[y]),default:i(()=>[m(f)]),_:1}),C,m(n,{sourceCode:`<template>
    <my-form
        :model="formModel"
        :formItem="[
            { label: '\u540D\u79F0', prop: 'name', required: true },
            { label: '\u5E74\u9F84', prop: 'year', itemType: 'number' },
        ]"
        label-width="60px"
        :detail="true"
    />
</template>

<script setup>
import { ref } from 'vue';

const formModel = ref({
    name: '\u803F\u671D\u7EE7',
    year: 28,
});
<\/script>
`},{highlight:i(()=>[g]),default:i(()=>[m(a)]),_:1}),v,m(n,{sourceCode:`<template>
    <my-form
        :model="formModel"
        :formItem="[
            { label: '\u540D\u79F0', prop: 'name', required: true },
            { label: '\u5E74\u9F84', prop: 'year', itemType: 'number' },
            { label: '\u6D4B\u8BD51', prop: 'name1' },
            { label: '\u6D4B\u8BD52', prop: 'name2' },
            { label: '\u6D4B\u8BD53', prop: 'name3' },
        ]"
        label-width="60px"
        colFlag
    />
</template>

<script setup>
import { ref } from 'vue';

const formModel = ref({});
<\/script>
`},{highlight:i(()=>[x]),default:i(()=>[m(s)]),_:1}),A,m(n,{sourceCode:`<template>
    <my-form
        inline
        query
        :model="formModel"
        :formItem="[
            { label: '\u540D\u79F0', prop: 'name', required: true },
            { label: '\u5E74\u9F84', prop: 'year', itemType: 'number' },
            { label: '\u6D4B\u8BD51', prop: 'name1' },
            { label: '\u6D4B\u8BD52', prop: 'name2' },
            { label: '\u6D4B\u8BD53', prop: 'name3' },
        ]"
        label-width="60px"
    />
</template>

<script setup>
import { ref } from 'vue';

const formModel = ref({});
<\/script>
`},{highlight:i(()=>[M]),default:i(()=>[m(o)]),_:1}),q])}var N=_(b,[["render",w]]);export{I as __pageData,N as default};
