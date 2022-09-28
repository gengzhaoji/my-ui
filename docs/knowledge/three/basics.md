# Three 基础

[`Three.js`](https://threejs.org/docs/index.html#manual/zh/introduction/Creating-a-scene) 是一款运行在浏览器中的 `3D` 引擎，你可以用它在 `web` 中创建各种三维场景，包括了摄影机、光影、材质等各种对象。

## 3D 场景知识点

![7ff3e8267d11bcb2b7387da5f5c5f174.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3944a14a333e4dfb8fbebb24dd1e6417~tplv-k3u1fbpfcp-watermark.image?)

-   场景`Scene`：是物体、光源等元素的容器。
-   相机`Camera`：场景中的相机，代替人眼去观察，场景中只能添加一个，常用的是透视相机`PerspectiveCamera`。
-   物体对象`Mesh`：包括二维物体（点、线、面）、三维物体，模型等。
-   光源`Light`：场景中的光照，如果不添加光照场景将会是一片漆黑，包括全局光、平行光、点光源等。
-   渲染器`Renderer`：场景的渲染方式，如 webGL\canvas2D\Css3D。
-   控制器`Control`：可通过键盘、鼠标控制相机的移动。

# 场景（Scene）

```js
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x808080);
scene.fog = new THREE.Fog('#ffffff', 20, 500);
```

场景能够让你在什么地方、摆放什么东西来交给 three.js 来渲染，这是你放置物体、灯光和摄像机的地方。

### [属性](https://threejs.org/docs/index.html?q=sc#api/zh/scenes/Scene)

-   background: Object

若不为空，在渲染场景的时候将设置背景，且背景总是首先被渲染的。

-   environment: Texture

若该值不为 null，则该纹理贴图将会被设为场景中所有物理材质的环境贴图。 然而，该属性不能够覆盖已存在的、已分配给` MeshStandardMaterial.envMap`的贴图。默认为 null。

-   fog : Fog

一个`fog`实例定义了影响场景中的每个物体的雾的类型。默认值为 null。

-   isScene : Boolean

只读标志，用于检查给定对象是否属于场景类型。

-   overrideMaterial : Material

如果不为空，它将强制场景中的每个物体使用这里的材质来渲染。默认值为 null。

### 方法

-   toJSON : Object

meta -- 包含有元数据的对象，例如场景中的的纹理或图片。 将 scene 对象转换为`JSON`（three.js JSON 物体/场景格式）。

# 相机

## Three.js 中我们常用的有两种类型的相机：

-   正交 `orthographic` 相机：一般情况下为了模拟人眼我们都是使用透视相机，特点是，物品的渲染尺寸与它距离镜头的远近无关。也就是说在场景中移动一个物体，其大小不会变化。正交镜头适合 2D 游戏
-   透视 `perspective` 相机： 透视镜头则是模拟人眼的视觉特点，距离远的物体显得更小。透视镜头通常更适合 3D 渲染。

## 透视 `perspective` 相机

`THREE.PerspectiveCamera(fov,aspect,near,far)`

| 参数   | 描述                                                                                          |
| ------ | --------------------------------------------------------------------------------------------- |
| fov    | 视野角度，从镜头可以看到的场景的部分。通常 3D 游戏的 FOV 取值在 60-90 度之间较好的默认值为 60 |
| aspect | 渲染区域的纵横比。较好的默认值为 window.innerWidth/window.innerHeight                         |
| near   | 最近离镜头的距离                                                                              |
| far    | 远离镜头的距离                                                                                |

透视相机示意图：
<img src='https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d3bccaac41ef40b99f86367dd94ca0b6~tplv-k3u1fbpfcp-zoom-1.image'>

创建摄像机以后还要对其进行移动、然后对准物体积聚的场景中心位置，分别是设置其 position 和调用 lookAt 方法，参数均是一个 xyz 向量(new THREE.Vector3(x,y,z))

```
camera.position：控制相机在整个3D环境中的位置（取值为3维坐标对象-THREE.Vector3(x,y,z)）
camera.lookAt：控制相机的焦点位置，决定相机的朝向（取值为3维坐标对象-THREE.Vector3(x,y,z)）
```

# 灯光

在 Three.js 中光源是必须的，如果一个场景你不设置灯光那么世界将会是一片漆黑。Three.js 内置了多种光源以满足特定场景的需要。大家可以根据自己的项目需要来选择何种灯光。

### 光源分类

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0fddb93a83ab4452950443b900dd1b29~tplv-k3u1fbpfcp-zoom-1.image)

# Mesh

在计算机的世界里，一条弧线是由有限个点构成的有限条线段连接得到的。当线段数量越多，长度就越短，当达到你无法察觉这是线段时，一条平滑的弧线就出现了。 计算机的三维模型也是类似的。只不过线段变成了平面，普遍用三角形组成的网格来描述。我们把这种模型称之为 Mesh 模型。 在 threeJs 的世界中，材质(Material)+几何体(Geometry)就是一个 mesh。设置其 name 属性可以通过 scene.getObjectByName(name)获取该物体对象;Geometry 就好像是骨架，材质则类似于皮肤，对于材质和几何体的分类见下表格。

### 材质分类

| 材质                 | 说明                                                                      |
| -------------------- | ------------------------------------------------------------------------- |
| MeshBasicMaterial    | 基本的材质，显示为简单的颜色或者显示为线框。不考虑光线的影响              |
| MeshDepthMaterial    | 使用简单的颜色，但是颜色深度和距离相机的远近有关                          |
| MeshNormalMaterial   | 基于面 Geometry 的法线（normals）数组来给面着色                           |
| MeshFacematerial     | 容器，允许为 Geometry 的每一个面指定一个材质                              |
| MeshLambertMaterial  | 考虑光线的影响，哑光材质                                                  |
| MeshPhongMaterial    | 考虑光线的影响，光泽材质                                                  |
| ShaderMaterial       | 允许使用自己的着色器来控制顶点如何被放置、像素如何被着色                  |
| LineBasicMaterial    | 用于 THREE.Line 对象，创建彩色线条                                        |
| LineDashMaterial     | 用于 THREE.Line 对象，创建虚线条                                          |
| RawShaderMaterial    | 仅和 THREE.BufferedGeometry 联用，优化静态 Geometry（顶点、面不变）的渲染 |
| SpriteCanvasMaterial | 在针对单独的点进行渲染时用到                                              |
| SpriteMaterial       | 在针对单独的点进行渲染时用到                                              |
| PointCloudMaterial   | 在针对单独的点进行渲染时用到                                              |

# 场景交互

Three.js 中并没有直接提供“点击”功能，一开始使用的时候我也觉得一脸懵逼，后来才发现我们可以基于 THREE.Raycaster 来判断鼠标当前对应到哪个物体,用来进行碰撞检测.

```
//核心代码
var clickObjects = []; //存储哪些 obj 需要交互
var _raycaster = new THREE.Raycaster();//射线拾取器
var raycAsix = new THREE.Vector2();//屏幕点击点二维坐标
var container = null;

function onMouseMove(event) {
    event.preventDefault();
    container = document.getElementById("Canvas1");
    raycAsix.x = ( (event.pageX - $(container).offset().left) / container.offsetWidth ) * 2 - 1;
    raycAsix.y = -( (event.pageY - $(container).offset().top) / container.offsetHeight ) * 2 + 1;
    _raycaster.setFromCamera(raycAsix, Camera);
    var intersects = _raycaster.intersectObjects(clickObjects);//获取射线上与存储的可被点击物体的集合的交集，集合的第一个物体为距离相机最近的物体，最后一个则为离相机最远的。
    if (intersects.length > 0) {
        document.body.style.cursor = 'pointer';
        console.log(intersects[0].object.name) //打印导入模型时设置的model name
    } else {
        document.body.style.cursor = 'default';
    }
}
```

其他的交互比如点击事件都是基于此。

# 动画

场景中如果我们添加了各种 mesh 和模型并给他加入了一些 tweend 动画会发现他并不会运动，因为你的场景并没有实时渲染，所以要让场景真的动起来，我们需要用到`requestAnimationFrame`

```
var requestAnimationFrame = window.requestAnimationFrame
        || window.mozRequestAnimationFrame
        || window.webkitRequestAnimationFrame
        || window.msRequestAnimationFrame;
 function animate() {
    var delta = clock.getDelta();
    if (mixers.length > 0) {
        for (var i = 0; i < mixers.length; i++) {
            mixers[i].update(delta);
        }
    }
    //Renderer即我们实例化的 webglRender 对象；
    updateParticles()
    Renderer.clear();
    Renderer.render(scene, Camera);
    requestAnimationFrame(animate);
    //如果有使用 Tween做一些补间动画，也需要在此调用 TWEEN.update();
    TWEEN.update();
}
```
