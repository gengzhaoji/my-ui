# Three 灯光

## 光源的基类 Light 包含着所有其他的光公用属性和方法

这里面的属性和方法是下面要介绍的灯光类型所继承的，也就是共有的，都可调用

### 属性

-   color : Color

光源的颜色。如果构造的时候没有传递，默认会创建一个新的 Color 并设置为白色。

-   intensity : Float

光照的强度，或者说能量。 在 physically correct 模式下, color 和强度 的乘积被解析为以坎德拉（candela）为单位的发光强度。 默认值 为 1.0

-   isLight : Boolean

判断对象是否是灯光对象，只读属性

### 方法

-   copy ( source : Light ) : this

从 source 复制 color, intensity 的值到当前光源对象中。

-   toJSON ( meta : Object ) : Object

以 JSON 格式返回光数据。

## 环境光( AmbientLight )

### 概念

-   环境光会均匀的照亮场景中的所有物体。
-   环境光不能用来投射阴影，因为它没有方向。
-   具体作用就是弱化阴影或者给场景添加一些颜色，所以设置的时候只需设置一些颜色即可。

### 构造函数

`AmbientLight( color : Integer, intensity : Float )`

-   color - (参数可选）颜色的 rgb 数值。缺省值为 0xffffff。
-   intensity - (参数可选)光照的强度。缺省值为 1。

### 属性

.isAmbientLight : Boolean

判断对象是否是环境光，只读属性

### 方法

继承基类 Light 方法，上方有介绍。

### 代码示例

```js
const light = new THREE.AmbientLight(0x404040);
scene.add(light);
```

## 平行光（DirectionalLight）

### 概念

-   平行光是沿着特定方向发射的光。这种光的表现像是无限远,从它发出的光线都是平行的。常常用平行光来模拟太阳光 的效果；太阳足够远，因此我们可以认为太阳的位置是无限远，所以我们认为从太阳发出的光线也都是平行的。

-   Three.js 的平行光类似与其他引擎的"目标平行光"它的方向是从一个平行光的位置 position 到 target 的位置。 (而不是一个只有旋转分量的’自由平行光’)。

### 构造函数

`DirectionalLight( color : Integer, intensity : Float )`

-   color - (可选参数) 16 进制表示光的颜色。 缺省值为 0xffffff (白色)。
-   intensity - (可选参数) 光照的强度。缺省值为 1。

### 属性

-   castShadow : Boolean

如果设置为 true 该平行光会产生动态阴影，该属性默认为 false。

-   isDirectionalLight : Boolean

判断对象是否是环境光，只读属性

-   position : Vector3

假如这个值设置等于 Object3D.DefaultUp (0, 1, 0),那么光线将会从上往下照射。

-   shadow : DirectionalLightShadow

这个 DirectionalLightShadow 对象用来计算该平行光产生的阴影。

-   target : Object3D

> **注意:**
>
> 平行光的方向是从它的位置到目标位置。默认的目标位置为原点 (0,0,0)。
>
> 对于目标的位置，要将其更改为除缺省值之外的任何位置,它必须被添加到 scene 场景中去。

### 方法

继承基类 Light 方法，上方有介绍。

### 代码示例

```js
const targetObject = new THREE.Object3D();
scene.add(targetObject);

light.target = targetObject;
```

## 点光源（PointLight）

### 概念

从一个点向各个方向发射的光源。一个常见的例子是模拟一个灯泡发出的光。

### 构造函数

`PointLight(color:Integer, intensity:Float, distance:Number, decay:Float)`

-   color: (可选参数)) 十六进制光照颜色。 缺省值 0xffffff (白色)。
-   intensity: (可选参数) 光照强度。 缺省值 1。
-   distance: 这个距离表示从光源到光照强度为 0 的位置。 当设置为 0 时，光永远不会消失(距离无穷大)。缺省值 0.
-   decay: 沿着光照距离的衰退量。缺省值 1。 在 physically correct 模式中，decay = 2。

### 属性

-   decay: Float

沿着光照距离的衰减量在 physically correct 模式下，decay 设置为等于 2 将实现现实世界的光衰减。缺省值为 1。

-   distance: Float

如果非零，那么光强度将会从最大值当前灯光位置处按照距离线性衰减到 0。 缺省值为 0.0。

### 方法

继承基类 Light 方法，上方有介绍。

### 代码示例

```js
const light = new THREE.PointLight(0xff0000, 1, 100);
light.position.set(50, 50, 50);
scene.add(light);
```

## 聚光灯（SpotLight）

### 概念

光线从一个点沿一个方向射出，随着光线照射的变远，光线圆锥体的尺寸也逐渐增大
锥形效果的光源，能够产生阴影

### 构造函数

`SpotLight( color : Integer, intensity : Float, distance : Float, angle : Radians, penumbra : Float, decay : Float )`

-   color：(可选参数) 十六进制光照颜色。 缺省值 0xffffff (白色)。
-   intensity：(可选参数) 光照强度。 缺省值 1。
-   distance：从光源发出光的最大距离，其强度根据光源的距离线性衰减。
-   angle：光线散射角度，最大为 Math.PI/2。
-   penumbra：聚光锥的半影衰减百分比。在 0 和 1 之间的值。默认为 0。
-   decay：沿着光照距离的衰减量。

### 属性

-   angle : Float

从聚光灯的位置以弧度表示聚光灯的最大范围。应该不超过 Math.PI/2。默认值为 Math.PI/3。

-   castShadow : Boolean

此属性设置为 true 聚光灯将投射阴影。警告: 这样做的代价比较高而且需要一直调整到阴影看起来正确。 查看 SpotLightShadow 了解详细信息。默认值为 false

-   decay : Float

-   沿着光照距离的衰减量在 physically correct 模式下，decay 设置为等于 2 将实现现实世界的光衰减。缺省值为 1
-   distance : Float

如果非零，那么光强度将会从最大值当前灯光位置处按照距离线性衰减到 0。 缺省值为 0.0。

-   penumbra : Float

聚光锥的半影衰减百分比。在 0 和 1 之间的值。 默认值 — 0.0。

-   position : Vector3

假如这个值设置等于 Object3D.DefaultUp (0, 1, 0)，那么光线将会从上往下照射。

### 方法

继承基类 Light 方法，上方有介绍。

### 代码示例

```js
const spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(100, 1000, 100);

spotLight.castShadow = true;

spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;

spotLight.shadow.camera.near = 500;
spotLight.shadow.camera.far = 4000;
spotLight.shadow.camera.fov = 30;

scene.add(spotLight);
```
