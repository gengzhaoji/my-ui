import{_ as b,c as F,e as m,w as s,b as n,d as t,a as _,r as g,o as D,V as C}from"./app.9fd02aa8.js";const v={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:u,resolveComponent:p,createVNode:c,openBlock:l,createElementBlock:i}=C,r=u("div",{class:"action-box"},"\u53F3\u952E\u89E6\u53D1\u533A\u57DF",-1);function e(a,d){const o=p("my-contextmenu");return l(),i("div",null,[r,c(o,{target:".action-box",data:a.menu,onClick:a.handleClick},null,8,["data","onClick"])])}return{render:e,...{setup(a,{expose:d}){d();const o=[{icon:"view",label:"\u67E5\u770B"},{icon:"Edit",label:"\u7F16\u8F91"},{icon:"Finished",label:"\u5B8C\u6210",children:[{label:"\u4E8C\u7EA7\u83DC\u53551"},{label:"\u4E8C\u7EA7\u83DC\u53552"},{label:"\u4E8C\u7EA7\u83DC\u53553"},{label:"\u4E8C\u7EA7\u83DC\u53554"}]},{icon:"Delete",label:"\u5220\u9664"},{divider:!0},{icon:"Document",label:"\u5C5E\u6027"}];function y(h,S){alert(`\u70B9\u51FB\u4E86${h.label}`)}const E={menu:o,handleClick:y};return Object.defineProperty(E,"__isScriptSetup",{enumerable:!1,value:!0}),E}}}}(),"render-demo-1":function(){const{createElementVNode:u,resolveComponent:p,createVNode:c,openBlock:l,createElementBlock:i}=C,r=u("div",{class:"action-box2"},"\u53F3\u952E\u89E6\u53D1\u533A\u57DF",-1);function e(a,d){const o=p("my-contextmenu");return l(),i("div",null,[r,c(o,{target:".action-box2",data:a.menu,theme:"dark",onClick:a.handleClick},null,8,["data","onClick"])])}return{render:e,...{data(){return{menu:[{icon:"el-icon-view",label:"\u67E5\u770B"},{icon:"el-icon-edit",label:"\u7F16\u8F91"},{icon:"el-icon-finished",label:"\u5B8C\u6210",children:[{label:"\u4E8C\u7EA7\u83DC\u53551"},{label:"\u4E8C\u7EA7\u83DC\u53552"},{label:"\u4E8C\u7EA7\u83DC\u53553"},{label:"\u4E8C\u7EA7\u83DC\u53554"}]},{icon:"el-icon-delete",label:"\u5220\u9664"},{divider:!0},{icon:"el-icon-document",label:"\u5C5E\u6027"}]}},methods:{handleClick(a,d){this.$message.success(`\u70B9\u51FB\u4E86${a.label}`)}}}}}()}},z=JSON.parse('{"title":"MyContextmenu \u53F3\u952E\u83DC\u5355","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u6DF1\u8272\u4E3B\u9898","slug":"\u6DF1\u8272\u4E3B\u9898"},{"level":2,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027"}],"relativePath":"ui/guide/MyContextmenu.md","lastUpdated":1665997495000}'),B=n("h1",{id:"mycontextmenu-\u53F3\u952E\u83DC\u5355",tabindex:"-1"},[t("MyContextmenu \u53F3\u952E\u83DC\u5355 "),n("a",{class:"header-anchor",href:"#mycontextmenu-\u53F3\u952E\u83DC\u5355","aria-hidden":"true"},"#")],-1),x=n("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[t("\u57FA\u7840\u7528\u6CD5 "),n("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),f=n("div",null,[t("\u4F7F\u7528 "),n("code",null,"MyCascader"),t(" \u7EC4\u4EF6")],-1),A=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("action-box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u53F3\u952E\u89E6\u53D1\u533A\u57DF"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("my-contextmenu")]),t(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(".action-box"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("menu"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("my-contextmenu")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"const"),t(" menu "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
    `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'view'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u67E5\u770B'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Edit'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u7F16\u8F91'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Finished'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5B8C\u6210'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4E8C\u7EA7\u83DC\u53551'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4E8C\u7EA7\u83DC\u53552'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4E8C\u7EA7\u83DC\u53553'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4E8C\u7EA7\u83DC\u53554'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Delete'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5220\u9664'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"divider"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Document'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5C5E\u6027'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"handleClick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("item"),n("span",{class:"token punctuation"},","),t(" vm")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token comment"},"// \u5904\u7406\u70B9\u51FB\u83DC\u5355\u540E\u7684\u89E6\u53D1\u52A8\u4F5C"),t(`
    `),n("span",{class:"token function"},"alert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u70B9\u51FB\u4E86"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("item"),n("span",{class:"token punctuation"},"."),t("label"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("scss"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".action-box"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 400px"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),t(" center"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),t(" 150px"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t(" 3rem"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),t(" #eee"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #fff"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),t(" bold"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),w=n("h2",{id:"\u6DF1\u8272\u4E3B\u9898",tabindex:"-1"},[t("\u6DF1\u8272\u4E3B\u9898 "),n("a",{class:"header-anchor",href:"#\u6DF1\u8272\u4E3B\u9898","aria-hidden":"true"},"#")],-1),N=n("div",null,[t("\u4F7F\u7528 "),n("code",null,"MyCascader"),t(" \u7EC4\u4EF6")],-1),V=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("action-box2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u53F3\u952E\u89E6\u53D1\u533A\u57DF"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("my-contextmenu")]),t(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(".action-box2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("menu"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"theme"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("dark"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("my-contextmenu")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"menu"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-icon-view'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u67E5\u770B'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-icon-edit'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u7F16\u8F91'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                    `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-icon-finished'"),n("span",{class:"token punctuation"},","),t(`
                    `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5B8C\u6210'"),n("span",{class:"token punctuation"},","),t(`
                    `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4E8C\u7EA7\u83DC\u53551'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4E8C\u7EA7\u83DC\u53552'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4E8C\u7EA7\u83DC\u53553'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4E8C\u7EA7\u83DC\u53554'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-icon-delete'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5220\u9664'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"divider"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-icon-document'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5C5E\u6027'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function"},"handleClick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("item"),n("span",{class:"token punctuation"},","),t(" vm")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token comment"},"// \u5904\u7406\u70B9\u51FB\u83DC\u5355\u540E\u7684\u89E6\u53D1\u52A8\u4F5C"),t(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("$message"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u70B9\u51FB\u4E86"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("item"),n("span",{class:"token punctuation"},"."),t("label"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("scss"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".action-box2"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 400px"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),t(" center"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),t(" 150px"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t(" 3rem"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),t(" #eee"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #fff"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),t(" bold"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),$=_('<h2 id="\u5C5E\u6027" tabindex="-1">\u5C5E\u6027 <a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>theme</td><td>\u6C34\u5370\u6587\u5B57, \u591A\u884C\u6587\u672C\u53EF\u4EE5\u4F20\u6570\u7EC4</td><td>String</td><td>&#39;light&#39;, &#39;dark&#39;</td><td>light</td></tr><tr><td>data</td><td>\u83DC\u5355\u9879\u6570\u636E\uFF0C[{icon, label, info, disabled, divider, children}]</td><td>Array</td><td></td><td></td></tr><tr><td>data.icon</td><td>\u56FE\u6807</td><td>String</td><td></td><td></td></tr><tr><td>data.label</td><td>\u6807\u9898\u6587\u672C</td><td>String</td><td></td><td></td></tr><tr><td><a href="http://data.info" target="_blank" rel="noopener noreferrer">data.info</a></td><td>\u9644\u52A0\u4FE1\u606F\u6587\u672C</td><td>String</td><td></td><td></td></tr><tr><td>data.disabled</td><td>\u7981\u7528</td><td>Boolean</td><td></td><td></td></tr><tr><td>data.divider</td><td>\u5206\u5272\u7EBF</td><td>Boolean</td><td></td><td></td></tr><tr><td>data.children</td><td>\u5B50\u83DC\u5355\u9879</td><td>Array</td><td></td><td>[]</td></tr><tr><td>disabled</td><td>\u7981\u7528\u83DC\u5355</td><td>Boolean</td><td></td><td></td></tr><tr><td>zIndex</td><td>\u663E\u793A\u5C42\u7EA7</td><td>Number</td><td></td><td>1000</td></tr><tr><td>target</td><td>\u89E6\u53D1\u83DC\u5355\u5BB9\u5668\uFF0C\u652F\u6301\u9009\u62E9\u5668\u548C\u51FD\u6570</td><td><code>{String\u3001 HTMLElement\u3001Function}</code></td><td></td><td>document.body</td></tr><tr><td>manual</td><td>\u624B\u52A8\u6A21\u5F0F\uFF0C\u9700\u8981\u81EA\u884C\u8C03\u7528 show \u3001hide \u65B9\u6CD5</td><td>Boolean</td><td></td><td></td></tr></tbody></table>',2);function q(u,p,c,l,i,r){const e=g("render-demo-0"),k=g("demo"),a=g("render-demo-1");return D(),F("div",null,[B,x,m(k,{sourceCode:`<template>
    <div class="action-box">\u53F3\u952E\u89E6\u53D1\u533A\u57DF</div>
    <my-contextmenu target=".action-box" :data="menu" @click="handleClick"></my-contextmenu>
</template>

<script setup>
const menu = [
    { icon: 'view', label: '\u67E5\u770B' },
    { icon: 'Edit', label: '\u7F16\u8F91' },
    {
        icon: 'Finished',
        label: '\u5B8C\u6210',
        children: [{ label: '\u4E8C\u7EA7\u83DC\u53551' }, { label: '\u4E8C\u7EA7\u83DC\u53552' }, { label: '\u4E8C\u7EA7\u83DC\u53553' }, { label: '\u4E8C\u7EA7\u83DC\u53554' }],
    },
    { icon: 'Delete', label: '\u5220\u9664' },
    { divider: true },
    { icon: 'Document', label: '\u5C5E\u6027' },
];

function handleClick(item, vm) {
    // \u5904\u7406\u70B9\u51FB\u83DC\u5355\u540E\u7684\u89E6\u53D1\u52A8\u4F5C
    alert(\`\u70B9\u51FB\u4E86\${item.label}\`);
}
<\/script>

<style lang="scss" scoped>
.action-box {
    height: 400px;
    width: 100%;
    text-align: center;
    line-height: 150px;
    font-size: 3rem;
    background-color: #eee;
    color: #fff;
    font-weight: bold;
}
</style>
`},{description:s(()=>[f]),highlight:s(()=>[A]),default:s(()=>[m(e)]),_:1}),w,m(k,{sourceCode:`<template>
    <div class="action-box2">\u53F3\u952E\u89E6\u53D1\u533A\u57DF</div>
    <my-contextmenu target=".action-box2" :data="menu" theme="dark" @click="handleClick"></my-contextmenu>
</template>

<script>
export default {
    data() {
        return {
            menu: [
                { icon: 'el-icon-view', label: '\u67E5\u770B' },
                { icon: 'el-icon-edit', label: '\u7F16\u8F91' },
                {
                    icon: 'el-icon-finished',
                    label: '\u5B8C\u6210',
                    children: [{ label: '\u4E8C\u7EA7\u83DC\u53551' }, { label: '\u4E8C\u7EA7\u83DC\u53552' }, { label: '\u4E8C\u7EA7\u83DC\u53553' }, { label: '\u4E8C\u7EA7\u83DC\u53554' }],
                },
                { icon: 'el-icon-delete', label: '\u5220\u9664' },
                { divider: true },
                { icon: 'el-icon-document', label: '\u5C5E\u6027' },
            ],
        };
    },
    methods: {
        handleClick(item, vm) {
            // \u5904\u7406\u70B9\u51FB\u83DC\u5355\u540E\u7684\u89E6\u53D1\u52A8\u4F5C
            this.$message.success(\`\u70B9\u51FB\u4E86\${item.label}\`);
        },
    },
};
<\/script>
<style lang="scss" scoped>
.action-box2 {
    height: 400px;
    width: 100%;
    text-align: center;
    line-height: 150px;
    font-size: 3rem;
    background-color: #eee;
    color: #fff;
    font-weight: bold;
}
</style>
`},{description:s(()=>[N]),highlight:s(()=>[V]),default:s(()=>[m(a)]),_:1}),$])}var j=b(v,[["render",q]]);export{z as __pageData,j as default};
