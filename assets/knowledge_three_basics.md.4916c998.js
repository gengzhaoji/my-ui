import{_ as e,c as a,o as s,a as n}from"./app.3a525c0f.js";const y=JSON.parse('{"title":"Three \u57FA\u7840","description":"","frontmatter":{},"headers":[{"level":2,"title":"3D \u573A\u666F\u77E5\u8BC6\u70B9","slug":"_3d-\u573A\u666F\u77E5\u8BC6\u70B9"},{"level":3,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027"},{"level":3,"title":"\u65B9\u6CD5","slug":"\u65B9\u6CD5"},{"level":2,"title":"Three.js \u4E2D\u6211\u4EEC\u5E38\u7528\u7684\u6709\u4E24\u79CD\u7C7B\u578B\u7684\u76F8\u673A\uFF1A","slug":"three-js-\u4E2D\u6211\u4EEC\u5E38\u7528\u7684\u6709\u4E24\u79CD\u7C7B\u578B\u7684\u76F8\u673A\uFF1A"},{"level":2,"title":"\u900F\u89C6 perspective \u76F8\u673A","slug":"\u900F\u89C6-perspective-\u76F8\u673A"},{"level":3,"title":"\u5149\u6E90\u5206\u7C7B","slug":"\u5149\u6E90\u5206\u7C7B"},{"level":3,"title":"\u6750\u8D28\u5206\u7C7B","slug":"\u6750\u8D28\u5206\u7C7B"}],"relativePath":"knowledge/three/basics.md","lastUpdated":1664357473000}'),t={name:"knowledge/three/basics.md"},l=n(`<h1 id="three-\u57FA\u7840" tabindex="-1">Three \u57FA\u7840 <a class="header-anchor" href="#three-\u57FA\u7840" aria-hidden="true">#</a></h1><p><a href="https://threejs.org/docs/index.html#manual/zh/introduction/Creating-a-scene" target="_blank" rel="noopener noreferrer"><code>Three.js</code></a> \u662F\u4E00\u6B3E\u8FD0\u884C\u5728\u6D4F\u89C8\u5668\u4E2D\u7684 <code>3D</code> \u5F15\u64CE\uFF0C\u4F60\u53EF\u4EE5\u7528\u5B83\u5728 <code>web</code> \u4E2D\u521B\u5EFA\u5404\u79CD\u4E09\u7EF4\u573A\u666F\uFF0C\u5305\u62EC\u4E86\u6444\u5F71\u673A\u3001\u5149\u5F71\u3001\u6750\u8D28\u7B49\u5404\u79CD\u5BF9\u8C61\u3002</p><h2 id="_3d-\u573A\u666F\u77E5\u8BC6\u70B9" tabindex="-1">3D \u573A\u666F\u77E5\u8BC6\u70B9 <a class="header-anchor" href="#_3d-\u573A\u666F\u77E5\u8BC6\u70B9" aria-hidden="true">#</a></h2><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3944a14a333e4dfb8fbebb24dd1e6417~tplv-k3u1fbpfcp-watermark.image?" alt="7ff3e8267d11bcb2b7387da5f5c5f174.png"></p><ul><li>\u573A\u666F<code>Scene</code>\uFF1A\u662F\u7269\u4F53\u3001\u5149\u6E90\u7B49\u5143\u7D20\u7684\u5BB9\u5668\u3002</li><li>\u76F8\u673A<code>Camera</code>\uFF1A\u573A\u666F\u4E2D\u7684\u76F8\u673A\uFF0C\u4EE3\u66FF\u4EBA\u773C\u53BB\u89C2\u5BDF\uFF0C\u573A\u666F\u4E2D\u53EA\u80FD\u6DFB\u52A0\u4E00\u4E2A\uFF0C\u5E38\u7528\u7684\u662F\u900F\u89C6\u76F8\u673A<code>PerspectiveCamera</code>\u3002</li><li>\u7269\u4F53\u5BF9\u8C61<code>Mesh</code>\uFF1A\u5305\u62EC\u4E8C\u7EF4\u7269\u4F53\uFF08\u70B9\u3001\u7EBF\u3001\u9762\uFF09\u3001\u4E09\u7EF4\u7269\u4F53\uFF0C\u6A21\u578B\u7B49\u3002</li><li>\u5149\u6E90<code>Light</code>\uFF1A\u573A\u666F\u4E2D\u7684\u5149\u7167\uFF0C\u5982\u679C\u4E0D\u6DFB\u52A0\u5149\u7167\u573A\u666F\u5C06\u4F1A\u662F\u4E00\u7247\u6F06\u9ED1\uFF0C\u5305\u62EC\u5168\u5C40\u5149\u3001\u5E73\u884C\u5149\u3001\u70B9\u5149\u6E90\u7B49\u3002</li><li>\u6E32\u67D3\u5668<code>Renderer</code>\uFF1A\u573A\u666F\u7684\u6E32\u67D3\u65B9\u5F0F\uFF0C\u5982 webGL\\canvas2D\\Css3D\u3002</li><li>\u63A7\u5236\u5668<code>Control</code>\uFF1A\u53EF\u901A\u8FC7\u952E\u76D8\u3001\u9F20\u6807\u63A7\u5236\u76F8\u673A\u7684\u79FB\u52A8\u3002</li></ul><h1 id="\u573A\u666F\uFF08scene\uFF09" tabindex="-1">\u573A\u666F\uFF08Scene\uFF09 <a class="header-anchor" href="#\u573A\u666F\uFF08scene\uFF09" aria-hidden="true">#</a></h1><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> scene </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Scene</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">background </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Color</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0x808080</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fog </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Fog</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#ffffff</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">500</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u573A\u666F\u80FD\u591F\u8BA9\u4F60\u5728\u4EC0\u4E48\u5730\u65B9\u3001\u6446\u653E\u4EC0\u4E48\u4E1C\u897F\u6765\u4EA4\u7ED9 three.js \u6765\u6E32\u67D3\uFF0C\u8FD9\u662F\u4F60\u653E\u7F6E\u7269\u4F53\u3001\u706F\u5149\u548C\u6444\u50CF\u673A\u7684\u5730\u65B9\u3002</p><h3 id="\u5C5E\u6027" tabindex="-1"><a href="https://threejs.org/docs/index.html?q=sc#api/zh/scenes/Scene" target="_blank" rel="noopener noreferrer">\u5C5E\u6027</a> <a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a></h3><ul><li>background:\xA0Object</li></ul><p>\u82E5\u4E0D\u4E3A\u7A7A\uFF0C\u5728\u6E32\u67D3\u573A\u666F\u7684\u65F6\u5019\u5C06\u8BBE\u7F6E\u80CC\u666F\uFF0C\u4E14\u80CC\u666F\u603B\u662F\u9996\u5148\u88AB\u6E32\u67D3\u7684\u3002</p><ul><li>environment:\xA0Texture</li></ul><p>\u82E5\u8BE5\u503C\u4E0D\u4E3A null\uFF0C\u5219\u8BE5\u7EB9\u7406\u8D34\u56FE\u5C06\u4F1A\u88AB\u8BBE\u4E3A\u573A\u666F\u4E2D\u6240\u6709\u7269\u7406\u6750\u8D28\u7684\u73AF\u5883\u8D34\u56FE\u3002 \u7136\u800C\uFF0C\u8BE5\u5C5E\u6027\u4E0D\u80FD\u591F\u8986\u76D6\u5DF2\u5B58\u5728\u7684\u3001\u5DF2\u5206\u914D\u7ED9<code> MeshStandardMaterial.envMap</code>\u7684\u8D34\u56FE\u3002\u9ED8\u8BA4\u4E3A null\u3002</p><ul><li>fog\xA0:\xA0Fog</li></ul><p>\u4E00\u4E2A<code>fog</code>\u5B9E\u4F8B\u5B9A\u4E49\u4E86\u5F71\u54CD\u573A\u666F\u4E2D\u7684\u6BCF\u4E2A\u7269\u4F53\u7684\u96FE\u7684\u7C7B\u578B\u3002\u9ED8\u8BA4\u503C\u4E3A null\u3002</p><ul><li>isScene\xA0:\xA0Boolean</li></ul><p>\u53EA\u8BFB\u6807\u5FD7\uFF0C\u7528\u4E8E\u68C0\u67E5\u7ED9\u5B9A\u5BF9\u8C61\u662F\u5426\u5C5E\u4E8E\u573A\u666F\u7C7B\u578B\u3002</p><ul><li>overrideMaterial\xA0:\xA0Material</li></ul><p>\u5982\u679C\u4E0D\u4E3A\u7A7A\uFF0C\u5B83\u5C06\u5F3A\u5236\u573A\u666F\u4E2D\u7684\u6BCF\u4E2A\u7269\u4F53\u4F7F\u7528\u8FD9\u91CC\u7684\u6750\u8D28\u6765\u6E32\u67D3\u3002\u9ED8\u8BA4\u503C\u4E3A null\u3002</p><h3 id="\u65B9\u6CD5" tabindex="-1">\u65B9\u6CD5 <a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true">#</a></h3><ul><li>toJSON\xA0:\xA0Object</li></ul><p>meta -- \u5305\u542B\u6709\u5143\u6570\u636E\u7684\u5BF9\u8C61\uFF0C\u4F8B\u5982\u573A\u666F\u4E2D\u7684\u7684\u7EB9\u7406\u6216\u56FE\u7247\u3002 \u5C06 scene \u5BF9\u8C61\u8F6C\u6362\u4E3A<code>JSON</code>\uFF08three.js JSON \u7269\u4F53/\u573A\u666F\u683C\u5F0F\uFF09\u3002</p><h1 id="\u76F8\u673A" tabindex="-1">\u76F8\u673A <a class="header-anchor" href="#\u76F8\u673A" aria-hidden="true">#</a></h1><h2 id="three-js-\u4E2D\u6211\u4EEC\u5E38\u7528\u7684\u6709\u4E24\u79CD\u7C7B\u578B\u7684\u76F8\u673A\uFF1A" tabindex="-1">Three.js \u4E2D\u6211\u4EEC\u5E38\u7528\u7684\u6709\u4E24\u79CD\u7C7B\u578B\u7684\u76F8\u673A\uFF1A <a class="header-anchor" href="#three-js-\u4E2D\u6211\u4EEC\u5E38\u7528\u7684\u6709\u4E24\u79CD\u7C7B\u578B\u7684\u76F8\u673A\uFF1A" aria-hidden="true">#</a></h2><ul><li>\u6B63\u4EA4 <code>orthographic</code> \u76F8\u673A\uFF1A\u4E00\u822C\u60C5\u51B5\u4E0B\u4E3A\u4E86\u6A21\u62DF\u4EBA\u773C\u6211\u4EEC\u90FD\u662F\u4F7F\u7528\u900F\u89C6\u76F8\u673A\uFF0C\u7279\u70B9\u662F\uFF0C\u7269\u54C1\u7684\u6E32\u67D3\u5C3A\u5BF8\u4E0E\u5B83\u8DDD\u79BB\u955C\u5934\u7684\u8FDC\u8FD1\u65E0\u5173\u3002\u4E5F\u5C31\u662F\u8BF4\u5728\u573A\u666F\u4E2D\u79FB\u52A8\u4E00\u4E2A\u7269\u4F53\uFF0C\u5176\u5927\u5C0F\u4E0D\u4F1A\u53D8\u5316\u3002\u6B63\u4EA4\u955C\u5934\u9002\u5408 2D \u6E38\u620F</li><li>\u900F\u89C6 <code>perspective</code> \u76F8\u673A\uFF1A \u900F\u89C6\u955C\u5934\u5219\u662F\u6A21\u62DF\u4EBA\u773C\u7684\u89C6\u89C9\u7279\u70B9\uFF0C\u8DDD\u79BB\u8FDC\u7684\u7269\u4F53\u663E\u5F97\u66F4\u5C0F\u3002\u900F\u89C6\u955C\u5934\u901A\u5E38\u66F4\u9002\u5408 3D \u6E32\u67D3\u3002</li></ul><h2 id="\u900F\u89C6-perspective-\u76F8\u673A" tabindex="-1">\u900F\u89C6 <code>perspective</code> \u76F8\u673A <a class="header-anchor" href="#\u900F\u89C6-perspective-\u76F8\u673A" aria-hidden="true">#</a></h2><p><code>THREE.PerspectiveCamera(fov,aspect,near,far)</code></p><table><thead><tr><th>\u53C2\u6570</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>fov</td><td>\u89C6\u91CE\u89D2\u5EA6\uFF0C\u4ECE\u955C\u5934\u53EF\u4EE5\u770B\u5230\u7684\u573A\u666F\u7684\u90E8\u5206\u3002\u901A\u5E38 3D \u6E38\u620F\u7684 FOV \u53D6\u503C\u5728 60-90 \u5EA6\u4E4B\u95F4\u8F83\u597D\u7684\u9ED8\u8BA4\u503C\u4E3A 60</td></tr><tr><td>aspect</td><td>\u6E32\u67D3\u533A\u57DF\u7684\u7EB5\u6A2A\u6BD4\u3002\u8F83\u597D\u7684\u9ED8\u8BA4\u503C\u4E3A window.innerWidth/window.innerHeight</td></tr><tr><td>near</td><td>\u6700\u8FD1\u79BB\u955C\u5934\u7684\u8DDD\u79BB</td></tr><tr><td>far</td><td>\u8FDC\u79BB\u955C\u5934\u7684\u8DDD\u79BB</td></tr></tbody></table><p>\u900F\u89C6\u76F8\u673A\u793A\u610F\u56FE\uFF1A <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d3bccaac41ef40b99f86367dd94ca0b6~tplv-k3u1fbpfcp-zoom-1.image"></p><p>\u521B\u5EFA\u6444\u50CF\u673A\u4EE5\u540E\u8FD8\u8981\u5BF9\u5176\u8FDB\u884C\u79FB\u52A8\u3001\u7136\u540E\u5BF9\u51C6\u7269\u4F53\u79EF\u805A\u7684\u573A\u666F\u4E2D\u5FC3\u4F4D\u7F6E\uFF0C\u5206\u522B\u662F\u8BBE\u7F6E\u5176 position \u548C\u8C03\u7528 lookAt \u65B9\u6CD5\uFF0C\u53C2\u6570\u5747\u662F\u4E00\u4E2A xyz \u5411\u91CF(new THREE.Vector3(x,y,z))</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">camera.position\uFF1A\u63A7\u5236\u76F8\u673A\u5728\u6574\u4E2A3D\u73AF\u5883\u4E2D\u7684\u4F4D\u7F6E\uFF08\u53D6\u503C\u4E3A3\u7EF4\u5750\u6807\u5BF9\u8C61-THREE.Vector3(x,y,z)\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">camera.lookAt\uFF1A\u63A7\u5236\u76F8\u673A\u7684\u7126\u70B9\u4F4D\u7F6E\uFF0C\u51B3\u5B9A\u76F8\u673A\u7684\u671D\u5411\uFF08\u53D6\u503C\u4E3A3\u7EF4\u5750\u6807\u5BF9\u8C61-THREE.Vector3(x,y,z)\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="\u706F\u5149" tabindex="-1">\u706F\u5149 <a class="header-anchor" href="#\u706F\u5149" aria-hidden="true">#</a></h1><p>\u5728 Three.js \u4E2D\u5149\u6E90\u662F\u5FC5\u987B\u7684\uFF0C\u5982\u679C\u4E00\u4E2A\u573A\u666F\u4F60\u4E0D\u8BBE\u7F6E\u706F\u5149\u90A3\u4E48\u4E16\u754C\u5C06\u4F1A\u662F\u4E00\u7247\u6F06\u9ED1\u3002Three.js \u5185\u7F6E\u4E86\u591A\u79CD\u5149\u6E90\u4EE5\u6EE1\u8DB3\u7279\u5B9A\u573A\u666F\u7684\u9700\u8981\u3002\u5927\u5BB6\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u9879\u76EE\u9700\u8981\u6765\u9009\u62E9\u4F55\u79CD\u706F\u5149\u3002</p><h3 id="\u5149\u6E90\u5206\u7C7B" tabindex="-1">\u5149\u6E90\u5206\u7C7B <a class="header-anchor" href="#\u5149\u6E90\u5206\u7C7B" aria-hidden="true">#</a></h3><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0fddb93a83ab4452950443b900dd1b29~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><h1 id="mesh" tabindex="-1">Mesh <a class="header-anchor" href="#mesh" aria-hidden="true">#</a></h1><p>\u5728\u8BA1\u7B97\u673A\u7684\u4E16\u754C\u91CC\uFF0C\u4E00\u6761\u5F27\u7EBF\u662F\u7531\u6709\u9650\u4E2A\u70B9\u6784\u6210\u7684\u6709\u9650\u6761\u7EBF\u6BB5\u8FDE\u63A5\u5F97\u5230\u7684\u3002\u5F53\u7EBF\u6BB5\u6570\u91CF\u8D8A\u591A\uFF0C\u957F\u5EA6\u5C31\u8D8A\u77ED\uFF0C\u5F53\u8FBE\u5230\u4F60\u65E0\u6CD5\u5BDF\u89C9\u8FD9\u662F\u7EBF\u6BB5\u65F6\uFF0C\u4E00\u6761\u5E73\u6ED1\u7684\u5F27\u7EBF\u5C31\u51FA\u73B0\u4E86\u3002 \u8BA1\u7B97\u673A\u7684\u4E09\u7EF4\u6A21\u578B\u4E5F\u662F\u7C7B\u4F3C\u7684\u3002\u53EA\u4E0D\u8FC7\u7EBF\u6BB5\u53D8\u6210\u4E86\u5E73\u9762\uFF0C\u666E\u904D\u7528\u4E09\u89D2\u5F62\u7EC4\u6210\u7684\u7F51\u683C\u6765\u63CF\u8FF0\u3002\u6211\u4EEC\u628A\u8FD9\u79CD\u6A21\u578B\u79F0\u4E4B\u4E3A Mesh \u6A21\u578B\u3002 \u5728 threeJs \u7684\u4E16\u754C\u4E2D\uFF0C\u6750\u8D28(Material)+\u51E0\u4F55\u4F53(Geometry)\u5C31\u662F\u4E00\u4E2A mesh\u3002\u8BBE\u7F6E\u5176 name \u5C5E\u6027\u53EF\u4EE5\u901A\u8FC7 scene.getObjectByName(name)\u83B7\u53D6\u8BE5\u7269\u4F53\u5BF9\u8C61;Geometry \u5C31\u597D\u50CF\u662F\u9AA8\u67B6\uFF0C\u6750\u8D28\u5219\u7C7B\u4F3C\u4E8E\u76AE\u80A4\uFF0C\u5BF9\u4E8E\u6750\u8D28\u548C\u51E0\u4F55\u4F53\u7684\u5206\u7C7B\u89C1\u4E0B\u8868\u683C\u3002</p><h3 id="\u6750\u8D28\u5206\u7C7B" tabindex="-1">\u6750\u8D28\u5206\u7C7B <a class="header-anchor" href="#\u6750\u8D28\u5206\u7C7B" aria-hidden="true">#</a></h3><table><thead><tr><th>\u6750\u8D28</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>MeshBasicMaterial</td><td>\u57FA\u672C\u7684\u6750\u8D28\uFF0C\u663E\u793A\u4E3A\u7B80\u5355\u7684\u989C\u8272\u6216\u8005\u663E\u793A\u4E3A\u7EBF\u6846\u3002\u4E0D\u8003\u8651\u5149\u7EBF\u7684\u5F71\u54CD</td></tr><tr><td>MeshDepthMaterial</td><td>\u4F7F\u7528\u7B80\u5355\u7684\u989C\u8272\uFF0C\u4F46\u662F\u989C\u8272\u6DF1\u5EA6\u548C\u8DDD\u79BB\u76F8\u673A\u7684\u8FDC\u8FD1\u6709\u5173</td></tr><tr><td>MeshNormalMaterial</td><td>\u57FA\u4E8E\u9762 Geometry \u7684\u6CD5\u7EBF\uFF08normals\uFF09\u6570\u7EC4\u6765\u7ED9\u9762\u7740\u8272</td></tr><tr><td>MeshFacematerial</td><td>\u5BB9\u5668\uFF0C\u5141\u8BB8\u4E3A Geometry \u7684\u6BCF\u4E00\u4E2A\u9762\u6307\u5B9A\u4E00\u4E2A\u6750\u8D28</td></tr><tr><td>MeshLambertMaterial</td><td>\u8003\u8651\u5149\u7EBF\u7684\u5F71\u54CD\uFF0C\u54D1\u5149\u6750\u8D28</td></tr><tr><td>MeshPhongMaterial</td><td>\u8003\u8651\u5149\u7EBF\u7684\u5F71\u54CD\uFF0C\u5149\u6CFD\u6750\u8D28</td></tr><tr><td>ShaderMaterial</td><td>\u5141\u8BB8\u4F7F\u7528\u81EA\u5DF1\u7684\u7740\u8272\u5668\u6765\u63A7\u5236\u9876\u70B9\u5982\u4F55\u88AB\u653E\u7F6E\u3001\u50CF\u7D20\u5982\u4F55\u88AB\u7740\u8272</td></tr><tr><td>LineBasicMaterial</td><td>\u7528\u4E8E THREE.Line \u5BF9\u8C61\uFF0C\u521B\u5EFA\u5F69\u8272\u7EBF\u6761</td></tr><tr><td>LineDashMaterial</td><td>\u7528\u4E8E THREE.Line \u5BF9\u8C61\uFF0C\u521B\u5EFA\u865A\u7EBF\u6761</td></tr><tr><td>RawShaderMaterial</td><td>\u4EC5\u548C THREE.BufferedGeometry \u8054\u7528\uFF0C\u4F18\u5316\u9759\u6001 Geometry\uFF08\u9876\u70B9\u3001\u9762\u4E0D\u53D8\uFF09\u7684\u6E32\u67D3</td></tr><tr><td>SpriteCanvasMaterial</td><td>\u5728\u9488\u5BF9\u5355\u72EC\u7684\u70B9\u8FDB\u884C\u6E32\u67D3\u65F6\u7528\u5230</td></tr><tr><td>SpriteMaterial</td><td>\u5728\u9488\u5BF9\u5355\u72EC\u7684\u70B9\u8FDB\u884C\u6E32\u67D3\u65F6\u7528\u5230</td></tr><tr><td>PointCloudMaterial</td><td>\u5728\u9488\u5BF9\u5355\u72EC\u7684\u70B9\u8FDB\u884C\u6E32\u67D3\u65F6\u7528\u5230</td></tr></tbody></table><h1 id="\u573A\u666F\u4EA4\u4E92" tabindex="-1">\u573A\u666F\u4EA4\u4E92 <a class="header-anchor" href="#\u573A\u666F\u4EA4\u4E92" aria-hidden="true">#</a></h1><p>Three.js \u4E2D\u5E76\u6CA1\u6709\u76F4\u63A5\u63D0\u4F9B\u201C\u70B9\u51FB\u201D\u529F\u80FD\uFF0C\u4E00\u5F00\u59CB\u4F7F\u7528\u7684\u65F6\u5019\u6211\u4E5F\u89C9\u5F97\u4E00\u8138\u61F5\u903C\uFF0C\u540E\u6765\u624D\u53D1\u73B0\u6211\u4EEC\u53EF\u4EE5\u57FA\u4E8E THREE.Raycaster \u6765\u5224\u65AD\u9F20\u6807\u5F53\u524D\u5BF9\u5E94\u5230\u54EA\u4E2A\u7269\u4F53,\u7528\u6765\u8FDB\u884C\u78B0\u649E\u68C0\u6D4B.</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">//\u6838\u5FC3\u4EE3\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">var clickObjects = []; //\u5B58\u50A8\u54EA\u4E9B obj \u9700\u8981\u4EA4\u4E92</span></span>
<span class="line"><span style="color:#A6ACCD;">var _raycaster = new THREE.Raycaster();//\u5C04\u7EBF\u62FE\u53D6\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">var raycAsix = new THREE.Vector2();//\u5C4F\u5E55\u70B9\u51FB\u70B9\u4E8C\u7EF4\u5750\u6807</span></span>
<span class="line"><span style="color:#A6ACCD;">var container = null;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function onMouseMove(event) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    event.preventDefault();</span></span>
<span class="line"><span style="color:#A6ACCD;">    container = document.getElementById(&quot;Canvas1&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    raycAsix.x = ( (event.pageX - $(container).offset().left) / container.offsetWidth ) * 2 - 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">    raycAsix.y = -( (event.pageY - $(container).offset().top) / container.offsetHeight ) * 2 + 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">    _raycaster.setFromCamera(raycAsix, Camera);</span></span>
<span class="line"><span style="color:#A6ACCD;">    var intersects = _raycaster.intersectObjects(clickObjects);//\u83B7\u53D6\u5C04\u7EBF\u4E0A\u4E0E\u5B58\u50A8\u7684\u53EF\u88AB\u70B9\u51FB\u7269\u4F53\u7684\u96C6\u5408\u7684\u4EA4\u96C6\uFF0C\u96C6\u5408\u7684\u7B2C\u4E00\u4E2A\u7269\u4F53\u4E3A\u8DDD\u79BB\u76F8\u673A\u6700\u8FD1\u7684\u7269\u4F53\uFF0C\u6700\u540E\u4E00\u4E2A\u5219\u4E3A\u79BB\u76F8\u673A\u6700\u8FDC\u7684\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (intersects.length &gt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        document.body.style.cursor = &#39;pointer&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(intersects[0].object.name) //\u6253\u5370\u5BFC\u5165\u6A21\u578B\u65F6\u8BBE\u7F6E\u7684model name</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        document.body.style.cursor = &#39;default&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5176\u4ED6\u7684\u4EA4\u4E92\u6BD4\u5982\u70B9\u51FB\u4E8B\u4EF6\u90FD\u662F\u57FA\u4E8E\u6B64\u3002</p><h1 id="\u52A8\u753B" tabindex="-1">\u52A8\u753B <a class="header-anchor" href="#\u52A8\u753B" aria-hidden="true">#</a></h1><p>\u573A\u666F\u4E2D\u5982\u679C\u6211\u4EEC\u6DFB\u52A0\u4E86\u5404\u79CD mesh \u548C\u6A21\u578B\u5E76\u7ED9\u4ED6\u52A0\u5165\u4E86\u4E00\u4E9B tweend \u52A8\u753B\u4F1A\u53D1\u73B0\u4ED6\u5E76\u4E0D\u4F1A\u8FD0\u52A8\uFF0C\u56E0\u4E3A\u4F60\u7684\u573A\u666F\u5E76\u6CA1\u6709\u5B9E\u65F6\u6E32\u67D3\uFF0C\u6240\u4EE5\u8981\u8BA9\u573A\u666F\u771F\u7684\u52A8\u8D77\u6765\uFF0C\u6211\u4EEC\u9700\u8981\u7528\u5230<code>requestAnimationFrame</code></p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var requestAnimationFrame = window.requestAnimationFrame</span></span>
<span class="line"><span style="color:#A6ACCD;">        || window.mozRequestAnimationFrame</span></span>
<span class="line"><span style="color:#A6ACCD;">        || window.webkitRequestAnimationFrame</span></span>
<span class="line"><span style="color:#A6ACCD;">        || window.msRequestAnimationFrame;</span></span>
<span class="line"><span style="color:#A6ACCD;"> function animate() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    var delta = clock.getDelta();</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (mixers.length &gt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (var i = 0; i &lt; mixers.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            mixers[i].update(delta);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    //Renderer\u5373\u6211\u4EEC\u5B9E\u4F8B\u5316\u7684 webglRender \u5BF9\u8C61\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">    updateParticles()</span></span>
<span class="line"><span style="color:#A6ACCD;">    Renderer.clear();</span></span>
<span class="line"><span style="color:#A6ACCD;">    Renderer.render(scene, Camera);</span></span>
<span class="line"><span style="color:#A6ACCD;">    requestAnimationFrame(animate);</span></span>
<span class="line"><span style="color:#A6ACCD;">    //\u5982\u679C\u6709\u4F7F\u7528 Tween\u505A\u4E00\u4E9B\u8865\u95F4\u52A8\u753B\uFF0C\u4E5F\u9700\u8981\u5728\u6B64\u8C03\u7528 TWEEN.update();</span></span>
<span class="line"><span style="color:#A6ACCD;">    TWEEN.update();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,46),r=[l];function p(o,c,i,d,h,A){return s(),a("div",null,r)}var D=e(t,[["render",p]]);export{y as __pageData,D as default};
