import{_ as D,c as f,e as F,w as p,b as n,d as s,r as d,o as x,V as h}from"./app.ba09d780.js";const A={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:l,openBlock:i,createElementBlock:k}=h,r={ref:"canvasId",width:700,height:300,style:{margin:"0 auto",background:"url('/wallhaven-we88zx.jpg') center/cover"}};function E(e,a){return i(),k("div",null,[l("canvas",r,null,512)])}return{render:E,...{mounted(){this.init()},methods:{init(){let e=this.$refs.canvasId;const a=e.getContext("2d");a.fillStyle="#9c9fb3",a.fillRect(0,0,700,300),a.font="40px Arial",a.fillStyle="#333",a.fillText("\u522E\u4E00\u522E",280,150),a.globalCompositeOperation="destination-out",e.addEventListener("mousemove",t=>{t.which===1&&t.button===0&&(C(t),B(g()))});function C(t){let u=e.getBoundingClientRect(),c=t.clientX-u.left,o=t.clientY-u.top;a.beginPath(),a.arc(c,o,20,0,Math.PI*2),a.fill(),a.closePath()}function g(){let u=a.getImageData(0,0,700,300).data,c=[];for(let o=0;o<u.length;o+=4)u[o+3]<128&&c.push(u[o+3]);return(c.length/(u.length/4)*100).toFixed(2)+"%"}function B(t){t=t||0,parseInt(t)>50&&a.clearRect(0,0,700,300)}}}}}}()}},I=JSON.parse('{"title":"\u522E\u522E\u4E50\u6548\u679C","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/canvas/Scratch.md","lastUpdated":1678083950000}'),b=n("h1",{id:"\u522E\u522E\u4E50\u6548\u679C",tabindex:"-1"},[s("\u522E\u522E\u4E50\u6548\u679C "),n("a",{class:"header-anchor",href:"#\u522E\u522E\u4E50\u6548\u679C","aria-hidden":"true"},"#")],-1),v=n("p",null,[s("\u4F7F\u7528"),n("code",null,"canvas"),s("\u5B9E\u73B0\u522E\u522E\u4E50\u6548\u679C")],-1),w=n("div",null,"\u5B9E\u73B0\u522E\u522E\u4E50\u6548\u679C",-1),y=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("canvas")]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("canvasId"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("700"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("300"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s("0 auto"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token url"},[n("span",{class:"token function"},"url"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string url"},"'/wallhaven-we88zx.jpg'"),n("span",{class:"token punctuation"},")")]),s(" center/cover"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("canvas")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"mounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"init"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"init"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// \u83B7\u53D6canvas\u5BF9\u8C61"),s(`
            `),n("span",{class:"token keyword"},"let"),s(" canvas "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$refs"),n("span",{class:"token punctuation"},"."),s("canvasId"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token comment"},"// \u83B7\u53D6\u4E0A\u4E0B\u6587\u5BF9\u8C61"),s(`
            `),n("span",{class:"token keyword"},"const"),s(" ctx "),n("span",{class:"token operator"},"="),s(" canvas"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getContext"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2d'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token comment"},"// \u5224\u65AD\u9F20\u6807\u662F\u5426\u5904\u4E8E\u6309\u538B\u72B6\u6001"),s(`
            `),n("span",{class:"token keyword"},"let"),s(" canDraw "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token comment"},"// \u7ED9\u753B\u5E03\u7ED8\u5236\u522E\u5C42\u8499\u7248"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),s("fillStyle "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'#9c9fb3'"),n("span",{class:"token punctuation"},";"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fillRect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"700"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token comment"},"// \u7ED8\u5236\u201C\u522E\u4E00\u522E\u201D\u5B57\u6837"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),s("font "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'40px Arial'"),n("span",{class:"token punctuation"},";"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),s("fillStyle "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'#333'"),n("span",{class:"token punctuation"},";"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fillText"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u522E\u4E00\u522E'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"280"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"150"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token comment"},"// \u91CD\u70B9\uFF1A\u5229\u7528 globalCompositeOperation \u5C5E\u6027\u6765\u6539\u53D8\u7ED8\u5236\u56FE\u5F62\u91CD\u53E0\u7684\u5408\u6210\u6837\u5F0F\uFF0C\u4EE5\u4E0B\u2018destination-out\u2019\u4EC5\u4EC5\u4FDD\u7559\u8001\u56FE\u50CF\u4E0E\u65B0\u56FE\u50CF\u6CA1\u6709\u91CD\u53E0\u7684\u90E8\u5206"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),s("globalCompositeOperation "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'destination-out'"),n("span",{class:"token punctuation"},";"),s(`

            `),n("span",{class:"token comment"},"// \u522E\u5F00\u6548\u679C\u51FD\u6570"),s(`
            canvas`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addEventListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'mousemove'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token comment"},"// \u5F53\u9F20\u6807\u5DE6\u952E\u6309\u4E0B&&\u79FB\u52A8\u9F20\u6807\u65F6\uFF0C\u6E05\u9664\u9F20\u6807\u9644\u8FD1\u6D82\u5C42"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("e"),n("span",{class:"token punctuation"},"."),s("which "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"&&"),s(" e"),n("span",{class:"token punctuation"},"."),s("button "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token function"},"drawCircle"),n("span",{class:"token punctuation"},"("),s("e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                    `),n("span",{class:"token function"},"handleFilledPercentage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getFilledPercentage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

            `),n("span",{class:"token comment"},"// \u7ED8\u5236\u5706\u7684\u65B9\u6CD5"),s(`
            `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"drawCircle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"let"),s(" rect "),n("span",{class:"token operator"},"="),s(" canvas"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getBoundingClientRect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"let"),s(" x "),n("span",{class:"token operator"},"="),s(" e"),n("span",{class:"token punctuation"},"."),s("clientX "),n("span",{class:"token operator"},"-"),s(" rect"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"let"),s(" y "),n("span",{class:"token operator"},"="),s(" e"),n("span",{class:"token punctuation"},"."),s("clientY "),n("span",{class:"token operator"},"-"),s(" rect"),n("span",{class:"token punctuation"},"."),s("top"),n("span",{class:"token punctuation"},";"),s(`
                ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"beginPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"arc"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PI"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"closePath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`

            `),n("span",{class:"token comment"},"// \u8BA1\u7B97\u5DF2\u7ECF\u522E\u8FC7\u7684\u533A\u57DF\u5360\u6574\u4E2A\u533A\u57DF\u7684\u767E\u5206\u6BD4"),s(`
            `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getFilledPercentage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"let"),s(" imgData "),n("span",{class:"token operator"},"="),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getImageData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"700"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token comment"},"// imgData.data\u662F\u4E2A\u6570\u7EC4\uFF0C\u5B58\u50A8\u7740\u6307\u5B9A\u533A\u57DF\u6BCF\u4E2A\u50CF\u7D20\u70B9\u7684\u4FE1\u606F\uFF0C\u6570\u7EC4\u4E2D4\u4E2A\u5143\u7D20\u8868\u793A\u4E00\u4E2A\u50CF\u7D20\u70B9\u7684rgba\u503C"),s(`
                `),n("span",{class:"token keyword"},"let"),s(" pixels "),n("span",{class:"token operator"},"="),s(" imgData"),n("span",{class:"token punctuation"},"."),s("data"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"let"),s(" transPixels "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" pixels"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token comment"},"// \u4E25\u683C\u4E0A\u6765\u8BF4\uFF0C\u5224\u65AD\u50CF\u7D20\u70B9\u662F\u5426\u900F\u660E\u9700\u8981\u5224\u65AD\u8BE5\u50CF\u7D20\u70B9\u7684a\u503C\u662F\u5426\u7B49\u4E8E0\uFF0C"),s(`
                    `),n("span",{class:"token comment"},"// \u4E3A\u4E86\u63D0\u9AD8\u8BA1\u7B97\u6548\u7387\uFF0C\u8FD9\u513F\u8BBE\u7F6E\u5F53a\u503C\u5C0F\u4E8E128\uFF0C\u4E5F\u5C31\u662F\u534A\u900F\u660E\u72B6\u6001\u65F6\u5C31\u53EF\u4EE5\u4E86"),s(`
                    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("pixels"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"128"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                        transPixels`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("pixels"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                    `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("transPixels"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token punctuation"},"("),s("pixels"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toFixed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},"'%'"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`

            `),n("span",{class:"token comment"},"// \u8BBE\u7F6E\u9608\u503C\uFF0C\u53BB\u9664\u7070\u8272\u6D82\u5C42"),s(`
            `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"handleFilledPercentage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"percentage"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                percentage `),n("span",{class:"token operator"},"="),s(" percentage "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"parseInt"),n("span",{class:"token punctuation"},"("),s("percentage"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token comment"},"// \u5F53\u50CF\u7D20\u70B9\u7684\u4E2A\u6570\u8D85\u8FC7  50% \u65F6\uFF0C\u6E05\u7A7A\u753B\u5E03\uFF0C\u663E\u793A\u5E95\u56FE"),s(`
                    ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clearRect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"700"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1);function _(l,i,k,r,E,m){const e=d("render-demo-0"),a=d("demo");return x(),f("div",null,[b,v,F(a,{sourceCode:`<template>
    <canvas ref="canvasId" :width="700" :height="300" style="margin:0 auto;background: url('/wallhaven-we88zx.jpg') center/cover;"></canvas>
</template>

<script>
export default {
    mounted() {
        this.init();
    },
    methods: {
        init() {
            // \u83B7\u53D6canvas\u5BF9\u8C61
            let canvas = this.$refs.canvasId;
            // \u83B7\u53D6\u4E0A\u4E0B\u6587\u5BF9\u8C61
            const ctx = canvas.getContext('2d');
            // \u5224\u65AD\u9F20\u6807\u662F\u5426\u5904\u4E8E\u6309\u538B\u72B6\u6001
            let canDraw = false;
            // \u7ED9\u753B\u5E03\u7ED8\u5236\u522E\u5C42\u8499\u7248
            ctx.fillStyle = '#9c9fb3';
            ctx.fillRect(0, 0, 700, 300);
            // \u7ED8\u5236\u201C\u522E\u4E00\u522E\u201D\u5B57\u6837
            ctx.font = '40px Arial';
            ctx.fillStyle = '#333';
            ctx.fillText('\u522E\u4E00\u522E', 280, 150);
            // \u91CD\u70B9\uFF1A\u5229\u7528 globalCompositeOperation \u5C5E\u6027\u6765\u6539\u53D8\u7ED8\u5236\u56FE\u5F62\u91CD\u53E0\u7684\u5408\u6210\u6837\u5F0F\uFF0C\u4EE5\u4E0B\u2018destination-out\u2019\u4EC5\u4EC5\u4FDD\u7559\u8001\u56FE\u50CF\u4E0E\u65B0\u56FE\u50CF\u6CA1\u6709\u91CD\u53E0\u7684\u90E8\u5206
            ctx.globalCompositeOperation = 'destination-out';

            // \u522E\u5F00\u6548\u679C\u51FD\u6570
            canvas.addEventListener('mousemove', (e) => {
                // \u5F53\u9F20\u6807\u5DE6\u952E\u6309\u4E0B&&\u79FB\u52A8\u9F20\u6807\u65F6\uFF0C\u6E05\u9664\u9F20\u6807\u9644\u8FD1\u6D82\u5C42
                if (e.which === 1 && e.button === 0) {
                    drawCircle(e);
                    handleFilledPercentage(getFilledPercentage());
                }
            });

            // \u7ED8\u5236\u5706\u7684\u65B9\u6CD5
            function drawCircle(e) {
                let rect = canvas.getBoundingClientRect();
                let x = e.clientX - rect.left;
                let y = e.clientY - rect.top;
                ctx.beginPath();
                ctx.arc(x, y, 20, 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();
            }

            // \u8BA1\u7B97\u5DF2\u7ECF\u522E\u8FC7\u7684\u533A\u57DF\u5360\u6574\u4E2A\u533A\u57DF\u7684\u767E\u5206\u6BD4
            function getFilledPercentage() {
                let imgData = ctx.getImageData(0, 0, 700, 300);
                // imgData.data\u662F\u4E2A\u6570\u7EC4\uFF0C\u5B58\u50A8\u7740\u6307\u5B9A\u533A\u57DF\u6BCF\u4E2A\u50CF\u7D20\u70B9\u7684\u4FE1\u606F\uFF0C\u6570\u7EC4\u4E2D4\u4E2A\u5143\u7D20\u8868\u793A\u4E00\u4E2A\u50CF\u7D20\u70B9\u7684rgba\u503C
                let pixels = imgData.data;
                let transPixels = [];
                for (let i = 0; i < pixels.length; i += 4) {
                    // \u4E25\u683C\u4E0A\u6765\u8BF4\uFF0C\u5224\u65AD\u50CF\u7D20\u70B9\u662F\u5426\u900F\u660E\u9700\u8981\u5224\u65AD\u8BE5\u50CF\u7D20\u70B9\u7684a\u503C\u662F\u5426\u7B49\u4E8E0\uFF0C
                    // \u4E3A\u4E86\u63D0\u9AD8\u8BA1\u7B97\u6548\u7387\uFF0C\u8FD9\u513F\u8BBE\u7F6E\u5F53a\u503C\u5C0F\u4E8E128\uFF0C\u4E5F\u5C31\u662F\u534A\u900F\u660E\u72B6\u6001\u65F6\u5C31\u53EF\u4EE5\u4E86
                    if (pixels[i + 3] < 128) {
                        transPixels.push(pixels[i + 3]);
                    }
                }
                return ((transPixels.length / (pixels.length / 4)) * 100).toFixed(2) + '%';
            }

            // \u8BBE\u7F6E\u9608\u503C\uFF0C\u53BB\u9664\u7070\u8272\u6D82\u5C42
            function handleFilledPercentage(percentage) {
                percentage = percentage || 0;
                if (parseInt(percentage) > 50) {
                    // \u5F53\u50CF\u7D20\u70B9\u7684\u4E2A\u6570\u8D85\u8FC7  50% \u65F6\uFF0C\u6E05\u7A7A\u753B\u5E03\uFF0C\u663E\u793A\u5E95\u56FE
                    ctx.clearRect(0, 0, 700, 300);
                }
            }
        },
    },
};
<\/script>
`},{description:p(()=>[w]),highlight:p(()=>[y]),default:p(()=>[F(e)]),_:1})])}var R=D(A,[["render",_]]);export{I as __pageData,R as default};
