# MyCapture 截取屏幕

基于[`html2canvas`](http://html2canvas.hertzen.com/)封装的截屏组件。

:::demo 使用 `MyCapture` 组件

```vue
<template>
    <div>
        <h1>hello world</h1>
        <p>capture控件默认以document.body作为目标dom进行截图</p>
        <my-capture></my-capture>
    </div>
</template>
```

:::

## 属性

| 属性          | 说明                                      | 类型          | 可选值 | 默认值        |
| ------------- | ----------------------------------------- | ------------- | ------ | ------------- |
| fileName      | 保存的图片名称，默认为当前时间            | String        |        | 当前时间      |
| dom           | 需要截取的 `Dom` 节点                     | `HTMLElement` |        | document.body |
| beforeCapture | 截图前与执行函数，必须返回 `Promise` 对象 | Function      |        |               |
| options       | `html2canvas` 的配置项                    | Object        |        | {}            |

## `html2canvas` 的配置项

| 属性                   | 说明                                                                                                                                              | 类型          | 默认值                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ----------------------- |
| allowTaint             | 是否允许跨域图像（原 `h2c` 组件默认是 `false`，封装时定义为 `true`），会污染画布，导致无法使用`canvas.toDataURL`方法                              | Boolean       | true                    |
| backgroundColor        | `canvas` 的背景颜色默认为白，设置 `null` 为透明                                                                                                   | String        | #fffff                  |
| canvas                 | 现有 `canvas` 元素用作绘图的基础                                                                                                                  | `HTMLElement` | null                    |
| foreignObjectRendering | 如果浏览器支持，是否使用 `ForeignObject` 呈现                                                                                                     | Boolean       | false                   |
| imageTimeout           | 加载图像的超时时间（以毫秒为单位）。设置 `0` 为禁用超时，默认是 `15s`                                                                             | Number        | 15000                   |
| ignoreElements         | 谓词功能，可从渲染中删除匹配的元素                                                                                                                | Function      | (element) => false      |
| logging                | 是否在 `console` 中打印转化过程，`h2c` 中默认打印，封装转为默认不打印                                                                             | Boolean       | false                   |
| onclone                | 克隆文档以进行渲染时调用的回调函数可用于修改将要渲染的内容，而不会影响原始源文档                                                                  |               | null                    |
| proxy                  | 代理将用于加载跨域图像的网址。如果保留为空，则不会加载跨域图像。                                                                                  |               | null                    |
| removeContainer        | 是否清除 `h2c` 组件调用时生成的临时 `dom` 节点，默认 `true`                                                                                       | Boolean       | true                    |
| scale                  | 图片的比例 默认为浏览器的 `dpr` 比                                                                                                                | Number        | window.devicePixelRatio |
| useCORS                | 是否允许开启跨域，原 `h2`c 默认为 `false`， 封装时定义为 `true`                                                                                   | Boolean       | true                    |
| width                  | `canvas` 的宽度                                                                                                                                   | Number        | element.width           |
| height                 | `canvas` 的高度                                                                                                                                   | Number        | element.height          |
| x                      | `canvas` 的 原点 处于 dom 原点的 水平距离（x 距离），并在此位置开始渲染（原点为左上角）                                                           | Number        | x = ele.x-offset        |
| y                      | `canvas` 的 原点 处于 dom 原点的 垂直距离（y 距离），并在此位置开始渲染（原点为左上角）                                                           | Number        | y = ele.y-offset        |
| scrollX                | 渲染元素时要使用的 x 滚动位置（例如，如果 Element 使用 position: fixed）                                                                          | Number        | element.scrollX         |
| scrollY                | 呈现元素时要使用的 y 滚动位置（例如，如果 Element 使用 position: fixed）                                                                          | Number        | element.scrollY         |
| windowWidth            | 在渲染 dom 时的实时 window.innerWidth, 可以手动修改 (修改此参数会让 dom 内一些根据 windows 大小而改变布局/大小的节点以此值来改变原来的位置和大小) | Number        | Window.innerWidth       |
| innerHeight            | 在渲染 dom 时的实时 window.innerWidth, 可以手动修改                                                                                               | Number        | Window.innerHeight      |

## 插槽

| 插槽名   | 说明                        |
| -------- | --------------------------- |
| `button` | 放置 `button` 按钮的 `slot` |

## 解决图片清晰度问题

每个设备的 window.devicePixelRatio 的值不尽一样，想清晰就调高，想压缩大小就调低。但调的越高，图片的生成时间就越长。

```js
html2canvas(document.body, { scale: 1.3 }).then(function (canvas) {
    var imgUrl = canvas.toDataURL();
    //imgUrl即为图片的base64形式
});
```
