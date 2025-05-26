import{_ as b,c as C,e as v,w as y,a as m,r as h,o as E,V as g,b as n,d as t}from"./app.6056150c.js";const F={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:o,createVNode:p,openBlock:l,createElementBlock:u}=g;function c(a,e){const i=o("my-tree-select");return l(),u("div",null,[p(i,{modelValue:a.val,"onUpdate:modelValue":e[0]||(e[0]=k=>a.val=k),list:a.options},null,8,["modelValue","list"])])}const{ref:s}=g;return{render:c,...{setup(a,{expose:e}){e();const d={val:s(""),options:[{value:"1",label:"Level one 1",children:[{value:"1-1",label:"Level two 1-1",children:[{value:"1-1-1",label:"Level three 1-1-1"}]}]},{value:"2",label:"Level one 2",children:[{value:"2-1",label:"Level two 2-1",children:[{value:"2-1-1",label:"Level three 2-1-1"}]},{value:"2-2",label:"Level two 2-2",children:[{value:"2-2-1",label:"Level three 2-2-1"}]}]},{value:"3",label:"Level one 3",children:[{value:"3-1",label:"Level two 3-1",children:[{value:"3-1-1",label:"Level three 3-1-1"}]},{value:"3-2",label:"Level two 3-2",children:[{value:"3-2-1",label:"Level three 3-2-1"}]}]}],ref:s};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}}}}()}},A=JSON.parse('{"title":"MySelect \u4E0B\u62C9\u9009\u62E9","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u4F7F\u7528","slug":"\u57FA\u7840\u4F7F\u7528"},{"level":2,"title":"\u6269\u5C55\u5C5E\u6027","slug":"\u6269\u5C55\u5C5E\u6027"}],"relativePath":"ui/guide/MyTreeSelect.md","lastUpdated":1698052088000}'),L=m('<h1 id="myselect-\u4E0B\u62C9\u9009\u62E9" tabindex="-1">MySelect \u4E0B\u62C9\u9009\u62E9 <a class="header-anchor" href="#myselect-\u4E0B\u62C9\u9009\u62E9" aria-hidden="true">#</a></h1><p>\u5BF9 <a href="https://element-plus.org/zh-CN/component/tree-select.html" target="_blank" rel="noopener noreferrer"><code>el-tree-select</code></a> \u7EC4\u4EF6\u8FDB\u884C\u4E8C\u6B21\u5C01\u88C5\uFF0C\u96C6\u6210\u6570\u636E\u5B57\u5178\u6570\u636E\u81EA\u52A8\u67E5\u8BE2\uFF0C\u7B80\u5316\u6BCF\u6B21\u67E5\u8BE2 <code>list</code> \u7684\u5DE5\u4F5C\u3002</p><h2 id="\u57FA\u7840\u4F7F\u7528" tabindex="-1">\u57FA\u7840\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u7840\u4F7F\u7528" aria-hidden="true">#</a></h2>',3),_=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("my-tree-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("val"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":list"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("my-tree-select")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"let"),t(" val "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" options "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
    `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Level one 1'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token punctuation"},"{"),t(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1-1'"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Level two 1-1'"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                    `),n("span",{class:"token punctuation"},"{"),t(`
                        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1-1-1'"),n("span",{class:"token punctuation"},","),t(`
                        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Level three 1-1-1'"),n("span",{class:"token punctuation"},","),t(`
                    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Level one 2'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token punctuation"},"{"),t(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-1'"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Level two 2-1'"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                    `),n("span",{class:"token punctuation"},"{"),t(`
                        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-1-1'"),n("span",{class:"token punctuation"},","),t(`
                        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Level three 2-1-1'"),n("span",{class:"token punctuation"},","),t(`
                    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-2'"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Level two 2-2'"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                    `),n("span",{class:"token punctuation"},"{"),t(`
                        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-2-1'"),n("span",{class:"token punctuation"},","),t(`
                        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Level three 2-2-1'"),n("span",{class:"token punctuation"},","),t(`
                    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Level one 3'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token punctuation"},"{"),t(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-1'"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Level two 3-1'"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                    `),n("span",{class:"token punctuation"},"{"),t(`
                        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-1-1'"),n("span",{class:"token punctuation"},","),t(`
                        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Level three 3-1-1'"),n("span",{class:"token punctuation"},","),t(`
                    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-2'"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Level two 3-2'"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                    `),n("span",{class:"token punctuation"},"{"),t(`
                        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-2-1'"),n("span",{class:"token punctuation"},","),t(`
                        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Level three 3-2-1'"),n("span",{class:"token punctuation"},","),t(`
                    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),B=m('<h2 id="\u6269\u5C55\u5C5E\u6027" tabindex="-1">\u6269\u5C55\u5C5E\u6027 <a class="header-anchor" href="#\u6269\u5C55\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>list</td><td>\u4E0B\u62C9\u9009\u62E9\u7684\u6570\u636E\u6E90</td><td>Array</td><td>[]</td></tr><tr><td>type</td><td>store.dispatch \u7684\u65B9\u6CD5\u540D,\u517C\u5BB9&#39;GETdeptTree&#39;/&#39;deptTree&#39;/&#39;dept_tree&#39;\u4E09\u79CD\u65B9\u5F0F</td><td>String</td><td></td></tr><tr><td>api</td><td>\u6570\u636E\u8BF7\u6C42\u5730\u5740\uFF0C\u9ED8\u8BA4\u8BF7\u6C42\u4E3A\xB7GET\xB7\u65B9\u5F0F\uFF0C\u652F\u6301\u4F20\u9012 url \u5730\u5740\u3001api \u8BF7\u6C42\u65B9\u6CD5\u4E24\u79CD</td><td>String\uFF0CFunction</td><td></td></tr></tbody></table>',2);function f(o,p,l,u,c,s){const r=h("render-demo-0"),a=h("demo");return E(),C("div",null,[L,v(a,{sourceCode:`<template>
    <my-tree-select v-model="val" :list="options"></my-tree-select>
</template>

<script setup>
import { ref } from 'vue';

let val = ref('');
const options = [
    {
        value: '1',
        label: 'Level one 1',
        children: [
            {
                value: '1-1',
                label: 'Level two 1-1',
                children: [
                    {
                        value: '1-1-1',
                        label: 'Level three 1-1-1',
                    },
                ],
            },
        ],
    },
    {
        value: '2',
        label: 'Level one 2',
        children: [
            {
                value: '2-1',
                label: 'Level two 2-1',
                children: [
                    {
                        value: '2-1-1',
                        label: 'Level three 2-1-1',
                    },
                ],
            },
            {
                value: '2-2',
                label: 'Level two 2-2',
                children: [
                    {
                        value: '2-2-1',
                        label: 'Level three 2-2-1',
                    },
                ],
            },
        ],
    },
    {
        value: '3',
        label: 'Level one 3',
        children: [
            {
                value: '3-1',
                label: 'Level two 3-1',
                children: [
                    {
                        value: '3-1-1',
                        label: 'Level three 3-1-1',
                    },
                ],
            },
            {
                value: '3-2',
                label: 'Level two 3-2',
                children: [
                    {
                        value: '3-2-1',
                        label: 'Level three 3-2-1',
                    },
                ],
            },
        ],
    },
];
<\/script>
`},{highlight:y(()=>[_]),default:y(()=>[v(r)]),_:1}),B])}var V=b(F,[["render",f]]);export{A as __pageData,V as default};
