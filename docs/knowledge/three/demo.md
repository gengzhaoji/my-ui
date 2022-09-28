# Three 例子

使用 `vue3 + three` 进行开发。

## 安装 three

```js
pnpm i three -S
```

## three 常用说明

```js
import * as THREE from 'three';
// 控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// 第一人称控制器
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';
// 加载器
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// label标签
import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer';
// TWEEN 动画
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min.js';
// 单击选中模型高亮显示/选中模型发光
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';
```

## 创建 three.vue 文件

### 基本要素：

-   场景：`scene = new THREE.Scene()`
-   相机：`camera = new THREE.PerspectiveCamera(45, Width / Height, 1, 2000)`
-   渲染器：`renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })`
-   控制器: `controls = new OrbitControls(camera, renderer.domElement)`
-   灯光：`new THREE.AmbientLight('#ffffff', 1)`
-   渲染：`requestAnimationFrameIndex = requestAnimationFrame(render)`

### 高级要素：

-   label：`labelRenderer = new CSS2DRenderer()`
-   第一人称控制器：`LockControls = new PointerLockControls(camera, container)`
-   模型按照固定路线运动：`new THREE.CatmullRomCurve3()`
-   第一人称碰撞检测: `new THREE.Raycaster()`

### 注意：

-   组件切换需使用 `cancelAnimationFrame(requestAnimationFrameIndex)` 清除渲染任务，并释放内存。
-   使用第一人称时需要禁止 `controls?.update()` 更新。
-   在使用合成器时，我们需要对应用程序的动画循环进行更改。 现在我们不再调用 WebGLRenderer 的 render 方法，而是使用 EffectComposer 中对应的 render 方法。

```js
<template>
    <div :id="ID" @click="clickModel" style="position: relative" class="w100 h100">
        <div style="position: absolute; background-color: var(--el-overlay-color-lighter); z-index: 10" class="flex-center w100 h100" v-show="loading">
            <dv-decoration-9 :scale="2">
                <span class="fw" style="color: var(--el-mask-color); font-size: 30px"> {{ percentComplete }}% </span>
            </dv-decoration-9>
        </div>
        <div style="position: absolute; right: 10px; top: 10px" v-show="LockControlsShow">
            <el-button type="primary" @click="crateCar()">{{ inspect ? '停止' : '开始' }}巡检</el-button>
            <el-button type="success" @click="roamFn()">开始漫游</el-button>
        </div>
    </div>
</template>

<script setup name="demo7">
import { addResizeListener, removeResizeListener } from '@u/dom';
import { throttle, guid } from '@u/util';
import * as THREE from 'three';
// 控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';
// 加载器
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// label标签
import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer';
// TWEEN 动画
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min.js';
// 单击选中模型高亮显示/选中模型发光
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';

const ID = `THREEID${guid()}`;

let container, // 模型渲染的Demo节点
    renderer, //  WebGLRenderer渲染器
    labelRenderer, //  CSS2DRenderer渲染器
    scene, // 场景
    camera, // 相机
    controls, // 控制器
    LockControls, // 第一人称控制器
    loading = $ref(false),
    percentComplete = $ref(0);

// 初始化生命周期
let setupElResponsiveProxy;
onMounted(() => {
    container = document.getElementById(ID);
    setupElResponsiveProxy = throttle(function () {
        camera.aspect = container.offsetWidth / container.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.offsetWidth, container.offsetHeight);
    });
    addResizeListener(container, setupElResponsiveProxy);
    init();
});
onBeforeUnmount(() => {
    removeResizeListener(container, setupElResponsiveProxy);
    cancelAnimationFrame(requestAnimationFrameIndex);
    // 释放显存
    renderer?.dispose();
    // 释放内存
    container = null;
    scene = null;
});

function init() {
    // 场景
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x808080);
    scene.fog = new THREE.Fog('#ffffff', 20, 500);
    // 辅助三维坐标系AxesHelper
    // scene.add(new THREE.AxesHelper(250));
    // 相机
    camera = new THREE.PerspectiveCamera(45, container.offsetWidth / container.offsetHeight, 1, 2000);
    camera.position.set(260, 100, 260); //设置相机位置
    setTimeout(() => {
        setTweens(camera.position, { x: -160, y: 60, z: 160 });
    });

    // 渲染器 // antialias开启抗锯齿 alpha开启背景透明
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.offsetWidth, container.offsetHeight);

    // 添加label场景
    labelRenderer = new CSS2DRenderer(); //新建CSS2DRenderer
    labelRenderer.setSize(container.offsetWidth, container.offsetHeight);
    labelRenderer.domElement.style.position = 'absolute';
    labelRenderer.domElement.style.top = 0;
    labelRenderer.domElement.style.pointerEvents = 'none';

    // 控制器
    controls = new OrbitControls(camera, renderer.domElement);
    // 动态阻尼
    controls.enableDamping = true;
    // 垂直轨道能绕多远，这是上限。范围是0到数学。圆周率，默认为Math.PI。
    controls.maxPolarAngle = 1.5;
    // 你可以移动多远(透视相机)。默认值为0。
    controls.minDistance = 10;
    controls.maxDistance = 1000;

    // 自然光
    scene.add(new THREE.AmbientLight('#ffffff', 1));
    // 第一人称控制器
    LockControls = new PointerLockControls(camera, container);
    scene.add(LockControls.getObject());
    // 加载器
    loaderFn();
    container.appendChild(renderer.domElement);
    container.appendChild(labelRenderer.domElement);
}

// 模型加载
let objects = [];
function loaderFn() {
    // 将平面添加到场景中
    createPlaneGeometryBasicMaterial();
    // 立方体
    createBoxGeometryBasicMaterial();
    creatRoadSurface();
    createRoundGeometryBasicMaterialMax();
    createRoundGeometryBasicMaterialMin();
    crateWall();
    // 调用渲染函数
    render();
}

// 创建圆仓大public\textures
let objLoader = new OBJLoader(),
    textureLoader = new THREE.TextureLoader(); // 贴图加载器
function createRoundGeometryBasicMaterialMax() {
    objLoader.load('/models/demo7/textures/gong001.obj', function (obj) {
        var mesh = obj.children[0];
        mesh.material = new THREE.MeshBasicMaterial({
            map: textureLoader.load('/models/demo7/textures/d001.png'),
            transparent: true,
            side: THREE.DoubleSide,
            clipIntersection: true,
        });
        mesh.rotateZ(Math.PI);
        mesh.position.set(-40, 36, -105);

        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 3; j++) {
                var mc = mesh.clone();
                mc.translateX(i * 28);
                mc.translateZ(j * 20);
                mc.name = '大存储罐-G' + (i + 1) * (j + 1);
                scene.add(mc);
                objects.push(mc);
                // let text = '大存储罐-G' + (i + 1) * (j + 1);
                // let vector = new THREE.Vector3(-40 - i * 28, 50, -105 + j * 20);
                // let pointLabel = createLableObj(text, vector);
                // scene.add(pointLabel);
            }
        }
    });
}

// 新建标签
function createLableObj(text, vector) {
    let laberDiv = document.createElement('div'); //创建div容器
    laberDiv.className = 'laber_name';
    laberDiv.textContent = text + '\n' + '余量：123';
    let pointLabel = new CSS2DObject(laberDiv);
    pointLabel.position.set(vector.x, vector.y, vector.z);
    return pointLabel;
}

// 创建圆仓小
function createRoundGeometryBasicMaterialMin() {
    objLoader.load('/models/demo7/textures/002.obj', function (obj) {
        var mesh = obj.children[0];
        mesh.material = new THREE.MeshBasicMaterial({
            map: textureLoader.load('/models/demo7/textures/002.png'),
            transparent: true,
            side: THREE.DoubleSide,
            clipIntersection: true,
        });
        mesh.rotateZ(Math.PI);
        mesh.position.set(-40, 20, -19);

        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 6; j++) {
                var mc = mesh.clone();
                mc.translateX(i * 28);
                mc.translateZ(j * 24);
                mc.name = '小存储罐-G' + (i + 1) * (j + 1);
                scene.add(mc);
                objects.push(mc);
                // let text = '小存储罐-G' + (i + 1) * (j + 1);
                // let vector = new THREE.Vector3(-40 - i * 28, 35, -19 + j * 24);
                // let pointLabel = createLableObj(text, vector);
                // scene.add(pointLabel);
            }
        }
    });
}

// 创建围栏
function crateWall() {
    objLoader.load('/models/demo7/textures/wall.obj', function (obj) {
        obj.scale.set(0.98, 0.6, 1);
        const texLan = textureLoader.load('/models/demo7/textures/lan2.png');
        // 纹理重复
        texLan.wrapS = texLan.wrapT = THREE.RepeatWrapping;
        texLan.repeat.set(40, 1);
        obj.children[0].material = new THREE.MeshBasicMaterial({
            side: THREE.DoubleSide,
            map: texLan,
            transparent: true,
        });
        obj.children[1].material = new THREE.MeshBasicMaterial({
            map: textureLoader.load('/models/demo7/textures/door.png'),
            side: THREE.DoubleSide,
            transparent: true,
        });
        scene.add(obj);
        objects.push(...obj.children);
    });
}

// 创建房屋
function createBoxGeometryBasicMaterial() {
    objLoader.load('/models/demo7/textures/003.obj', function (obj) {
        var mesh = obj.children[0];
        mesh.material = new THREE.MeshBasicMaterial({
            map: textureLoader.load('/models/demo7/textures/003.png'),
        });
        mesh.scale.set(1.3, 1.4, 1.5);
        mesh.position.set(11, 0, -85);

        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 3; j++) {
                var mc = mesh.clone();
                mc.translateX(i * 52);
                mc.translateZ(j * 83);
                mc.name = '工作厂房-W' + (i + 1) * (j + 1);
                scene.add(mc);
                objects.push(mc);
                let text = '工作厂房-W' + (i + 1) * (j + 1);
                let vector = new THREE.Vector3(11 + i * 52, 18, -85 + j * 83);
                let pointLabel = createLableObj(text, vector);
                scene.add(pointLabel);
            }
        }
    });
}

// 加载车辆模型
let modelCar;
function crateCar() {
    if (!modelCar) {
        // loading = true;
        setTweens(
            camera.position,
            { x: 180, y: 80, z: 200 },
            2000,
            function () {
                const dracoLoader = new DRACOLoader();
                dracoLoader.setDecoderPath('/models/demo1/gltf/');
                const loader = new GLTFLoader();
                loader.setDRACOLoader(dracoLoader);
                loader.load(
                    `/models/demo7/叉车.glb`,
                    function (object) {
                        modelCar = object.scene;
                        modelCar.scale.set(4, 4, 4);
                        modelCar.position.set(88, 0, 115);
                        modelCar.rotateY(Math.PI);
                        scene.add(modelCar);
                        crateCarPath();
                        loading = false;
                    },
                    function (xhr) {
                        if (xhr.lengthComputable) percentComplete = Math.round((xhr.loaded / xhr.total) * 100, 2);
                    }
                );
            },
            function () {
                percentComplete += 1;
            }
        );
    }
    inspect = !inspect;
}

// 车辆模型按照固定路线运动
let curve,
    inspect = $ref(false);
function crateCarPath() {
    curve = new THREE.CatmullRomCurve3(
        [
            new THREE.Vector3(86, 0, 115),
            new THREE.Vector3(86, 0, -115),
            new THREE.Vector3(37, 0, -115),
            new THREE.Vector3(37, 0, 115),
            new THREE.Vector3(-15, 0, 115),
            new THREE.Vector3(-15, 0, -115),
            new THREE.Vector3(-86, 0, -115),
            new THREE.Vector3(-86, 0, 115),
            new THREE.Vector3(-15, 0, 115),
            new THREE.Vector3(-15, 0, -115),
            new THREE.Vector3(37, 0, -115),
            new THREE.Vector3(37, 0, 115),
        ],
        true,
        'catmullrom',
        0.15
    );
    // 绘制轨迹线
    // let geometry = new THREE.BufferGeometry();
    // geometry.setFromPoints(curve.getPoints(10000));
    // let material = new THREE.LineDashedMaterial({ color: 0x4488ff });
    // scene.add(new THREE.Line(geometry, material));
}

/**
 * 第一人称漫游视角
 */
let LockControlsShow = $ref(true), // 显示漫游按钮
    velocity = new THREE.Vector3(), //移动速度变量
    direction = new THREE.Vector3(), //移动的方向变量
    moveForward = false, //是否向前运行
    moveBackward = false, //是否向后运行
    moveLeft = false, //是否向左运行
    moveRight = false, //是否向右运行
    canJump = true; //是否可以跳

function roamFn() {
    LockControls.addEventListener('lock', function () {
        LockControlsShow = false;
    });
    LockControls.addEventListener('unlock', function () {
        LockControlsShow = true;
    });
    setTweens(LockControls.getObject().position, { x: 88, y: 10, z: 120 }, 1500, function () {
        LockControls.lock();
    });
}

document.addEventListener('keydown', keydownFn, false);
document.addEventListener('keyup', keyupFn, false);

/**
 * 跳跃高度
 */
const JumpHeight = 60;

function keydownFn(event) {
    switch (event.keyCode) {
        case 38: // up
        case 87: // w
            moveForward = true;
            break;
        case 37: // left
        case 65: // a
            moveLeft = true;
            break;
        case 40: // down
        case 83: // s
            moveBackward = true;
            break;
        case 39: // right
        case 68: // d
            moveRight = true;
            break;
        case 32: // space
            if (canJump === true) velocity.y = JumpHeight;
            canJump = false;
            break;
    }
}

function keyupFn(event) {
    switch (event.keyCode) {
        case 38: // up
        case 87: // w
            moveForward = false;
            break;
        case 37: // left
        case 65: // a
            moveLeft = false;
            break;
        case 40: // down
        case 83: // s
            moveBackward = false;
            break;
        case 39: // right
        case 68: // d
            moveRight = false;
            break;
    }
}

/**
 * 创建地面并添加材质
 * wrapS属性定义的是纹理沿x轴方向的行为，而warpT属性定义的是纹理沿y轴方向的行为。
 * Three.js为这些属性提供了如下两个选项：
 * ·THREE.RepeatWrapping允许纹理重复自己。
 * ·THREE.ClampToEdgeWrapping是属性的默认值。
 * 属性值为THREE.ClampToEdgeWrapping时，那么纹理的整体不会重复，只会重复纹理边缘的像素来填满剩下的空间。
 */
function createPlaneGeometryBasicMaterial() {
    const cubeMaterial = new THREE.MeshStandardMaterial({
        map: textureLoader.load('/models/demo7/textures/floor3.png'),
        transparent: true,
        side: THREE.DoubleSide,
    });
    // 创建地平面并设置大小
    let planeGeometry = new THREE.PlaneGeometry(190, 260);
    const plane = new THREE.Mesh(planeGeometry, cubeMaterial);
    // 设置平面位置并旋转
    plane.rotateX(-Math.PI / 2);
    scene.add(plane);
}

// 创建路面
function creatRoadSurface() {
    const geometry = new THREE.PlaneGeometry(24, 190);
    const texture = textureLoader.load('/models/demo7/textures/road2.png');
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 10);
    const material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    mesh.rotateX(-Math.PI / 2);
    mesh.rotateZ(-Math.PI / 2);
    mesh.position.z = 142;
}

/**
 * @description TWEEN动画
 */
function setTweens(obj, newObj, duration = 1500, callBack, onUpdate) {
    var ro = new TWEEN.Tween(obj);
    ro.to(newObj, duration); // 变化后的位置以及动画时间
    ro.easing(TWEEN.Easing.Sinusoidal.InOut);
    ro.onUpdate(function () {
        onUpdate?.();
    });
    ro.onComplete(function () {
        callBack?.();
    });
    ro.start();
}

/**
 * 传入角度即方向 判断附近有没有障碍物 返回障碍物数量
 */
function collideCheck(angle) {
    let rotationMatrix = new THREE.Matrix4();
    rotationMatrix.makeRotationY((angle * Math.PI) / 180);
    const cameraDirection = LockControls.getDirection(new THREE.Vector3(0, 0, 0)).clone();
    cameraDirection.applyMatrix4(rotationMatrix);
    const raycaster = new THREE.Raycaster(LockControls.getObject().position.clone(), cameraDirection, 0, 5);
    const intersections = raycaster.intersectObjects(objects, false);
    return intersections.length;
}

// 渲染逻辑
let progress = 0,
    prevTime,
    requestAnimationFrameIndex;

/**
 * 眼睛位置
 */
const eyeHeight = 8;

//四个方位是否产生碰撞
let leftCollide = false,
    rightCollide = false,
    forwardCollide = false,
    backCollide = false;
function render() {
    requestAnimationFrameIndex = requestAnimationFrame(render);
    // 巡检车辆移动
    if (curve && inspect) {
        progress += 0.0002;
        if (progress > 1) progress = 0;
        //取路径上当前点的坐标
        const { x, y, z } = curve.getPointAt(progress);
        const { x: x2, y: y2, z: z2 } = curve.getPointAt(progress + 0.0001);
        //设置车模型坐标为在相机路径上当前点的位置
        modelCar?.position?.set(x, y, z);
        // 转向
        modelCar.lookAt(x2, y2, z2);
    }
    // 漫游
    const time = performance.now();
    if (LockControls?.isLocked === true) {
        const delta = (time - prevTime) / 1000;

        //velocity每次的速度，为了保证有过渡
        velocity.x -= velocity.x * 10.0 * delta;
        velocity.z -= velocity.z * 10.0 * delta;
        velocity.y -= 9.8 * 10.0 * delta; // 默认下降的速度

        direction.z = Number(moveForward) - Number(moveBackward);
        direction.x = Number(moveLeft) - Number(moveRight);
        //将法向量的值归一化
        direction.normalize();

        //注意velocity向量，这是一个缓冲值，为了保证鼠标抬起后，场景不直接暂停，而是有一个简短的过渡效果
        if (moveForward || moveBackward) velocity.z -= direction.z * 100.0 * delta;
        if (moveLeft || moveRight) velocity.x -= direction.x * 100.0 * delta;

        let rightDistance = velocity.x * delta;
        let forwardDistance = -velocity.z * delta;
        /**
         * 碰撞检测 collide check
         */
        if (moveForward) forwardCollide = collideCheck(0);
        if (moveBackward) backCollide = collideCheck(180);
        if (moveLeft) leftCollide = collideCheck(90);
        if (moveRight) rightCollide = collideCheck(270);

        //右侧有障碍物时向右移动 置零
        if ((moveRight && rightCollide) || (moveLeft && leftCollide)) {
            rightDistance = 0;
        }
        //前方有障碍物时向前移动 置零
        if ((moveForward && forwardCollide) || (moveBackward && backCollide)) {
            forwardDistance = 0;
        }
        LockControls.getObject().position.y += velocity.y * delta; // new behavior
        // 方向移动
        LockControls?.moveRight(rightDistance);
        LockControls?.moveForward(forwardDistance);

        if (LockControls.getObject().position.y < eyeHeight) {
            velocity.y = 0;
            LockControls.getObject().position.y = eyeHeight;
            canJump = true;
        }
    } else {
        controls?.update();
    }
    prevTime = time;
    // TWEEN动画
    TWEEN?.update();
    // label标签渲染
    labelRenderer.render(scene, camera);
    /**
     * 在使用合成器时，我们需要对应用程序的动画循环进行更改。 现在我们不再调用WebGLRenderer的render方法，而是使用EffectComposer中对应的render方法。
     */
    if (!composer) renderer?.render(scene, camera);
    composer?.render();
}

// 点击事件
const raycaster = new THREE.Raycaster(),
    mouse = new THREE.Vector2();
function clickModel(e) {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    scene.add(new THREE.ArrowHelper(raycaster.ray.direction, raycaster.ray.origin, 300, 0xff0000));
    var intersects = raycaster.intersectObjects(objects); //
    //获取选中最近的Mesh对象
    //instance坐标是对象，右边是类，判断对象是不是属于这个类的
    if (intersects.length !== 0 && intersects[0].object.type === 'Mesh') {
        selectedObjectsFn(intersects[0].object);
    }
}
let composer, outlinePass;
// 高亮显示模型（呼吸灯）
function outlineObj() {
    // 创建一个EffectComposer（效果组合器）对象，然后在该对象上添加后期处理通道。
    composer = new EffectComposer(renderer);
    // 新建一个场景通道  为了覆盖到原理来的场景上
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);
    // 物体边缘发光通道
    outlinePass = new OutlinePass(new THREE.Vector2(container.offsetWidth, container.offsetHeight), scene, camera);
    outlinePass.selectedObjects = [];
    // 边框的亮度
    outlinePass.edgeStrength = 10.0;
    // 光晕[0,1]
    outlinePass.edgeGlow = 1;
    // 是否使用父级的材质
    outlinePass.usePatternTexture = false;
    // 边框宽度
    outlinePass.edgeThickness = 1.0;
    // 边框弯曲度
    outlinePass.downSampleRatio = 1;
    // 呼吸闪烁的速度
    outlinePass.pulsePeriod = 5;
    // 呼吸显示的颜色
    outlinePass.visibleEdgeColor.set(parseInt(0xffff00));
    // 呼吸消失的颜色
    outlinePass.hiddenEdgeColor = new THREE.Color(0, 0, 0);
    outlinePass.clear = true;
    composer.addPass(outlinePass);
    // 自定义的着色器通道 作为参数
    const effectFXAA = new ShaderPass(FXAAShader);
    effectFXAA.uniforms.resolution.value.set(1 / container.offsetWidth, 1 / container.offsetHeight);
    effectFXAA.renderToScreen = true;
    composer.addPass(effectFXAA);
}
// 发光的对象是个数组
function selectedObjectsFn(mesh, type = 'add') {
    if (!composer) outlineObj();
    const index = outlinePass.selectedObjects.findIndex((item) => item.name == mesh.name);
    if (index === -1 && type === 'add') {
        // 发光的对象是个数组
        outlinePass.selectedObjects.push(mesh);
    } else if (index !== -1) {
        outlinePass.selectedObjects.splice(index, 1);
    }
}
</script>

<style>
.laber_name {
    color: rgb(0, 255, 255);
    width: 100px;
    height: 30px;
    font-size: 14px;
    padding: 15px;
    background: url('/models/demo7/textures/msg-bg.png') no-repeat;
    background-size: cover;
    cursor: pointer;
    pointer-events: auto;
}
</style>
```

![GIF 2022-9-9 16-21-41.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7905ff3a69e047a49f96531f9ed126ae~tplv-k3u1fbpfcp-watermark.image?)
