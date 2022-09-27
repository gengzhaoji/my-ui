# MyButton 按钮

完全兼容 [`el-button`](https://element-plus.org/zh-CN/component/button.html)，添加了自动化 `size` 功能，根据屏幕宽度，自动化全局 `size`。

:::demo 使用`type`，`plain`，`round`来定义 Button 的样式

```vue
<template>
    <el-row class="mb-4">
        <my-button>Default</my-button>
        <my-button type="primary">Primary</my-button>
        <my-button type="success">Success</my-button>
        <my-button type="info">Info</my-button>
        <my-button type="warning">Warning</my-button>
        <my-button type="danger">Danger</my-button>
        <my-button>中文</my-button>
    </el-row>

    <el-row class="mb-4">
        <my-button plain>Plain</my-button>
        <my-button type="primary" plain>Primary</my-button>
        <my-button type="success" plain>Success</my-button>
        <my-button type="info" plain>Info</my-button>
        <my-button type="warning" plain>Warning</my-button>
        <my-button type="danger" plain>Danger</my-button>
    </el-row>

    <el-row class="mb-4">
        <my-button round>Round</my-button>
        <my-button type="primary" round>Primary</my-button>
        <my-button type="success" round>Success</my-button>
        <my-button type="info" round>Info</my-button>
        <my-button type="warning" round>Warning</my-button>
        <my-button type="danger" round>Danger</my-button>
    </el-row>
</template>
<style>
.mb-4 {
    margin-bottom: 4px;
}
</style>
```

:::

## Button 属性

| 属性              | 说明                           | 类型               | 可选值                                             | 默认值    |
| ----------------- | ------------------------------ | ------------------ | -------------------------------------------------- | --------- |
| size              | 尺寸                           | string             | large / default /small                             | 全局 size |
| type              | 类型                           | string             | primary / success / warning / danger / info / text | —         |
| plain             | 是否为朴素按钮                 | boolean            | —                                                  | false     |
| text              | 是否为文字按钮                 | boolean            | —                                                  | false     |
| bg                | 是否显示文字按钮背景颜色       | boolean            | —                                                  | false     |
| link              | 是否为链接按钮                 | boolean            | —                                                  | false     |
| round             | 是否为圆角按钮                 | boolean            | —                                                  | false     |
| circle            | 是否为圆形按钮                 | boolean            | — false                                            |
| loading           | 是否为加载中状态               | boolean            | —                                                  | false     |
| loading-icon      | 自定义加载中状态图标组件       | string / Component | —                                                  | Loading   |
| disabled          | 按钮是否为禁用状态             | boolean            | —                                                  | false     |
| icon              | 图标组件                       | string / Component | —                                                  | —         |
| autofocus         | 原生 autofocus 属性            | boolean            | —                                                  | false     |
| native-type       | 原生 type 属性                 | string             | button / submit / reset                            | button    |
| auto-insert-space | 自动在两个中文字符之间插入空格 | boolean            | —                                                  |

## Button 插槽

| 插槽名  | 说明             |
| ------- | ---------------- |
| —       | 自定义默认内容   |
| loading | 自定义加载中组件 |
| icon    | 自定义图标组件   |

## Button-Group 属性#

| 属性 | 说明                         | 类型   | 可选值           | 默认值 |
| ---- | ---------------------------- | ------ | ---------------- | ------ |
| size | 用于控制该按钮组内按钮的大小 | string | 与按钮的大小相同 | —      |
| type | 用于控制该按钮组内按钮的类型 | string | 与按钮的类型一致 | —      |

## Button-Group 插槽

| 插槽名 | 说明             | 子标签 |
| ------ | ---------------- | ------ |
| -      | 自定义按钮组内容 | Button |
