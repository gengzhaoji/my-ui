import{_ as an,V as I,c as tn,e as q,w as v,b as n,d as s,r as V,o as un}from"./app.14664fbb.js";const on={name:"component-doc",components:{"render-demo-0":function(){const{toDisplayString:h,createElementVNode:i,openBlock:b,createElementBlock:w}=I,y={class:"home col"},g={class:"tc ruleNumber"},C={id:"rule-container",class:"rule_container"},B=i("span",{class:"rule_cursor"},null,-1);function H(c,p){return b(),w("div",null,[i("div",y,[i("div",g,h(c.ruleNumber),1),i("div",C,[B,i("canvas",{id:"test-canvas",width:"300",height:"200",onMousemove:p[0]||(p[0]=(...t)=>c.canvasTouchMove&&c.canvasTouchMove(...t)),onMouseup:p[1]||(p[1]=(...t)=>c.canvasTouchEnd&&c.canvasTouchEnd(...t)),onMousedown:p[2]||(p[2]=(...t)=>c.canvasTouchStart&&c.canvasTouchStart(...t))},null,32)])])])}const{defineComponent:O,reactive:R,toRefs:P,onMounted:Y,nextTick:$}=I,z=O({name:"Home",setup(){const c=R({ruleNumber:0}),p=10,t=10,j=0,x=0,M=100;let N,T,d=!0,S=0,X=0,e=10,r,F,o,E=0,_=0,W=0;const J=()=>{const a=document.getElementById("rule-container");r=document.getElementById("test-canvas"),r.width=a.clientWidth,r.height=a.clientHeight,o=r.getContext("2d",{alpha:!1});const u=parseInt((r.clientWidth/t).toFixed(0));E=parseInt((u/2).toFixed(0)),N=x-E,T=M-E,F=r.clientWidth,r.clientHeight,o.font="14px Arial",window.requestAnimationFrame(f)},f=()=>{o.fillStyle="#ffffff",o.beginPath(),o.fillRect(0,0,F,F),o.closePath(),o.fillStyle="#000000";let a;const u=e.toString(),k=Number(u.charAt(u.length-1));e>0?a=t-k:e<0?(a=k,a===0&&(a=t)):a=0;for(let l=a;l<F;l+=t){o.moveTo(l,j);const D=l+e;if(U(D)===0)if(D%(p*t)===0){const nn=o.measureText(l),sn=(l-nn.width/2).toFixed(2);o.fillText(D/t,sn,45),o.lineTo(l,30)}else o.lineTo(l,10)}o.stroke(),$(()=>{c.ruleNumber=Math.floor(e/t)+E})};Y(()=>{J()});const U=a=>{const u=Math.floor(a/t);return u>=x&&u<=M?0:-1},A=a=>{const u=Math.floor(a/t);return u<=N?-1:u>=T?1:0};let m;const G=a=>{m=!0,S=a.clientX||a.touches[0].clientX,X=e,d=!1},K=a=>{if(!m)return!1;const u=a.clientX||a.touches[0].clientX,k=Math.floor(S-u);_=W-u,W=u,!(k*A(e)>0)&&Q(k)},Q=a=>{e=X+a,window.requestAnimationFrame(f)},Z=a=>{if(!m)return!1;m=!1,d=!0,L(_)},L=a=>{!d||a*A(e)>0||(a*=.9,!(Math.abs(a)<1||a*A(e)>0)&&(e+=Math.floor(a),window.requestAnimationFrame(()=>{L(a),f()})))};return{...P(c),canvasTouchMove:K,canvasTouchEnd:Z,canvasTouchStart:G}}});return{render:H,...z}}()}},kn=JSON.parse('{"title":"\u6ED1\u52A8\u523B\u5EA6\u5C3A","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/canvas/scale.md","lastUpdated":1678083950000}'),en=n("h1",{id:"\u6ED1\u52A8\u523B\u5EA6\u5C3A",tabindex:"-1"},[s("\u6ED1\u52A8\u523B\u5EA6\u5C3A "),n("a",{class:"header-anchor",href:"#\u6ED1\u52A8\u523B\u5EA6\u5C3A","aria-hidden":"true"},"#")],-1),cn=n("div",null,"\u6ED1\u52A8\u523B\u5EA6\u5C3A",-1),pn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("home col"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tc ruleNumber"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("{{ ruleNumber }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("rule-container"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("rule_container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("rule_cursor"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("canvas")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("test-canvas"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("300"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("200"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@mousemove"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("canvasTouchMove"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@mouseup"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("canvasTouchEnd"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@mousedown"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("canvasTouchStart"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("canvas")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" reactive"),n("span",{class:"token punctuation"},","),s(" toRefs"),n("span",{class:"token punctuation"},","),s(" onMounted"),n("span",{class:"token punctuation"},","),s(" nextTick "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Home'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"const"),s(" state "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"ruleNumber"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token comment"},"/**  \u6BCF\u5341\u4E2A\u683C\u5B50\u5C31\u5199\u4E00\u6B21\u523B\u5EA6\u6570\u5B57*/"),s(`
        `),n("span",{class:"token keyword"},"const"),s(" divider "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token comment"},"/**  \u9694\u5341\u4E2A\u50CF\u7D20\u5C31\u753B\u4E00\u4E2A\u523B\u5EA6\u7EBF*/"),s(`
        `),n("span",{class:"token keyword"},"const"),s(" itemWidth "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token comment"},"/**  \u753B\u523B\u5EA6\u7EBF\u7684\u8D77\u59CBy\u5750\u6807*/"),s(`
        `),n("span",{class:"token keyword"},"const"),s(" startY "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token comment"},"/**  \u5C3A\u5B50\u7684\u6700\u5C0F\u503C*/"),s(`
        `),n("span",{class:"token keyword"},"const"),s(" min "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token comment"},"/** \u5C3A\u5B50\u7684\u6700\u5927\u503C*/"),s(`
        `),n("span",{class:"token keyword"},"const"),s(" max "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"let"),s(" leftMin"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"let"),s(" leftMax"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token comment"},"/**  \u60EF\u6027\u6ED1\u52A8\u7528\u5230\u7684\u8BA1\u65F6\u5668 */"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" enableInertiaMove "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token comment"},"// \u624B\u6307\u6309\u4E0B\u65F6\u7684\u65F6\u95F4"),s(`
        `),n("span",{class:"token comment"},"// let startTime = 0;"),s(`

        `),n("span",{class:"token comment"},"/**  \u624B\u6307\u6309\u4E0B\u65F6\u7684x\u5750\u6807\uFF0C\u7528\u6765\u6BD4\u8F83\u672C\u6B21\u6ED1\u52A8\u7684\u65B9\u5411\u548C\u8DDD\u79BB\uFF0C\u52A0\u5728currentCanvasLocation\u4E0A\uFF0C\u5C31\u80FD\u8BA9\u5C3A\u5B50\u79FB\u52A8\u4E86*/"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" touchStartX "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token comment"},"/* \u624B\u6307\u6309\u4E0B\u65F6\uFF0C\u5F53\u524D currentCanvasLocation \u7684\u503C  */"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" startValue "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token comment"},`/**
         * \u5C3A\u5B50\u6700\u6838\u5FC3\u7684\u503C\uFF0C\u5355\u4F4D\u4E3A\u50CF\u7D20\uFF0C\u8FD9\u4E2A\u503C\u8BB0\u5F55\u4E86\u5F53\u524D\u624B\u6307\u603B\u5171\u6ED1\u52A8\u4E86\u591A\u5C11\u50CF\u7D20\u8DDD\u79BB\u548C\u65B9\u5411
         * \u5982\u679C\u628A\u5C3A\u5B50\u6700\u4F4E\u523B\u5EA6\u7406\u89E3\u4E3A1\u5398\u7C73\u7684\u8BDD\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u5C31\u662F1\u6BEB\u7C73\u3002
         */`),s(`
        `),n("span",{class:"token keyword"},"let"),s(" currentCanvasLocation "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token comment"},"// let timer = 0;"),s(`

        `),n("span",{class:"token comment"},"/**  \u753B\u5E03\u5143\u7D20 canvas = document.getElementById('test-canvas');*/"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" canvas"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token comment"},"/** \u753B\u5E03\u7684\u5BBD */"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" canvasWidth"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token comment"},"/* \u753B\u5E03\u7684\u9AD8 */"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" canvasHeight"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token comment"},"/* \u753B\u5E03context\uFF0C\u901A\u8FC7\u64CD\u4F5Cctx\u6765\u753B\u5185\u5BB9 */"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" ctx"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token comment"},"/* \u753B\u5E03\u5DE6\u4FA7\u5230\u753B\u5E03\u4E2D\u95F4\u683C\u5B50\u7684\u6570\u91CF\uFF0C\u52A0\u4E0A\u8FD9\u4E2A\u504F\u79FB\u503C\u5C31\u80FD\u7B26\u5408\u89C6\u89C9\u7684\u5C3A\u5B50\u5F53\u524D\u503C */"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" numberOffset "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token comment"},"/** \u624B\u6307\u62AC\u8D77\u4E4B\u524D\u7684\u6ED1\u52A8\u8DDD\u79BB\uFF0C\u7528\u6765\u53D1\u8D77\u60EF\u6027\u6ED1\u52A8*/"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" lastScrollDistacne "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token comment"},"/** \u624B\u6307\u6700\u540E\u62AC\u8D77\u4E4B\u524D\u63A5\u89E6\u7684x\u5750\u6807*/"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" lastTouchX "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token comment"},"/* \u521D\u59CB\u5316 Canvas */"),s(`
        `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"initCanvas"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"const"),s(" ruleContainer "),n("span",{class:"token operator"},"="),s(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getElementById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'rule-container'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            canvas `),n("span",{class:"token operator"},"="),s(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getElementById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'test-canvas'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            canvas`),n("span",{class:"token punctuation"},"."),s("width "),n("span",{class:"token operator"},"="),s(" ruleContainer"),n("span",{class:"token punctuation"},"."),s("clientWidth"),n("span",{class:"token punctuation"},";"),s(`
            canvas`),n("span",{class:"token punctuation"},"."),s("height "),n("span",{class:"token operator"},"="),s(" ruleContainer"),n("span",{class:"token punctuation"},"."),s("clientHeight"),n("span",{class:"token punctuation"},";"),s(`
            ctx `),n("span",{class:"token operator"},"="),s(" canvas"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getContext"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2d'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"alpha"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

            `),n("span",{class:"token comment"},"// \u8BA1\u7B97\u5C4F\u5E55\u80FD\u653E\u4E0B\u7684\u5C3A\u5B50\u683C\u6570"),s(`
            `),n("span",{class:"token keyword"},"const"),s(" screenCount "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"parseInt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("canvas"),n("span",{class:"token punctuation"},"."),s("clientWidth "),n("span",{class:"token operator"},"/"),s(" itemWidth"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toFixed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token comment"},"// \u8BA1\u7B97\u5C3A\u5B50\u8BFB\u6570\u9700\u8981\u7684\u504F\u79FB\u523B\u5EA6\u6570"),s(`
            numberOffset `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"parseInt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("screenCount "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toFixed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            leftMin `),n("span",{class:"token operator"},"="),s(" min "),n("span",{class:"token operator"},"-"),s(" numberOffset"),n("span",{class:"token punctuation"},";"),s(`
            leftMax `),n("span",{class:"token operator"},"="),s(" max "),n("span",{class:"token operator"},"-"),s(" numberOffset"),n("span",{class:"token punctuation"},";"),s(`

            `),n("span",{class:"token comment"},"// \u8BBE\u7F6E\u5BBD\u9AD8"),s(`
            canvasWidth `),n("span",{class:"token operator"},"="),s(" canvas"),n("span",{class:"token punctuation"},"."),s("clientWidth"),n("span",{class:"token punctuation"},";"),s(`
            canvasHeight `),n("span",{class:"token operator"},"="),s(" canvas"),n("span",{class:"token punctuation"},"."),s("clientHeight"),n("span",{class:"token punctuation"},";"),s(`

            `),n("span",{class:"token comment"},"// \u8BBE\u7F6E\u5B57\u4F53"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),s("font "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'14px Arial'"),n("span",{class:"token punctuation"},";"),s(`

            `),n("span",{class:"token comment"},"// \u521D\u59CB\u5316\u5B8C\u6210\u540E\u6E32\u67D3\u4E00\u4E0B"),s(`
            window`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"requestAnimationFrame"),n("span",{class:"token punctuation"},"("),s("draw"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"draw"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// \u8BBE\u7F6E\u7B14\u89E6\u989C\u8272\u4E3A\u767D\u8272\uFF0C\u6BCF\u6B21\u7ED8\u5236\u4E4B\u524D\uFF0C\u5148\u628A\u753B\u5E03\u7528\u767D\u8272\u6E05\u7A7A"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),s("fillStyle "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'#ffffff'"),n("span",{class:"token punctuation"},";"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"beginPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fillRect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" canvasWidth"),n("span",{class:"token punctuation"},","),s(" canvasWidth"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"closePath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

            `),n("span",{class:"token comment"},"// \u6E05\u7A7A\u5B8C\u753B\u5E03\uFF0C\u518D\u628A\u7B14\u89E6\u8BBE\u7F6E\u6210\u9ED1\u8272"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),s("fillStyle "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'#000000'"),n("span",{class:"token punctuation"},";"),s(`

            `),n("span",{class:"token comment"},"// \u5C3A\u5B50\u7684\u6700\u5C0F\u523B\u5EA6\u4E3A10\u4E2A\u50CF\u7D20\uFF0Cfor\u5FAA\u73AF\u6E32\u67D3\u5C3A\u5EA6\u65F6\u4F1A\u4EE5 start \u4E3A\u51C6\uFF0C\u6240\u4EE5\u6BCF\u6B21\u4F1A\u51FA\u73B0\u6BCF\u6B21\u6ED1\u52A8\u65F6\u5C31\u4E00\u683C\u4E00\u683C\u7684\u8DF3\u52A8\uFF0C\u4E0D\u591F\u987A\u6ED1"),s(`
            `),n("span",{class:"token comment"},"// \u8FD9\u91CC\u628A currentCanvasLocation \u672B\u5C3E\u7684\u50CF\u7D20\u503C\u53D6\u56DE\u6765\uFF0C\u8BA9\u6ED1\u52A8\u66F4\u52A0\u987A\u6ED1"),s(`
            `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(" number"),n("span",{class:"token punctuation"},";"),s(`

            `),n("span",{class:"token comment"},"// \u53D6\u5F53\u524D\u7684\u4F4D\u79FB\u91CF\u7684\u6700\u540E\u4E00\u4F4D"),s(`
            `),n("span",{class:"token keyword"},"const"),s(" str "),n("span",{class:"token operator"},"="),s(" currentCanvasLocation"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"const"),s(" lastNumber "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"Number"),n("span",{class:"token punctuation"},"("),s("str"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"charAt"),n("span",{class:"token punctuation"},"("),s("str"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

            `),n("span",{class:"token comment"},"// currentCanvasLocation \u5927\u4E8E\u548C\u5C0F\u4E8E0\u65F6\u6709\u4E0D\u540C\u7684\u53D6\u503C\u65B9\u5F0F"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("currentCanvasLocation "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                offset `),n("span",{class:"token operator"},"="),s(" itemWidth "),n("span",{class:"token operator"},"-"),s(" lastNumber"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("currentCanvasLocation "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                offset `),n("span",{class:"token operator"},"="),s(" lastNumber"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token comment"},"// \u56E0\u4E3A\u8FD9\u91CC\u662F\u76F4\u63A5\u5C06lastNumber\u8D4B\u503C\u7ED9offset\uFF0C\u800C\u4E0D\u662F10-lastNumber\uFF0C\u6240\u4EE5\u4E3A\u51FA\u73B0\u6CA1\u67090 \u7684\u60C5\u51B5\uFF0C\u4F1A\u51FA\u73B0 9 \u4E4B\u540E\u76F4\u63A5\u52301\uFF0C\u7136\u540E\u95EA\u4E00\u4E0B\u7684\u60C5\u51B5"),s(`
                `),n("span",{class:"token comment"},"// \u6240\u4EE5\u9700\u8981\u624B\u52A8\u5224\u65AD\u4E3A0\u65F6\u8BBE\u7F6E\u4E3A10"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("offset "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    offset `),n("span",{class:"token operator"},"="),s(" itemWidth"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                offset `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token comment"},"// for\u5FAA\u73AF\u7ED8\u5236\u5C3A\u5B50\u523B\u5EA6"),s(`
            `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(" offset"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" canvasWidth"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"+="),s(" itemWidth"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"moveTo"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},","),s(" startY"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token comment"},"// \u5F00\u5934\u504F\u79FB\u7684\u50CF\u7D20"),s(`
                `),n("span",{class:"token keyword"},"const"),s(" scaleNumber "),n("span",{class:"token operator"},"="),s(" i "),n("span",{class:"token operator"},"+"),s(" currentCanvasLocation"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token comment"},"// \u53EA\u7ED8\u5236\u5728\u5C3A\u5B50\u6570\u503C\u8303\u56F4\u5185\u7684"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"canDraw"),n("span",{class:"token punctuation"},"("),s("scaleNumber"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("scaleNumber "),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token punctuation"},"("),s("divider "),n("span",{class:"token operator"},"*"),s(" itemWidth"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                        `),n("span",{class:"token keyword"},"const"),s(" metrics "),n("span",{class:"token operator"},"="),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"measureText"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                        `),n("span",{class:"token keyword"},"const"),s(" textX "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"-"),s(" metrics"),n("span",{class:"token punctuation"},"."),s("width "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toFixed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                        ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fillText"),n("span",{class:"token punctuation"},"("),s("scaleNumber "),n("span",{class:"token operator"},"/"),s(" itemWidth"),n("span",{class:"token punctuation"},","),s(" textX"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"45"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                        ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"lineTo"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                        ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"lineTo"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                    `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stroke"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token comment"},"// \u7ED8\u5236\u5B8C\u6210\uFF0C\u52A0\u4E0A\u6570\u91CF"),s(`
            `),n("span",{class:"token function"},"nextTick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
                state`),n("span",{class:"token punctuation"},"."),s("ruleNumber "),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),s("currentCanvasLocation "),n("span",{class:"token operator"},"/"),s(" itemWidth"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(" numberOffset"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"initCanvas"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"const"),s(" canDraw "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token operator"},":"),s(" number"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token parameter"},"number"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"const"),s(" currentNumber "),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),s("x "),n("span",{class:"token operator"},"/"),s(" itemWidth"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("currentNumber "),n("span",{class:"token operator"},">="),s(" min "),n("span",{class:"token operator"},"&&"),s(" currentNumber "),n("span",{class:"token operator"},"<="),s(" max"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token comment"},`/**
         * \u8FD9\u91CC\u4F7F\u7528 1\u3001-1\u30010 \u6765\u6807\u5FD7\u5F53\u524D\u5C3A\u5B50\u7684\u72B6\u6001
         * \u5F53\u4E3A0\u65F6\u8868\u793A\u53EF\u4EE5\u6ED1\u52A8\uFF0C1\u548C-1\u5219\u4E0D\u884C
         * \u539F\u7406\uFF1A
         * \u6ED1\u52A8\u65F6\uFF08\u5305\u62EC\u60EF\u6027\u6ED1\u52A8\uFF09\uFF0C\u5411\u53F3\u6ED1\uFF0C\u624B\u6307\u4ECE\u53F3\u5F80\u5DE6\uFF0CcurrentCanvasLocation \u52A0\u4E00\u4E2A\u6B63\u6570\uFF0C
         * \u5411\u5DE6\u5212\uFF0C\u624B\u6307\u4ECE\u5DE6\u5F80\u53F3\uFF0CcurrentCanvasLocation\u52A0\u4E00\u4E2A\u8D1F\u6570\u3002
         * \u5224\u65AD\u662F\u5426\u53EF\u4EE5\u6ED1\u52A8\u65F6\uFF0C\u4F7F\u7528\u5982\u4E0B\u4EE3\u7801\uFF1A
         * if(value * canScroll() >0){
         *     return;
         * }
         * \u5982\u679C\u4E00\u76F4\u5411\u5DE6\u5212\uFF0C\u5212\u5230\u6700\u5C0F\u503C\u65F6\uFF0C\u518D\u5411\u5DE6\u5212\uFF0Cvalue\u4E3A\u8D1F\u6570\uFF0C\u8D1F\u8D1F\u7684\u6B63\uFF0C\u6B64\u65F6\u88ABreturn\u5219\u4E0D\u80FD\u7EE7\u7EED\u6ED1\u52A8
         * \u5982\u679C\u4E00\u76F4\u5411\u53F3\u5212\uFF0C\u5212\u5230\u6700\u5927\u503C\uFF0C\u518D\u5411\u53F3\u5212\uFF0Cvalue\u4E3A\u6B63\u6570\uFF0CcanScroll()\u4E3A1\uFF0C\u6B64\u65F6\u4E5F\u4F1A\u76F8\u4E58\u5927\u4E8E0\uFF0C\u88ABreturn
         *
         */`),s(`
        `),n("span",{class:"token keyword"},"const"),s(" canScroll "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token operator"},":"),s(" number"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token parameter"},"number"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"const"),s(" currentNumber "),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),s("x "),n("span",{class:"token operator"},"/"),s(" itemWidth"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("currentNumber "),n("span",{class:"token operator"},"<="),s(" leftMin"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("currentNumber "),n("span",{class:"token operator"},">="),s(" leftMax"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" isMouseDown"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token comment"},"/* \u624B\u6307\u6309\u4E0B\u4E8B\u4EF6 */"),s(`
        `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"canvasTouchStart"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            isMouseDown `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
            touchStartX `),n("span",{class:"token operator"},"="),s(" e"),n("span",{class:"token punctuation"},"."),s("clientX "),n("span",{class:"token operator"},"||"),s(" e"),n("span",{class:"token punctuation"},"."),s("touches"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("clientX"),n("span",{class:"token punctuation"},";"),s(`
            startValue `),n("span",{class:"token operator"},"="),s(" currentCanvasLocation"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token comment"},"// \u6E05\u9664\u4E4B\u524D\u7684\u60EF\u6027\u6ED1\u52A8"),s(`
            enableInertiaMove `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"const"),s(" canvasTouchMove "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token parameter"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("isMouseDown"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"const"),s(" touchClientX "),n("span",{class:"token operator"},"="),s(" e"),n("span",{class:"token punctuation"},"."),s("clientX "),n("span",{class:"token operator"},"||"),s(" e"),n("span",{class:"token punctuation"},"."),s("touches"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("clientX"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"const"),s(" moveX "),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),s("touchStartX "),n("span",{class:"token operator"},"-"),s(" touchClientX"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            lastScrollDistacne `),n("span",{class:"token operator"},"="),s(" lastTouchX "),n("span",{class:"token operator"},"-"),s(" touchClientX"),n("span",{class:"token punctuation"},";"),s(`
            lastTouchX `),n("span",{class:"token operator"},"="),s(" touchClientX"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("moveX "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token function"},"canScroll"),n("span",{class:"token punctuation"},"("),s("currentCanvasLocation"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token function"},"cursorMove"),n("span",{class:"token punctuation"},"("),s("moveX"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"cursorMove"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            currentCanvasLocation `),n("span",{class:"token operator"},"="),s(" startValue "),n("span",{class:"token operator"},"+"),s(" value"),n("span",{class:"token punctuation"},";"),s(`
            window`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"requestAnimationFrame"),n("span",{class:"token punctuation"},"("),s("draw"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"canvasTouchEnd"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("isMouseDown"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
            isMouseDown `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token comment"},"// \u76F4\u63A5\u7528\u6700\u540E\u4E00\u6B21\u6ED1\u52A8\u7684\u8DDD\u79BB\u6765\u5F53\u505A\u901F\u5EA6"),s(`
            enableInertiaMove `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token function"},"ease"),n("span",{class:"token punctuation"},"("),s("lastScrollDistacne"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"ease"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"target"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("enableInertiaMove"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("target "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token function"},"canScroll"),n("span",{class:"token punctuation"},"("),s("currentCanvasLocation"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            target `),n("span",{class:"token operator"},"*="),s(),n("span",{class:"token number"},"0.9"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"abs"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"||"),s(" target "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token function"},"canScroll"),n("span",{class:"token punctuation"},"("),s("currentCanvasLocation"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            currentCanvasLocation `),n("span",{class:"token operator"},"+="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            window`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"requestAnimationFrame"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token function"},"ease"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token function"},"draw"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token operator"},"..."),n("span",{class:"token function"},"toRefs"),n("span",{class:"token punctuation"},"("),s("state"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
            canvasTouchMove`),n("span",{class:"token punctuation"},","),s(`
            canvasTouchEnd`),n("span",{class:"token punctuation"},","),s(`
            canvasTouchStart`),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".ruleNumber"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 30px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),s(" 900"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".rule_container"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" relative"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".rule_cursor"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" absolute"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 2px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"left"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"calc"),n("span",{class:"token punctuation"},"("),s("50% - 1px"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 40px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" blue"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1);function ln(h,i,b,w,y,g){const C=V("render-demo-0"),B=V("demo");return un(),tn("div",null,[en,q(B,{sourceCode:`<template>
    <div class="home col">
        <div class="tc ruleNumber">{{ ruleNumber }}</div>
        <div id="rule-container" class="rule_container">
            <span class="rule_cursor"></span>
            <canvas id="test-canvas" width="300" height="200" @mousemove="canvasTouchMove" @mouseup="canvasTouchEnd" @mousedown="canvasTouchStart"></canvas>
        </div>
    </div>
</template>

<script>
import { defineComponent, reactive, toRefs, onMounted, nextTick } from 'vue';

export default defineComponent({
    name: 'Home',
    setup() {
        const state = reactive({
            ruleNumber: 0,
        });

        /**  \u6BCF\u5341\u4E2A\u683C\u5B50\u5C31\u5199\u4E00\u6B21\u523B\u5EA6\u6570\u5B57*/
        const divider = 10;

        /**  \u9694\u5341\u4E2A\u50CF\u7D20\u5C31\u753B\u4E00\u4E2A\u523B\u5EA6\u7EBF*/
        const itemWidth = 10;

        /**  \u753B\u523B\u5EA6\u7EBF\u7684\u8D77\u59CBy\u5750\u6807*/
        const startY = 0;

        /**  \u5C3A\u5B50\u7684\u6700\u5C0F\u503C*/
        const min = 0;

        /** \u5C3A\u5B50\u7684\u6700\u5927\u503C*/
        const max = 100;

        let leftMin;

        let leftMax;

        /**  \u60EF\u6027\u6ED1\u52A8\u7528\u5230\u7684\u8BA1\u65F6\u5668 */
        let enableInertiaMove = true;

        // \u624B\u6307\u6309\u4E0B\u65F6\u7684\u65F6\u95F4
        // let startTime = 0;

        /**  \u624B\u6307\u6309\u4E0B\u65F6\u7684x\u5750\u6807\uFF0C\u7528\u6765\u6BD4\u8F83\u672C\u6B21\u6ED1\u52A8\u7684\u65B9\u5411\u548C\u8DDD\u79BB\uFF0C\u52A0\u5728currentCanvasLocation\u4E0A\uFF0C\u5C31\u80FD\u8BA9\u5C3A\u5B50\u79FB\u52A8\u4E86*/
        let touchStartX = 0;

        /* \u624B\u6307\u6309\u4E0B\u65F6\uFF0C\u5F53\u524D currentCanvasLocation \u7684\u503C  */
        let startValue = 0;

        /**
         * \u5C3A\u5B50\u6700\u6838\u5FC3\u7684\u503C\uFF0C\u5355\u4F4D\u4E3A\u50CF\u7D20\uFF0C\u8FD9\u4E2A\u503C\u8BB0\u5F55\u4E86\u5F53\u524D\u624B\u6307\u603B\u5171\u6ED1\u52A8\u4E86\u591A\u5C11\u50CF\u7D20\u8DDD\u79BB\u548C\u65B9\u5411
         * \u5982\u679C\u628A\u5C3A\u5B50\u6700\u4F4E\u523B\u5EA6\u7406\u89E3\u4E3A1\u5398\u7C73\u7684\u8BDD\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u5C31\u662F1\u6BEB\u7C73\u3002
         */
        let currentCanvasLocation = 10;

        // let timer = 0;

        /**  \u753B\u5E03\u5143\u7D20 canvas = document.getElementById('test-canvas');*/
        let canvas;

        /** \u753B\u5E03\u7684\u5BBD */
        let canvasWidth;
        /* \u753B\u5E03\u7684\u9AD8 */
        let canvasHeight;

        /* \u753B\u5E03context\uFF0C\u901A\u8FC7\u64CD\u4F5Cctx\u6765\u753B\u5185\u5BB9 */
        let ctx;

        /* \u753B\u5E03\u5DE6\u4FA7\u5230\u753B\u5E03\u4E2D\u95F4\u683C\u5B50\u7684\u6570\u91CF\uFF0C\u52A0\u4E0A\u8FD9\u4E2A\u504F\u79FB\u503C\u5C31\u80FD\u7B26\u5408\u89C6\u89C9\u7684\u5C3A\u5B50\u5F53\u524D\u503C */
        let numberOffset = 0;

        /** \u624B\u6307\u62AC\u8D77\u4E4B\u524D\u7684\u6ED1\u52A8\u8DDD\u79BB\uFF0C\u7528\u6765\u53D1\u8D77\u60EF\u6027\u6ED1\u52A8*/
        let lastScrollDistacne = 0;

        /** \u624B\u6307\u6700\u540E\u62AC\u8D77\u4E4B\u524D\u63A5\u89E6\u7684x\u5750\u6807*/
        let lastTouchX = 0;

        /* \u521D\u59CB\u5316 Canvas */
        const initCanvas = () => {
            const ruleContainer = document.getElementById('rule-container');
            canvas = document.getElementById('test-canvas');
            canvas.width = ruleContainer.clientWidth;
            canvas.height = ruleContainer.clientHeight;
            ctx = canvas.getContext('2d', { alpha: false });

            // \u8BA1\u7B97\u5C4F\u5E55\u80FD\u653E\u4E0B\u7684\u5C3A\u5B50\u683C\u6570
            const screenCount = parseInt((canvas.clientWidth / itemWidth).toFixed(0));
            // \u8BA1\u7B97\u5C3A\u5B50\u8BFB\u6570\u9700\u8981\u7684\u504F\u79FB\u523B\u5EA6\u6570
            numberOffset = parseInt((screenCount / 2).toFixed(0));
            leftMin = min - numberOffset;
            leftMax = max - numberOffset;

            // \u8BBE\u7F6E\u5BBD\u9AD8
            canvasWidth = canvas.clientWidth;
            canvasHeight = canvas.clientHeight;

            // \u8BBE\u7F6E\u5B57\u4F53
            ctx.font = '14px Arial';

            // \u521D\u59CB\u5316\u5B8C\u6210\u540E\u6E32\u67D3\u4E00\u4E0B
            window.requestAnimationFrame(draw);
        };

        const draw = () => {
            // \u8BBE\u7F6E\u7B14\u89E6\u989C\u8272\u4E3A\u767D\u8272\uFF0C\u6BCF\u6B21\u7ED8\u5236\u4E4B\u524D\uFF0C\u5148\u628A\u753B\u5E03\u7528\u767D\u8272\u6E05\u7A7A
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.fillRect(0, 0, canvasWidth, canvasWidth);
            ctx.closePath();

            // \u6E05\u7A7A\u5B8C\u753B\u5E03\uFF0C\u518D\u628A\u7B14\u89E6\u8BBE\u7F6E\u6210\u9ED1\u8272
            ctx.fillStyle = '#000000';

            // \u5C3A\u5B50\u7684\u6700\u5C0F\u523B\u5EA6\u4E3A10\u4E2A\u50CF\u7D20\uFF0Cfor\u5FAA\u73AF\u6E32\u67D3\u5C3A\u5EA6\u65F6\u4F1A\u4EE5 start \u4E3A\u51C6\uFF0C\u6240\u4EE5\u6BCF\u6B21\u4F1A\u51FA\u73B0\u6BCF\u6B21\u6ED1\u52A8\u65F6\u5C31\u4E00\u683C\u4E00\u683C\u7684\u8DF3\u52A8\uFF0C\u4E0D\u591F\u987A\u6ED1
            // \u8FD9\u91CC\u628A currentCanvasLocation \u672B\u5C3E\u7684\u50CF\u7D20\u503C\u53D6\u56DE\u6765\uFF0C\u8BA9\u6ED1\u52A8\u66F4\u52A0\u987A\u6ED1
            let offset: number;

            // \u53D6\u5F53\u524D\u7684\u4F4D\u79FB\u91CF\u7684\u6700\u540E\u4E00\u4F4D
            const str = currentCanvasLocation.toString();
            const lastNumber = Number(str.charAt(str.length - 1));

            // currentCanvasLocation \u5927\u4E8E\u548C\u5C0F\u4E8E0\u65F6\u6709\u4E0D\u540C\u7684\u53D6\u503C\u65B9\u5F0F
            if (currentCanvasLocation > 0) {
                offset = itemWidth - lastNumber;
            } else if (currentCanvasLocation < 0) {
                offset = lastNumber;
                // \u56E0\u4E3A\u8FD9\u91CC\u662F\u76F4\u63A5\u5C06lastNumber\u8D4B\u503C\u7ED9offset\uFF0C\u800C\u4E0D\u662F10-lastNumber\uFF0C\u6240\u4EE5\u4E3A\u51FA\u73B0\u6CA1\u67090 \u7684\u60C5\u51B5\uFF0C\u4F1A\u51FA\u73B0 9 \u4E4B\u540E\u76F4\u63A5\u52301\uFF0C\u7136\u540E\u95EA\u4E00\u4E0B\u7684\u60C5\u51B5
                // \u6240\u4EE5\u9700\u8981\u624B\u52A8\u5224\u65AD\u4E3A0\u65F6\u8BBE\u7F6E\u4E3A10
                if (offset === 0) {
                    offset = itemWidth;
                }
            } else {
                offset = 0;
            }
            // for\u5FAA\u73AF\u7ED8\u5236\u5C3A\u5B50\u523B\u5EA6
            for (let i = offset; i < canvasWidth; i += itemWidth) {
                ctx.moveTo(i, startY);
                // \u5F00\u5934\u504F\u79FB\u7684\u50CF\u7D20
                const scaleNumber = i + currentCanvasLocation;
                // \u53EA\u7ED8\u5236\u5728\u5C3A\u5B50\u6570\u503C\u8303\u56F4\u5185\u7684
                if (canDraw(scaleNumber) === 0) {
                    if (scaleNumber % (divider * itemWidth) === 0) {
                        const metrics = ctx.measureText(i);
                        const textX = (i - metrics.width / 2).toFixed(2);
                        ctx.fillText(scaleNumber / itemWidth, textX, 45);
                        ctx.lineTo(i, 30);
                    } else {
                        ctx.lineTo(i, 10);
                    }
                }
            }
            ctx.stroke();
            // \u7ED8\u5236\u5B8C\u6210\uFF0C\u52A0\u4E0A\u6570\u91CF
            nextTick(() => {
                state.ruleNumber = Math.floor(currentCanvasLocation / itemWidth) + numberOffset;
            });
        };

        onMounted(() => {
            initCanvas();
        });

        const canDraw = (x: number): number => {
            const currentNumber = Math.floor(x / itemWidth);
            if (currentNumber >= min && currentNumber <= max) {
                return 0;
            }
            return -1;
        };

        /**
         * \u8FD9\u91CC\u4F7F\u7528 1\u3001-1\u30010 \u6765\u6807\u5FD7\u5F53\u524D\u5C3A\u5B50\u7684\u72B6\u6001
         * \u5F53\u4E3A0\u65F6\u8868\u793A\u53EF\u4EE5\u6ED1\u52A8\uFF0C1\u548C-1\u5219\u4E0D\u884C
         * \u539F\u7406\uFF1A
         * \u6ED1\u52A8\u65F6\uFF08\u5305\u62EC\u60EF\u6027\u6ED1\u52A8\uFF09\uFF0C\u5411\u53F3\u6ED1\uFF0C\u624B\u6307\u4ECE\u53F3\u5F80\u5DE6\uFF0CcurrentCanvasLocation \u52A0\u4E00\u4E2A\u6B63\u6570\uFF0C
         * \u5411\u5DE6\u5212\uFF0C\u624B\u6307\u4ECE\u5DE6\u5F80\u53F3\uFF0CcurrentCanvasLocation\u52A0\u4E00\u4E2A\u8D1F\u6570\u3002
         * \u5224\u65AD\u662F\u5426\u53EF\u4EE5\u6ED1\u52A8\u65F6\uFF0C\u4F7F\u7528\u5982\u4E0B\u4EE3\u7801\uFF1A
         * if(value * canScroll() >0){
         *     return;
         * }
         * \u5982\u679C\u4E00\u76F4\u5411\u5DE6\u5212\uFF0C\u5212\u5230\u6700\u5C0F\u503C\u65F6\uFF0C\u518D\u5411\u5DE6\u5212\uFF0Cvalue\u4E3A\u8D1F\u6570\uFF0C\u8D1F\u8D1F\u7684\u6B63\uFF0C\u6B64\u65F6\u88ABreturn\u5219\u4E0D\u80FD\u7EE7\u7EED\u6ED1\u52A8
         * \u5982\u679C\u4E00\u76F4\u5411\u53F3\u5212\uFF0C\u5212\u5230\u6700\u5927\u503C\uFF0C\u518D\u5411\u53F3\u5212\uFF0Cvalue\u4E3A\u6B63\u6570\uFF0CcanScroll()\u4E3A1\uFF0C\u6B64\u65F6\u4E5F\u4F1A\u76F8\u4E58\u5927\u4E8E0\uFF0C\u88ABreturn
         *
         */
        const canScroll = (x: number): number => {
            const currentNumber = Math.floor(x / itemWidth);
            if (currentNumber <= leftMin) {
                return -1;
            } else if (currentNumber >= leftMax) {
                return 1;
            } else {
                return 0;
            }
        };
        let isMouseDown;
        /* \u624B\u6307\u6309\u4E0B\u4E8B\u4EF6 */
        const canvasTouchStart = (e) => {
            isMouseDown = true;
            touchStartX = e.clientX || e.touches[0].clientX;
            startValue = currentCanvasLocation;
            // \u6E05\u9664\u4E4B\u524D\u7684\u60EF\u6027\u6ED1\u52A8
            enableInertiaMove = false;
        };

        const canvasTouchMove = (e): void => {
            if (!isMouseDown) return false;
            const touchClientX = e.clientX || e.touches[0].clientX;
            const moveX = Math.floor(touchStartX - touchClientX);
            lastScrollDistacne = lastTouchX - touchClientX;
            lastTouchX = touchClientX;
            if (moveX * canScroll(currentCanvasLocation) > 0) {
                return;
            }
            cursorMove(moveX);
        };

        const cursorMove = (value) => {
            currentCanvasLocation = startValue + value;
            window.requestAnimationFrame(draw);
        };

        const canvasTouchEnd = (e) => {
            if (!isMouseDown) return false;
            isMouseDown = false;
            // \u76F4\u63A5\u7528\u6700\u540E\u4E00\u6B21\u6ED1\u52A8\u7684\u8DDD\u79BB\u6765\u5F53\u505A\u901F\u5EA6
            enableInertiaMove = true;
            ease(lastScrollDistacne);
        };

        const ease = (target) => {
            if (!enableInertiaMove) {
                return;
            }
            if (target * canScroll(currentCanvasLocation) > 0) {
                return;
            }
            target *= 0.9;
            if (Math.abs(target) < 1 || target * canScroll(currentCanvasLocation) > 0) {
                return;
            }
            currentCanvasLocation += Math.floor(target);
            window.requestAnimationFrame(() => {
                ease(target);
                draw();
            });
        };

        return {
            ...toRefs(state),
            canvasTouchMove,
            canvasTouchEnd,
            canvasTouchStart,
        };
    },
});
<\/script>

<style scoped>
.ruleNumber {
    font-size: 30px;
    font-weight: 900;
    margin-bottom: 10px;
}
.rule_container {
    position: relative;
}
.rule_cursor {
    position: absolute;
    top: 0;
    width: 2px;
    left: calc(50% - 1px);
    height: 40px;
    background-color: blue;
}
</style>
`},{description:v(()=>[cn]),highlight:v(()=>[pn]),default:v(()=>[q(C)]),_:1})])}var Fn=an(on,[["render",ln]]);export{kn as __pageData,Fn as default};
