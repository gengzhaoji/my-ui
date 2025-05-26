import{_,c as h,e as i,w as o,f as m,a as y,b as n,d as t,r as d,o as g,V as C}from"./app.6056150c.js";const E={name:"component-doc",components:{"render-demo-0":function(){const{resolveDynamicComponent:e,openBlock:s,createBlock:u,createCommentVNode:c,createElementBlock:p}=C;function l(a,k){return s(),p("div",null,[a.dynamicComponent?(s(),u(e(a.dynamicComponent),{key:0})):c("",!0)])}return{render:l,...{data(){return{dynamicComponent:null}},mounted(){m(()=>import("./chunks/index.fed10afa.js"),["assets/chunks/index.fed10afa.js","assets/app.6056150c.js"]).then(a=>{this.dynamicComponent=a.default})}}}}(),"render-demo-1":function(){const{resolveDynamicComponent:e,openBlock:s,createBlock:u,createCommentVNode:c,createElementBlock:p}=C;function l(a,k){return s(),p("div",null,[a.dynamicComponent?(s(),u(e(a.dynamicComponent),{key:0,toolbar:"simple"})):c("",!0)])}return{render:l,...{data(){return{dynamicComponent:null}},mounted(){m(()=>import("./chunks/index.fed10afa.js"),["assets/chunks/index.fed10afa.js","assets/app.6056150c.js"]).then(a=>{this.dynamicComponent=a.default})}}}}()}},b=JSON.parse('{"title":"MyEditor \u5BCC\u6587\u672C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027"}],"relativePath":"ui/guide/MyEditor.md","lastUpdated":1678083950000}'),f=y('<h1 id="myeditor-\u5BCC\u6587\u672C" tabindex="-1">MyEditor \u5BCC\u6587\u672C <a class="header-anchor" href="#myeditor-\u5BCC\u6587\u672C" aria-hidden="true">#</a></h1><p>\u57FA\u4E8E<a href="https://www.wangeditor.com/" target="_blank" rel="noopener noreferrer"><code>wangeditor</code></a>\u8FDB\u884C\u5C01\u88C5\uFF0C\u6269\u5C55\u4E3A <code>elForm</code> \u5B50\u5143\u7D20\uFF0C\u62E5\u6709 <code>elFormItem</code> \u7684\u529F\u80FD\u3002</p><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h2>',3),B=n("div",null,"\u9ED8\u8BA4\u7F16\u8F91\u5668",-1),v=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("component")]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("dynamicComponent"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":is"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("dynamicComponent"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("component")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"dynamicComponent"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

    `),n("span",{class:"token function"},"mounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'../../../src/components/my-editor'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"module"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("dynamicComponent "),n("span",{class:"token operator"},"="),t(" module"),n("span",{class:"token punctuation"},"."),t("default"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),F=n("div",null,"\u7B80\u5355\u7F16\u8F91\u5668",-1),D=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("component")]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("dynamicComponent"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":is"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("dynamicComponent"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"toolbar"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("simple"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("component")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"dynamicComponent"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

    `),n("span",{class:"token function"},"mounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'../../../src/components/my-editor'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"module"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("dynamicComponent "),n("span",{class:"token operator"},"="),t(" module"),n("span",{class:"token punctuation"},"."),t("default"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),w=n("h2",{id:"\u5C5E\u6027",tabindex:"-1"},[t("\u5C5E\u6027 "),n("a",{class:"header-anchor",href:"#\u5C5E\u6027","aria-hidden":"true"},"#")],-1),x=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"\u5C5E\u6027"),n("th",null,"\u8BF4\u660E"),n("th",null,"\u7C7B\u578B"),n("th",null,"\u53EF\u9009"),n("th",null,"\u9ED8\u8BA4\u503C")])]),n("tbody",null,[n("tr",null,[n("td",null,"modelValue"),n("td",null,"\u9ED8\u8BA4\u503C"),n("td",null,"String"),n("td"),n("td")]),n("tr",null,[n("td",null,"toolbar"),n("td",null,"\u5DE5\u5177\u6761"),n("td",{stringarray:""}),n("td",null,"simple\u3001classic\u3001document"),n("td",null,"classic")]),n("tr",null,[n("td",null,"config"),n("td",null,"CKEditor \u5B9E\u4F8B\u5316\u914D\u7F6E\u53C2\u6570"),n("td",null,"Object"),n("td"),n("td")]),n("tr",null,[n("td",null,"height"),n("td",null,"\u7F16\u8F91\u5668\u9AD8\u5EA6\uFF0C\u5982\u679C\u4E0D\u8BBE\u7F6E\uFF0C\u5373\u6839\u636E\u8F93\u5165\u5185\u5BB9\u9002\u5E94"),n("td",null,"String"),n("td"),n("td",null,"300px")])])],-1);function A(e,s,u,c,p,l){const r=d("render-demo-0"),a=d("demo"),k=d("render-demo-1");return g(),h("div",null,[f,i(a,{sourceCode:`<template>
    <component v-if="dynamicComponent" :is="dynamicComponent"></component>
</template>
<script>
export default {
    data() {
        return {
            dynamicComponent: null,
        };
    },

    mounted() {
        import('../../../src/components/my-editor').then((module) => {
            this.dynamicComponent = module.default;
        });
    },
};
<\/script>
`},{description:o(()=>[B]),highlight:o(()=>[v]),default:o(()=>[i(r)]),_:1}),i(a,{sourceCode:`<template>
    <component v-if="dynamicComponent" :is="dynamicComponent" toolbar="simple"></component>
</template>

<script>
export default {
    data() {
        return {
            dynamicComponent: null,
        };
    },

    mounted() {
        import('../../../src/components/my-editor').then((module) => {
            this.dynamicComponent = module.default;
        });
    },
};
<\/script>
`},{description:o(()=>[F]),highlight:o(()=>[D]),default:o(()=>[i(k)]),_:1}),w,x])}var N=_(E,[["render",A]]);export{b as __pageData,N as default};
