import{_,c as M,e as f,w as d,b as n,d as s,r as C,o as S,V as P}from"./app.ba09d780.js";const O={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:h,openBlock:w,createElementBlock:m}=P,x=[h("canvas",{id:"canvasId",width:"500",height:"500",style:{border:"1px solid var(--el-border-color)",margin:"0 auto"}},null,-1)];function u(a,e){return w(),m("div",null,x)}return{render:u,...{mounted(){this.lineFn()},methods:{lineFn(){const a=document.getElementById("canvasId").getContext("2d");a.fillStyle="black",a.lineWidth=2,a.beginPath(),a.moveTo(30,10),a.lineTo(30,460),a.lineTo(490,460),a.stroke(),a.fillStyle="black";for(var e=0;e<6;e++)a.fillText((5-e)*20+"",4,e*80+60),a.beginPath(),a.moveTo(25,e*80+60),a.lineTo(30,e*80+60),a.stroke();for(var k=["\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94"],e=0;e<5;e++)a.fillText(k[e],50+e*100,475),a.beginPath(),a.moveTo(55+e*100,460),a.lineTo(55+e*100,465),a.stroke();var p=[20,10,20,30,54];a.beginPath();for(var e=0;e<p.length;e++){var i=p[e];i?(e!=0&&a.lineTo(55+e*100,460-i*4),a.stroke(),a.beginPath(),a.arc(55+e*100,460-i*4,3,0,2*Math.PI),a.fill(),a.beginPath(),a.moveTo(55+e*100,460-i*4)):a.beginPath()}var E=[...p].sort((t,o)=>t-o)[p.length-1],D=a.createLinearGradient(0,460-E,0,460);D.addColorStop(0,"rgba(5, 234, 200, 0.8)"),D.addColorStop(1,"rgba(5, 234, 200, 0.1)"),a.fillStyle=D;for(var e=0;e<p.length;e++){var i=p[e];i?p[e+1]&&(a.moveTo(55+e*100,460-i*4),a.lineTo(55+(e+1)*100,460-p[e+1]*4),a.lineTo(55+(e+1)*100,460),a.lineTo(55+e*100,460),a.fill(),a.beginPath()):a.beginPath()}}}}}}(),"render-demo-1":function(){const{createElementVNode:h,openBlock:w,createElementBlock:m}=P;function F(u,l){return w(),m("div",null,[h("canvas",{onMousemove:l[0]||(l[0]=(...a)=>u.onCanvasMousemove&&u.onCanvasMousemove(...a)),onMouseleave:l[1]||(l[1]=(...a)=>u.mouseleaveFn&&u.mouseleaveFn(...a)),ref:"canvasId",width:"300",height:"300",style:{margin:"0 auto"}},null,544)])}return{render:F,...{data(){return{radius:100,innerRadius:60,percent:60,pieData:[{desc:"\u5706\u73AF",name:"A",value:"0.6"},{desc:"\u5706\u73AF",name:"B",value:"0.4"}],x:150,y:150,color:["rgb(190, 149, 255)","rgb(70, 235, 168)"],fontSize:40}},mounted(){this.ctx=this.$refs.canvasId.getContext("2d"),this.drawRingPie()},methods:{drawRingPie(u,l,a){this.ctx.clearRect(0,0,300,300);let e=null;this.ctx.save(),this.ctx.translate(this.x,this.y),this.ctx.beginPath(),this.ctx.arc(0,0,this.innerRadius,0,Math.PI*2),this.ctx.arc(0,0,this.radius+10,0,Math.PI*2,!0),this.ctx.closePath(),this.ctx.clip();let k=0,p=0;for(let i=0;i<this.pieData.length;i++)this.ctx.beginPath(),this.ctx.moveTo(0,0),p+=this.pieData[i].value*Math.PI*2,this.curHoverIndex==i?this.ctx.arc(0,0,this.radius+10,k,p,!1):this.ctx.arc(0,0,this.radius,k,p,!1),this.ctx.closePath(),this.ctx.fillStyle=this.color[i],this.ctx.fill(),k=p,u&&this.ctx.isPointInPath(l,a)&&(e=i);if(this.ctx.restore(),this.ctx.font=this.fontSize+"px Arial",this.ctx.textBaseline="middle",this.ctx.textAlign="center",this.ctx.fillStyle="#000",this.ctx.fillText(this.percent+"%",this.x,this.y),u)return e},onCanvasMousemove(u){let l=this.$refs.canvasId.getBoundingClientRect(),a=u.clientX-l.left,e=u.clientY-l.top;this.curHoverIndex=this.getHoverAngleIndex(a,e),this.curHoverIndex!==null&&this.drawRingPie()},checkHoverInInnerCircle(u,l){if(this.ctx.beginPath(),this.ctx.arc(0,0,this.innerRadius,0,2*Math.PI),this.ctx.closePath(),this.ctx.isPointInPath(u,l))return!0},getHoverAngleIndex(u,l){if(this.ctx.save(),this.checkHoverInInnerCircle(u,l))return null;let a=this.drawRingPie(!0,u,l);return this.ctx.restore(),a},mouseleaveFn(){this.curHoverIndex=null,this.drawRingPie()}}}}}(),"render-demo-2":function(){const{createElementVNode:h,normalizeStyle:w,openBlock:m,createElementBlock:F,createCommentVNode:x}=P,u={class:"chartContainer",ref:"container"},l=["innerHTML"];function a(t,o){return m(),F("div",null,[h("div",u,[h("canvas",{ref:"chart",onMousemove:o[0]||(o[0]=(...c)=>t.onCanvasMousemove&&t.onCanvasMousemove(...c)),onMouseleave:o[1]||(o[1]=(...c)=>t.activeIndex&&t.activeIndex(...c))},null,544),t.showToolTip&&t.curHoverIndex!==null&&t.tooltipStr?(m(),F("div",{key:0,class:"tooltip",style:w({left:t.tooltipLeft+"px",top:t.tooltipTop+"px"}),innerHTML:t.tooltipStr},null,12,l)):x("",!0)],512)])}const e={easeOutBounce(t,o,c,r){return(t/=r)<1/2.75?c*(7.5625*t*t)+o:t<2/2.75?c*(7.5625*(t-=1.5/2.75)*t+.75)+o:t<2.5/2.75?c*(7.5625*(t-=2.25/2.75)*t+.9375)+o:c*(7.5625*(t-=2.625/2.75)*t+.984375)+o},easeInOut(t,o,c,r){return(t/=r/2)<1?c/2*t*t*t+o:c/2*((t-=2)*t*t+2)+o}};function k(t,o,c=500,r=()=>{},g=()=>{},y="easeInOut"){let v=o-t,R=Date.now(),b=!1,B=null,I=()=>{if(b)return!1;let T=Date.now()-R,A=e[y](T,0,1,c);A=A>1?1:A;let H=v*A+t;r&&r(H),A<1?B=window.requestAnimationFrame(I):g&&g()};return I(),()=>{b=!0,cancelAnimationFrame(B)}}const p=["#9287E7","#FF7B7B","#FEB64D","#49D6A5","#32D3EB","#F4605F","#F49160","#F2D43C","#53CC77","#36E4F7","#58A7F2","#717AF7","#E24F74","#C9EC75","#78F8CB","#9773EE","#636CF8","#FF7B7B","#FEB64D","#49D6A5","#32D3EB","#F2D43C","#FF7CBC","#9287E7","#6DA6FE"],i=2*Math.PI,E=Math.PI/2;return{render:a,...{name:"Pie",props:{data:{type:[Array],default(){return[{name:"\u540D\u79F01",num:10},{name:"\u540D\u79F02",num:20},{name:"\u540D\u79F03",num:30}]}},disableEvent:{type:Boolean,default:!1},outRatio:{type:Number,default:.9},innerRatio:{type:Number,default:.6},duration:{type:Number,default:1e3},bounceDuration:{type:Number,default:300},bounceRatio:{type:Number,default:.1},nightingale:{type:Boolean,default:!1},showToolTip:{type:Boolean,default:!0},customToolTip:{type:Function,default:null}},data(){return{ctx:null,chart:null,width:0,height:0,centerX:0,centerY:0,radius:0,radiusInner:0,radiusOut:0,curHoverIndex:null,lastHoverIndex:null,mousemoveTimer:null,showData:[],angleData:[],inited:!1,tooltipStr:"",tooltipLeft:0,tooltipTop:0}},computed:{sum(){return this.showData&&this.showData.length>0?this.showData.reduce((t,o)=>t+o.num,0):0},max(){let t=null;return this.showData.forEach(o=>{(t===null||o.num>t)&&(t=o.num)}),t},hoverRadiusOut(){let t=null;return this.showData.forEach(o=>{(t===null||o.hoverDrawRatio>t)&&(t=o.hoverDrawRatio)}),this.radiusOut+this.radiusOut*t}},created(){this.handleData()},mounted(){this.render()},methods:{handleData(){this.showData=this.data.map((t,o)=>({...t,color:t.color||p[o%p.length],hoverDrawRatio:0,stop:null}))},render(){!this.showData||this.showData.length<=0||this.$nextTick(()=>{this.inited||(this.inited=!0,this.init()),this.angleData=this.getAngleData(),this.drawChart()})},init(){this.getSizeInfo();let t=this.$refs.chart;t.width=this.width,t.height=this.height,this.ctx=t.getContext("2d"),this.ctx.translate(this.centerX,this.centerY)},clear(){this.ctx.clearRect(-this.centerX,-this.centerY,this.width,this.height)},drawChart(){this.duration>0?k(-.5,1.5,this.duration,t=>{this.ctx.save(),this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.arc(0,0,this.hoverRadiusOut,-.5*Math.PI,t*Math.PI),this.ctx.closePath(),this.ctx.clip(),this.drawPie(),this.ctx.restore()}):this.drawPie()},drawPie(){this.clear(),this.ctx.save(),this.clipPath(),this.renderPie(),this.ctx.restore()},clipPath(){this.ctx.beginPath(),this.ctx.arc(0,0,this.radiusInner,0,i),this.ctx.arc(0,0,this.hoverRadiusOut,0,i,!0),this.ctx.closePath(),this.ctx.clip()},renderPie(t,o,c){let r=null;if(this.angleData.forEach((g,y)=>{this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.fillStyle=this.showData[y].color;let v=g.radian[0]-E,R=g.radian[1]-E,b=0;this.nightingale&&(b=(1-this.showData[y].num/this.max)*(this.radiusOut-this.radiusInner));let B=this.radiusOut-b,I=B+B*this.showData[y].hoverDrawRatio;this.ctx.arc(0,0,I,v,R),t?r===null&&this.ctx.isPointInPath(o,c)&&(r=y):this.ctx.fill()}),t)return r},checkHoverInInnerCircle(t,o){if(this.ctx.beginPath(),this.ctx.arc(0,0,this.radiusInner,0,i),this.ctx.closePath(),this.ctx.isPointInPath(t,o))return!0},getHoverAngleIndex(t,o){if(this.ctx.save(),this.checkHoverInInnerCircle(t,o))return null;let c=this.renderPie(!0,t,o);return this.ctx.restore(),c},onCanvasMousemove(t){if(this.disableEvent)return!1;let o=this.$refs.chart.getBoundingClientRect(),c=t.clientX-o.left,r=t.clientY-o.top;this.curHoverIndex=this.getHoverAngleIndex(c,r),this.onColorBlockMouseleave(),this.curHoverIndex!==null?this.lastHoverIndex!==this.curHoverIndex&&(this.lastHoverIndex=this.curHoverIndex,this.onColorBlockMouseenter(this.curHoverIndex)):this.lastHoverIndex=null,this.$emit("mousemove",t,this.curHoverIndex,this.curHoverIndex===null?null:this.showData[this.curHoverIndex]),this.showTooltip(t)},onColorBlockMouseenter(t){if(this.disableEvent)return!1;k(this.showData[t].hoverDrawRatio,this.bounceRatio,this.bounceDuration,o=>{this.showData[t].hoverDrawRatio=o,this.drawPie()},null,"easeOutBounce")},onColorBlockMouseleave(){if(this.disableEvent)return!1;this.showData.forEach((t,o)=>{o!==this.curHoverIndex&&t.hoverDrawRatio!==0&&this.showData[o].stop===null&&(this.showData[o].stop=k(t.hoverDrawRatio,0,this.bounceDuration,c=>{this.showData[o].hoverDrawRatio=c,this.drawPie()},()=>{this.showData[o].hoverDrawRatio=0,this.showData[o].stop=null},"easeOutBounce"))})},showTooltip(t){if(!!this.showToolTip){if(this.customToolTip)return this.customToolTip(t,this.curHoverIndex,this.curHoverIndex===null?null:this.showData[this.curHoverIndex]);if(this.curHoverIndex===null)this.tooltipStr="";else{let o=this.showData[this.curHoverIndex];this.tooltipStr=`${o.name}\uFF1A${o.num}`;let{left:c,top:r}=this.$refs.container.getBoundingClientRect();this.tooltipLeft=t.clientX+10-c,this.tooltipTop=t.clientY+10-r}}},getSizeInfo(){let{width:t,height:o}=this.$refs.container.getBoundingClientRect();this.width=t,this.height=o,this.centerX=t/2,this.centerY=o/2,this.radius=Math.min(t,o)/2,this.radiusInner=this.radius*Math.min(this.innerRatio,1),this.radiusOut=this.radius*Math.min(this.outRatio,1-this.bounceRatio)},getAngleData(){let t=[],o=this.sum,c=0,r=Math.PI/180;return this.showData.forEach(g=>{let y=g.num/o*360,v=c+y;t.push({angle:[c,v],radian:[c*r,v*r]}),c+=y}),t},refresh(){this.init(),this.clear(),this.drawPie()},activeIndex(t){if(typeof t!="number"||t<0||t>this.showData.length-1){this.curHoverIndex=null,this.onColorBlockMouseleave();return}this.curHoverIndex=t,this.onColorBlockMouseleave(),this.onColorBlockMouseenter(t)},hideIndex(t=[]){this.handleData(t),this.angleData=this.getAngleData(),this.drawChart()}}}}}(),"render-demo-3":function(){const{createElementVNode:h,openBlock:w,createElementBlock:m}=P,F=["width","height"];function x(a,e){return w(),m("div",null,[h("canvas",{onMousemove:e[0]||(e[0]=(...k)=>a.mousemoveFn&&a.mousemoveFn(...k)),ref:"canvasId",width:a.Width,height:a.Height,style:{margin:"0 auto",background:"black"}},null,40,F)])}class u{constructor(e,k,p,i,E,D){this.index=e,this.x=k,this.y=p,this.r=i,this.color="hsl("+E+",100%,80%)",this.ctx=D}draw(){this.ctx.fillStyle=this.color,this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI,!1),this.ctx.closePath(),this.ctx.fill()}}return{render:x,...{data(){return{color:55,rounds:[],Width:700,Height:300}},mounted(){this.ctx=this.$refs.canvasId.getContext("2d"),this.animate()},methods:{animate(){this.ctx.clearRect(0,0,this.Width,this.Height);for(let a=0;a<this.rounds.length;a++)this.rounds[a].r+=.9,this.color>360&&(this.color=55),this.color+=.1,this.rounds[a]=new u(a,this.rounds[a].x,this.rounds[a].y,this.rounds[a].r,this.color,this.ctx),this.rounds[a].draw(),this.rounds[a].r>10&&this.rounds.splice(a,1);requestAnimationFrame(this.animate)},mousemoveFn(a){let e=this.$refs.canvasId.getBoundingClientRect(),k=a.clientX-e.left,p=a.clientY-e.top;this.rounds.push({x:k,y:p,r:3})}}}}}()}},nn=JSON.parse('{"title":"\u7ED8\u5236\u56FE\u5F62","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/canvas/arc.md","lastUpdated":1687663480000}'),$=n("h1",{id:"\u7ED8\u5236\u56FE\u5F62",tabindex:"-1"},[s("\u7ED8\u5236\u56FE\u5F62 "),n("a",{class:"header-anchor",href:"#\u7ED8\u5236\u56FE\u5F62","aria-hidden":"true"},"#")],-1),N=n("p",null,[s("\u4F7F\u7528"),n("code",null,"canvas"),s("\u7ED8\u5236\u6298\u7EBF\u56FE")],-1),q=n("div",null,"\u7ED8\u5236\u6298\u7EBF\u56FE",-1),Y=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("canvas")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("canvasId"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("500"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("500"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s("1px solid "),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--el-border-color"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s("0 auto")]),n("span",{class:"token punctuation"},'"')])]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"mounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"lineFn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"lineFn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"const"),s(" c "),n("span",{class:"token operator"},"="),s(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getElementById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'canvasId'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getContext"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2d'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token comment"},"// \u7ED8\u5236\u8F74\u7EBF"),s(`
            c`),n("span",{class:"token punctuation"},"."),s("fillStyle "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'black'"),n("span",{class:"token punctuation"},";"),s(`
            c`),n("span",{class:"token punctuation"},"."),s("lineWidth "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"2.0"),n("span",{class:"token punctuation"},";"),s(`
            c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"beginPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"moveTo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"lineTo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"460"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"lineTo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"490"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"460"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stroke"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

            `),n("span",{class:"token comment"},"// \u7ED8\u5236 Y\u8F74 \u523B\u5EA6\u503C"),s(`
            c`),n("span",{class:"token punctuation"},"."),s("fillStyle "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'black'"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"var"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token comment"},"// \u7ED8\u5236\u662F \u4ECE\u4E0A\u5411\u4E0B\u7ED8\u5236\u7684"),s(`
                c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fillText"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"5"),s(),n("span",{class:"token operator"},"-"),s(" i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"20"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(" i "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"80"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"60"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"beginPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"moveTo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"25"),n("span",{class:"token punctuation"},","),s(" i "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"80"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"60"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"lineTo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),s(" i "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"80"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"60"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stroke"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`

            `),n("span",{class:"token comment"},"// \u7ED8\u5236 X \u8F74\u523B\u5EA6"),s(`
            `),n("span",{class:"token keyword"},"var"),s(" labels "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'\u4E00'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u4E8C'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u4E09'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u56DB'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u4E94'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token comment"},"// \u6DFB\u52A0\u523B\u4E2A \u4ECE\u5DE6\u5411\u53F3\u7ED8\u5236"),s(`
            `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"var"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fillText"),n("span",{class:"token punctuation"},"("),s("labels"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"50"),s(),n("span",{class:"token operator"},"+"),s(" i "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"475"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"beginPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"moveTo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"55"),s(),n("span",{class:"token operator"},"+"),s(" i "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"460"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"lineTo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"55"),s(),n("span",{class:"token operator"},"+"),s(" i "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"465"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stroke"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`

            `),n("span",{class:"token comment"},"// \u6DFB\u52A0\u6570\u636E"),s(`
            `),n("span",{class:"token keyword"},"var"),s(" data "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"54"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
            c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"beginPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"var"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" data"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"var"),s(" dp "),n("span",{class:"token operator"},"="),s(" data"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("dp"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                        c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"lineTo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"55"),s(),n("span",{class:"token operator"},"+"),s(" i "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"460"),s(),n("span",{class:"token operator"},"-"),s(" dp "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                    `),n("span",{class:"token punctuation"},"}"),s(`
                    c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stroke"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                    c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"beginPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

                    c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"arc"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"55"),s(),n("span",{class:"token operator"},"+"),s(" i "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"460"),s(),n("span",{class:"token operator"},"-"),s(" dp "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"*"),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PI"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                    c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                    c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"beginPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

                    c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"moveTo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"55"),s(),n("span",{class:"token operator"},"+"),s(" i "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"460"),s(),n("span",{class:"token operator"},"-"),s(" dp "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"beginPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token comment"},"// \u83B7\u53D6\u6700\u5927\u503C"),s(`
            `),n("span",{class:"token keyword"},"var"),s(" maxData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),s("data"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("a"),n("span",{class:"token punctuation"},","),s(" b")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" a "),n("span",{class:"token operator"},"-"),s(" b"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"["),s("data"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

            `),n("span",{class:"token comment"},"// \u6DFB\u52A0\u6E10\u53D8\u8272"),s(`
            `),n("span",{class:"token keyword"},"var"),s(" g1 "),n("span",{class:"token operator"},"="),s(" c"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"createLinearGradient"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"460"),s(),n("span",{class:"token operator"},"-"),s(" maxData"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"460"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            g1`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addColorStop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'rgba(5, 234, 200, 0.8)'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            g1`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addColorStop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'rgba(5, 234, 200, 0.1)'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            c`),n("span",{class:"token punctuation"},"."),s("fillStyle "),n("span",{class:"token operator"},"="),s(" g1"),n("span",{class:"token punctuation"},";"),s(`

            `),n("span",{class:"token comment"},"// \u7ED8\u5236\u586B\u5145"),s(`
            `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"var"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" data"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"var"),s(" dp "),n("span",{class:"token operator"},"="),s(" data"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("dp"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                        `),n("span",{class:"token comment"},"// \u7ED8\u5236 \u5F53\u524D\u70B9 \u548C \u540E\u4E00\u4E2A\u70B9\u7EC4\u5408\u6210 \u7684\u56FE\u5F62 \u586B\u5145"),s(`
                        c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"moveTo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"55"),s(),n("span",{class:"token operator"},"+"),s(" i "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"460"),s(),n("span",{class:"token operator"},"-"),s(" dp "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                        c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"lineTo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"55"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"460"),s(),n("span",{class:"token operator"},"-"),s(" data"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                        c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"lineTo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"55"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"460"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                        c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"lineTo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"55"),s(),n("span",{class:"token operator"},"+"),s(" i "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"460"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

                        c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                        c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"beginPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                    `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"beginPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),X=n("p",null,[s("\u4F7F\u7528"),n("code",null,"canvas"),s("\u7ED8\u5236\u997C\u56FE")],-1),L=n("div",null,"\u7ED8\u5236\u997C\u56FE",-1),z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("canvas")]),s(),n("span",{class:"token attr-name"},"@mousemove"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onCanvasMousemove"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@mouseleave"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("mouseleaveFn"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("canvasId"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("300"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("300"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s("0 auto")]),n("span",{class:"token punctuation"},'"')])]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"radius"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"innerRadius"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"60"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"percent"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"60"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//\u5706\u73AF\u4E2D\u5FC3\u663E\u793A\u6570\u5B57"),s(`
            `),n("span",{class:"token literal-property property"},"pieData"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"desc"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5706\u73AF'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'A'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0.6'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"desc"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5706\u73AF'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'B'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0.4'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//\u73AF\u56FE\u6570\u636E"),s(`
            `),n("span",{class:"token literal-property property"},"x"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"150"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//\u56FE\u5F62\u4E2D\u5FC3\u70B9\u5728\u753B\u5E03\u7684x\u8F74\u5750\u6807"),s(`
            `),n("span",{class:"token literal-property property"},"y"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"150"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//\u56FE\u5F62\u4E2D\u5FC3\u70B9\u5728\u753B\u5E03Y\u8F74\u5750\u6807"),s(`
            `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'rgb(190, 149, 255)'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'rgb(70, 235, 168)'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"fontSize"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"40"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"mounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$refs"),n("span",{class:"token punctuation"},"."),s("canvasId"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getContext"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2d'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"drawRingPie"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},`/**
         * \u753B\u73AF\u5F62\u997C\u56FE
         */`),s(`
        `),n("span",{class:"token function"},"drawRingPie"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("checkHover"),n("span",{class:"token punctuation"},","),s(" x"),n("span",{class:"token punctuation"},","),s(" y")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// \u6E05\u7A7A\u753B\u5E03"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clearRect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

            `),n("span",{class:"token keyword"},"let"),s(" hoverIndex "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`

            `),n("span",{class:"token comment"},"//\u753B\u5916\u5C42\u5706\u73AF"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"save"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token comment"},"// \u91CD\u65B0\u6620\u5C04\u753B\u5E03\u4E0A\u7684 (0,0) \u4F4D\u7F6E\u3002"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"translate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("x"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("y"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

            `),n("span",{class:"token comment"},"// \u4ECE\u539F\u59CB\u753B\u5E03\u526A\u5207\u4EFB\u610F\u5F62\u72B6\u548C\u5C3A\u5BF8\u7684\u533A\u57DF"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"beginPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"arc"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("innerRadius"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PI"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// \u5185\u5706\u987A\u65F6\u9488"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"arc"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("radius "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PI"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// \u5916\u5706\u9006\u65F6\u9488"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"closePath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clip"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

            `),n("span",{class:"token keyword"},"let"),s(" startRadian "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
                endRadian `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("pieData"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"beginPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token comment"},"//\u8D77\u59CB\u70B9\u79FB\u52A8\u5230\u5706\u5FC3"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"moveTo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                endRadian `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("pieData"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"*"),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PI"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token comment"},"//\u4EE5\u5706\u5FC3\u4E3A\u8D77\u70B9\uFF0C0\u5EA6\u5F00\u59CB\u7ED8\u5236\u4E00\u4E2A\u5706"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("curHoverIndex "),n("span",{class:"token operator"},"=="),s(" i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"arc"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("radius "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(" startRadian"),n("span",{class:"token punctuation"},","),s(" endRadian"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"arc"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("radius"),n("span",{class:"token punctuation"},","),s(" startRadian"),n("span",{class:"token punctuation"},","),s(" endRadian"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"closePath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token comment"},"// \u586B\u5145\u989C\u8272"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),s("fillStyle "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("color"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                startRadian `),n("span",{class:"token operator"},"="),s(" endRadian"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token comment"},"// \u8DEF\u5F84\u5305\u542B\u68C0\u67E5"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("checkHover "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isPointInPath"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(" hoverIndex "),n("span",{class:"token operator"},"="),s(" i"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token comment"},`/**
             * \u73AF\u5FC3\u586B\u5145\u6587\u5B57
             */`),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"restore"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),s("font "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("fontSize "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},"'px Arial'"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),s("textBaseline "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'middle'"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),s("textAlign "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),s("fillStyle "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'#000'"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fillText"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("percent "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},"'%'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("x"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("y"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("checkHover"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(" hoverIndex"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// \u9F20\u6807\u79FB\u5165\u4E8B\u4EF6"),s(`
        `),n("span",{class:"token function"},"onCanvasMousemove"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"let"),s(" rect "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$refs"),n("span",{class:"token punctuation"},"."),s("canvasId"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getBoundingClientRect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"let"),s(" x "),n("span",{class:"token operator"},"="),s(" e"),n("span",{class:"token punctuation"},"."),s("clientX "),n("span",{class:"token operator"},"-"),s(" rect"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"let"),s(" y "),n("span",{class:"token operator"},"="),s(" e"),n("span",{class:"token punctuation"},"."),s("clientY "),n("span",{class:"token operator"},"-"),s(" rect"),n("span",{class:"token punctuation"},"."),s("top"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("curHoverIndex "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getHoverAngleIndex"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("curHoverIndex "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"drawRingPie"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},`/**
         * \u5224\u65AD\u662F\u5426\u5728\u5185\u5706\u73AF
         */`),s(`
        `),n("span",{class:"token function"},"checkHoverInInnerCircle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("x"),n("span",{class:"token punctuation"},","),s(" y")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"beginPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"arc"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("innerRadius"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"*"),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PI"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"closePath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isPointInPath"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},`/**
         * \u5224\u65AD\u5F53\u524D\u9F20\u6807\u662F\u5426\u5728\u67D0\u4E2A\u5706\u73AF\u4E0A
         */`),s(`
        `),n("span",{class:"token function"},"getHoverAngleIndex"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("x"),n("span",{class:"token punctuation"},","),s(" y")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"save"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token comment"},"// \u79FB\u5230\u5185\u5706\u73AF\u4E0D\u89E6\u53D1"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"checkHoverInInnerCircle"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`

            `),n("span",{class:"token keyword"},"let"),s(" index "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"drawRingPie"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(" x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"restore"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" index"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},`/**
         * \u79FB\u51FA\u4E8B\u4EF6
         */`),s(`
        `),n("span",{class:"token function"},"mouseleaveFn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("curHoverIndex "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"drawRingPie"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),V=n("p",null,[s("\u4F7F\u7528"),n("code",null,"canvas"),s("\u7ED8\u5236\u997C\u56FE\u52A0\u5165\u52A8\u6548")],-1),W=n("div",null,"\u7ED8\u5236\u997C\u56FE\u52A0\u5165\u52A8\u6548",-1),j=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("chartContainer"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("canvas")]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("chart"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@mousemove"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onCanvasMousemove"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@mouseleave"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("activeIndex"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("canvas")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tooltip"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("showToolTip && curHoverIndex !== null && tooltipStr"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ left: tooltipLeft + "),n("span",{class:"token punctuation"},"'"),s("px"),n("span",{class:"token punctuation"},"'"),s(", top: tooltipTop + "),n("span",{class:"token punctuation"},"'"),s("px"),n("span",{class:"token punctuation"},"'"),s(" }"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"v-html"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tooltipStr"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"const"),s(" ease "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// \u5F39\u8DF3"),s(`
    `),n("span",{class:"token function"},"easeOutBounce"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("t"),n("span",{class:"token punctuation"},","),s(" b"),n("span",{class:"token punctuation"},","),s(" c"),n("span",{class:"token punctuation"},","),s(" d")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("t "),n("span",{class:"token operator"},"/="),s(" d"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2.75"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" c "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"7.5625"),s(),n("span",{class:"token operator"},"*"),s(" t "),n("span",{class:"token operator"},"*"),s(" t"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(" b"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("t "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2.75"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" c "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"7.5625"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token punctuation"},"("),s("t "),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1.5"),s(),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2.75"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"*"),s(" t "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"0.75"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(" b"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("t "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"2.5"),s(),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2.75"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" c "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"7.5625"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token punctuation"},"("),s("t "),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"2.25"),s(),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2.75"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"*"),s(" t "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"0.9375"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(" b"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" c "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"7.5625"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token punctuation"},"("),s("t "),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"2.625"),s(),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2.75"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"*"),s(" t "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"0.984375"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(" b"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token comment"},"// \u6162\u8FDB\u6162\u51FA"),s(`
    `),n("span",{class:"token function"},"easeInOut"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("t"),n("span",{class:"token punctuation"},","),s(" b"),n("span",{class:"token punctuation"},","),s(" c"),n("span",{class:"token punctuation"},","),s(" d")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("t "),n("span",{class:"token operator"},"/="),s(" d "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s("c "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"*"),s(" t "),n("span",{class:"token operator"},"*"),s(" t "),n("span",{class:"token operator"},"*"),s(" t "),n("span",{class:"token operator"},"+"),s(" b"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s("c "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("t "),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"*"),s(" t "),n("span",{class:"token operator"},"*"),s(" t "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(" b"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},`/**
 * \u52A8\u753B\u51FD\u6570
 */`),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"move"),n("span",{class:"token punctuation"},"("),s("from"),n("span",{class:"token punctuation"},","),s(" to"),n("span",{class:"token punctuation"},","),s(" dur "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"500"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function-variable function"},"callback"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function-variable function"},"done"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(" easing "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'easeInOut'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" spaceNum "),n("span",{class:"token operator"},"="),s(" to "),n("span",{class:"token operator"},"-"),s(" from"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" startTime "),n("span",{class:"token operator"},"="),s(" Date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"now"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" isStop "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" timer "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token function-variable function"},"run"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("isStop"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" curTime "),n("span",{class:"token operator"},"="),s(" Date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"now"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" spaceTime "),n("span",{class:"token operator"},"="),s(" curTime "),n("span",{class:"token operator"},"-"),s(" startTime"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" ratio "),n("span",{class:"token operator"},"="),s(" ease"),n("span",{class:"token punctuation"},"["),s("easing"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"("),s("spaceTime"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" dur"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        ratio `),n("span",{class:"token operator"},"="),s(" ratio "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},":"),s(" ratio"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" step "),n("span",{class:"token operator"},"="),s(" spaceNum "),n("span",{class:"token operator"},"*"),s(" ratio "),n("span",{class:"token operator"},"+"),s(" from"),n("span",{class:"token punctuation"},";"),s(`
        callback `),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),s("step"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("ratio "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            timer `),n("span",{class:"token operator"},"="),s(" window"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"requestAnimationFrame"),n("span",{class:"token punctuation"},"("),s("run"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            done `),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"run"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        isStop `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"cancelAnimationFrame"),n("span",{class:"token punctuation"},"("),s("timer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"const"),s(" colorList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token string"},"'#9287E7'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},"'#FF7B7B'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},"'#FEB64D'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},"'#49D6A5'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},"'#32D3EB'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},"'#F4605F'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},"'#F49160'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},"'#F2D43C'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},"'#53CC77'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},"'#36E4F7'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},"'#58A7F2'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},"'#717AF7'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},"'#E24F74'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},"'#C9EC75'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},"'#78F8CB'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},"'#9773EE'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},"'#636CF8'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},"'#FF7B7B'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},"'#FEB64D'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},"'#49D6A5'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},"'#32D3EB'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},"'#F2D43C'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},"'#FF7CBC'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},"'#9287E7'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},"'#6DA6FE'"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" dPI "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"*"),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PI"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" hPI "),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PI"),s(),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},`/**
 * @Desc: \u73AF\u72B6\u56FE
 */`),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Pie'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"props"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// \u6570\u636E"),s(`
        `),n("span",{class:"token literal-property property"},"data"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s("Array"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token keyword"},"default"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"["),s(`
                    `),n("span",{class:"token punctuation"},"{"),s(`
                        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u540D\u79F01'"),n("span",{class:"token punctuation"},","),s(`
                        `),n("span",{class:"token literal-property property"},"num"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token punctuation"},"{"),s(`
                        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u540D\u79F02'"),n("span",{class:"token punctuation"},","),s(`
                        `),n("span",{class:"token literal-property property"},"num"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token punctuation"},"{"),s(`
                        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u540D\u79F03'"),n("span",{class:"token punctuation"},","),s(`
                        `),n("span",{class:"token literal-property property"},"num"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

        `),n("span",{class:"token comment"},"// \u7981\u6B62\u54CD\u5E94\u9F20\u6807\u4E8B\u4EF6"),s(`
        `),n("span",{class:"token literal-property property"},"disableEvent"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(" Boolean"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token keyword"},"default"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

        `),n("span",{class:"token comment"},"// \u5916\u5706\u73AF\u7684\u534A\u5F84\u6BD4\u4F8B"),s(`
        `),n("span",{class:"token literal-property property"},"outRatio"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(" Number"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token keyword"},"default"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.9"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

        `),n("span",{class:"token comment"},"// \u5185\u5706\u73AF\u7684\u534A\u5F84\u6BD4\u4F8B\uFF0C\u8BBE\u7F6E\u4E3A0\u5373\u4E3A\u997C\u56FE"),s(`
        `),n("span",{class:"token literal-property property"},"innerRatio"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(" Number"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token keyword"},"default"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.6"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

        `),n("span",{class:"token comment"},"// \u52A8\u753B\u65F6\u95F4\uFF0Cms"),s(`
        `),n("span",{class:"token literal-property property"},"duration"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(" Number"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token keyword"},"default"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

        `),n("span",{class:"token comment"},"// \u9F20\u6807\u79FB\u5230\u67D0\u90E8\u5206\u7684\u5F39\u8DF3\u52A8\u753B\u65F6\u95F4\uFF0Cms"),s(`
        `),n("span",{class:"token literal-property property"},"bounceDuration"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(" Number"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token keyword"},"default"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

        `),n("span",{class:"token comment"},"// \u9F20\u6807\u79FB\u5230\u67D0\u90E8\u5206\u7684\u5F39\u8DF3\u6BD4\u4F8B\uFF0C\u8BE5\u503C\u4F1A\u5F71\u54CD\u5230\u5706\u73AF\u7684\u5B9E\u9645\u534A\u5F84\uFF0C\u6BD4\u5982\u8BBE\u7F6E\u4E3A0.2\uFF0C\u90A3\u4E48\u534A\u5F84=1-0.2"),s(`
        `),n("span",{class:"token literal-property property"},"bounceRatio"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(" Number"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token keyword"},"default"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.1"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

        `),n("span",{class:"token comment"},"// \u5357\u4E01\u683C\u5C14\u56FE"),s(`
        `),n("span",{class:"token literal-property property"},"nightingale"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(" Boolean"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token keyword"},"default"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

        `),n("span",{class:"token comment"},"// \u662F\u5426\u663E\u793Atooltip"),s(`
        `),n("span",{class:"token literal-property property"},"showToolTip"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(" Boolean"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token keyword"},"default"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

        `),n("span",{class:"token comment"},`/**
         * @Desc: \u81EA\u5DF1\u5B9E\u73B0tooltip
         */`),s(`
        `),n("span",{class:"token literal-property property"},"customToolTip"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(" Function"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token keyword"},"default"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"ctx"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"chart"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"height"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"centerX"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"centerY"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"radius"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"radiusInner"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"radiusOut"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"curHoverIndex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"lastHoverIndex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"mousemoveTimer"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"showData"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"angleData"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"inited"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"tooltipStr"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"tooltipLeft"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"tooltipTop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"computed"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"sum"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("showData "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("showData"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),s(`
                `),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("showData"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reduce"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("num"),n("span",{class:"token punctuation"},","),s(" item")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
                      `),n("span",{class:"token keyword"},"return"),s(" num "),n("span",{class:"token operator"},"+"),s(" item"),n("span",{class:"token punctuation"},"."),s("num"),n("span",{class:"token punctuation"},";"),s(`
                  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"let"),s(" max "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("showData"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("max "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    max `),n("span",{class:"token operator"},"="),s(" item"),n("span",{class:"token punctuation"},"."),s("num"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},"."),s("num "),n("span",{class:"token operator"},">"),s(" max"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                        max `),n("span",{class:"token operator"},"="),s(" item"),n("span",{class:"token punctuation"},"."),s("num"),n("span",{class:"token punctuation"},";"),s(`
                    `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" max"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function"},"hoverRadiusOut"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"let"),s(" max "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("showData"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("max "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    max `),n("span",{class:"token operator"},"="),s(" item"),n("span",{class:"token punctuation"},"."),s("hoverDrawRatio"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},"."),s("hoverDrawRatio "),n("span",{class:"token operator"},">"),s(" max"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                        max `),n("span",{class:"token operator"},"="),s(" item"),n("span",{class:"token punctuation"},"."),s("hoverDrawRatio"),n("span",{class:"token punctuation"},";"),s(`
                    `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("radiusOut "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("radiusOut "),n("span",{class:"token operator"},"*"),s(" max"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"created"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"handleData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"mounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},`/**
         * @Desc: \u6570\u636E\u5904\u7406
         */`),s(`
        `),n("span",{class:"token function"},"handleData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// \u7ED9\u6570\u636E\u9879\u52A0\u4E0A\u989C\u8272"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("showData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("data"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("item"),n("span",{class:"token punctuation"},","),s(" index")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token operator"},"..."),s("item"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(" item"),n("span",{class:"token punctuation"},"."),s("color "),n("span",{class:"token operator"},"||"),s(" colorList"),n("span",{class:"token punctuation"},"["),s("index "),n("span",{class:"token operator"},"%"),s(" colorList"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"hoverDrawRatio"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"stop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

        `),n("span",{class:"token comment"},`/**
         * @Desc: \u6E32\u67D3
         */`),s(`
        `),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("showData "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("showData"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"<="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"$nextTick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("inited"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("inited "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
                    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"init"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("angleData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getAngleData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"drawChart"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

        `),n("span",{class:"token comment"},`/**
         * @Desc: \u521D\u59CB\u5316
         */`),s(`
        `),n("span",{class:"token function"},"init"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getSizeInfo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"let"),s(" canvas "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$refs"),n("span",{class:"token punctuation"},"."),s("chart"),n("span",{class:"token punctuation"},";"),s(`
            canvas`),n("span",{class:"token punctuation"},"."),s("width "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("width"),n("span",{class:"token punctuation"},";"),s(`
            canvas`),n("span",{class:"token punctuation"},"."),s("height "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("height"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx "),n("span",{class:"token operator"},"="),s(" canvas"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getContext"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2d'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"translate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("centerX"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("centerY"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

        `),n("span",{class:"token comment"},`/**
         * @Desc: \u6E05\u9664\u753B\u5E03
         */`),s(`
        `),n("span",{class:"token function"},"clear"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clearRect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("centerX"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("centerY"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("width"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("height"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

        `),n("span",{class:"token comment"},`/**
         * @Desc: \u7ED8\u5236\u5706\u73AF
         * arc\uFF1A\u5728\u8C03\u7528\u8BE5\u65B9\u6CD5\u65F6\u5DF2\u7ECF\u6709\u5176\u4ED6\u7684\u5B50\u8DEF\u5F84\u5B58\u5728\uFF0C\u90A3\u4E48arc\u65B9\u6CD5\u4F1A\u7528\u4E00\u6761\u7EBF\u6BB5\u628A\u5DF2\u6709\u8DEF\u5F84\u7684\u7EC8\u70B9\u4E0E\u8FD9\u6BB5\u5706\u5F27\u8DEF\u5F84\u7684\u8D77\u70B9\u8FDE\u63A5\u8D77\u6765
         * beginPath\uFF1A\u6E05\u9664\u5F53\u524D\u8DEF\u5F84\u4E2D\u7684\u6240\u6709\u5B50\u8DEF\u5F84
         */`),s(`
        `),n("span",{class:"token function"},"drawChart"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// \u8FC7\u6E21\u65F6\u95F4\u4E0D\u4E3A0"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("duration "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token comment"},"// 2\u79D2\u949F\u4ECE0\u5EA6\u8FD0\u52A8\u5230360\u5EA6"),s(`
                `),n("span",{class:"token function"},"move"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"0.5"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1.5"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("duration"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"cur"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"save"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"beginPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"moveTo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"arc"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("hoverRadiusOut"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"0.5"),s(),n("span",{class:"token operator"},"*"),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PI"),n("span",{class:"token punctuation"},","),s(" cur "),n("span",{class:"token operator"},"*"),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PI"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"closePath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clip"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"drawPie"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"restore"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token comment"},"// \u8FC7\u6E21\u65F6\u95F4\u4E3A0"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"drawPie"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

        `),n("span",{class:"token comment"},`/**
         * @Desc: \u753B\u5706\u73AF
         */`),s(`
        `),n("span",{class:"token function"},"drawPie"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clear"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"save"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token comment"},"// \u88C1\u526A\u5706\u73AF\u533A\u57DF"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clipPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token comment"},"// \u7ED8\u5236\u5706\u73AF"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"renderPie"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"restore"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

        `),n("span",{class:"token comment"},`/**
         * @Desc: \u88C1\u526A\u5706\u73AF\u533A\u57DF
         * \u56E0\u4E3Aclip()\u65B9\u6CD5\u4F1A\u5C06\u526A\u5207\u533A\u57DF\u8BBE\u7F6E\u4E3A\u5F53\u524D\u526A\u5207\u533A\u57DF\u4E0E\u5F53\u524D\u8DEF\u5F84\u7684\u4EA4\u96C6\uFF0C\u6240\u4EE5\u5BF9\u8BE5\u65B9\u6CD5\u7684\u8C03\u7528\u4E00\u822C\u90FD\u662F\u5D4C\u5165save()\u548Crestore()\u65B9\u6CD5\u4E4B\u95F4\u7684\u3002\u5426\u5219\uFF0C\u526A\u5207\u533A\u57DF\u5C06\u4F1A\u8D8A\u53D8\u8D8A\u5C0F\uFF0C\u8FD9\u901A\u5E38\u4E0D\u662F\u6211\u4EEC\u60F3\u8981\u7684\u6548\u679C\uFF0C\u800C\u4E14\u5426\u5219\u51F8\u51FA\u6548\u679C\u4E5F\u65E0\u6CD5\u5B9E\u73B0\uFF0C\u56E0\u4E3A\u4E4B\u524D\u7684\u526A\u5207\u533A\u57DF\u534A\u5F84\u4E0D\u591F
         */`),s(`
        `),n("span",{class:"token function"},"clipPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"beginPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"arc"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("radiusInner"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" dPI"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"arc"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("hoverRadiusOut"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" dPI"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"closePath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clip"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

        `),n("span",{class:"token comment"},`/**
         * @Desc: \u7ED8\u5236\u5706\u73AF
         */`),s(`
        `),n("span",{class:"token function"},"renderPie"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("checkHover"),n("span",{class:"token punctuation"},","),s(" x"),n("span",{class:"token punctuation"},","),s(" y")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"let"),s(" hoverIndex "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("angleData"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("item"),n("span",{class:"token punctuation"},","),s(" index")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"beginPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"moveTo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),s("fillStyle "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("showData"),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("color"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token comment"},"// \u540C\u65F6\u51CF90\u5EA6\uFF0C\u5426\u5219\u8D77\u70B9\u5C31\u4E0D\u662F\u4E0A\u9762\uFF0C\u800C\u662F\u53F3\u8FB9\u4E86"),s(`
                `),n("span",{class:"token keyword"},"let"),s(" startRadian "),n("span",{class:"token operator"},"="),s(" item"),n("span",{class:"token punctuation"},"."),s("radian"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"-"),s(" hPI"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"let"),s(" endRadian "),n("span",{class:"token operator"},"="),s(" item"),n("span",{class:"token punctuation"},"."),s("radian"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"-"),s(" hPI"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"let"),s(" nightingaleRadius "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("nightingale"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    nightingaleRadius `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("showData"),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("num "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("max"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("radiusOut "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("radiusInner"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token keyword"},"let"),s(" _baseRadiusOut "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("radiusOut "),n("span",{class:"token operator"},"-"),s(" nightingaleRadius"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"let"),s(" _radiusOut "),n("span",{class:"token operator"},"="),s(" _baseRadiusOut "),n("span",{class:"token operator"},"+"),s(" _baseRadiusOut "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("showData"),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("hoverDrawRatio"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"arc"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" _radiusOut"),n("span",{class:"token punctuation"},","),s(" startRadian"),n("span",{class:"token punctuation"},","),s(" endRadian"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token comment"},"// \u8DEF\u5F84\u5305\u542B\u68C0\u67E5"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("checkHover"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("hoverIndex "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isPointInPath"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                        hoverIndex `),n("span",{class:"token operator"},"="),s(" index"),n("span",{class:"token punctuation"},";"),s(`
                    `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("checkHover"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),s(" hoverIndex"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

        `),n("span",{class:"token comment"},`/**
         * @Desc: \u5224\u65AD\u662F\u5426\u5728\u5185\u5706\u73AF
         */`),s(`
        `),n("span",{class:"token function"},"checkHoverInInnerCircle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("x"),n("span",{class:"token punctuation"},","),s(" y")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"beginPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"arc"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("radiusInner"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" dPI"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"closePath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isPointInPath"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

        `),n("span",{class:"token comment"},`/**
         * @Desc: \u5224\u65AD\u5F53\u524D\u9F20\u6807\u662F\u5426\u5728\u67D0\u4E2A\u5706\u73AF\u4E0A
         */`),s(`
        `),n("span",{class:"token function"},"getHoverAngleIndex"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("x"),n("span",{class:"token punctuation"},","),s(" y")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"save"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token comment"},"// \u79FB\u5230\u5185\u5706\u73AF\u4E0D\u89E6\u53D1"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"checkHoverInInnerCircle"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token keyword"},"let"),s(" index "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"renderPie"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(" x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"restore"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" index"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

        `),n("span",{class:"token comment"},`/**
         * @Desc: canvas\u9F20\u6807\u79FB\u52A8\u4E8B\u4EF6
         */`),s(`
        `),n("span",{class:"token function"},"onCanvasMousemove"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("disableEvent"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token keyword"},"let"),s(" rect "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$refs"),n("span",{class:"token punctuation"},"."),s("chart"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getBoundingClientRect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"let"),s(" x "),n("span",{class:"token operator"},"="),s(" e"),n("span",{class:"token punctuation"},"."),s("clientX "),n("span",{class:"token operator"},"-"),s(" rect"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"let"),s(" y "),n("span",{class:"token operator"},"="),s(" e"),n("span",{class:"token punctuation"},"."),s("clientY "),n("span",{class:"token operator"},"-"),s(" rect"),n("span",{class:"token punctuation"},"."),s("top"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("curHoverIndex "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getHoverAngleIndex"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onColorBlockMouseleave"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("curHoverIndex "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("lastHoverIndex "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("curHoverIndex"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("lastHoverIndex "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("curHoverIndex"),n("span",{class:"token punctuation"},";"),s(`
                    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onColorBlockMouseenter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("curHoverIndex"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("lastHoverIndex "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"$emit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'mousemove'"),n("span",{class:"token punctuation"},","),s(" e"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("curHoverIndex"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("curHoverIndex "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("showData"),n("span",{class:"token punctuation"},"["),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("curHoverIndex"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"showTooltip"),n("span",{class:"token punctuation"},"("),s("e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

        `),n("span",{class:"token comment"},`/**
         * @Desc: \u989C\u8272\u5757\u9F20\u6807\u79FB\u4E0A\u4E8B\u4EF6
         */`),s(`
        `),n("span",{class:"token function"},"onColorBlockMouseenter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"index"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("disableEvent"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token function"},"move"),n("span",{class:"token punctuation"},"("),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("showData"),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("hoverDrawRatio"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("bounceRatio"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("bounceDuration"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"cur"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("showData"),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("hoverDrawRatio "),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},";"),s(`
                    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"drawPie"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token string"},"'easeOutBounce'"),s(`
            `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

        `),n("span",{class:"token comment"},`/**
         * @Desc:  \u989C\u8272\u5757\u9F20\u6807\u79FB\u51FA\u4E8B\u4EF6
         */`),s(`
        `),n("span",{class:"token function"},"onColorBlockMouseleave"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("disableEvent"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("showData"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("item"),n("span",{class:"token punctuation"},","),s(" index")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("index "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("curHoverIndex "),n("span",{class:"token operator"},"&&"),s(" item"),n("span",{class:"token punctuation"},"."),s("hoverDrawRatio "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("showData"),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("stop "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("showData"),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("stop "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"move"),n("span",{class:"token punctuation"},"("),s(`
                        item`),n("span",{class:"token punctuation"},"."),s("hoverDrawRatio"),n("span",{class:"token punctuation"},","),s(`
                        `),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
                        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("bounceDuration"),n("span",{class:"token punctuation"},","),s(`
                        `),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"cur"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
                            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("showData"),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("hoverDrawRatio "),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},";"),s(`
                            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"drawPie"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                        `),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
                            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("showData"),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("hoverDrawRatio "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
                            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("showData"),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("stop "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
                        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                        `),n("span",{class:"token string"},"'easeOutBounce'"),s(`
                    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

        `),n("span",{class:"token comment"},`/**
         * @Desc: \u663E\u793A\u9F20\u6807\u8DDF\u968F\u63D0\u793A
         */`),s(`
        `),n("span",{class:"token function"},"showTooltip"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("showToolTip"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("customToolTip"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"customToolTip"),n("span",{class:"token punctuation"},"("),s("e"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("curHoverIndex"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("curHoverIndex "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("showData"),n("span",{class:"token punctuation"},"["),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("curHoverIndex"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("curHoverIndex "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("tooltipStr "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"let"),s(" data "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("showData"),n("span",{class:"token punctuation"},"["),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("curHoverIndex"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("tooltipStr "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("data"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"\uFF1A"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("data"),n("span",{class:"token punctuation"},"."),s("num"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"{"),s(" left"),n("span",{class:"token punctuation"},","),s(" top "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$refs"),n("span",{class:"token punctuation"},"."),s("container"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getBoundingClientRect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("tooltipLeft "),n("span",{class:"token operator"},"="),s(" e"),n("span",{class:"token punctuation"},"."),s("clientX "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"10"),s(),n("span",{class:"token operator"},"-"),s(" left"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("tooltipTop "),n("span",{class:"token operator"},"="),s(" e"),n("span",{class:"token punctuation"},"."),s("clientY "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"10"),s(),n("span",{class:"token operator"},"-"),s(" top"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

        `),n("span",{class:"token comment"},`/**
         * @Desc: \u8BA1\u7B97\u7ED8\u5236\u6570\u636E
         */`),s(`
        `),n("span",{class:"token function"},"getSizeInfo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// \u5BB9\u5668\u5BBD\u9AD8"),s(`
            `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"{"),s(" width"),n("span",{class:"token punctuation"},","),s(" height "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$refs"),n("span",{class:"token punctuation"},"."),s("container"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getBoundingClientRect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("width "),n("span",{class:"token operator"},"="),s(" width"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("height "),n("span",{class:"token operator"},"="),s(" height"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token comment"},"// \u4E2D\u5FC3\u70B9"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("centerX "),n("span",{class:"token operator"},"="),s(" width "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("centerY "),n("span",{class:"token operator"},"="),s(" height "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token comment"},"// \u6700\u5927\u534A\u5F84"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("radius "),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),s("width"),n("span",{class:"token punctuation"},","),s(" height"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token comment"},"// \u5185\u5706\u73AF\u534A\u5F84"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("radiusInner "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("radius "),n("span",{class:"token operator"},"*"),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("innerRatio"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token comment"},"// \u5916\u5706\u73AF\u534A\u5F84"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("radiusOut "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("radius "),n("span",{class:"token operator"},"*"),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("outRatio"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("bounceRatio"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

        `),n("span",{class:"token comment"},`/**
         * @Desc: \u83B7\u53D6\u89D2\u5EA6\u6570\u636E
         */`),s(`
        `),n("span",{class:"token function"},"getAngleData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"let"),s(" arr "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"let"),s(" total "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("sum"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"let"),s(" curTotalAngle "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"let"),s(" r "),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PI"),s(),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"180"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("showData"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"let"),s(" curAngle "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},"."),s("num "),n("span",{class:"token operator"},"/"),s(" total"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"360"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"let"),s(" cruEndAngle "),n("span",{class:"token operator"},"="),s(" curTotalAngle "),n("span",{class:"token operator"},"+"),s(" curAngle"),n("span",{class:"token punctuation"},";"),s(`
                arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token literal-property property"},"angle"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s("curTotalAngle"),n("span",{class:"token punctuation"},","),s(" cruEndAngle"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token literal-property property"},"radian"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s("curTotalAngle "),n("span",{class:"token operator"},"*"),s(" r"),n("span",{class:"token punctuation"},","),s(" cruEndAngle "),n("span",{class:"token operator"},"*"),s(" r"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                curTotalAngle `),n("span",{class:"token operator"},"+="),s(" curAngle"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" arr"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

        `),n("span",{class:"token comment"},`/**
         * @Desc: \u54CD\u5E94\u5BB9\u5668\u5C3A\u5BF8\u53D8\u5316
         */`),s(`
        `),n("span",{class:"token function"},"refresh"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"init"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clear"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"drawPie"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

        `),n("span",{class:"token comment"},`/**
         * @Desc: \u51F8\u51FA\u6307\u5B9A\u7D22\u5F15\u7684\u5706\u73AF
         */`),s(`
        `),n("span",{class:"token function"},"activeIndex"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"index"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"typeof"),s(" index "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token string"},"'number'"),s(),n("span",{class:"token operator"},"||"),s(" index "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"||"),s(" index "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("showData"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("curHoverIndex "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onColorBlockMouseleave"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("curHoverIndex "),n("span",{class:"token operator"},"="),s(" index"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onColorBlockMouseleave"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onColorBlockMouseenter"),n("span",{class:"token punctuation"},"("),s("index"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

        `),n("span",{class:"token comment"},`/**
         * @Desc: \u9690\u85CF\u6307\u5B9A\u7D22\u5F15\u7684\u6570\u636E
         */`),s(`
        `),n("span",{class:"token function"},"hideIndex"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("indexList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"handleData"),n("span",{class:"token punctuation"},"("),s("indexList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("angleData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getAngleData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"drawChart"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scss"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".chartContainer"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" relative"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100%"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 100%"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token selector"},".tooltip"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" absolute"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"left"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" block"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"border-style"),n("span",{class:"token punctuation"},":"),s(" solid"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"white-space"),n("span",{class:"token punctuation"},":"),s(" nowrap"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"z-index"),n("span",{class:"token punctuation"},":"),s(" 9999999"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"transition"),n("span",{class:"token punctuation"},":"),s(" left 0.4s "),n("span",{class:"token function"},"cubic-bezier"),n("span",{class:"token punctuation"},"("),s("0.23"),n("span",{class:"token punctuation"},","),s(" 1"),n("span",{class:"token punctuation"},","),s(" 0.32"),n("span",{class:"token punctuation"},","),s(" 1"),n("span",{class:"token punctuation"},")"),s(" 0s"),n("span",{class:"token punctuation"},","),s(" top 0.4s "),n("span",{class:"token function"},"cubic-bezier"),n("span",{class:"token punctuation"},"("),s("0.23"),n("span",{class:"token punctuation"},","),s(" 1"),n("span",{class:"token punctuation"},","),s(" 0.32"),n("span",{class:"token punctuation"},","),s(" 1"),n("span",{class:"token punctuation"},")"),s(" 0s"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),s("50"),n("span",{class:"token punctuation"},","),s(" 50"),n("span",{class:"token punctuation"},","),s(" 50"),n("span",{class:"token punctuation"},","),s(" 0.7"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"border-width"),n("span",{class:"token punctuation"},":"),s(" 0px"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"border-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"rgb"),n("span",{class:"token punctuation"},"("),s("51"),n("span",{class:"token punctuation"},","),s(" 51"),n("span",{class:"token punctuation"},","),s(" 51"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),s(" 4px"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"rgb"),n("span",{class:"token punctuation"},"("),s("255"),n("span",{class:"token punctuation"},","),s(" 255"),n("span",{class:"token punctuation"},","),s(" 255"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"font"),n("span",{class:"token punctuation"},":"),s(" 14px / 21px "),n("span",{class:"token string"},"'Microsoft YaHei'"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 5px"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"left"),n("span",{class:"token punctuation"},":"),s(" 302px"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),s(" 454px"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"pointer-events"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),G=n("p",null,[s("\u4F7F\u7528"),n("code",null,"canvas"),s("\u7ED8\u5236\u52A8\u753B")],-1),J=n("div",null,"\u7ED8\u5236\u52A8\u753B",-1),U=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("canvas")]),s(),n("span",{class:"token attr-name"},"@mousemove"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("mousemoveFn"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("canvasId"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Width"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Height"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s("0 auto"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(" black"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Round_item"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("index"),n("span",{class:"token punctuation"},","),s(" x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},","),s(" r"),n("span",{class:"token punctuation"},","),s(" color"),n("span",{class:"token punctuation"},","),s(" ctx")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("index "),n("span",{class:"token operator"},"="),s(" index"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("x "),n("span",{class:"token operator"},"="),s(" x"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("y "),n("span",{class:"token operator"},"="),s(" y"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("r "),n("span",{class:"token operator"},"="),s(" r"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("color "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'hsl('"),s(),n("span",{class:"token operator"},"+"),s(" color "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},"',100%,80%)'"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx "),n("span",{class:"token operator"},"="),s(" ctx"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token function"},"draw"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),s("fillStyle "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("color"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"beginPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"arc"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("x"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("y"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("r"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"*"),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PI"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"closePath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"55"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"rounds"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"Width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"700"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"Height"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"mounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$refs"),n("span",{class:"token punctuation"},"."),s("canvasId"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getContext"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2d'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"animate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"animate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// \u6E05\u7A7A\u753B\u5E03"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clearRect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("Width"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("Height"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("rounds"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token comment"},"// \u534A\u5F84\u6BCF\u6B21\u589E\u59270.9"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("rounds"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("r "),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"0.9"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token comment"},"// \u7531\u4E8Ehsl\u7684\u989C\u8272\u8303\u56F4\u662F1-360"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("color "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"360"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("color "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"55"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token comment"},"// \u989C\u8272\u53D8\u5316"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("color "),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"0.1"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("rounds"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Round_item"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("rounds"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("x"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("rounds"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("y"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("rounds"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("r"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("color"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("rounds"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"draw"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token comment"},"// \u5706\u7684\u534A\u5F84\u5927\u4E8E10\u5C31\u5728\u4E0B\u4E00\u6B21\u52FE\u52D2\u5F97\u65F6\u5019\u6D88\u5931"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("rounds"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("r "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("rounds"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token function"},"requestAnimationFrame"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("animate"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function"},"mousemoveFn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"let"),s(" rect "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$refs"),n("span",{class:"token punctuation"},"."),s("canvasId"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getBoundingClientRect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"let"),s(" x "),n("span",{class:"token operator"},"="),s(" e"),n("span",{class:"token punctuation"},"."),s("clientX "),n("span",{class:"token operator"},"-"),s(" rect"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"let"),s(" y "),n("span",{class:"token operator"},"="),s(" e"),n("span",{class:"token punctuation"},"."),s("clientY "),n("span",{class:"token operator"},"-"),s(" rect"),n("span",{class:"token punctuation"},"."),s("top"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("rounds"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
                x`),n("span",{class:"token punctuation"},","),s(`
                y`),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"r"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1);function K(h,w,m,F,x,u){const l=C("render-demo-0"),a=C("demo"),e=C("render-demo-1"),k=C("render-demo-2"),p=C("render-demo-3");return S(),M("div",null,[$,N,f(a,{sourceCode:`<template>
    <canvas id="canvasId" width="500" height="500" style="border:1px solid var(--el-border-color);margin:0 auto" />
</template>

<script>
export default {
    mounted() {
        this.lineFn();
    },
    methods: {
        lineFn() {
            const c = document.getElementById('canvasId').getContext('2d');
            // \u7ED8\u5236\u8F74\u7EBF
            c.fillStyle = 'black';
            c.lineWidth = 2.0;
            c.beginPath();
            c.moveTo(30, 10);
            c.lineTo(30, 460);
            c.lineTo(490, 460);
            c.stroke();

            // \u7ED8\u5236 Y\u8F74 \u523B\u5EA6\u503C
            c.fillStyle = 'black';
            for (var i = 0; i < 6; i++) {
                // \u7ED8\u5236\u662F \u4ECE\u4E0A\u5411\u4E0B\u7ED8\u5236\u7684
                c.fillText((5 - i) * 20 + '', 4, i * 80 + 60);
                c.beginPath();
                c.moveTo(25, i * 80 + 60);
                c.lineTo(30, i * 80 + 60);
                c.stroke();
            }

            // \u7ED8\u5236 X \u8F74\u523B\u5EA6
            var labels = ['\u4E00', '\u4E8C', '\u4E09', '\u56DB', '\u4E94'];
            // \u6DFB\u52A0\u523B\u4E2A \u4ECE\u5DE6\u5411\u53F3\u7ED8\u5236
            for (var i = 0; i < 5; i++) {
                c.fillText(labels[i], 50 + i * 100, 475);
                c.beginPath();
                c.moveTo(55 + i * 100, 460);
                c.lineTo(55 + i * 100, 465);
                c.stroke();
            }

            // \u6DFB\u52A0\u6570\u636E
            var data = [20, 10, 20, 30, 54];
            c.beginPath();
            for (var i = 0; i < data.length; i++) {
                var dp = data[i];
                if (dp) {
                    if (i != 0) {
                        c.lineTo(55 + i * 100, 460 - dp * 4);
                    }
                    c.stroke();
                    c.beginPath();

                    c.arc(55 + i * 100, 460 - dp * 4, 3, 0, 2 * Math.PI);
                    c.fill();
                    c.beginPath();

                    c.moveTo(55 + i * 100, 460 - dp * 4);
                } else {
                    c.beginPath();
                }
            }
            // \u83B7\u53D6\u6700\u5927\u503C
            var maxData = [...data].sort((a, b) => a - b)[data.length - 1];

            // \u6DFB\u52A0\u6E10\u53D8\u8272
            var g1 = c.createLinearGradient(0, 460 - maxData, 0, 460);
            g1.addColorStop(0, 'rgba(5, 234, 200, 0.8)');
            g1.addColorStop(1, 'rgba(5, 234, 200, 0.1)');
            c.fillStyle = g1;

            // \u7ED8\u5236\u586B\u5145
            for (var i = 0; i < data.length; i++) {
                var dp = data[i];
                if (dp) {
                    if (data[i + 1]) {
                        // \u7ED8\u5236 \u5F53\u524D\u70B9 \u548C \u540E\u4E00\u4E2A\u70B9\u7EC4\u5408\u6210 \u7684\u56FE\u5F62 \u586B\u5145
                        c.moveTo(55 + i * 100, 460 - dp * 4);
                        c.lineTo(55 + (i + 1) * 100, 460 - data[i + 1] * 4);
                        c.lineTo(55 + (i + 1) * 100, 460);
                        c.lineTo(55 + i * 100, 460);

                        c.fill();
                        c.beginPath();
                    }
                } else {
                    c.beginPath();
                }
            }
        },
    },
};
<\/script>
`},{description:d(()=>[q]),highlight:d(()=>[Y]),default:d(()=>[f(l)]),_:1}),X,f(a,{sourceCode:`<template>
    <canvas @mousemove="onCanvasMousemove" @mouseleave="mouseleaveFn" ref="canvasId" width="300" height="300" style="margin:0 auto" />
</template>

<script>
export default {
    data() {
        return {
            radius: 100,
            innerRadius: 60,
            percent: 60, //\u5706\u73AF\u4E2D\u5FC3\u663E\u793A\u6570\u5B57
            pieData: [
                { desc: '\u5706\u73AF', name: 'A', value: '0.6' },
                { desc: '\u5706\u73AF', name: 'B', value: '0.4' },
            ], //\u73AF\u56FE\u6570\u636E
            x: 150, //\u56FE\u5F62\u4E2D\u5FC3\u70B9\u5728\u753B\u5E03\u7684x\u8F74\u5750\u6807
            y: 150, //\u56FE\u5F62\u4E2D\u5FC3\u70B9\u5728\u753B\u5E03Y\u8F74\u5750\u6807
            color: ['rgb(190, 149, 255)', 'rgb(70, 235, 168)'],
            fontSize: 40,
        };
    },
    mounted() {
        this.ctx = this.$refs.canvasId.getContext('2d');
        this.drawRingPie();
    },
    methods: {
        /**
         * \u753B\u73AF\u5F62\u997C\u56FE
         */
        drawRingPie(checkHover, x, y) {
            // \u6E05\u7A7A\u753B\u5E03
            this.ctx.clearRect(0, 0, 300, 300);

            let hoverIndex = null;

            //\u753B\u5916\u5C42\u5706\u73AF
            this.ctx.save();
            // \u91CD\u65B0\u6620\u5C04\u753B\u5E03\u4E0A\u7684 (0,0) \u4F4D\u7F6E\u3002
            this.ctx.translate(this.x, this.y);

            // \u4ECE\u539F\u59CB\u753B\u5E03\u526A\u5207\u4EFB\u610F\u5F62\u72B6\u548C\u5C3A\u5BF8\u7684\u533A\u57DF
            this.ctx.beginPath();
            this.ctx.arc(0, 0, this.innerRadius, 0, Math.PI * 2); // \u5185\u5706\u987A\u65F6\u9488
            this.ctx.arc(0, 0, this.radius + 10, 0, Math.PI * 2, true); // \u5916\u5706\u9006\u65F6\u9488
            this.ctx.closePath();
            this.ctx.clip();

            let startRadian = 0,
                endRadian = 0;
            for (let i = 0; i < this.pieData.length; i++) {
                this.ctx.beginPath();
                //\u8D77\u59CB\u70B9\u79FB\u52A8\u5230\u5706\u5FC3
                this.ctx.moveTo(0, 0);
                endRadian += this.pieData[i].value * Math.PI * 2;
                //\u4EE5\u5706\u5FC3\u4E3A\u8D77\u70B9\uFF0C0\u5EA6\u5F00\u59CB\u7ED8\u5236\u4E00\u4E2A\u5706
                if (this.curHoverIndex == i) {
                    this.ctx.arc(0, 0, this.radius + 10, startRadian, endRadian, false);
                } else {
                    this.ctx.arc(0, 0, this.radius, startRadian, endRadian, false);
                }
                this.ctx.closePath();
                // \u586B\u5145\u989C\u8272
                this.ctx.fillStyle = this.color[i];
                this.ctx.fill();
                startRadian = endRadian;
                // \u8DEF\u5F84\u5305\u542B\u68C0\u67E5
                if (checkHover && this.ctx.isPointInPath(x, y)) hoverIndex = i;
            }
            /**
             * \u73AF\u5FC3\u586B\u5145\u6587\u5B57
             */
            this.ctx.restore();
            this.ctx.font = this.fontSize + 'px Arial';
            this.ctx.textBaseline = 'middle';
            this.ctx.textAlign = 'center';
            this.ctx.fillStyle = '#000';
            this.ctx.fillText(this.percent + '%', this.x, this.y);
            if (checkHover) return hoverIndex;
        },
        // \u9F20\u6807\u79FB\u5165\u4E8B\u4EF6
        onCanvasMousemove(e) {
            let rect = this.$refs.canvasId.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            this.curHoverIndex = this.getHoverAngleIndex(x, y);
            if (this.curHoverIndex !== null) {
                this.drawRingPie();
            }
        },
        /**
         * \u5224\u65AD\u662F\u5426\u5728\u5185\u5706\u73AF
         */
        checkHoverInInnerCircle(x, y) {
            this.ctx.beginPath();
            this.ctx.arc(0, 0, this.innerRadius, 0, 2 * Math.PI);
            this.ctx.closePath();
            if (this.ctx.isPointInPath(x, y)) return true;
        },
        /**
         * \u5224\u65AD\u5F53\u524D\u9F20\u6807\u662F\u5426\u5728\u67D0\u4E2A\u5706\u73AF\u4E0A
         */
        getHoverAngleIndex(x, y) {
            this.ctx.save();
            // \u79FB\u5230\u5185\u5706\u73AF\u4E0D\u89E6\u53D1
            if (this.checkHoverInInnerCircle(x, y)) return null;

            let index = this.drawRingPie(true, x, y);

            this.ctx.restore();
            return index;
        },
        /**
         * \u79FB\u51FA\u4E8B\u4EF6
         */
        mouseleaveFn() {
            this.curHoverIndex = null;
            this.drawRingPie();
        },
    },
};
<\/script>
`},{description:d(()=>[L]),highlight:d(()=>[z]),default:d(()=>[f(e)]),_:1}),V,f(a,{sourceCode:`<template>
    <div class="chartContainer" ref="container">
        <canvas ref="chart" @mousemove="onCanvasMousemove" @mouseleave="activeIndex"></canvas>
        <div class="tooltip" v-if="showToolTip && curHoverIndex !== null && tooltipStr" :style="{ left: tooltipLeft + 'px', top: tooltipTop + 'px' }" v-html="tooltipStr"></div>
    </div>
</template>

<script>
const ease = {
    // \u5F39\u8DF3
    easeOutBounce(t, b, c, d) {
        if ((t /= d) < 1 / 2.75) {
            return c * (7.5625 * t * t) + b;
        } else if (t < 2 / 2.75) {
            return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
        } else if (t < 2.5 / 2.75) {
            return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
        } else {
            return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
        }
    },
    // \u6162\u8FDB\u6162\u51FA
    easeInOut(t, b, c, d) {
        if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b;
        return (c / 2) * ((t -= 2) * t * t + 2) + b;
    },
};
/**
 * \u52A8\u753B\u51FD\u6570
 */
function move(from, to, dur = 500, callback = () => {}, done = () => {}, easing = 'easeInOut') {
    let spaceNum = to - from;
    let startTime = Date.now();
    let isStop = false;
    let timer = null;
    let run = () => {
        if (isStop) {
            return false;
        }
        let curTime = Date.now();
        let spaceTime = curTime - startTime;
        let ratio = ease[easing](spaceTime, 0, 1, dur);
        ratio = ratio > 1 ? 1 : ratio;
        let step = spaceNum * ratio + from;
        callback && callback(step);
        if (ratio < 1) {
            timer = window.requestAnimationFrame(run);
        } else {
            done && done();
        }
    };
    run();
    return () => {
        isStop = true;
        cancelAnimationFrame(timer);
    };
}
const colorList = [
    '#9287E7',
    '#FF7B7B',
    '#FEB64D',
    '#49D6A5',
    '#32D3EB',
    '#F4605F',
    '#F49160',
    '#F2D43C',
    '#53CC77',
    '#36E4F7',
    '#58A7F2',
    '#717AF7',
    '#E24F74',
    '#C9EC75',
    '#78F8CB',
    '#9773EE',
    '#636CF8',
    '#FF7B7B',
    '#FEB64D',
    '#49D6A5',
    '#32D3EB',
    '#F2D43C',
    '#FF7CBC',
    '#9287E7',
    '#6DA6FE',
];
const dPI = 2 * Math.PI;
const hPI = Math.PI / 2;

/**
 * @Desc: \u73AF\u72B6\u56FE
 */
export default {
    name: 'Pie',
    props: {
        // \u6570\u636E
        data: {
            type: [Array],
            default() {
                return [
                    {
                        name: '\u540D\u79F01',
                        num: 10,
                    },
                    {
                        name: '\u540D\u79F02',
                        num: 20,
                    },
                    {
                        name: '\u540D\u79F03',
                        num: 30,
                    },
                ];
            },
        },

        // \u7981\u6B62\u54CD\u5E94\u9F20\u6807\u4E8B\u4EF6
        disableEvent: {
            type: Boolean,
            default: false,
        },

        // \u5916\u5706\u73AF\u7684\u534A\u5F84\u6BD4\u4F8B
        outRatio: {
            type: Number,
            default: 0.9,
        },

        // \u5185\u5706\u73AF\u7684\u534A\u5F84\u6BD4\u4F8B\uFF0C\u8BBE\u7F6E\u4E3A0\u5373\u4E3A\u997C\u56FE
        innerRatio: {
            type: Number,
            default: 0.6,
        },

        // \u52A8\u753B\u65F6\u95F4\uFF0Cms
        duration: {
            type: Number,
            default: 1000,
        },

        // \u9F20\u6807\u79FB\u5230\u67D0\u90E8\u5206\u7684\u5F39\u8DF3\u52A8\u753B\u65F6\u95F4\uFF0Cms
        bounceDuration: {
            type: Number,
            default: 300,
        },

        // \u9F20\u6807\u79FB\u5230\u67D0\u90E8\u5206\u7684\u5F39\u8DF3\u6BD4\u4F8B\uFF0C\u8BE5\u503C\u4F1A\u5F71\u54CD\u5230\u5706\u73AF\u7684\u5B9E\u9645\u534A\u5F84\uFF0C\u6BD4\u5982\u8BBE\u7F6E\u4E3A0.2\uFF0C\u90A3\u4E48\u534A\u5F84=1-0.2
        bounceRatio: {
            type: Number,
            default: 0.1,
        },

        // \u5357\u4E01\u683C\u5C14\u56FE
        nightingale: {
            type: Boolean,
            default: false,
        },

        // \u662F\u5426\u663E\u793Atooltip
        showToolTip: {
            type: Boolean,
            default: true,
        },

        /**
         * @Desc: \u81EA\u5DF1\u5B9E\u73B0tooltip
         */
        customToolTip: {
            type: Function,
            default: null,
        },
    },
    data() {
        return {
            ctx: null,
            chart: null,
            width: 0,
            height: 0,
            centerX: 0,
            centerY: 0,
            radius: 0,
            radiusInner: 0,
            radiusOut: 0,
            curHoverIndex: null,
            lastHoverIndex: null,
            mousemoveTimer: null,
            showData: [],
            angleData: [],
            inited: false,
            tooltipStr: '',
            tooltipLeft: 0,
            tooltipTop: 0,
        };
    },
    computed: {
        sum() {
            return this.showData && this.showData.length > 0
                ? this.showData.reduce((num, item) => {
                      return num + item.num;
                  }, 0)
                : 0;
        },
        max() {
            let max = null;
            this.showData.forEach((item) => {
                if (max === null) {
                    max = item.num;
                } else {
                    if (item.num > max) {
                        max = item.num;
                    }
                }
            });
            return max;
        },
        hoverRadiusOut() {
            let max = null;
            this.showData.forEach((item) => {
                if (max === null) {
                    max = item.hoverDrawRatio;
                } else {
                    if (item.hoverDrawRatio > max) {
                        max = item.hoverDrawRatio;
                    }
                }
            });
            return this.radiusOut + this.radiusOut * max;
        },
    },
    created() {
        this.handleData();
    },
    mounted() {
        this.render();
    },
    methods: {
        /**
         * @Desc: \u6570\u636E\u5904\u7406
         */
        handleData() {
            // \u7ED9\u6570\u636E\u9879\u52A0\u4E0A\u989C\u8272
            this.showData = this.data.map((item, index) => ({
                ...item,
                color: item.color || colorList[index % colorList.length],
                hoverDrawRatio: 0,
                stop: null,
            }));
        },

        /**
         * @Desc: \u6E32\u67D3
         */
        render() {
            if (!this.showData || this.showData.length <= 0) {
                return;
            }
            this.$nextTick(() => {
                if (!this.inited) {
                    this.inited = true;
                    this.init();
                }
                this.angleData = this.getAngleData();
                this.drawChart();
            });
        },

        /**
         * @Desc: \u521D\u59CB\u5316
         */
        init() {
            this.getSizeInfo();
            let canvas = this.$refs.chart;
            canvas.width = this.width;
            canvas.height = this.height;
            this.ctx = canvas.getContext('2d');
            this.ctx.translate(this.centerX, this.centerY);
        },

        /**
         * @Desc: \u6E05\u9664\u753B\u5E03
         */
        clear() {
            this.ctx.clearRect(-this.centerX, -this.centerY, this.width, this.height);
        },

        /**
         * @Desc: \u7ED8\u5236\u5706\u73AF
         * arc\uFF1A\u5728\u8C03\u7528\u8BE5\u65B9\u6CD5\u65F6\u5DF2\u7ECF\u6709\u5176\u4ED6\u7684\u5B50\u8DEF\u5F84\u5B58\u5728\uFF0C\u90A3\u4E48arc\u65B9\u6CD5\u4F1A\u7528\u4E00\u6761\u7EBF\u6BB5\u628A\u5DF2\u6709\u8DEF\u5F84\u7684\u7EC8\u70B9\u4E0E\u8FD9\u6BB5\u5706\u5F27\u8DEF\u5F84\u7684\u8D77\u70B9\u8FDE\u63A5\u8D77\u6765
         * beginPath\uFF1A\u6E05\u9664\u5F53\u524D\u8DEF\u5F84\u4E2D\u7684\u6240\u6709\u5B50\u8DEF\u5F84
         */
        drawChart() {
            // \u8FC7\u6E21\u65F6\u95F4\u4E0D\u4E3A0
            if (this.duration > 0) {
                // 2\u79D2\u949F\u4ECE0\u5EA6\u8FD0\u52A8\u5230360\u5EA6
                move(-0.5, 1.5, this.duration, (cur) => {
                    this.ctx.save();
                    this.ctx.beginPath();
                    this.ctx.moveTo(0, 0);
                    this.ctx.arc(0, 0, this.hoverRadiusOut, -0.5 * Math.PI, cur * Math.PI);
                    this.ctx.closePath();
                    this.ctx.clip();
                    this.drawPie();
                    this.ctx.restore();
                });
            } else {
                // \u8FC7\u6E21\u65F6\u95F4\u4E3A0
                this.drawPie();
            }
        },

        /**
         * @Desc: \u753B\u5706\u73AF
         */
        drawPie() {
            this.clear();
            this.ctx.save();
            // \u88C1\u526A\u5706\u73AF\u533A\u57DF
            this.clipPath();
            // \u7ED8\u5236\u5706\u73AF
            this.renderPie();
            this.ctx.restore();
        },

        /**
         * @Desc: \u88C1\u526A\u5706\u73AF\u533A\u57DF
         * \u56E0\u4E3Aclip()\u65B9\u6CD5\u4F1A\u5C06\u526A\u5207\u533A\u57DF\u8BBE\u7F6E\u4E3A\u5F53\u524D\u526A\u5207\u533A\u57DF\u4E0E\u5F53\u524D\u8DEF\u5F84\u7684\u4EA4\u96C6\uFF0C\u6240\u4EE5\u5BF9\u8BE5\u65B9\u6CD5\u7684\u8C03\u7528\u4E00\u822C\u90FD\u662F\u5D4C\u5165save()\u548Crestore()\u65B9\u6CD5\u4E4B\u95F4\u7684\u3002\u5426\u5219\uFF0C\u526A\u5207\u533A\u57DF\u5C06\u4F1A\u8D8A\u53D8\u8D8A\u5C0F\uFF0C\u8FD9\u901A\u5E38\u4E0D\u662F\u6211\u4EEC\u60F3\u8981\u7684\u6548\u679C\uFF0C\u800C\u4E14\u5426\u5219\u51F8\u51FA\u6548\u679C\u4E5F\u65E0\u6CD5\u5B9E\u73B0\uFF0C\u56E0\u4E3A\u4E4B\u524D\u7684\u526A\u5207\u533A\u57DF\u534A\u5F84\u4E0D\u591F
         */
        clipPath() {
            this.ctx.beginPath();
            this.ctx.arc(0, 0, this.radiusInner, 0, dPI);
            this.ctx.arc(0, 0, this.hoverRadiusOut, 0, dPI, true);
            this.ctx.closePath();
            this.ctx.clip();
        },

        /**
         * @Desc: \u7ED8\u5236\u5706\u73AF
         */
        renderPie(checkHover, x, y) {
            let hoverIndex = null;
            this.angleData.forEach((item, index) => {
                this.ctx.beginPath();
                this.ctx.moveTo(0, 0);
                this.ctx.fillStyle = this.showData[index].color;
                // \u540C\u65F6\u51CF90\u5EA6\uFF0C\u5426\u5219\u8D77\u70B9\u5C31\u4E0D\u662F\u4E0A\u9762\uFF0C\u800C\u662F\u53F3\u8FB9\u4E86
                let startRadian = item.radian[0] - hPI;
                let endRadian = item.radian[1] - hPI;
                let nightingaleRadius = 0;
                if (this.nightingale) {
                    nightingaleRadius = (1 - this.showData[index].num / this.max) * (this.radiusOut - this.radiusInner);
                }
                let _baseRadiusOut = this.radiusOut - nightingaleRadius;
                let _radiusOut = _baseRadiusOut + _baseRadiusOut * this.showData[index].hoverDrawRatio;
                this.ctx.arc(0, 0, _radiusOut, startRadian, endRadian);
                // \u8DEF\u5F84\u5305\u542B\u68C0\u67E5
                if (checkHover) {
                    if (hoverIndex === null && this.ctx.isPointInPath(x, y)) {
                        hoverIndex = index;
                    }
                } else {
                    this.ctx.fill();
                }
            });
            if (checkHover) {
                return hoverIndex;
            }
        },

        /**
         * @Desc: \u5224\u65AD\u662F\u5426\u5728\u5185\u5706\u73AF
         */
        checkHoverInInnerCircle(x, y) {
            this.ctx.beginPath();
            this.ctx.arc(0, 0, this.radiusInner, 0, dPI);
            this.ctx.closePath();
            if (this.ctx.isPointInPath(x, y)) {
                return true;
            }
        },

        /**
         * @Desc: \u5224\u65AD\u5F53\u524D\u9F20\u6807\u662F\u5426\u5728\u67D0\u4E2A\u5706\u73AF\u4E0A
         */
        getHoverAngleIndex(x, y) {
            this.ctx.save();
            // \u79FB\u5230\u5185\u5706\u73AF\u4E0D\u89E6\u53D1
            if (this.checkHoverInInnerCircle(x, y)) {
                return null;
            }
            let index = this.renderPie(true, x, y);
            this.ctx.restore();
            return index;
        },

        /**
         * @Desc: canvas\u9F20\u6807\u79FB\u52A8\u4E8B\u4EF6
         */
        onCanvasMousemove(e) {
            if (this.disableEvent) {
                return false;
            }
            let rect = this.$refs.chart.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            this.curHoverIndex = this.getHoverAngleIndex(x, y);
            this.onColorBlockMouseleave();
            if (this.curHoverIndex !== null) {
                if (this.lastHoverIndex !== this.curHoverIndex) {
                    this.lastHoverIndex = this.curHoverIndex;
                    this.onColorBlockMouseenter(this.curHoverIndex);
                }
            } else {
                this.lastHoverIndex = null;
            }
            this.$emit('mousemove', e, this.curHoverIndex, this.curHoverIndex === null ? null : this.showData[this.curHoverIndex]);
            this.showTooltip(e);
        },

        /**
         * @Desc: \u989C\u8272\u5757\u9F20\u6807\u79FB\u4E0A\u4E8B\u4EF6
         */
        onColorBlockMouseenter(index) {
            if (this.disableEvent) {
                return false;
            }
            move(
                this.showData[index].hoverDrawRatio,
                this.bounceRatio,
                this.bounceDuration,
                (cur) => {
                    this.showData[index].hoverDrawRatio = cur;
                    this.drawPie();
                },
                null,
                'easeOutBounce'
            );
        },

        /**
         * @Desc:  \u989C\u8272\u5757\u9F20\u6807\u79FB\u51FA\u4E8B\u4EF6
         */
        onColorBlockMouseleave() {
            if (this.disableEvent) {
                return false;
            }
            this.showData.forEach((item, index) => {
                if (index !== this.curHoverIndex && item.hoverDrawRatio !== 0 && this.showData[index].stop === null) {
                    this.showData[index].stop = move(
                        item.hoverDrawRatio,
                        0,
                        this.bounceDuration,
                        (cur) => {
                            this.showData[index].hoverDrawRatio = cur;
                            this.drawPie();
                        },
                        () => {
                            this.showData[index].hoverDrawRatio = 0;
                            this.showData[index].stop = null;
                        },
                        'easeOutBounce'
                    );
                }
            });
        },

        /**
         * @Desc: \u663E\u793A\u9F20\u6807\u8DDF\u968F\u63D0\u793A
         */
        showTooltip(e) {
            if (!this.showToolTip) {
                return;
            }
            if (this.customToolTip) {
                return this.customToolTip(e, this.curHoverIndex, this.curHoverIndex === null ? null : this.showData[this.curHoverIndex]);
            }
            if (this.curHoverIndex === null) {
                this.tooltipStr = '';
            } else {
                let data = this.showData[this.curHoverIndex];
                this.tooltipStr = \`\${data.name}\uFF1A\${data.num}\`;
                let { left, top } = this.$refs.container.getBoundingClientRect();
                this.tooltipLeft = e.clientX + 10 - left;
                this.tooltipTop = e.clientY + 10 - top;
            }
        },

        /**
         * @Desc: \u8BA1\u7B97\u7ED8\u5236\u6570\u636E
         */
        getSizeInfo() {
            // \u5BB9\u5668\u5BBD\u9AD8
            let { width, height } = this.$refs.container.getBoundingClientRect();
            this.width = width;
            this.height = height;
            // \u4E2D\u5FC3\u70B9
            this.centerX = width / 2;
            this.centerY = height / 2;
            // \u6700\u5927\u534A\u5F84
            this.radius = Math.min(width, height) / 2;
            // \u5185\u5706\u73AF\u534A\u5F84
            this.radiusInner = this.radius * Math.min(this.innerRatio, 1);
            // \u5916\u5706\u73AF\u534A\u5F84
            this.radiusOut = this.radius * Math.min(this.outRatio, 1 - this.bounceRatio);
        },

        /**
         * @Desc: \u83B7\u53D6\u89D2\u5EA6\u6570\u636E
         */
        getAngleData() {
            let arr = [];
            let total = this.sum;
            let curTotalAngle = 0;
            let r = Math.PI / 180;
            this.showData.forEach((item) => {
                let curAngle = (item.num / total) * 360;
                let cruEndAngle = curTotalAngle + curAngle;
                arr.push({
                    angle: [curTotalAngle, cruEndAngle],
                    radian: [curTotalAngle * r, cruEndAngle * r],
                });
                curTotalAngle += curAngle;
            });
            return arr;
        },

        /**
         * @Desc: \u54CD\u5E94\u5BB9\u5668\u5C3A\u5BF8\u53D8\u5316
         */
        refresh() {
            this.init();
            this.clear();
            this.drawPie();
        },

        /**
         * @Desc: \u51F8\u51FA\u6307\u5B9A\u7D22\u5F15\u7684\u5706\u73AF
         */
        activeIndex(index) {
            if (typeof index !== 'number' || index < 0 || index > this.showData.length - 1) {
                this.curHoverIndex = null;
                this.onColorBlockMouseleave();
                return;
            }
            this.curHoverIndex = index;
            this.onColorBlockMouseleave();
            this.onColorBlockMouseenter(index);
        },

        /**
         * @Desc: \u9690\u85CF\u6307\u5B9A\u7D22\u5F15\u7684\u6570\u636E
         */
        hideIndex(indexList = []) {
            this.handleData(indexList);
            this.angleData = this.getAngleData();
            this.drawChart();
        },
    },
};
<\/script>

<style lang="scss" scoped>
.chartContainer {
    position: relative;
    width: 100%;
    height: 100%;

    .tooltip {
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        border-style: solid;
        white-space: nowrap;
        z-index: 9999999;
        transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s;
        background-color: rgba(50, 50, 50, 0.7);
        border-width: 0px;
        border-color: rgb(51, 51, 51);
        border-radius: 4px;
        color: rgb(255, 255, 255);
        font: 14px / 21px 'Microsoft YaHei';
        padding: 5px;
        left: 302px;
        top: 454px;
        pointer-events: none;
    }
}
</style>
`},{description:d(()=>[W]),highlight:d(()=>[j]),default:d(()=>[f(k)]),_:1}),G,f(a,{sourceCode:`<template>
    <canvas @mousemove="mousemoveFn" ref="canvasId" :width="Width" :height="Height" style="margin:0 auto;background: black;" />
</template>

<script>
class Round_item {
    constructor(index, x, y, r, color, ctx) {
        this.index = index;
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = 'hsl(' + color + ',100%,80%)';
        this.ctx = ctx;
    }
    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        this.ctx.closePath();
        this.ctx.fill();
    }
}

export default {
    data() {
        return {
            color: 55,
            rounds: [],
            Width: 700,
            Height: 300,
        };
    },
    mounted() {
        this.ctx = this.$refs.canvasId.getContext('2d');
        this.animate();
    },
    methods: {
        animate() {
            // \u6E05\u7A7A\u753B\u5E03
            this.ctx.clearRect(0, 0, this.Width, this.Height);
            for (let i = 0; i < this.rounds.length; i++) {
                // \u534A\u5F84\u6BCF\u6B21\u589E\u59270.9
                this.rounds[i].r += 0.9;
                // \u7531\u4E8Ehsl\u7684\u989C\u8272\u8303\u56F4\u662F1-360
                if (this.color > 360) this.color = 55;
                // \u989C\u8272\u53D8\u5316
                this.color += 0.1;
                this.rounds[i] = new Round_item(i, this.rounds[i].x, this.rounds[i].y, this.rounds[i].r, this.color, this.ctx);
                this.rounds[i].draw();
                // \u5706\u7684\u534A\u5F84\u5927\u4E8E10\u5C31\u5728\u4E0B\u4E00\u6B21\u52FE\u52D2\u5F97\u65F6\u5019\u6D88\u5931
                if (this.rounds[i].r > 10) this.rounds.splice(i, 1);
            }
            requestAnimationFrame(this.animate);
        },
        mousemoveFn(e) {
            let rect = this.$refs.canvasId.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            this.rounds.push({
                x,
                y,
                r: 3,
            });
        },
    },
};
<\/script>
`},{description:d(()=>[J]),highlight:d(()=>[U]),default:d(()=>[f(p)]),_:1})])}var sn=_(O,[["render",K]]);export{nn as __pageData,sn as default};
