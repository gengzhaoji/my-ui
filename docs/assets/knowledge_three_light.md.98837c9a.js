import{_ as s,c as a,o as l,a as n}from"./app.83e6ec99.js";const F=JSON.parse('{"title":"Three \u706F\u5149","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5149\u6E90\u7684\u57FA\u7C7B Light \u5305\u542B\u7740\u6240\u6709\u5176\u4ED6\u7684\u5149\u516C\u7528\u5C5E\u6027\u548C\u65B9\u6CD5","slug":"\u5149\u6E90\u7684\u57FA\u7C7B-light-\u5305\u542B\u7740\u6240\u6709\u5176\u4ED6\u7684\u5149\u516C\u7528\u5C5E\u6027\u548C\u65B9\u6CD5"},{"level":3,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027"},{"level":3,"title":"\u65B9\u6CD5","slug":"\u65B9\u6CD5"},{"level":2,"title":"\u73AF\u5883\u5149( AmbientLight )","slug":"\u73AF\u5883\u5149-ambientlight"},{"level":3,"title":"\u6982\u5FF5","slug":"\u6982\u5FF5"},{"level":3,"title":"\u6784\u9020\u51FD\u6570","slug":"\u6784\u9020\u51FD\u6570"},{"level":3,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027-1"},{"level":3,"title":"\u65B9\u6CD5","slug":"\u65B9\u6CD5-1"},{"level":3,"title":"\u4EE3\u7801\u793A\u4F8B","slug":"\u4EE3\u7801\u793A\u4F8B"},{"level":2,"title":"\u5E73\u884C\u5149\uFF08DirectionalLight\uFF09","slug":"\u5E73\u884C\u5149\uFF08directionallight\uFF09"},{"level":3,"title":"\u6982\u5FF5","slug":"\u6982\u5FF5-1"},{"level":3,"title":"\u6784\u9020\u51FD\u6570","slug":"\u6784\u9020\u51FD\u6570-1"},{"level":3,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027-2"},{"level":3,"title":"\u65B9\u6CD5","slug":"\u65B9\u6CD5-2"},{"level":3,"title":"\u4EE3\u7801\u793A\u4F8B","slug":"\u4EE3\u7801\u793A\u4F8B-1"},{"level":2,"title":"\u70B9\u5149\u6E90\uFF08PointLight\uFF09","slug":"\u70B9\u5149\u6E90\uFF08pointlight\uFF09"},{"level":3,"title":"\u6982\u5FF5","slug":"\u6982\u5FF5-2"},{"level":3,"title":"\u6784\u9020\u51FD\u6570","slug":"\u6784\u9020\u51FD\u6570-2"},{"level":3,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027-3"},{"level":3,"title":"\u65B9\u6CD5","slug":"\u65B9\u6CD5-3"},{"level":3,"title":"\u4EE3\u7801\u793A\u4F8B","slug":"\u4EE3\u7801\u793A\u4F8B-2"},{"level":2,"title":"\u805A\u5149\u706F\uFF08SpotLight\uFF09","slug":"\u805A\u5149\u706F\uFF08spotlight\uFF09"},{"level":3,"title":"\u6982\u5FF5","slug":"\u6982\u5FF5-3"},{"level":3,"title":"\u6784\u9020\u51FD\u6570","slug":"\u6784\u9020\u51FD\u6570-3"},{"level":3,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027-4"},{"level":3,"title":"\u65B9\u6CD5","slug":"\u65B9\u6CD5-4"},{"level":3,"title":"\u4EE3\u7801\u793A\u4F8B","slug":"\u4EE3\u7801\u793A\u4F8B-3"}],"relativePath":"knowledge/three/light.md","lastUpdated":1664357473000}'),e={name:"knowledge/three/light.md"},o=n(`<h1 id="three-\u706F\u5149" tabindex="-1">Three \u706F\u5149 <a class="header-anchor" href="#three-\u706F\u5149" aria-hidden="true">#</a></h1><h2 id="\u5149\u6E90\u7684\u57FA\u7C7B-light-\u5305\u542B\u7740\u6240\u6709\u5176\u4ED6\u7684\u5149\u516C\u7528\u5C5E\u6027\u548C\u65B9\u6CD5" tabindex="-1">\u5149\u6E90\u7684\u57FA\u7C7B Light \u5305\u542B\u7740\u6240\u6709\u5176\u4ED6\u7684\u5149\u516C\u7528\u5C5E\u6027\u548C\u65B9\u6CD5 <a class="header-anchor" href="#\u5149\u6E90\u7684\u57FA\u7C7B-light-\u5305\u542B\u7740\u6240\u6709\u5176\u4ED6\u7684\u5149\u516C\u7528\u5C5E\u6027\u548C\u65B9\u6CD5" aria-hidden="true">#</a></h2><p>\u8FD9\u91CC\u9762\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u662F\u4E0B\u9762\u8981\u4ECB\u7ECD\u7684\u706F\u5149\u7C7B\u578B\u6240\u7EE7\u627F\u7684\uFF0C\u4E5F\u5C31\u662F\u5171\u6709\u7684\uFF0C\u90FD\u53EF\u8C03\u7528</p><h3 id="\u5C5E\u6027" tabindex="-1">\u5C5E\u6027 <a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a></h3><ul><li>color : Color</li></ul><p>\u5149\u6E90\u7684\u989C\u8272\u3002\u5982\u679C\u6784\u9020\u7684\u65F6\u5019\u6CA1\u6709\u4F20\u9012\uFF0C\u9ED8\u8BA4\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 Color \u5E76\u8BBE\u7F6E\u4E3A\u767D\u8272\u3002</p><ul><li>intensity : Float</li></ul><p>\u5149\u7167\u7684\u5F3A\u5EA6\uFF0C\u6216\u8005\u8BF4\u80FD\u91CF\u3002 \u5728 physically correct \u6A21\u5F0F\u4E0B, color \u548C\u5F3A\u5EA6 \u7684\u4E58\u79EF\u88AB\u89E3\u6790\u4E3A\u4EE5\u574E\u5FB7\u62C9\uFF08candela\uFF09\u4E3A\u5355\u4F4D\u7684\u53D1\u5149\u5F3A\u5EA6\u3002 \u9ED8\u8BA4\u503C \u4E3A 1.0</p><ul><li>isLight : Boolean</li></ul><p>\u5224\u65AD\u5BF9\u8C61\u662F\u5426\u662F\u706F\u5149\u5BF9\u8C61\uFF0C\u53EA\u8BFB\u5C5E\u6027</p><h3 id="\u65B9\u6CD5" tabindex="-1">\u65B9\u6CD5 <a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true">#</a></h3><ul><li>copy ( source : Light ) : this</li></ul><p>\u4ECE source \u590D\u5236 color, intensity \u7684\u503C\u5230\u5F53\u524D\u5149\u6E90\u5BF9\u8C61\u4E2D\u3002</p><ul><li>toJSON ( meta : Object ) : Object</li></ul><p>\u4EE5 JSON \u683C\u5F0F\u8FD4\u56DE\u5149\u6570\u636E\u3002</p><h2 id="\u73AF\u5883\u5149-ambientlight" tabindex="-1">\u73AF\u5883\u5149( AmbientLight ) <a class="header-anchor" href="#\u73AF\u5883\u5149-ambientlight" aria-hidden="true">#</a></h2><h3 id="\u6982\u5FF5" tabindex="-1">\u6982\u5FF5 <a class="header-anchor" href="#\u6982\u5FF5" aria-hidden="true">#</a></h3><ul><li>\u73AF\u5883\u5149\u4F1A\u5747\u5300\u7684\u7167\u4EAE\u573A\u666F\u4E2D\u7684\u6240\u6709\u7269\u4F53\u3002</li><li>\u73AF\u5883\u5149\u4E0D\u80FD\u7528\u6765\u6295\u5C04\u9634\u5F71\uFF0C\u56E0\u4E3A\u5B83\u6CA1\u6709\u65B9\u5411\u3002</li><li>\u5177\u4F53\u4F5C\u7528\u5C31\u662F\u5F31\u5316\u9634\u5F71\u6216\u8005\u7ED9\u573A\u666F\u6DFB\u52A0\u4E00\u4E9B\u989C\u8272\uFF0C\u6240\u4EE5\u8BBE\u7F6E\u7684\u65F6\u5019\u53EA\u9700\u8BBE\u7F6E\u4E00\u4E9B\u989C\u8272\u5373\u53EF\u3002</li></ul><h3 id="\u6784\u9020\u51FD\u6570" tabindex="-1">\u6784\u9020\u51FD\u6570 <a class="header-anchor" href="#\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a></h3><p><code>AmbientLight( color : Integer, intensity : Float )</code></p><ul><li>color - (\u53C2\u6570\u53EF\u9009\uFF09\u989C\u8272\u7684 rgb \u6570\u503C\u3002\u7F3A\u7701\u503C\u4E3A 0xffffff\u3002</li><li>intensity - (\u53C2\u6570\u53EF\u9009)\u5149\u7167\u7684\u5F3A\u5EA6\u3002\u7F3A\u7701\u503C\u4E3A 1\u3002</li></ul><h3 id="\u5C5E\u6027-1" tabindex="-1">\u5C5E\u6027 <a class="header-anchor" href="#\u5C5E\u6027-1" aria-hidden="true">#</a></h3><p>.isAmbientLight : Boolean</p><p>\u5224\u65AD\u5BF9\u8C61\u662F\u5426\u662F\u73AF\u5883\u5149\uFF0C\u53EA\u8BFB\u5C5E\u6027</p><h3 id="\u65B9\u6CD5-1" tabindex="-1">\u65B9\u6CD5 <a class="header-anchor" href="#\u65B9\u6CD5-1" aria-hidden="true">#</a></h3><p>\u7EE7\u627F\u57FA\u7C7B Light \u65B9\u6CD5\uFF0C\u4E0A\u65B9\u6709\u4ECB\u7ECD\u3002</p><h3 id="\u4EE3\u7801\u793A\u4F8B" tabindex="-1">\u4EE3\u7801\u793A\u4F8B <a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B" aria-hidden="true">#</a></h3><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> light </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AmbientLight</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0x404040</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(light)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5E73\u884C\u5149\uFF08directionallight\uFF09" tabindex="-1">\u5E73\u884C\u5149\uFF08DirectionalLight\uFF09 <a class="header-anchor" href="#\u5E73\u884C\u5149\uFF08directionallight\uFF09" aria-hidden="true">#</a></h2><h3 id="\u6982\u5FF5-1" tabindex="-1">\u6982\u5FF5 <a class="header-anchor" href="#\u6982\u5FF5-1" aria-hidden="true">#</a></h3><ul><li><p>\u5E73\u884C\u5149\u662F\u6CBF\u7740\u7279\u5B9A\u65B9\u5411\u53D1\u5C04\u7684\u5149\u3002\u8FD9\u79CD\u5149\u7684\u8868\u73B0\u50CF\u662F\u65E0\u9650\u8FDC,\u4ECE\u5B83\u53D1\u51FA\u7684\u5149\u7EBF\u90FD\u662F\u5E73\u884C\u7684\u3002\u5E38\u5E38\u7528\u5E73\u884C\u5149\u6765\u6A21\u62DF\u592A\u9633\u5149 \u7684\u6548\u679C\uFF1B\u592A\u9633\u8DB3\u591F\u8FDC\uFF0C\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u8BA4\u4E3A\u592A\u9633\u7684\u4F4D\u7F6E\u662F\u65E0\u9650\u8FDC\uFF0C\u6240\u4EE5\u6211\u4EEC\u8BA4\u4E3A\u4ECE\u592A\u9633\u53D1\u51FA\u7684\u5149\u7EBF\u4E5F\u90FD\u662F\u5E73\u884C\u7684\u3002</p></li><li><p>Three.js \u7684\u5E73\u884C\u5149\u7C7B\u4F3C\u4E0E\u5176\u4ED6\u5F15\u64CE\u7684&quot;\u76EE\u6807\u5E73\u884C\u5149&quot;\u5B83\u7684\u65B9\u5411\u662F\u4ECE\u4E00\u4E2A\u5E73\u884C\u5149\u7684\u4F4D\u7F6E position \u5230 target \u7684\u4F4D\u7F6E\u3002 (\u800C\u4E0D\u662F\u4E00\u4E2A\u53EA\u6709\u65CB\u8F6C\u5206\u91CF\u7684\u2019\u81EA\u7531\u5E73\u884C\u5149\u2019)\u3002</p></li></ul><h3 id="\u6784\u9020\u51FD\u6570-1" tabindex="-1">\u6784\u9020\u51FD\u6570 <a class="header-anchor" href="#\u6784\u9020\u51FD\u6570-1" aria-hidden="true">#</a></h3><p><code>DirectionalLight( color : Integer, intensity : Float )</code></p><ul><li>color - (\u53EF\u9009\u53C2\u6570) 16 \u8FDB\u5236\u8868\u793A\u5149\u7684\u989C\u8272\u3002 \u7F3A\u7701\u503C\u4E3A 0xffffff (\u767D\u8272)\u3002</li><li>intensity - (\u53EF\u9009\u53C2\u6570) \u5149\u7167\u7684\u5F3A\u5EA6\u3002\u7F3A\u7701\u503C\u4E3A 1\u3002</li></ul><h3 id="\u5C5E\u6027-2" tabindex="-1">\u5C5E\u6027 <a class="header-anchor" href="#\u5C5E\u6027-2" aria-hidden="true">#</a></h3><ul><li>castShadow : Boolean</li></ul><p>\u5982\u679C\u8BBE\u7F6E\u4E3A true \u8BE5\u5E73\u884C\u5149\u4F1A\u4EA7\u751F\u52A8\u6001\u9634\u5F71\uFF0C\u8BE5\u5C5E\u6027\u9ED8\u8BA4\u4E3A false\u3002</p><ul><li>isDirectionalLight : Boolean</li></ul><p>\u5224\u65AD\u5BF9\u8C61\u662F\u5426\u662F\u73AF\u5883\u5149\uFF0C\u53EA\u8BFB\u5C5E\u6027</p><ul><li>position : Vector3</li></ul><p>\u5047\u5982\u8FD9\u4E2A\u503C\u8BBE\u7F6E\u7B49\u4E8E Object3D.DefaultUp (0, 1, 0),\u90A3\u4E48\u5149\u7EBF\u5C06\u4F1A\u4ECE\u4E0A\u5F80\u4E0B\u7167\u5C04\u3002</p><ul><li>shadow : DirectionalLightShadow</li></ul><p>\u8FD9\u4E2A DirectionalLightShadow \u5BF9\u8C61\u7528\u6765\u8BA1\u7B97\u8BE5\u5E73\u884C\u5149\u4EA7\u751F\u7684\u9634\u5F71\u3002</p><ul><li>target : Object3D</li></ul><blockquote><p><strong>\u6CE8\u610F:</strong></p><p>\u5E73\u884C\u5149\u7684\u65B9\u5411\u662F\u4ECE\u5B83\u7684\u4F4D\u7F6E\u5230\u76EE\u6807\u4F4D\u7F6E\u3002\u9ED8\u8BA4\u7684\u76EE\u6807\u4F4D\u7F6E\u4E3A\u539F\u70B9 (0,0,0)\u3002</p><p>\u5BF9\u4E8E\u76EE\u6807\u7684\u4F4D\u7F6E\uFF0C\u8981\u5C06\u5176\u66F4\u6539\u4E3A\u9664\u7F3A\u7701\u503C\u4E4B\u5916\u7684\u4EFB\u4F55\u4F4D\u7F6E,\u5B83\u5FC5\u987B\u88AB\u6DFB\u52A0\u5230 scene \u573A\u666F\u4E2D\u53BB\u3002</p></blockquote><h3 id="\u65B9\u6CD5-2" tabindex="-1">\u65B9\u6CD5 <a class="header-anchor" href="#\u65B9\u6CD5-2" aria-hidden="true">#</a></h3><p>\u7EE7\u627F\u57FA\u7C7B Light \u65B9\u6CD5\uFF0C\u4E0A\u65B9\u6709\u4ECB\u7ECD\u3002</p><h3 id="\u4EE3\u7801\u793A\u4F8B-1" tabindex="-1">\u4EE3\u7801\u793A\u4F8B <a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B-1" aria-hidden="true">#</a></h3><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> targetObject </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Object3D</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(targetObject)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">light</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> targetObject</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u70B9\u5149\u6E90\uFF08pointlight\uFF09" tabindex="-1">\u70B9\u5149\u6E90\uFF08PointLight\uFF09 <a class="header-anchor" href="#\u70B9\u5149\u6E90\uFF08pointlight\uFF09" aria-hidden="true">#</a></h2><h3 id="\u6982\u5FF5-2" tabindex="-1">\u6982\u5FF5 <a class="header-anchor" href="#\u6982\u5FF5-2" aria-hidden="true">#</a></h3><p>\u4ECE\u4E00\u4E2A\u70B9\u5411\u5404\u4E2A\u65B9\u5411\u53D1\u5C04\u7684\u5149\u6E90\u3002\u4E00\u4E2A\u5E38\u89C1\u7684\u4F8B\u5B50\u662F\u6A21\u62DF\u4E00\u4E2A\u706F\u6CE1\u53D1\u51FA\u7684\u5149\u3002</p><h3 id="\u6784\u9020\u51FD\u6570-2" tabindex="-1">\u6784\u9020\u51FD\u6570 <a class="header-anchor" href="#\u6784\u9020\u51FD\u6570-2" aria-hidden="true">#</a></h3><p><code>PointLight(color:Integer, intensity:Float, distance:Number, decay:Float)</code></p><ul><li>color: (\u53EF\u9009\u53C2\u6570)) \u5341\u516D\u8FDB\u5236\u5149\u7167\u989C\u8272\u3002 \u7F3A\u7701\u503C 0xffffff (\u767D\u8272)\u3002</li><li>intensity: (\u53EF\u9009\u53C2\u6570) \u5149\u7167\u5F3A\u5EA6\u3002 \u7F3A\u7701\u503C 1\u3002</li><li>distance: \u8FD9\u4E2A\u8DDD\u79BB\u8868\u793A\u4ECE\u5149\u6E90\u5230\u5149\u7167\u5F3A\u5EA6\u4E3A 0 \u7684\u4F4D\u7F6E\u3002 \u5F53\u8BBE\u7F6E\u4E3A 0 \u65F6\uFF0C\u5149\u6C38\u8FDC\u4E0D\u4F1A\u6D88\u5931(\u8DDD\u79BB\u65E0\u7A77\u5927)\u3002\u7F3A\u7701\u503C 0.</li><li>decay: \u6CBF\u7740\u5149\u7167\u8DDD\u79BB\u7684\u8870\u9000\u91CF\u3002\u7F3A\u7701\u503C 1\u3002 \u5728 physically correct \u6A21\u5F0F\u4E2D\uFF0Cdecay = 2\u3002</li></ul><h3 id="\u5C5E\u6027-3" tabindex="-1">\u5C5E\u6027 <a class="header-anchor" href="#\u5C5E\u6027-3" aria-hidden="true">#</a></h3><ul><li>decay: Float</li></ul><p>\u6CBF\u7740\u5149\u7167\u8DDD\u79BB\u7684\u8870\u51CF\u91CF\u5728 physically correct \u6A21\u5F0F\u4E0B\uFF0Cdecay \u8BBE\u7F6E\u4E3A\u7B49\u4E8E 2 \u5C06\u5B9E\u73B0\u73B0\u5B9E\u4E16\u754C\u7684\u5149\u8870\u51CF\u3002\u7F3A\u7701\u503C\u4E3A 1\u3002</p><ul><li>distance: Float</li></ul><p>\u5982\u679C\u975E\u96F6\uFF0C\u90A3\u4E48\u5149\u5F3A\u5EA6\u5C06\u4F1A\u4ECE\u6700\u5927\u503C\u5F53\u524D\u706F\u5149\u4F4D\u7F6E\u5904\u6309\u7167\u8DDD\u79BB\u7EBF\u6027\u8870\u51CF\u5230 0\u3002 \u7F3A\u7701\u503C\u4E3A 0.0\u3002</p><h3 id="\u65B9\u6CD5-3" tabindex="-1">\u65B9\u6CD5 <a class="header-anchor" href="#\u65B9\u6CD5-3" aria-hidden="true">#</a></h3><p>\u7EE7\u627F\u57FA\u7C7B Light \u65B9\u6CD5\uFF0C\u4E0A\u65B9\u6709\u4ECB\u7ECD\u3002</p><h3 id="\u4EE3\u7801\u793A\u4F8B-2" tabindex="-1">\u4EE3\u7801\u793A\u4F8B <a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B-2" aria-hidden="true">#</a></h3><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> light </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">PointLight</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0xff0000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">light</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">50</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(light)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u805A\u5149\u706F\uFF08spotlight\uFF09" tabindex="-1">\u805A\u5149\u706F\uFF08SpotLight\uFF09 <a class="header-anchor" href="#\u805A\u5149\u706F\uFF08spotlight\uFF09" aria-hidden="true">#</a></h2><h3 id="\u6982\u5FF5-3" tabindex="-1">\u6982\u5FF5 <a class="header-anchor" href="#\u6982\u5FF5-3" aria-hidden="true">#</a></h3><p>\u5149\u7EBF\u4ECE\u4E00\u4E2A\u70B9\u6CBF\u4E00\u4E2A\u65B9\u5411\u5C04\u51FA\uFF0C\u968F\u7740\u5149\u7EBF\u7167\u5C04\u7684\u53D8\u8FDC\uFF0C\u5149\u7EBF\u5706\u9525\u4F53\u7684\u5C3A\u5BF8\u4E5F\u9010\u6E10\u589E\u5927 \u9525\u5F62\u6548\u679C\u7684\u5149\u6E90\uFF0C\u80FD\u591F\u4EA7\u751F\u9634\u5F71</p><h3 id="\u6784\u9020\u51FD\u6570-3" tabindex="-1">\u6784\u9020\u51FD\u6570 <a class="header-anchor" href="#\u6784\u9020\u51FD\u6570-3" aria-hidden="true">#</a></h3><p><code>SpotLight( color : Integer, intensity : Float, distance : Float, angle : Radians, penumbra : Float, decay : Float )</code></p><ul><li>color\uFF1A(\u53EF\u9009\u53C2\u6570) \u5341\u516D\u8FDB\u5236\u5149\u7167\u989C\u8272\u3002 \u7F3A\u7701\u503C 0xffffff (\u767D\u8272)\u3002</li><li>intensity\uFF1A(\u53EF\u9009\u53C2\u6570) \u5149\u7167\u5F3A\u5EA6\u3002 \u7F3A\u7701\u503C 1\u3002</li><li>distance\uFF1A\u4ECE\u5149\u6E90\u53D1\u51FA\u5149\u7684\u6700\u5927\u8DDD\u79BB\uFF0C\u5176\u5F3A\u5EA6\u6839\u636E\u5149\u6E90\u7684\u8DDD\u79BB\u7EBF\u6027\u8870\u51CF\u3002</li><li>angle\uFF1A\u5149\u7EBF\u6563\u5C04\u89D2\u5EA6\uFF0C\u6700\u5927\u4E3A Math.PI/2\u3002</li><li>penumbra\uFF1A\u805A\u5149\u9525\u7684\u534A\u5F71\u8870\u51CF\u767E\u5206\u6BD4\u3002\u5728 0 \u548C 1 \u4E4B\u95F4\u7684\u503C\u3002\u9ED8\u8BA4\u4E3A 0\u3002</li><li>decay\uFF1A\u6CBF\u7740\u5149\u7167\u8DDD\u79BB\u7684\u8870\u51CF\u91CF\u3002</li></ul><h3 id="\u5C5E\u6027-4" tabindex="-1">\u5C5E\u6027 <a class="header-anchor" href="#\u5C5E\u6027-4" aria-hidden="true">#</a></h3><ul><li>angle : Float</li></ul><p>\u4ECE\u805A\u5149\u706F\u7684\u4F4D\u7F6E\u4EE5\u5F27\u5EA6\u8868\u793A\u805A\u5149\u706F\u7684\u6700\u5927\u8303\u56F4\u3002\u5E94\u8BE5\u4E0D\u8D85\u8FC7 Math.PI/2\u3002\u9ED8\u8BA4\u503C\u4E3A Math.PI/3\u3002</p><ul><li>castShadow : Boolean</li></ul><p>\u6B64\u5C5E\u6027\u8BBE\u7F6E\u4E3A true \u805A\u5149\u706F\u5C06\u6295\u5C04\u9634\u5F71\u3002\u8B66\u544A: \u8FD9\u6837\u505A\u7684\u4EE3\u4EF7\u6BD4\u8F83\u9AD8\u800C\u4E14\u9700\u8981\u4E00\u76F4\u8C03\u6574\u5230\u9634\u5F71\u770B\u8D77\u6765\u6B63\u786E\u3002 \u67E5\u770B SpotLightShadow \u4E86\u89E3\u8BE6\u7EC6\u4FE1\u606F\u3002\u9ED8\u8BA4\u503C\u4E3A false</p><ul><li><p>decay : Float</p></li><li><p>\u6CBF\u7740\u5149\u7167\u8DDD\u79BB\u7684\u8870\u51CF\u91CF\u5728 physically correct \u6A21\u5F0F\u4E0B\uFF0Cdecay \u8BBE\u7F6E\u4E3A\u7B49\u4E8E 2 \u5C06\u5B9E\u73B0\u73B0\u5B9E\u4E16\u754C\u7684\u5149\u8870\u51CF\u3002\u7F3A\u7701\u503C\u4E3A 1</p></li><li><p>distance : Float</p></li></ul><p>\u5982\u679C\u975E\u96F6\uFF0C\u90A3\u4E48\u5149\u5F3A\u5EA6\u5C06\u4F1A\u4ECE\u6700\u5927\u503C\u5F53\u524D\u706F\u5149\u4F4D\u7F6E\u5904\u6309\u7167\u8DDD\u79BB\u7EBF\u6027\u8870\u51CF\u5230 0\u3002 \u7F3A\u7701\u503C\u4E3A 0.0\u3002</p><ul><li>penumbra : Float</li></ul><p>\u805A\u5149\u9525\u7684\u534A\u5F71\u8870\u51CF\u767E\u5206\u6BD4\u3002\u5728 0 \u548C 1 \u4E4B\u95F4\u7684\u503C\u3002 \u9ED8\u8BA4\u503C \u2014 0.0\u3002</p><ul><li>position : Vector3</li></ul><p>\u5047\u5982\u8FD9\u4E2A\u503C\u8BBE\u7F6E\u7B49\u4E8E Object3D.DefaultUp (0, 1, 0)\uFF0C\u90A3\u4E48\u5149\u7EBF\u5C06\u4F1A\u4ECE\u4E0A\u5F80\u4E0B\u7167\u5C04\u3002</p><h3 id="\u65B9\u6CD5-4" tabindex="-1">\u65B9\u6CD5 <a class="header-anchor" href="#\u65B9\u6CD5-4" aria-hidden="true">#</a></h3><p>\u7EE7\u627F\u57FA\u7C7B Light \u65B9\u6CD5\uFF0C\u4E0A\u65B9\u6709\u4ECB\u7ECD\u3002</p><h3 id="\u4EE3\u7801\u793A\u4F8B-3" tabindex="-1">\u4EE3\u7801\u793A\u4F8B <a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B-3" aria-hidden="true">#</a></h3><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> spotLight </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">SpotLight</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0xffffff</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">spotLight</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">spotLight</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">castShadow </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">spotLight</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">shadow</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">mapSize</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">width </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1024</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">spotLight</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">shadow</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">mapSize</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">height </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1024</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">spotLight</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">shadow</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">camera</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">near </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">500</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">spotLight</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">shadow</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">camera</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">far </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">spotLight</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">shadow</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">camera</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fov </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(spotLight)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,85),p=[o];function t(i,r,c,h,d,D){return l(),a("div",null,p)}var C=s(e,[["render",t]]);export{F as __pageData,C as default};
