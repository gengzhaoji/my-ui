import{_,c as h,e as d,w as k,a as E,b as n,d as t,r as F,o as B,V as m}from"./app.9fd02aa8.js";const b={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:p,createVNode:c,openBlock:l,createElementBlock:r}=m;function i(a,e){const s=p("my-form");return l(),r("div",null,[c(s,{model:a.formModel,formItem:[{label:"\u540D\u79F0",prop:"name",required:!0},{label:"\u5E74\u9F84",prop:"year",itemType:"number"},{label:"\u6027\u522B",prop:"sex",itemType:"select"}],"label-width":"60px"},null,8,["model"])])}const{ref:u}=m;return{render:i,...{setup(a,{expose:e}){e();const o={formModel:u({name:"",year:"",sex:""}),ref:u};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}}}(),"render-demo-1":function(){const{resolveComponent:p,createVNode:c,openBlock:l,createElementBlock:r}=m;function i(a,e){const s=p("my-form");return l(),r("div",null,[c(s,{model:a.formModel,formItem:[{label:"\u540D\u79F0",prop:"name",required:!0},{label:"\u5E74\u9F84",prop:"year",itemType:"number"}],"label-width":"60px",detail:!0},null,8,["model"])])}const{ref:u}=m;return{render:i,...{setup(a,{expose:e}){e();const o={formModel:u({name:"\u803F\u671D\u7EE7",year:28}),ref:u};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}}}(),"render-demo-2":function(){const{resolveComponent:p,createVNode:c,openBlock:l,createElementBlock:r}=m;function i(a,e){const s=p("my-form");return l(),r("div",null,[c(s,{model:a.formModel,formItem:[{label:"\u540D\u79F0",prop:"name",required:!0},{label:"\u5E74\u9F84",prop:"year",itemType:"number"},{label:"\u6D4B\u8BD51",prop:"name1"},{label:"\u6D4B\u8BD52",prop:"name2"},{label:"\u6D4B\u8BD53",prop:"name3"}],"label-width":"60px",colFlag:""},null,8,["model"])])}const{ref:u}=m;return{render:i,...{setup(a,{expose:e}){e();const o={formModel:u({}),ref:u};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}}}(),"render-demo-3":function(){const{resolveComponent:p,createVNode:c,openBlock:l,createElementBlock:r}=m;function i(a,e){const s=p("my-form");return l(),r("div",null,[c(s,{inline:"",query:"",model:a.formModel,formItem:[{label:"\u540D\u79F0",prop:"name",required:!0},{label:"\u5E74\u9F84",prop:"year",itemType:"number"},{label:"\u6D4B\u8BD51",prop:"name1"},{label:"\u6D4B\u8BD52",prop:"name2"},{label:"\u6D4B\u8BD53",prop:"name3"}],"label-width":"60px"},null,8,["model"])])}const{ref:u}=m;return{render:i,...{setup(a,{expose:e}){e();const o={formModel:u({}),ref:u};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}}}()}},I=JSON.parse('{"title":"MyForm \u8868\u5355","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u8BE6\u60C5","slug":"\u8BE6\u60C5"},{"level":2,"title":"\u6805\u683C\u5E03\u5C40","slug":"\u6805\u683C\u5E03\u5C40"},{"level":2,"title":"\u67E5\u8BE2\u8868\u5355","slug":"\u67E5\u8BE2\u8868\u5355"},{"level":2,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027"},{"level":2,"title":"\u63D2\u69FD","slug":"\u63D2\u69FD"}],"relativePath":"ui/guide/MyForm.md","lastUpdated":1664273809000}'),D=E('<h1 id="myform-\u8868\u5355" tabindex="-1">MyForm \u8868\u5355 <a class="header-anchor" href="#myform-\u8868\u5355" aria-hidden="true">#</a></h1><p>\u57FA\u4E8E<a href="https://element-plus.org/zh-CN/component/form.html" target="_blank" rel="noopener noreferrer"><code>el-form</code></a>\u8FDB\u884C\u5C01\u88C5\uFF0C\u5C01\u88C5\u4E86\u67E5\u8BE2 <code>form</code> \u8868\u5355\u4E00\u884C\u663E\u793A\uFF0C\u66F4\u591A\u5C55\u5F00\u67E5\u8BE2\u529F\u80FD\uFF0C\u4EE5\u53CA\u6839\u636E\u914D\u7F6E\u6570\u7EC4\u751F\u6210 <code>form</code> \u8868\u5355\uFF0C\uFF0C\u8868\u5355\u9ED8\u8BA4\u6821\u9A8C<code>rules</code>\u6570\u7EC4\uFF0C\u4EE5\u53CA\u5E38\u7528\u65B0\u589E\uFF0C\u8BE6\u60C5\u7B49\u5C55\u793A <code>form</code> \u8868\u5355\u3002</p><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h2>',3),y=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("my-form")]),t(`
        `),n("span",{class:"token attr-name"},":model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("formModel"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},":formItem"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`[
            { label: `),n("span",{class:"token punctuation"},"'"),t("\u540D\u79F0"),n("span",{class:"token punctuation"},"'"),t(", prop: "),n("span",{class:"token punctuation"},"'"),t("name"),n("span",{class:"token punctuation"},"'"),t(`, required: true },
            { label: `),n("span",{class:"token punctuation"},"'"),t("\u5E74\u9F84"),n("span",{class:"token punctuation"},"'"),t(", prop: "),n("span",{class:"token punctuation"},"'"),t("year"),n("span",{class:"token punctuation"},"'"),t(", itemType: "),n("span",{class:"token punctuation"},"'"),t("number"),n("span",{class:"token punctuation"},"'"),t(` },
            { label: `),n("span",{class:"token punctuation"},"'"),t("\u6027\u522B"),n("span",{class:"token punctuation"},"'"),t(", prop: "),n("span",{class:"token punctuation"},"'"),t("sex"),n("span",{class:"token punctuation"},"'"),t(", itemType: "),n("span",{class:"token punctuation"},"'"),t("select"),n("span",{class:"token punctuation"},"'"),t(` },
        ]`),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},"label-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("60px"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(" formModel "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"year"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),C=n("h2",{id:"\u8BE6\u60C5",tabindex:"-1"},[t("\u8BE6\u60C5 "),n("a",{class:"header-anchor",href:"#\u8BE6\u60C5","aria-hidden":"true"},"#")],-1),g=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("my-form")]),t(`
        `),n("span",{class:"token attr-name"},":model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("formModel"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},":formItem"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`[
            { label: `),n("span",{class:"token punctuation"},"'"),t("\u540D\u79F0"),n("span",{class:"token punctuation"},"'"),t(", prop: "),n("span",{class:"token punctuation"},"'"),t("name"),n("span",{class:"token punctuation"},"'"),t(`, required: true },
            { label: `),n("span",{class:"token punctuation"},"'"),t("\u5E74\u9F84"),n("span",{class:"token punctuation"},"'"),t(", prop: "),n("span",{class:"token punctuation"},"'"),t("year"),n("span",{class:"token punctuation"},"'"),t(", itemType: "),n("span",{class:"token punctuation"},"'"),t("number"),n("span",{class:"token punctuation"},"'"),t(` },
        ]`),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},"label-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("60px"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},":detail"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(" formModel "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u803F\u671D\u7EE7'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"year"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"28"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),v=n("h2",{id:"\u6805\u683C\u5E03\u5C40",tabindex:"-1"},[t("\u6805\u683C\u5E03\u5C40 "),n("a",{class:"header-anchor",href:"#\u6805\u683C\u5E03\u5C40","aria-hidden":"true"},"#")],-1),x=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("my-form")]),t(`
        `),n("span",{class:"token attr-name"},":model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("formModel"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},":formItem"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`[
            { label: `),n("span",{class:"token punctuation"},"'"),t("\u540D\u79F0"),n("span",{class:"token punctuation"},"'"),t(", prop: "),n("span",{class:"token punctuation"},"'"),t("name"),n("span",{class:"token punctuation"},"'"),t(`, required: true },
            { label: `),n("span",{class:"token punctuation"},"'"),t("\u5E74\u9F84"),n("span",{class:"token punctuation"},"'"),t(", prop: "),n("span",{class:"token punctuation"},"'"),t("year"),n("span",{class:"token punctuation"},"'"),t(", itemType: "),n("span",{class:"token punctuation"},"'"),t("number"),n("span",{class:"token punctuation"},"'"),t(` },
            { label: `),n("span",{class:"token punctuation"},"'"),t("\u6D4B\u8BD51"),n("span",{class:"token punctuation"},"'"),t(", prop: "),n("span",{class:"token punctuation"},"'"),t("name1"),n("span",{class:"token punctuation"},"'"),t(` },
            { label: `),n("span",{class:"token punctuation"},"'"),t("\u6D4B\u8BD52"),n("span",{class:"token punctuation"},"'"),t(", prop: "),n("span",{class:"token punctuation"},"'"),t("name2"),n("span",{class:"token punctuation"},"'"),t(` },
            { label: `),n("span",{class:"token punctuation"},"'"),t("\u6D4B\u8BD53"),n("span",{class:"token punctuation"},"'"),t(", prop: "),n("span",{class:"token punctuation"},"'"),t("name3"),n("span",{class:"token punctuation"},"'"),t(` },
        ]`),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},"label-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("60px"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},"colFlag"),t(`
    `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(" formModel "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),A=n("h2",{id:"\u67E5\u8BE2\u8868\u5355",tabindex:"-1"},[t("\u67E5\u8BE2\u8868\u5355 "),n("a",{class:"header-anchor",href:"#\u67E5\u8BE2\u8868\u5355","aria-hidden":"true"},"#")],-1),M=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("my-form")]),t(`
        `),n("span",{class:"token attr-name"},"inline"),t(`
        `),n("span",{class:"token attr-name"},"query"),t(`
        `),n("span",{class:"token attr-name"},":model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("formModel"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},":formItem"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`[
            { label: `),n("span",{class:"token punctuation"},"'"),t("\u540D\u79F0"),n("span",{class:"token punctuation"},"'"),t(", prop: "),n("span",{class:"token punctuation"},"'"),t("name"),n("span",{class:"token punctuation"},"'"),t(`, required: true },
            { label: `),n("span",{class:"token punctuation"},"'"),t("\u5E74\u9F84"),n("span",{class:"token punctuation"},"'"),t(", prop: "),n("span",{class:"token punctuation"},"'"),t("year"),n("span",{class:"token punctuation"},"'"),t(", itemType: "),n("span",{class:"token punctuation"},"'"),t("number"),n("span",{class:"token punctuation"},"'"),t(` },
            { label: `),n("span",{class:"token punctuation"},"'"),t("\u6D4B\u8BD51"),n("span",{class:"token punctuation"},"'"),t(", prop: "),n("span",{class:"token punctuation"},"'"),t("name1"),n("span",{class:"token punctuation"},"'"),t(` },
            { label: `),n("span",{class:"token punctuation"},"'"),t("\u6D4B\u8BD52"),n("span",{class:"token punctuation"},"'"),t(", prop: "),n("span",{class:"token punctuation"},"'"),t("name2"),n("span",{class:"token punctuation"},"'"),t(` },
            { label: `),n("span",{class:"token punctuation"},"'"),t("\u6D4B\u8BD53"),n("span",{class:"token punctuation"},"'"),t(", prop: "),n("span",{class:"token punctuation"},"'"),t("name3"),n("span",{class:"token punctuation"},"'"),t(` },
        ]`),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},"label-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("60px"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(" formModel "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),q=E('<h2 id="\u5C5E\u6027" tabindex="-1">\u5C5E\u6027 <a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>formItem</td><td><code>formItem</code> \u751F\u6210 <code>form</code> \u8868\u5355\u7684\u914D\u7F6E\u6570\u7EC4</td><td>Array</td><td>\u5FC5\u4F20</td><td></td></tr><tr><td>query</td><td>\u662F\u5426\u9ED8\u8BA4\u6DFB\u52A0\u67E5\u8BE2\u3001\u91CD\u7F6E\u6309\u94AE\uFF08\u67E5\u8BE2\u8868\u5355\uFF09</td><td>Boolean</td><td></td><td>false</td></tr><tr><td>rules</td><td><code>form</code> \u8868\u5355\u7684\u6821\u9A8C\u5BF9\u8C61</td><td>Object</td><td></td><td>{}</td></tr><tr><td>columns</td><td>\u9ED8\u8BA4\u4E00\u884C\u663E\u793A\u7684 <code>form-item</code> \u6570\u91CF \u9ED8\u8BA4\u4E3A 3 \u4E2A</td><td>Number</td><td></td><td>3</td></tr><tr><td>listenEl</td><td>\u662F\u5426\u76D1\u542C\u8BE5 <code>form</code> \u7684\u5BBD\u5EA6\u4EE5\u81EA\u9002\u5E94 \u4E00\u884C\u663E\u793A\u7684 <code>form-item</code> \u6570\u91CF (\u5FC5\u987B\u5728\u662F <code>query</code> \u4E3A <code>true</code> \u7684\u65F6\u5019\u624D\u4F1A\u751F\u6548\uFF0Ccolumns \u5C06\u5931\u6548)</td><td>Boolean</td><td></td><td>true</td></tr><tr><td>collapsible</td><td>\u662F\u5426\u652F\u6301\u8868\u5355\u9879\u5C55\u5F00\u3001\u6536\u8D77 (\u5FC5\u987B\u5728\u662F <code>query</code> \u4E3A <code>true</code> \u7684\u65F6\u5019\u624D\u4F1A\u751F\u6548)</td><td>Boolean</td><td></td><td>true</td></tr><tr><td>collapsed</td><td>\u521D\u59CB\u6536\u8D77\u8868\u5355\u9879\u76EE\uFF0C<code>collapsible=true</code> \u662F\u624D\u6709\u6548</td><td>Boolean</td><td></td><td>true</td></tr><tr><td>detail</td><td>\u8868\u5355\u662F\u5426\u4E3A\u8BE6\u60C5\u5C55\u793A\u8868\u5355</td><td>Boolean</td><td></td><td>false</td></tr><tr><td>colFlag</td><td>\u662F\u5426\u5F00\u542F\u8868\u5355\u54CD\u5E94\u5F0F</td><td>Boolean</td><td></td><td>true</td></tr></tbody></table><h2 id="\u63D2\u69FD" tabindex="-1">\u63D2\u69FD <a class="header-anchor" href="#\u63D2\u69FD" aria-hidden="true">#</a></h2><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u63D2\u69FD\u4F5C\u7528\u57DF</th></tr></thead><tbody><tr><td><code>item.prop</code></td><td>\u6BCF\u4E2A<code>formItem</code>\u5BF9\u8C61\u7684<code>prop</code>\u5373\u4E3A<strong>\u63D2\u69FD\u540D</strong></td><td><code>{model\uFF0Cprop\uFF0Citem}</code></td></tr></tbody></table>',4);function w(p,c,l,r,i,u){const f=F("render-demo-0"),a=F("demo"),e=F("render-demo-1"),s=F("render-demo-2"),o=F("render-demo-3");return B(),h("div",null,[D,d(a,{sourceCode:`<template>
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
`},{highlight:k(()=>[y]),default:k(()=>[d(f)]),_:1}),C,d(a,{sourceCode:`<template>
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
`},{highlight:k(()=>[g]),default:k(()=>[d(e)]),_:1}),v,d(a,{sourceCode:`<template>
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
`},{highlight:k(()=>[x]),default:k(()=>[d(s)]),_:1}),A,d(a,{sourceCode:`<template>
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
`},{highlight:k(()=>[M]),default:k(()=>[d(o)]),_:1}),q])}var N=_(b,[["render",w]]);export{I as __pageData,N as default};
