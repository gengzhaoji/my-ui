import{_ as v,c as b,e as y,w as F,f as A,a as _,b as n,d as t,r as C,o as f,V as B}from"./app.14664fbb.js";const x={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:s,createVNode:e,withCtx:u,createElementVNode:i,openBlock:c,createElementBlock:k}=B;function l(m,g){const r=s("el-button"),a=s("my-print"),p=s("my-table"),h=s("my-panel");return c(),k("div",null,[i("div",null,[e(h,{title:"\u6253\u5370\u533A\u57DF",theme:"border-left"},{handle:u(()=>[e(a,{"print-range":".print-range1"},{default:u(()=>[e(r,{type:"primary",icon:"tickets"})]),_:1},8,["print-range"])]),default:u(()=>[e(p,{columns:[{label:"\u59D3\u540D",prop:"name"},{label:"\u5730\u5740",prop:"address"}],data:m.tableData,class:"print-range1",height:"250"},null,8,["data"])]),_:1})])])}const{ref:o}=B;return{render:l,...{setup(m,{expose:g}){g();let r=o([]);for(let p=0;p<50;p++)r.value.push({name:"\u738B\u5C0F\u864E",address:`\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF ${p} \u5F04`});const a={tableData:r,ref:o};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}}}(),"render-demo-1":function(){const{resolveComponent:s,createVNode:e,withCtx:u,resolveDynamicComponent:i,openBlock:c,createBlock:k,createCommentVNode:l,createElementVNode:o,createElementBlock:d}=B,m={class:"print-range3"};function g(a,p){const h=s("el-button"),E=s("my-print"),D=s("my-panel");return c(),d("div",null,[e(D,{title:"\u5206\u9875\u5904\u7406",theme:"border-left"},{handle:u(()=>[e(E,{"print-range":".print-range3"},{default:u(()=>[e(h,{type:"primary",icon:"tickets"})]),_:1},8,["print-range"])]),default:u(()=>[o("div",m,[a.dynamicComponent?(c(),k(i(a.dynamicComponent),{key:0,options:a.options,width:"500px",height:"300px"},null,8,["options"])):l("",!0)])]),_:1})])}return{render:g,...{data(){return{dynamicComponent:null,options:{title:{text:"ECharts \u5165\u95E8\u793A\u4F8B"},tooltip:{},legend:{data:["\u9500\u91CF"]},xAxis:{data:["\u886C\u886B","\u7F8A\u6BDB\u886B","\u96EA\u7EBA\u886B","\u88E4\u5B50","\u9AD8\u8DDF\u978B","\u889C\u5B50"]},yAxis:{},series:[{name:"\u9500\u91CF",type:"bar",data:[5,20,36,10,10,20]}]}}},mounted(){A(()=>import("./chunks/index.c24b52ae.js"),["assets/chunks/index.c24b52ae.js","assets/app.14664fbb.js"]).then(a=>{this.dynamicComponent=a.default})}}}}()}},M=JSON.parse('{"title":"MyPrint \u6253\u5370","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u6253\u5370 canvas \u5143\u7D20","slug":"\u6253\u5370-canvas-\u5143\u7D20"},{"level":2,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027"}],"relativePath":"ui/guide/MyPrint.md","lastUpdated":1685002486000}'),w=_('<h1 id="myprint-\u6253\u5370" tabindex="-1">MyPrint \u6253\u5370 <a class="header-anchor" href="#myprint-\u6253\u5370" aria-hidden="true">#</a></h1><p>\u4F7F\u7528<code>window.print()</code>\u8FDB\u884C\u6253\u5370\uFF0C\u53EF\u4FDD\u7559\u6253\u5370\u5185\u5BB9\u539F\u6709\u7684\u6837\u5F0F\u3002\u3002</p><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h2><ul><li><code>print-range</code> \u53C2\u6570\u4F20\u4E00\u4E2A <code>css</code> \u9009\u62E9\u5668,\u6307\u5B9A\u9700\u8981\u6253\u5370\u7684\u533A\u57DF\uFF0C\u5982\u679C\u9009\u62E9\u5668\u5339\u914D\u5230\u591A\u4E2A\u533A\u57DF\uFF0C\u5219\u4F1A\u4F9D\u6B21\u5206\u9875\u6253\u5370\u3002\u4F60\u53EF\u4EE5\u5229\u7528\u8FD9\u4E00\u7279\u6027\u7075\u6D3B\u5904\u7406\u6253\u5370\u5185\u5BB9\u3002</li></ul>',4),q=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("my-panel")]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u6253\u5370\u533A\u57DF"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"theme"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("border-left"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#handle"),n("span",{class:"token punctuation"},">")]),t(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("my-print")]),t(),n("span",{class:"token attr-name"},":print-range"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},"'"),t(".print-range1"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
                    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("el-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("tickets"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("el-button")]),n("span",{class:"token punctuation"},">")]),t(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("my-print")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("my-table")]),t(`
                `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`[
                    { label: `),n("span",{class:"token punctuation"},"'"),t("\u59D3\u540D"),n("span",{class:"token punctuation"},"'"),t(", prop: "),n("span",{class:"token punctuation"},"'"),t("name"),n("span",{class:"token punctuation"},"'"),t(` },
                    { label: `),n("span",{class:"token punctuation"},"'"),t("\u5730\u5740"),n("span",{class:"token punctuation"},"'"),t(", prop: "),n("span",{class:"token punctuation"},"'"),t("address"),n("span",{class:"token punctuation"},"'"),t(` },
                ]`),n("span",{class:"token punctuation"},'"')]),t(`
                `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("tableData"),n("span",{class:"token punctuation"},'"')]),t(`
                `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("print-range1"),n("span",{class:"token punctuation"},'"')]),t(`
                `),n("span",{class:"token attr-name"},"height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("250"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token punctuation"},"/>")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("my-panel")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"let"),t(" tableData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    tableData`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," \u5F04"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),N=n("h2",{id:"\u6253\u5370-canvas-\u5143\u7D20",tabindex:"-1"},[t("\u6253\u5370 canvas \u5143\u7D20 "),n("a",{class:"header-anchor",href:"#\u6253\u5370-canvas-\u5143\u7D20","aria-hidden":"true"},"#")],-1),V=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("my-panel")]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u5206\u9875\u5904\u7406"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"theme"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("border-left"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#handle"),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("my-print")]),t(),n("span",{class:"token attr-name"},":print-range"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},"'"),t(".print-range3"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("el-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("tickets"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("el-button")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("my-print")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("print-range3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("component")]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("dynamicComponent"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":is"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("dynamicComponent"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("500px"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("300px"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("component")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("my-panel")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"dynamicComponent"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"options"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
                `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
                    `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'ECharts \u5165\u95E8\u793A\u4F8B'"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token literal-property property"},"tooltip"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token literal-property property"},"legend"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
                    `),n("span",{class:"token literal-property property"},"data"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'\u9500\u91CF'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token literal-property property"},"xAxis"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
                    `),n("span",{class:"token literal-property property"},"data"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'\u886C\u886B'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u7F8A\u6BDB\u886B'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u96EA\u7EBA\u886B'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u88E4\u5B50'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u9AD8\u8DDF\u978B'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u889C\u5B50'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token literal-property property"},"yAxis"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token literal-property property"},"series"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                    `),n("span",{class:"token punctuation"},"{"),t(`
                        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9500\u91CF'"),n("span",{class:"token punctuation"},","),t(`
                        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'bar'"),n("span",{class:"token punctuation"},","),t(`
                        `),n("span",{class:"token literal-property property"},"data"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"36"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
                    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token function"},"mounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'../../../src/components/my-echarts'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"module"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("dynamicComponent "),n("span",{class:"token operator"},"="),t(" module"),n("span",{class:"token punctuation"},"."),t("default"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),S=_('<h2 id="\u5C5E\u6027" tabindex="-1">\u5C5E\u6027 <a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>printRange</td><td>\u6253\u5370\u533A\u57DF\uFF0C<code>css</code> \u9009\u62E9\u5668\uFF0C\u8BE5\u53C2\u6570\u4E3A\u5FC5\u987B</td><td>String</td><td></td></tr><tr><td>containerClass</td><td>\u6253\u5370\u5185\u5BB9\u7684\u5BB9\u5668 <code>className</code></td><td>String</td><td>&#39;my-print-page-container&#39;</td></tr><tr><td>parentDom</td><td>\u4F5C\u4E3A\u7236\u5BB9\u5668\u7684 dom \u5BF9\u8C61\uFF0C\u6216\u8005\u8FD4\u56DE dom \u5BF9\u8C61\u7684\u65B9\u6CD5,dom \u4E2D\u5FC5\u987B\u5305\u542B container-class \u6307\u5B9A\u7684 className</td><td>Function\u3001HTMLElement\u3001String</td><td></td></tr><tr><td>rootStyle</td><td>\u9876\u5C42\u5BB9\u5668\u7684\u6837\u5F0F,\u8BF7\u4E0D\u8981\u8BBE\u7F6E position \u4E3A absolute,relative \u6216 static, \u5426\u5219\u5206\u9875\u6548\u679C\u4F1A\u4E0D\u8D77\u4F5C\u7528</td><td>Object</td><td></td></tr><tr><td>beforePrint</td><td>\u5728\u590D\u5236\u6253\u5370\u533A\u57DF\u524D\u6267\u884C\uFF0C\u987B\u8FD4\u56DE <code>promise</code> \u5BF9\u8C61</td><td>Function</td><td></td></tr><tr><td>afterPrint</td><td>\u5728\u6253\u5370\u5B8C\u6210\u4E4B\u540E\u6267\u884C</td><td>Function</td><td></td></tr><tr><td>removeSelector</td><td>\u6253\u5370\u65F6\u9700\u8981\u5220\u9664\u7684\u5143\u7D20\u9009\u62E9\u5668</td><td>String</td><td></td></tr><tr><td>styleArray</td><td>\u6253\u5370\u65F6\u987B\u6539\u53D8\u7684\u6837\u5F0F\u6570\u7EC4\uFF0C\u793A\u4F8B:[{selector: &#39;.selector&#39;, style: {height: &#39;auto&#39;}}]</td><td>Array</td><td></td></tr><tr><td>domTransfer</td><td>\u81EA\u5B9A\u4E49\u4FEE\u6539\u6253\u5370\u5185\u5BB9\u7684\u65B9\u6CD5</td><td>Function</td><td></td></tr><tr><td>disableDefaultStyle</td><td>\u7981\u7528\u9ED8\u8BA4\u6837\u5F0F\u6570\u7EC4\uFF0C\u53EA\u4F7F\u7528 <code>style-array</code> \u53C2\u6570</td><td>Boolean</td><td></td></tr><tr><td>preview</td><td>\u6253\u5370\u9884\u89C8</td><td>Boolean</td><td></td></tr></tbody></table>',2);function P(s,e,u,i,c,k){const l=C("render-demo-0"),o=C("demo"),d=C("render-demo-1");return f(),b("div",null,[w,y(o,{sourceCode:`<template>
    <div>
        <my-panel title="\u6253\u5370\u533A\u57DF" theme="border-left">
            <template #handle>
                <my-print :print-range="'.print-range1'">
                    <el-button type="primary" icon="tickets"></el-button>
                </my-print>
            </template>
            <my-table
                :columns="[
                    { label: '\u59D3\u540D', prop: 'name' },
                    { label: '\u5730\u5740', prop: 'address' },
                ]"
                :data="tableData"
                class="print-range1"
                height="250"
            />
        </my-panel>
    </div>
</template>
<script setup>
import { ref } from 'vue';

let tableData = ref([]);
for (let i = 0; i < 50; i++) {
    tableData.value.push({
        name: '\u738B\u5C0F\u864E',
        address: \`\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF \${i} \u5F04\`,
    });
}
<\/script>
`},{highlight:F(()=>[q]),default:F(()=>[y(l)]),_:1}),N,y(o,{sourceCode:`<template>
    <my-panel title="\u5206\u9875\u5904\u7406" theme="border-left">
        <template #handle>
            <my-print :print-range="'.print-range3'">
                <el-button type="primary" icon="tickets"></el-button>
            </my-print>
        </template>
        <div class="print-range3">
            <component v-if="dynamicComponent" :is="dynamicComponent" :options="options" width="500px" height="300px"></component>
        </div>
    </my-panel>
</template>

<script>
export default {
    data() {
        return {
            dynamicComponent: null,
            options: {
                title: {
                    text: 'ECharts \u5165\u95E8\u793A\u4F8B',
                },
                tooltip: {},
                legend: {
                    data: ['\u9500\u91CF'],
                },
                xAxis: {
                    data: ['\u886C\u886B', '\u7F8A\u6BDB\u886B', '\u96EA\u7EBA\u886B', '\u88E4\u5B50', '\u9AD8\u8DDF\u978B', '\u889C\u5B50'],
                },
                yAxis: {},
                series: [
                    {
                        name: '\u9500\u91CF',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20],
                    },
                ],
            },
        };
    },
    mounted() {
        import('../../../src/components/my-echarts').then((module) => {
            this.dynamicComponent = module.default;
        });
    },
};
<\/script>
`},{highlight:F(()=>[V]),default:F(()=>[y(d)]),_:1}),S])}var j=v(x,[["render",P]]);export{M as __pageData,j as default};
