import{_ as C,c as D,e as g,w as y,a as E,b as t,d as n,r as _,o as v,V as B}from"./app.83e6ec99.js";const b={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:a,createVNode:s,withCtx:u,createElementVNode:k,openBlock:d,createElementBlock:m}=B;function r(p,i){const c=a("el-button"),e=a("my-print"),l=a("my-table"),h=a("my-panel");return d(),m("div",null,[k("div",null,[s(h,{title:"\u6253\u5370\u533A\u57DF",theme:"border-left",window:p.window},{handle:u(()=>[s(e,{"print-range":".print-range1"},{default:u(()=>[s(c,{type:"primary",icon:"tickets"})]),_:1},8,["print-range"])]),default:u(()=>[s(l,{columns:[{label:"\u59D3\u540D",prop:"name"},{label:"\u5730\u5740",prop:"address"}],data:p.tableData,class:"print-range1",height:"250"},null,8,["data"])]),_:1},8,["window"])])])}const{ref:o}=B;return{render:r,...{setup(p,{expose:i}){i();let c=o([]);for(let l=0;l<50;l++)c.value.push({name:"\u738B\u5C0F\u864E",address:`\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF ${l} \u5F04`});const e={tableData:c,ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}}}(),"render-demo-1":function(){const{resolveComponent:a,createVNode:s,withCtx:u,createElementVNode:k,openBlock:d,createElementBlock:m}=B,r={class:"print-range3"};function o(p,i){const c=a("el-button"),e=a("my-print"),l=a("my-echarts"),h=a("my-panel");return d(),m("div",null,[s(h,{title:"\u5206\u9875\u5904\u7406",theme:"border-left",window:p.window},{handle:u(()=>[s(e,{"print-range":".print-range3"},{default:u(()=>[s(c,{type:"primary",icon:"tickets"})]),_:1},8,["print-range"])]),default:u(()=>[k("div",r,[s(l,{options:p.options,height:"300px"},null,8,["options"])])]),_:1},8,["window"])])}return{render:o,...{setup(p,{expose:i}){i();const e={options:{title:{text:"ECharts \u5165\u95E8\u793A\u4F8B"},tooltip:{},legend:{data:["\u9500\u91CF"]},xAxis:{data:["\u886C\u886B","\u7F8A\u6BDB\u886B","\u96EA\u7EBA\u886B","\u88E4\u5B50","\u9AD8\u8DDF\u978B","\u889C\u5B50"]},yAxis:{},series:[{name:"\u9500\u91CF",type:"line",data:[5,20,36,10,10,20]}]}};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}}}()}},S=JSON.parse('{"title":"MyPrint \u6253\u5370","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u6253\u5370 canvas \u5143\u7D20","slug":"\u6253\u5370-canvas-\u5143\u7D20"},{"level":2,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027"}],"relativePath":"ui/guide/MyPrint.md","lastUpdated":1664364116000}'),A=E('<h1 id="myprint-\u6253\u5370" tabindex="-1">MyPrint \u6253\u5370 <a class="header-anchor" href="#myprint-\u6253\u5370" aria-hidden="true">#</a></h1><p>\u4F7F\u7528<code>window.print()</code>\u8FDB\u884C\u6253\u5370\uFF0C\u53EF\u4FDD\u7559\u6253\u5370\u5185\u5BB9\u539F\u6709\u7684\u6837\u5F0F\u3002\u3002</p><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h2><ul><li><code>print-range</code> \u53C2\u6570\u4F20\u4E00\u4E2A <code>css</code> \u9009\u62E9\u5668,\u6307\u5B9A\u9700\u8981\u6253\u5370\u7684\u533A\u57DF\uFF0C\u5982\u679C\u9009\u62E9\u5668\u5339\u914D\u5230\u591A\u4E2A\u533A\u57DF\uFF0C\u5219\u4F1A\u4F9D\u6B21\u5206\u9875\u6253\u5370\u3002\u4F60\u53EF\u4EE5\u5229\u7528\u8FD9\u4E00\u7279\u6027\u7075\u6D3B\u5904\u7406\u6253\u5370\u5185\u5BB9\u3002</li></ul>',4),f=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("my-panel")]),n(),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u6253\u5370\u533A\u57DF"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"theme"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("border-left"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":window"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("window"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#handle"),t("span",{class:"token punctuation"},">")]),n(`
                `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("my-print")]),n(),t("span",{class:"token attr-name"},":print-range"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token punctuation"},"'"),n(".print-range1'"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
                    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("el-button")]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("primary"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"icon"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("tickets"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("el-button")]),t("span",{class:"token punctuation"},">")]),n(`
                `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("my-print")]),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("my-table")]),n(`
                `),t("span",{class:"token attr-name"},":columns"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n(`[
                    { label: '\u59D3\u540D', prop: 'name' },
                    { label: '\u5730\u5740', prop: 'address' },
                ]`),t("span",{class:"token punctuation"},'"')]),n(`
                `),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("tableData"),t("span",{class:"token punctuation"},'"')]),n(`
                `),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("print-range1"),t("span",{class:"token punctuation"},'"')]),n(`
                `),t("span",{class:"token attr-name"},"height"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("250"),t("span",{class:"token punctuation"},'"')]),n(`
            `),t("span",{class:"token punctuation"},"/>")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("my-panel")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"let"),n(" tableData "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token keyword"},"for"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),n(" i "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(" i "),t("span",{class:"token operator"},"<"),n(),t("span",{class:"token number"},"50"),t("span",{class:"token punctuation"},";"),n(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    tableData`),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token template-string"},[t("span",{class:"token template-punctuation string"},"`"),t("span",{class:"token string"},"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF "),t("span",{class:"token interpolation"},[t("span",{class:"token interpolation-punctuation punctuation"},"${"),n("i"),t("span",{class:"token interpolation-punctuation punctuation"},"}")]),t("span",{class:"token string"}," \u5F04"),t("span",{class:"token template-punctuation string"},"`")]),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),w=t("h2",{id:"\u6253\u5370-canvas-\u5143\u7D20",tabindex:"-1"},[n("\u6253\u5370 canvas \u5143\u7D20 "),t("a",{class:"header-anchor",href:"#\u6253\u5370-canvas-\u5143\u7D20","aria-hidden":"true"},"#")],-1),x=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("my-panel")]),n(),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u5206\u9875\u5904\u7406"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"theme"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("border-left"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":window"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("window"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#handle"),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("my-print")]),n(),t("span",{class:"token attr-name"},":print-range"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token punctuation"},"'"),n(".print-range3'"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
                `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("el-button")]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("primary"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"icon"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("tickets"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("el-button")]),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("my-print")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("print-range3"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("my-echarts")]),n(),t("span",{class:"token attr-name"},":options"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("options"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"height"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("300px"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("my-panel")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"const"),n(" options "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token literal-property property"},"text"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'ECharts \u5165\u95E8\u793A\u4F8B'"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token literal-property property"},"tooltip"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token literal-property property"},"legend"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token literal-property property"},"data"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'\u9500\u91CF'"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token literal-property property"},"xAxis"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token literal-property property"},"data"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'\u886C\u886B'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'\u7F8A\u6BDB\u886B'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'\u96EA\u7EBA\u886B'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'\u88E4\u5B50'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'\u9AD8\u8DDF\u978B'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'\u889C\u5B50'"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token literal-property property"},"yAxis"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token literal-property property"},"series"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u9500\u91CF'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"type"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'line'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"data"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"5"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"20"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"36"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"10"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"10"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"20"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),q=E('<h2 id="\u5C5E\u6027" tabindex="-1">\u5C5E\u6027 <a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>printRange</td><td>\u6253\u5370\u533A\u57DF\uFF0C<code>css</code> \u9009\u62E9\u5668\uFF0C\u8BE5\u53C2\u6570\u4E3A\u5FC5\u987B</td><td>String</td><td></td></tr><tr><td>containerClass</td><td>\u6253\u5370\u5185\u5BB9\u7684\u5BB9\u5668 <code>className</code></td><td>String</td><td>&#39;my-print-page-container&#39;</td></tr><tr><td>parentDom</td><td>\u4F5C\u4E3A\u7236\u5BB9\u5668\u7684 dom \u5BF9\u8C61\uFF0C\u6216\u8005\u8FD4\u56DE dom \u5BF9\u8C61\u7684\u65B9\u6CD5,dom \u4E2D\u5FC5\u987B\u5305\u542B container-class \u6307\u5B9A\u7684 className</td><td>Function\u3001HTMLElement\u3001String</td><td></td></tr><tr><td>rootStyle</td><td>\u9876\u5C42\u5BB9\u5668\u7684\u6837\u5F0F,\u8BF7\u4E0D\u8981\u8BBE\u7F6E position \u4E3A absolute,relative \u6216 static, \u5426\u5219\u5206\u9875\u6548\u679C\u4F1A\u4E0D\u8D77\u4F5C\u7528</td><td>Object</td><td></td></tr><tr><td>beforePrint</td><td>\u5728\u590D\u5236\u6253\u5370\u533A\u57DF\u524D\u6267\u884C\uFF0C\u987B\u8FD4\u56DE <code>promise</code> \u5BF9\u8C61</td><td>Function</td><td></td></tr><tr><td>afterPrint</td><td>\u5728\u6253\u5370\u5B8C\u6210\u4E4B\u540E\u6267\u884C</td><td>Function</td><td></td></tr><tr><td>removeSelector</td><td>\u6253\u5370\u65F6\u9700\u8981\u5220\u9664\u7684\u5143\u7D20\u9009\u62E9\u5668</td><td>String</td><td></td></tr><tr><td>styleArray</td><td>\u6253\u5370\u65F6\u987B\u6539\u53D8\u7684\u6837\u5F0F\u6570\u7EC4\uFF0C\u793A\u4F8B:[{selector: &#39;.selector&#39;, style: {height: &#39;auto&#39;}}]</td><td>Array</td><td></td></tr><tr><td>domTransfer</td><td>\u81EA\u5B9A\u4E49\u4FEE\u6539\u6253\u5370\u5185\u5BB9\u7684\u65B9\u6CD5</td><td>Function</td><td></td></tr><tr><td>disableDefaultStyle</td><td>\u7981\u7528\u9ED8\u8BA4\u6837\u5F0F\u6570\u7EC4\uFF0C\u53EA\u4F7F\u7528 <code>style-array</code> \u53C2\u6570</td><td>Boolean</td><td></td></tr><tr><td>preview</td><td>\u6253\u5370\u9884\u89C8</td><td>Boolean</td><td></td></tr></tbody></table>',2);function N(a,s,u,k,d,m){const r=_("render-demo-0"),o=_("demo"),F=_("render-demo-1");return v(),D("div",null,[A,g(o,{sourceCode:`<template>
    <div>
        <my-panel title="\u6253\u5370\u533A\u57DF" theme="border-left" :window="window">
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
`},{highlight:y(()=>[f]),default:y(()=>[g(r)]),_:1}),w,g(o,{sourceCode:`<template>
    <my-panel title="\u5206\u9875\u5904\u7406" theme="border-left" :window="window">
        <template #handle>
            <my-print :print-range="'.print-range3'">
                <el-button type="primary" icon="tickets"></el-button>
            </my-print>
        </template>
        <div class="print-range3">
            <my-echarts :options="options" height="300px" />
        </div>
    </my-panel>
</template>

<script setup>
const options = {
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
            type: 'line',
            data: [5, 20, 36, 10, 10, 20],
        },
    ],
};
<\/script>
`},{highlight:y(()=>[x]),default:y(()=>[g(F)]),_:1}),q])}var P=C(b,[["render",N]]);export{S as __pageData,P as default};
