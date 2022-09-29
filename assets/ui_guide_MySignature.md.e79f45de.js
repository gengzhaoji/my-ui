import{_ as v,c as C,e as g,w as h,a as f,b as t,d as n,r as B,o as A,V as E}from"./app.16d9be69.js";const D={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:i,resolveComponent:p,withCtx:k,createVNode:l,createElementVNode:F,openBlock:m,createElementBlock:r}=E;function c(e,a){const d=p("my-button"),u=p("my-signature");return m(),r("div",null,[F("div",null,[l(d,{onClick:a[0]||(a[0]=s=>e.signatureShow=!0)},{default:k(()=>[i("\u7B7E\u540D")]),_:1}),l(u,{modelValue:e.signatureShow,"onUpdate:modelValue":a[1]||(a[1]=s=>e.signatureShow=s),onGetImg:a[2]||(a[2]=s=>{e.signatureShow=!1,e.model[e.prop]=s})},null,8,["modelValue"])])])}const{ref:o}=E;return{render:c,...{setup(e,{expose:a}){a();const u={signatureShow:o(!1),ref:o};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}}}}(),"render-demo-1":function(){const{createTextVNode:i,resolveComponent:p,withCtx:k,createVNode:l,createElementVNode:F,openBlock:m,createElementBlock:r}=E;function c(e,a){const d=p("my-button"),u=p("my-signature");return m(),r("div",null,[F("div",null,[l(d,{onClick:a[0]||(a[0]=s=>e.signatureShow=!0)},{default:k(()=>[i("\u7B7E\u540D")]),_:1}),l(u,{modelValue:e.signatureShow,"onUpdate:modelValue":a[1]||(a[1]=s=>e.signatureShow=s),onGetImg:a[2]||(a[2]=s=>{e.signatureShow=!1,e.model[e.prop]=s}),width:550,height:300},null,8,["modelValue"])])])}const{ref:o}=E;return{render:c,...{setup(e,{expose:a}){a();const u={signatureShow:o(!1),ref:o};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}}}}()}},q=JSON.parse('{"title":"MySignature \u7B7E\u540D","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u4F7F\u7528","slug":"\u57FA\u7840\u4F7F\u7528"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u5BBD\u9AD8","slug":"\u81EA\u5B9A\u4E49\u5BBD\u9AD8"},{"level":2,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027"},{"level":2,"title":"SignaturePad \u5C5E\u6027","slug":"signaturepad-\u5C5E\u6027"}],"relativePath":"ui/guide/MySignature.md","lastUpdated":1664273809000}'),b=f('<h1 id="mysignature-\u7B7E\u540D" tabindex="-1">MySignature \u7B7E\u540D <a class="header-anchor" href="#mysignature-\u7B7E\u540D" aria-hidden="true">#</a></h1><p>\u5BF9 <a href="https://www.npmjs.com/package/signature_pad" target="_blank" rel="noopener noreferrer"><code>signature_pad</code></a> \u5C01\u88C5\u7684\u7B7E\u5B57\u7EC4\u4EF6\u3002</p><h2 id="\u57FA\u7840\u4F7F\u7528" tabindex="-1">\u57FA\u7840\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u7840\u4F7F\u7528" aria-hidden="true">#</a></h2>',3),w=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("my-button")]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("signatureShow = true"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("\u7B7E\u540D"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("my-button")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("my-signature")]),n(`
            `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("signatureShow"),t("span",{class:"token punctuation"},'"')]),n(`
            `),t("span",{class:"token attr-name"},"@getImg"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n(`
                (val) => {
                    signatureShow = false;
                    model[prop] = val;
                }
            `),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token punctuation"},"/>")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"let"),n(" signatureShow "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),S=t("h2",{id:"\u81EA\u5B9A\u4E49\u5BBD\u9AD8",tabindex:"-1"},[n("\u81EA\u5B9A\u4E49\u5BBD\u9AD8 "),t("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u5BBD\u9AD8","aria-hidden":"true"},"#")],-1),y=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("my-button")]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("signatureShow = true"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("\u7B7E\u540D"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("my-button")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("my-signature")]),n(`
            `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("signatureShow"),t("span",{class:"token punctuation"},'"')]),n(`
            `),t("span",{class:"token attr-name"},"@getImg"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n(`
                (val) => {
                    signatureShow = false;
                    model[prop] = val;
                }
            `),t("span",{class:"token punctuation"},'"')]),n(`
            `),t("span",{class:"token attr-name"},":width"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("550"),t("span",{class:"token punctuation"},'"')]),n(`
            `),t("span",{class:"token attr-name"},":height"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("300"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token punctuation"},"/>")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"let"),n(" signatureShow "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),N=f('<h2 id="\u5C5E\u6027" tabindex="-1">\u5C5E\u6027 <a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>height</td><td>\u7B7E\u5B57\u7248\u7684\u9AD8\u5EA6</td><td>Number</td><td>200</td></tr><tr><td>width</td><td>\u7B7E\u5B57\u7248\u7684\u5BBD\u5EA6</td><td>Number</td><td>470</td></tr><tr><td>signatureObj</td><td>SignaturePad \u7684\u914D\u7F6E\u5C5E\u6027</td><td>Object</td><td><code>{ backgroundColor: &#39;#b1b3b8&#39; }</code></td></tr></tbody></table><h2 id="signaturepad-\u5C5E\u6027" tabindex="-1">SignaturePad \u5C5E\u6027 <a class="header-anchor" href="#signaturepad-\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>dotSize</td><td>\u70B9\u7684\u5927\u5C0F\uFF08\u5728\u5C4F\u5E55\u4E0A\u70B9\u51FB\u7559\u4E0B\u7684\u70B9\u5927\u5C0F\uFF0C\u5355\u4F4D\uFF1Apx\uFF09</td><td>Number</td><td></td></tr><tr><td>minWidth</td><td>\u7EBF\u7684\u6700\u5C0F\u5BBD\u5EA6\uFF08\u5355\u4F4D\uFF1Apx\uFF0C\u9ED8\u8BA4\uFF1A0.5\uFF09</td><td>Number</td><td>0.5</td></tr><tr><td>maxWidth</td><td>\u7EBF\u7684\u6700\u5927\u5BBD\u5EA6\uFF08\u5355\u4F4D\uFF1Apx\uFF0C\u9ED8\u8BA4\uFF1A2.5\uFF09</td><td>Number</td><td>2.5</td></tr><tr><td>throttle</td><td>\u8282\u6D41\uFF08\u6BCF\u6B21\u7ED8\u5236\u4E24\u4E2A\u70B9\u4E4B\u95F4\u7684\u65F6\u95F4\uFF0C\u5355\u4F4D\uFF1Ams\uFF0C\u9ED8\u8BA4\uFF1A16\uFF0C\u6CE8\u610F\uFF1A\u8BBE\u7F6E\u8FC7\u5927\u4F1A\u663E\u5F97\u5F88\u5361\u987F\uFF09</td><td>Number</td><td>16</td></tr><tr><td>minDistance</td><td>\u6700\u5C0F\u8DDD\u79BB\uFF08\u6BCF\u6B21\u7ED8\u5236\u4E24\u4E2A\u70B9\u4E4B\u95F4\u7684\u6700\u5C0F\u8DDD\u79BB\uFF0C\u5355\u4F4D\uFF1Apx\uFF0C\u9ED8\u8BA4\uFF1A5\uFF09</td><td>Number</td><td>5</td></tr><tr><td>backgroundColor</td><td>\u80CC\u666F\u8272\uFF08\u9ED8\u8BA4\uFF1A#000\uFF09</td><td>String</td><td>#000</td></tr><tr><td>penColor</td><td>\u7EBF\u6761\u989C\u8272\uFF08\u9ED8\u8BA4\uFF1A#fff\uFF09</td><td>String</td><td>#fff</td></tr><tr><td>velocityFilterWeight</td><td>\u6839\u636E\u901F\u5EA6\u63A7\u5236\u7EBF\u7684 weight\uFF08\u9ED8\u8BA4\uFF1A0.7\uFF09</td><td>Number</td><td>0.7</td></tr><tr><td>onBegin</td><td>\u7B14\u5F00\u59CB\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>Function</td><td></td></tr><tr><td>onEnd</td><td>\u7B14\u7ED3\u675F\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>Function</td><td></td></tr></tbody></table>',4);function V(i,p,k,l,F,m){const r=B("render-demo-0"),c=B("demo"),o=B("render-demo-1");return A(),C("div",null,[b,g(c,{sourceCode:`<template>
    <div>
        <my-button @click="signatureShow = true">\u7B7E\u540D</my-button>
        <my-signature
            v-model="signatureShow"
            @getImg="
                (val) => {
                    signatureShow = false;
                    model[prop] = val;
                }
            "
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';

let signatureShow = ref(false);
<\/script>
`},{highlight:h(()=>[w]),default:h(()=>[g(r)]),_:1}),S,g(c,{sourceCode:`<template>
    <div>
        <my-button @click="signatureShow = true">\u7B7E\u540D</my-button>
        <my-signature
            v-model="signatureShow"
            @getImg="
                (val) => {
                    signatureShow = false;
                    model[prop] = val;
                }
            "
            :width="550"
            :height="300"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';

let signatureShow = ref(false);
<\/script>
`},{highlight:h(()=>[y]),default:h(()=>[g(o)]),_:1}),N])}var j=v(D,[["render",V]]);export{q as __pageData,j as default};
