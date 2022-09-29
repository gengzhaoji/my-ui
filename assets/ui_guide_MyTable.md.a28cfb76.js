import{_ as y,c as D,e as d,w as e,a as E,b as n,d as t,r as m,o as h,V as b}from"./app.83e6ec99.js";const g={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:o,createVNode:l,openBlock:c,createElementBlock:r}=b;function i(u,a){const s=o("my-table");return c(),r("div",null,[l(s,{data:u.tableData,columns:u.columns},null,8,["data","columns"])])}return{render:i,...{setup(u,{expose:a}){a();const p={columns:[{label:"\u65F6\u95F4",prop:"date"},{label:"\u540D\u79F0",prop:"name"},{label:"\u63CF\u8FF0",prop:"address"}],tableData:[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St"}]};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}}}}(),"render-demo-1":function(){const{resolveComponent:o,createVNode:l,withCtx:c,openBlock:r,createElementBlock:i}=b;function k(a,s){const F=o("my-table"),p=o("ClientOnly");return r(),i("div",null,[l(p,null,{default:c(()=>[l(F,{data:a.tableData,columns:a.columns,initColumns:a.initColumns,columnFilter:""},null,8,["data","columns","initColumns"])]),_:1})])}return{render:k,...{setup(a,{expose:s}){s();const C={initColumns:[{label:"\u65F6\u95F4",prop:"date",display:"always"},{label:"\u540D\u79F0",prop:"name"},{label:"\u63CF\u8FF0",prop:"address"}],columns:[{label:"\u65F6\u95F4",prop:"date",display:"always"},{label:"\u540D\u79F0",prop:"name"},{label:"\u63CF\u8FF0",prop:"address"}],tableData:[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St"}]};return Object.defineProperty(C,"__isScriptSetup",{enumerable:!1,value:!0}),C}}}}()}},V=JSON.parse('{"title":"MyTable \u8868\u683C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528columns\u6765\u5B9A\u4E49 table \u7684\u5217","slug":"\u4F7F\u7528columns\u6765\u5B9A\u4E49-table-\u7684\u5217"},{"level":2,"title":"\u4F7F\u7528columnFilter\u6765\u52A8\u6001\u5B9A\u4E49 table \u7684\u5217","slug":"\u4F7F\u7528columnfilter\u6765\u52A8\u6001\u5B9A\u4E49-table-\u7684\u5217"},{"level":2,"title":"\u6269\u5C55 Table \u5C5E\u6027","slug":"\u6269\u5C55-table-\u5C5E\u6027"},{"level":2,"title":"\u6269\u5C55 Table \u4E8B\u4EF6","slug":"\u6269\u5C55-table-\u4E8B\u4EF6"},{"level":2,"title":"\u63D2\u69FD","slug":"\u63D2\u69FD"}],"relativePath":"ui/guide/MyTable.md","lastUpdated":1664273809000}'),B=E('<h1 id="mytable-\u8868\u683C" tabindex="-1">MyTable \u8868\u683C <a class="header-anchor" href="#mytable-\u8868\u683C" aria-hidden="true">#</a></h1><p>\u5B8C\u5168\u517C\u5BB9 <a href="https://element-plus.org/zh-CN/component/table.html" target="_blank" rel="noopener noreferrer">el-table</a>\uFF0C\u6269\u5C55\u4E86\u90E8\u5206\u529F\u80FD\u3002</p><h2 id="\u4F7F\u7528columns\u6765\u5B9A\u4E49-table-\u7684\u5217" tabindex="-1">\u4F7F\u7528<code>columns</code>\u6765\u5B9A\u4E49 table \u7684\u5217 <a class="header-anchor" href="#\u4F7F\u7528columns\u6765\u5B9A\u4E49-table-\u7684\u5217" aria-hidden="true">#</a></h2>',3),_=n("div",null,[t("\u4F7F\u7528"),n("code",null,"columns"),t("\u6765\u5B9A\u4E49 table \u7684\u5217")],-1),A=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("my-table")]),t(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("tableData"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u65F6\u95F4'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'date'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u540D\u79F0'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u63CF\u8FF0'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    tableData `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-03'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-02'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),v=n("h2",{id:"\u4F7F\u7528columnfilter\u6765\u52A8\u6001\u5B9A\u4E49-table-\u7684\u5217",tabindex:"-1"},[t("\u4F7F\u7528"),n("code",null,"columnFilter"),t("\u6765\u52A8\u6001\u5B9A\u4E49 table \u7684\u5217 "),n("a",{class:"header-anchor",href:"#\u4F7F\u7528columnfilter\u6765\u52A8\u6001\u5B9A\u4E49-table-\u7684\u5217","aria-hidden":"true"},"#")],-1),f=n("div",null,[n("code",null,"columns"),t(" \u4E2D "),n("code",null,"display"),t(" \u7684\u503C\u5305\u542B\uFF08"),n("code",null,"always"),t("\u6C38\u8FDC\u663E\u793A\uFF0C"),n("code",null,"false"),t("\u4E0D\u663E\u793A\uFF0C"),n("code",null,"true"),t("\u663E\u793A\uFF09")],-1),N=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ClientOnly")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("my-table")]),t(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("tableData"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":initColumns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("initColumns"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"columnFilter"),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ClientOnly")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"const"),t(" initColumns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u65F6\u95F4'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'date'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"display"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'always'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token comment"},"// \u6C38\u8FDC\u663E\u793A"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u540D\u79F0'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u63CF\u8FF0'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    columns `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u65F6\u95F4'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'date'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"display"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'always'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token comment"},"// \u6C38\u8FDC\u663E\u793A"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u540D\u79F0'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u63CF\u8FF0'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    tableData `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-03'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-02'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),T=n("h2",{id:"\u6269\u5C55-table-\u5C5E\u6027",tabindex:"-1"},[t("\u6269\u5C55 Table \u5C5E\u6027 "),n("a",{class:"header-anchor",href:"#\u6269\u5C55-table-\u5C5E\u6027","aria-hidden":"true"},"#")],-1),S=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"\u5C5E\u6027"),n("th",null,"\u8BF4\u660E"),n("th",null,"\u7C7B\u578B"),n("th",null,"\u53EF\u9009\u503C"),n("th",null,"\u9ED8\u8BA4\u503C")])]),n("tbody",null,[n("tr",null,[n("td",null,"fit"),n("td",null,"\u662F\u5426\u5360\u6EE1\u7236\u7C7B"),n("td",null,"Boolean"),n("td",null,"\u2014"),n("td",null,"true")]),n("tr",null,[n("td",null,"columns"),n("td",null,"\u8868\u683C\u5217\u5B9A\u4E49\uFF0C\u5BF9\u8C61\u5C5E\u6027\u53C2\u6570\u5B8C\u5168\u7EE7\u627F el-table-column"),n("td",null,"Array"),n("td",null,"\u2014"),n("td",null,"[]")]),n("tr",null,[n("td",null,"initColumns"),n("td",null,"\u8868\u683C\u5217\u539F\u59CB\u5B9A\u4E49\uFF0C\u5BF9\u8C61\u5C5E\u6027\u53C2\u6570\u5B8C\u5168\u7EE7\u627F el-table-column\uFF0C\u4F9B table \u5217\u7684\u81EA\u5B9A\u4E49\u5217\u529F\u80FD\u91CD\u7F6E\u4F7F\u7528"),n("td",null,"Array"),n("td",null,"\u2014"),n("td",null,"[]")]),n("tr",null,[n("td",null,"columnSortable"),n("td",null,"\u662F\u5426\u542F\u7528\u5217\u62D6\u62FD\u6392\u5E8F, \u53EF\u4EE5\u914D\u7F6E Sortable \u4E2A\u6027\u5316\u53C2\u6570"),n("td",{ObjectBoolean:""}),n("td",null,"\u2014"),n("td",null,"false")]),n("tr",null,[n("td",null,"rowSortable"),n("td",null,"\u662F\u5426\u542F\u7528\u884C\u62D6\u62FD\u6392\u5E8F, \u53EF\u4EE5\u914D\u7F6E Sortable \u4E2A\u6027\u5316\u53C2\u6570"),n("td",{ObjectBoolean:""}),n("td",null,"\u2014"),n("td",null,"false")]),n("tr",null,[n("td",null,"distanceToButton"),n("td",null,"\u6EDA\u52A8\u5230\u8DDD\u79BB\u5E95\u90E8\u591A\u5C11\u8DDD\u79BB\u89E6\u53D1 on-reach-bottom \u4E8B\u4EF6\uFF0C table \u9700\u8981\u8BBE\u7F6E\u9AD8\u5EA6\u624D\u6709\u6548 (\u6EDA\u52A8)"),n("td",null,"Number"),n("td",null,"\u2014"),n("td",null,"50")]),n("tr",null,[n("td",null,"columnFilter"),n("td",null,"table \u5217\u7684\u81EA\u5B9A\u4E49\u529F\u80FD"),n("td",null,"Boolean"),n("td",null,"\u2014"),n("td",null,"false")])])],-1),w=E('<h2 id="\u6269\u5C55-table-\u4E8B\u4EF6" tabindex="-1">\u6269\u5C55 Table \u4E8B\u4EF6 <a class="header-anchor" href="#\u6269\u5C55-table-\u4E8B\u4EF6" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>column-change-confirm</td><td>\u5217\u8868\u7B5B\u9009\u70B9\u51FB\u786E\u5B9A\u65F6\u89E6\u53D1</td><td>columns</td></tr><tr><td>on-column-sort</td><td>\u5217\u62D6\u62FD\u6392\u5E8F\u5B8C\u6210\u65F6\u89E6\u53D1</td><td>e\uFF0Ccolumns</td></tr><tr><td>on-row-sort</td><td>\u884C\u62D6\u62FD\u6392\u5E8F\u5B8C\u6210\u65F6\u89E6\u53D1</td><td>e\uFF0Crow</td></tr><tr><td>on-reach-bottom</td><td>\u8868\u683C\u6EDA\u52A8\u5230\u5E95\u90E8\u65F6\u89E6\u53D1</td><td>scrollDistance \u79BB\u5E95\u90E8\u7684\u8DDD\u79BB</td></tr><tr><td>on-reach-top</td><td>\u8868\u683C\u6EDA\u52A8\u5230\u9876\u90E8\u65F6\u89E6\u53D1</td><td>scrollTop \u79BB\u9876\u90E8\u7684\u8DDD\u79BB</td></tr><tr><td>on-scroll</td><td>\u8868\u683C\u6EDA\u52A8\u65F6\u89E6\u53D1</td><td>e</td></tr></tbody></table><h2 id="\u63D2\u69FD" tabindex="-1">\u63D2\u69FD <a class="header-anchor" href="#\u63D2\u69FD" aria-hidden="true">#</a></h2><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u63D2\u69FD\u4F5C\u7528\u57DF</th></tr></thead><tbody><tr><td><code>item.prop</code></td><td>\u6BCF\u4E2A<code>columns</code>\u5BF9\u8C61\u7684<code>prop</code>\u5373\u4E3A<strong>\u63D2\u69FD\u540D</strong></td><td>scope</td></tr><tr><td><code>{item.prop}_header</code></td><td>\u6BCF\u4E2A<code>columns</code>\u5BF9\u8C61\u7684<code>prop</code>\u62FC\u63A5<code>_header</code>\u5373\u4E3A<strong>\u5217<code>header</code>\u63D2\u69FD\u540D</strong></td><td>scope</td></tr></tbody></table>',4);function x(o,l,c,r,i,k){const u=m("render-demo-0"),a=m("demo"),s=m("render-demo-1");return h(),D("div",null,[B,d(a,{sourceCode:`<template>
    <my-table :data="tableData" :columns="columns" />
</template>

<script setup>
const columns = [
        {
            label: '\u65F6\u95F4',
            prop: 'date',
        },
        {
            label: '\u540D\u79F0',
            prop: 'name',
        },
        {
            label: '\u63CF\u8FF0',
            prop: 'address',
        },
    ],
    tableData = [
        {
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St',
        },
        {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St',
        },
    ];
<\/script>
`},{description:e(()=>[_]),highlight:e(()=>[A]),default:e(()=>[d(u)]),_:1}),v,d(a,{sourceCode:`<template>
    <ClientOnly>
        <my-table :data="tableData" :columns="columns" :initColumns="initColumns" columnFilter />
    </ClientOnly>
</template>

<script setup>
const initColumns = [
        {
            label: '\u65F6\u95F4',
            prop: 'date',
            display: 'always', // \u6C38\u8FDC\u663E\u793A
        },
        {
            label: '\u540D\u79F0',
            prop: 'name',
        },
        {
            label: '\u63CF\u8FF0',
            prop: 'address',
        },
    ],
    columns = [
        {
            label: '\u65F6\u95F4',
            prop: 'date',
            display: 'always', // \u6C38\u8FDC\u663E\u793A
        },
        {
            label: '\u540D\u79F0',
            prop: 'name',
        },
        {
            label: '\u63CF\u8FF0',
            prop: 'address',
        },
    ],
    tableData = [
        {
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St',
        },
        {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St',
        },
    ];
<\/script>
`},{description:e(()=>[f]),highlight:e(()=>[N]),default:e(()=>[d(s)]),_:1}),T,S,w])}var j=y(g,[["render",x]]);export{V as __pageData,j as default};
