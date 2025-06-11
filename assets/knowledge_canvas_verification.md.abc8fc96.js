import{_ as F,c as C,e as w,w as k,b as n,d as s,r as v,o as B,V as D}from"./app.7dede5df.js";const E={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:e,openBlock:r,createElementBlock:m}=D,d={class:"flex m-center"},h={class:"position-relative"},g=["width","height"],l=["width","height"],i={class:"slider"},b={class:"progress",ref:"progress"},f=e("div",{class:"tc"},"\u5411\u53F3\u6ED1\u52A8\u586B\u5145\u62FC\u56FE",-1);function x(t,a){return r(),m("div",null,[e("div",d,[e("div",h,[e("canvas",{width:t.cv.w,height:t.cv.h,ref:"canvasCtx"},null,8,g),e("canvas",{width:t.cv.w,height:t.cv.h,ref:"blockCtx",class:"block",onMousedown:a[0]||(a[0]=(...o)=>t.mousedownFn&&t.mousedownFn(...o)),onMousemove:a[1]||(a[1]=(...o)=>t.mousemoveFn&&t.mousemoveFn(...o)),onMouseup:a[2]||(a[2]=(...o)=>t.mouseupFn&&t.mouseupFn(...o))},null,40,l),e("div",i,[e("div",b,null,512),e("div",{class:"but",ref:"sliderDom",onMousedown:a[3]||(a[3]=(...o)=>t.mousedownFn&&t.mousedownFn(...o)),onMousemove:a[4]||(a[4]=(...o)=>t.mousemoveFn&&t.mousemoveFn(...o)),onMouseup:a[5]||(a[5]=(...o)=>t.mouseupFn&&t.mouseupFn(...o))},null,544),f])])])])}return{render:x,...{data(){return{cv:{w:400,h:200},block:{l:42,L:42+9*2+3,r:9},randomPos:{x:0,y:0}}},mounted(){this.canvasCtx=this.$refs.canvasCtx.getContext("2d"),this.blockCtx=this.$refs.blockCtx.getContext("2d"),this.initImg()},methods:{mousedownFn(t){this.originX=t.clientX||t.touches[0].clientX,this.isMouseDown=!0},mousemoveFn(t){if(!this.isMouseDown)return!1;const a=t.clientX||t.touches[0].clientX,o=a-this.originX;if(o<0||o+63>=this.cv.w)return!1;this.$refs.sliderDom.style.left=`${o}px`,this.$refs.blockCtx.style.left=`${o}px`,this.$refs.progress.style.width=`${o}px`},mouseupFn(t){if(!this.isMouseDown||(this.isMouseDown=!1,(t.clientX||t.changedTouches[0].clientX)==this.originX))return!1;Math.abs(parseInt(this.$refs.blockCtx.style.left)-this.randomPos.x)<10?(alert("\u9A8C\u8BC1\u6210\u529F\uFF01"),this.reset()):alert("\u9A8C\u8BC1\u5931\u8D25\uFF01")},reset(){this.$refs.sliderDom.style.left=`${0}px`,this.$refs.blockCtx.style.left=`${0}px`,this.$refs.progress.style.width=`${0}px`,this.clean(),this.initImg()},clean(){this.canvasCtx.clearRect(0,0,this.cv.w,this.cv.h),this.blockCtx.clearRect(0,0,this.cv.w,this.cv.h),this.$refs.blockCtx.width=this.cv.w},initImg(){const t=new Image;t.crossOrigin="",t.src="https://gengzhaoji.github.io/my-ui/wallhaven-we88zx.jpg",t.onload=()=>{this.draw(),this.canvasCtx.drawImage(t,0,0,this.cv.w,this.cv.h),this.blockCtx.drawImage(t,0,0,this.cv.w,this.cv.h);const a=this.randomPos.y-this.block.r*2-1,o=this.blockCtx.getImageData(this.randomPos.x-3,a,this.block.L,this.block.L);this.$refs.blockCtx.width=this.block.L,this.$refs.sliderDom.style.width=`${this.block.L}px`,this.blockCtx.putImageData(o,0,a)}},draw(){this.randomPos.x=this.getRandomNumberByRange(this.block.L+10,this.cv.w-(this.block.L+10)),this.randomPos.y=this.getRandomNumberByRange(10+this.block.r*2,this.cv.h-(this.block.L+10)),this.drawBlock(this.canvasCtx,this.randomPos.x,this.randomPos.y),this.drawBlock(this.blockCtx,this.randomPos.x,this.randomPos.y,"clip")},drawBlock(t,a,o,y){let p=this.block.r,c=this.block.l,u=Math.PI;t.beginPath(),t.moveTo(a,o),t.arc(a+c/2,o-p+2,p,.72*u,2.26*u),t.lineTo(a+c,o),t.arc(a+c+p-2,o+c/2,p,1.21*u,2.78*u),t.lineTo(a+c,o+c),t.lineTo(a,o+c),t.arc(a+p-2,o+c/2,p+.4,2.76*u,1.24*u,!0),t.lineTo(a,o),t.closePath(),t.lineWidth=1.5,t.strokeStyle="rgba(255, 255, 255, 1)",t.stroke(),y&&t[y](),t.globalCompositeOperation="destination-over"},getRandomNumberByRange(t,a){return Math.round(Math.random()*(a-t)+t)}}}}}()}},R=JSON.parse('{"title":"\u6ED1\u5757\u9A8C\u8BC1","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/canvas/verification.md","lastUpdated":1678083950000}'),$=n("h1",{id:"\u6ED1\u5757\u9A8C\u8BC1",tabindex:"-1"},[s("\u6ED1\u5757\u9A8C\u8BC1 "),n("a",{class:"header-anchor",href:"#\u6ED1\u5757\u9A8C\u8BC1","aria-hidden":"true"},"#")],-1),P=n("p",null,[s("\u4F7F\u7528"),n("code",null,"canvas"),s("\u5B9E\u73B0\u6ED1\u5757\u9A8C\u8BC1")],-1),X=n("div",null,"\u5B9E\u73B0\u6ED1\u5757\u9A8C\u8BC1",-1),I=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("flex m-center"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("position-relative"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("canvas")]),s(),n("span",{class:"token attr-name"},":width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("cv.w"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("cv.h"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("canvasCtx"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("canvas")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("canvas")]),s(),n("span",{class:"token attr-name"},":width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("cv.w"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("cv.h"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("blockCtx"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("block"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@mousedown"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("mousedownFn"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@mousemove"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("mousemoveFn"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@mouseup"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("mouseupFn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("canvas")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("slider"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("progress"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("progress"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("but"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("sliderDom"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@mousedown"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("mousedownFn"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@mousemove"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("mousemoveFn"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@mouseup"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("mouseupFn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tc"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u5411\u53F3\u6ED1\u52A8\u586B\u5145\u62FC\u56FE"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// \u753B\u5E03\u7684\u5BBD\u9AD8"),s(`
            `),n("span",{class:"token literal-property property"},"cv"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token literal-property property"},"w"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"400"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"h"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"block"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token literal-property property"},"l"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"42"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// \u6ED1\u5757\u8FB9\u957F"),s(`
                `),n("span",{class:"token constant"},"L"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"42"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"9"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// \u6ED1\u5757\u5B9E\u9645\u8FB9\u957F"),s(`
                `),n("span",{class:"token literal-property property"},"r"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// \u6ED1\u5757\u534A\u5F84"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"randomPos"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token literal-property property"},"x"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"y"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"mounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("canvasCtx "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$refs"),n("span",{class:"token punctuation"},"."),s("canvasCtx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getContext"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2d'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("blockCtx "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$refs"),n("span",{class:"token punctuation"},"."),s("blockCtx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getContext"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2d'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"initImg"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// \u9F20\u6807\u6309\u4E0B"),s(`
        `),n("span",{class:"token function"},"mousedownFn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("originX "),n("span",{class:"token operator"},"="),s(" e"),n("span",{class:"token punctuation"},"."),s("clientX "),n("span",{class:"token operator"},"||"),s(" e"),n("span",{class:"token punctuation"},"."),s("touches"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("clientX"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("isMouseDown "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// \u9F20\u6807\u79FB\u52A8"),s(`
        `),n("span",{class:"token function"},"mousemoveFn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("isMouseDown"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"const"),s(" eventX "),n("span",{class:"token operator"},"="),s(" e"),n("span",{class:"token punctuation"},"."),s("clientX "),n("span",{class:"token operator"},"||"),s(" e"),n("span",{class:"token punctuation"},"."),s("touches"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("clientX"),n("span",{class:"token punctuation"},","),s(`
                moveX `),n("span",{class:"token operator"},"="),s(" eventX "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("originX"),n("span",{class:"token punctuation"},";"),s(`

            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("moveX "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"||"),s(" moveX "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"63"),s(),n("span",{class:"token operator"},">="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("cv"),n("span",{class:"token punctuation"},"."),s("w"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`

            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$refs"),n("span",{class:"token punctuation"},"."),s("sliderDom"),n("span",{class:"token punctuation"},"."),s("style"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("moveX"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"px"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$refs"),n("span",{class:"token punctuation"},"."),s("blockCtx"),n("span",{class:"token punctuation"},"."),s("style"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("moveX"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"px"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$refs"),n("span",{class:"token punctuation"},"."),s("progress"),n("span",{class:"token punctuation"},"."),s("style"),n("span",{class:"token punctuation"},"."),s("width "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("moveX"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"px"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// \u9F20\u6807\u62AC\u8D77"),s(`
        `),n("span",{class:"token function"},"mouseupFn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("isMouseDown"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("isMouseDown "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"const"),s(" eventX "),n("span",{class:"token operator"},"="),s(" e"),n("span",{class:"token punctuation"},"."),s("clientX "),n("span",{class:"token operator"},"||"),s(" e"),n("span",{class:"token punctuation"},"."),s("changedTouches"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("clientX"),n("span",{class:"token punctuation"},";"),s(`

            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("eventX "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("originX"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`

            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"abs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"parseInt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$refs"),n("span",{class:"token punctuation"},"."),s("blockCtx"),n("span",{class:"token punctuation"},"."),s("style"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("randomPos"),n("span",{class:"token punctuation"},"."),s("x"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token function"},"alert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u9A8C\u8BC1\u6210\u529F\uFF01'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reset"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token function"},"alert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u9A8C\u8BC1\u5931\u8D25\uFF01'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function"},"reset"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$refs"),n("span",{class:"token punctuation"},"."),s("sliderDom"),n("span",{class:"token punctuation"},"."),s("style"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),n("span",{class:"token number"},"0"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"px"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$refs"),n("span",{class:"token punctuation"},"."),s("blockCtx"),n("span",{class:"token punctuation"},"."),s("style"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),n("span",{class:"token number"},"0"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"px"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$refs"),n("span",{class:"token punctuation"},"."),s("progress"),n("span",{class:"token punctuation"},"."),s("style"),n("span",{class:"token punctuation"},"."),s("width "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),n("span",{class:"token number"},"0"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"px"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clean"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"initImg"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function"},"clean"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("canvasCtx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clearRect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("cv"),n("span",{class:"token punctuation"},"."),s("w"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("cv"),n("span",{class:"token punctuation"},"."),s("h"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("blockCtx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clearRect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("cv"),n("span",{class:"token punctuation"},"."),s("w"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("cv"),n("span",{class:"token punctuation"},"."),s("h"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$refs"),n("span",{class:"token punctuation"},"."),s("blockCtx"),n("span",{class:"token punctuation"},"."),s("width "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("cv"),n("span",{class:"token punctuation"},"."),s("w"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// \u521B\u5EFA\u56FE\u7247"),s(`
        `),n("span",{class:"token function"},"initImg"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"const"),s(" img "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Image"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            img`),n("span",{class:"token punctuation"},"."),s("crossOrigin "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},";"),s(`
            img`),n("span",{class:"token punctuation"},"."),s("src "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'https://gengzhaoji.github.io/my-ui/wallhaven-we88zx.jpg'"),n("span",{class:"token punctuation"},";"),s(`
            img`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"onload"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token comment"},"// \u968F\u673A\u521B\u5EFA\u6ED1\u5757\u7684\u4F4D\u7F6E\uFF0C\u5148\u88C1\u526A\u5728\u7ED8\u5236"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"draw"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

                `),n("span",{class:"token comment"},"// \u7ED8\u5236\u56FE\u7247"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("canvasCtx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"drawImage"),n("span",{class:"token punctuation"},"("),s("img"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("cv"),n("span",{class:"token punctuation"},"."),s("w"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("cv"),n("span",{class:"token punctuation"},"."),s("h"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("blockCtx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"drawImage"),n("span",{class:"token punctuation"},"("),s("img"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("cv"),n("span",{class:"token punctuation"},"."),s("w"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("cv"),n("span",{class:"token punctuation"},"."),s("h"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

                `),n("span",{class:"token comment"},"// \u653E\u7F6E\u62FC\u56FE"),s(`
                `),n("span",{class:"token keyword"},"const"),s(" y "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("randomPos"),n("span",{class:"token punctuation"},"."),s("y "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("block"),n("span",{class:"token punctuation"},"."),s("r "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"const"),s(" ImageData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("blockCtx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getImageData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("randomPos"),n("span",{class:"token punctuation"},"."),s("x "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("block"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"L"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("block"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"L"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$refs"),n("span",{class:"token punctuation"},"."),s("blockCtx"),n("span",{class:"token punctuation"},"."),s("width "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("block"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"L"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$refs"),n("span",{class:"token punctuation"},"."),s("sliderDom"),n("span",{class:"token punctuation"},"."),s("style"),n("span",{class:"token punctuation"},"."),s("width "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("block"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"L"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"px"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("blockCtx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"putImageData"),n("span",{class:"token punctuation"},"("),s("ImageData"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// \u968F\u673A\u521B\u5EFA\u6ED1\u5757\u7684\u4F4D\u7F6E"),s(`
        `),n("span",{class:"token function"},"draw"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("randomPos"),n("span",{class:"token punctuation"},"."),s("x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getRandomNumberByRange"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("block"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"L"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("cv"),n("span",{class:"token punctuation"},"."),s("w "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("block"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"L"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("randomPos"),n("span",{class:"token punctuation"},"."),s("y "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getRandomNumberByRange"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"10"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("block"),n("span",{class:"token punctuation"},"."),s("r "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("cv"),n("span",{class:"token punctuation"},"."),s("h "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("block"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"L"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token comment"},"// \u586B\u5145\u5F53\u524D\u7ED8\u56FE\uFF08\u8DEF\u5F84\uFF09"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"drawBlock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("canvasCtx"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("randomPos"),n("span",{class:"token punctuation"},"."),s("x"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("randomPos"),n("span",{class:"token punctuation"},"."),s("y"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token comment"},"// \u4ECE\u539F\u59CB\u753B\u5E03\u526A\u5207\u4EFB\u610F\u5F62\u72B6\u548C\u5C3A\u5BF8\u7684\u533A\u57DF"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"drawBlock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("blockCtx"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("randomPos"),n("span",{class:"token punctuation"},"."),s("x"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("randomPos"),n("span",{class:"token punctuation"},"."),s("y"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'clip'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// \u521B\u5EFA\u7279\u6B8A\u533A\u57DF"),s(`
        `),n("span",{class:"token function"},"drawBlock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("ctx"),n("span",{class:"token punctuation"},","),s(" x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},","),s(" operation")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"let"),s(" r "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("block"),n("span",{class:"token punctuation"},"."),s("r"),n("span",{class:"token punctuation"},","),s(`
                l `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("block"),n("span",{class:"token punctuation"},"."),s("l"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token constant"},"PI"),s(),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PI"),n("span",{class:"token punctuation"},";"),s(`

            ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"beginPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"moveTo"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"arc"),n("span",{class:"token punctuation"},"("),s("x "),n("span",{class:"token operator"},"+"),s(" l "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(" y "),n("span",{class:"token operator"},"-"),s(" r "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(" r"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0.72"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token constant"},"PI"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2.26"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token constant"},"PI"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"lineTo"),n("span",{class:"token punctuation"},"("),s("x "),n("span",{class:"token operator"},"+"),s(" l"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"arc"),n("span",{class:"token punctuation"},"("),s("x "),n("span",{class:"token operator"},"+"),s(" l "),n("span",{class:"token operator"},"+"),s(" r "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(" y "),n("span",{class:"token operator"},"+"),s(" l "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(" r"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1.21"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token constant"},"PI"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2.78"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token constant"},"PI"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"lineTo"),n("span",{class:"token punctuation"},"("),s("x "),n("span",{class:"token operator"},"+"),s(" l"),n("span",{class:"token punctuation"},","),s(" y "),n("span",{class:"token operator"},"+"),s(" l"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"lineTo"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(" y "),n("span",{class:"token operator"},"+"),s(" l"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"arc"),n("span",{class:"token punctuation"},"("),s("x "),n("span",{class:"token operator"},"+"),s(" r "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(" y "),n("span",{class:"token operator"},"+"),s(" l "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(" r "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"0.4"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2.76"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token constant"},"PI"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1.24"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token constant"},"PI"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"lineTo"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"closePath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),s("lineWidth "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1.5"),n("span",{class:"token punctuation"},";"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),s("strokeStyle "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'rgba(255, 255, 255, 1)'"),n("span",{class:"token punctuation"},";"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stroke"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("operation"),n("span",{class:"token punctuation"},")"),s(" ctx"),n("span",{class:"token punctuation"},"["),s("operation"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),s("globalCompositeOperation "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'destination-over'"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// \u968F\u673A\u6570"),s(`
        `),n("span",{class:"token function"},"getRandomNumberByRange"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("start"),n("span",{class:"token punctuation"},","),s(" end")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"round"),n("span",{class:"token punctuation"},"("),s("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token punctuation"},"("),s("end "),n("span",{class:"token operator"},"-"),s(" start"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(" start"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scss"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".block"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" absolute"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"left"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),s(" pointer"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".slider"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" relative"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"box-sizing"),n("span",{class:"token punctuation"},":"),s(" content-box"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 1px solid #e4e7eb"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),s(" 3px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100%"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 40px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),s(" 40px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token selector"},".progress"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" absolute"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 100%"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 1px solid #1991fa"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(" #d1e9fe"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token selector"},".but"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" absolute"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(" #1991fa"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 100%"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" flex"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 63px"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),s(" pointer"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"z-index"),n("span",{class:"token punctuation"},":"),s(" 100"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token selector"},"&:after"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},"content"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'\\2794'"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 25px"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #fff"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1);function A(e,r,m,d,h,g){const l=v("render-demo-0"),i=v("demo");return B(),C("div",null,[$,P,w(i,{sourceCode:`<template>
    <div class="flex m-center">
        <div class="position-relative">
            <canvas :width="cv.w" :height="cv.h" ref="canvasCtx"></canvas>
            <canvas :width="cv.w" :height="cv.h" ref="blockCtx" class="block" @mousedown="mousedownFn" @mousemove="mousemoveFn" @mouseup="mouseupFn"></canvas>
            <div class="slider">
                <div class="progress" ref="progress"></div>
                <div class="but" ref="sliderDom" @mousedown="mousedownFn" @mousemove="mousemoveFn" @mouseup="mouseupFn"></div>
                <div class="tc">\u5411\u53F3\u6ED1\u52A8\u586B\u5145\u62FC\u56FE</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // \u753B\u5E03\u7684\u5BBD\u9AD8
            cv: {
                w: 400,
                h: 200,
            },
            block: {
                l: 42, // \u6ED1\u5757\u8FB9\u957F
                L: 42 + 9 * 2 + 3, // \u6ED1\u5757\u5B9E\u9645\u8FB9\u957F
                r: 9, // \u6ED1\u5757\u534A\u5F84
            },
            randomPos: {
                x: 0,
                y: 0,
            },
        };
    },
    mounted() {
        this.canvasCtx = this.$refs.canvasCtx.getContext('2d');
        this.blockCtx = this.$refs.blockCtx.getContext('2d');
        this.initImg();
    },
    methods: {
        // \u9F20\u6807\u6309\u4E0B
        mousedownFn(e) {
            this.originX = e.clientX || e.touches[0].clientX;
            this.isMouseDown = true;
        },
        // \u9F20\u6807\u79FB\u52A8
        mousemoveFn(e) {
            if (!this.isMouseDown) return false;
            const eventX = e.clientX || e.touches[0].clientX,
                moveX = eventX - this.originX;

            if (moveX < 0 || moveX + 63 >= this.cv.w) return false;

            this.$refs.sliderDom.style.left = \`\${moveX}px\`;
            this.$refs.blockCtx.style.left = \`\${moveX}px\`;
            this.$refs.progress.style.width = \`\${moveX}px\`;
        },
        // \u9F20\u6807\u62AC\u8D77
        mouseupFn(e) {
            if (!this.isMouseDown) return false;
            this.isMouseDown = false;
            const eventX = e.clientX || e.changedTouches[0].clientX;

            if (eventX == this.originX) return false;

            if (Math.abs(parseInt(this.$refs.blockCtx.style.left) - this.randomPos.x) < 10) {
                alert('\u9A8C\u8BC1\u6210\u529F\uFF01');
                this.reset();
            } else {
                alert('\u9A8C\u8BC1\u5931\u8D25\uFF01');
            }
        },
        reset() {
            this.$refs.sliderDom.style.left = \`\${0}px\`;
            this.$refs.blockCtx.style.left = \`\${0}px\`;
            this.$refs.progress.style.width = \`\${0}px\`;
            this.clean();
            this.initImg();
        },
        clean() {
            this.canvasCtx.clearRect(0, 0, this.cv.w, this.cv.h);
            this.blockCtx.clearRect(0, 0, this.cv.w, this.cv.h);
            this.$refs.blockCtx.width = this.cv.w;
        },
        // \u521B\u5EFA\u56FE\u7247
        initImg() {
            const img = new Image();
            img.crossOrigin = '';
            img.src = 'https://gengzhaoji.github.io/my-ui/wallhaven-we88zx.jpg';
            img.onload = () => {
                // \u968F\u673A\u521B\u5EFA\u6ED1\u5757\u7684\u4F4D\u7F6E\uFF0C\u5148\u88C1\u526A\u5728\u7ED8\u5236
                this.draw();

                // \u7ED8\u5236\u56FE\u7247
                this.canvasCtx.drawImage(img, 0, 0, this.cv.w, this.cv.h);
                this.blockCtx.drawImage(img, 0, 0, this.cv.w, this.cv.h);

                // \u653E\u7F6E\u62FC\u56FE
                const y = this.randomPos.y - this.block.r * 2 - 1;
                const ImageData = this.blockCtx.getImageData(this.randomPos.x - 3, y, this.block.L, this.block.L);
                this.$refs.blockCtx.width = this.block.L;
                this.$refs.sliderDom.style.width = \`\${this.block.L}px\`;
                this.blockCtx.putImageData(ImageData, 0, y);
            };
        },
        // \u968F\u673A\u521B\u5EFA\u6ED1\u5757\u7684\u4F4D\u7F6E
        draw() {
            this.randomPos.x = this.getRandomNumberByRange(this.block.L + 10, this.cv.w - (this.block.L + 10));
            this.randomPos.y = this.getRandomNumberByRange(10 + this.block.r * 2, this.cv.h - (this.block.L + 10));
            // \u586B\u5145\u5F53\u524D\u7ED8\u56FE\uFF08\u8DEF\u5F84\uFF09
            this.drawBlock(this.canvasCtx, this.randomPos.x, this.randomPos.y);
            // \u4ECE\u539F\u59CB\u753B\u5E03\u526A\u5207\u4EFB\u610F\u5F62\u72B6\u548C\u5C3A\u5BF8\u7684\u533A\u57DF
            this.drawBlock(this.blockCtx, this.randomPos.x, this.randomPos.y, 'clip');
        },
        // \u521B\u5EFA\u7279\u6B8A\u533A\u57DF
        drawBlock(ctx, x, y, operation) {
            let r = this.block.r,
                l = this.block.l,
                PI = Math.PI;

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.arc(x + l / 2, y - r + 2, r, 0.72 * PI, 2.26 * PI);
            ctx.lineTo(x + l, y);
            ctx.arc(x + l + r - 2, y + l / 2, r, 1.21 * PI, 2.78 * PI);
            ctx.lineTo(x + l, y + l);
            ctx.lineTo(x, y + l);
            ctx.arc(x + r - 2, y + l / 2, r + 0.4, 2.76 * PI, 1.24 * PI, true);
            ctx.lineTo(x, y);
            ctx.closePath();
            ctx.lineWidth = 1.5;
            ctx.strokeStyle = 'rgba(255, 255, 255, 1)';
            ctx.stroke();
            if (operation) ctx[operation]();
            ctx.globalCompositeOperation = 'destination-over';
        },
        // \u968F\u673A\u6570
        getRandomNumberByRange(start, end) {
            return Math.round(Math.random() * (end - start) + start);
        },
    },
};
<\/script>

<style lang="scss" scoped>
.block {
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
}
.slider {
    margin-top: 10px;
    position: relative;
    box-sizing: content-box;
    border: 1px solid #e4e7eb;
    border-radius: 3px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    .progress {
        position: absolute;
        height: 100%;
        border: 1px solid #1991fa;
        background: #d1e9fe;
    }
    .but {
        position: absolute;
        background: #1991fa;
        height: 100%;
        display: flex;
        width: 63px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        z-index: 100;
        &:after {
            content: '\\2794';
            font-size: 25px;
            color: #fff;
        }
    }
}
</style>
`},{description:k(()=>[X]),highlight:k(()=>[I]),default:k(()=>[w(l)]),_:1})])}var _=F(E,[["render",A]]);export{R as __pageData,_ as default};
