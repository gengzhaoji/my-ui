# MyEditor 富文本

基于[`wangeditor`](https://www.wangeditor.com/)进行封装，扩展为 `elForm` 子元素，拥有 `elFormItem` 的功能。

## 基础用法

:::demo 默认编辑器

```vue
<template>
    <my-editor />
</template>
```

:::

:::demo 简单编辑器

```vue
<template>
    <my-editor toolbar="simple" />
</template>
```

:::

## 属性

| 属性       | 说明                                       | 类型           | 可选                      | 默认值  |
| ---------- | ------------------------------------------ | -------------- | ------------------------- | ------- |
| modelValue | 默认值                                     | String         |                           |         |
| toolbar    | 工具条                                     | {string/array} | simple、classic、document | classic |
| config     | CKEditor 实例化配置参数                    | Object         |                           |         |
| height     | 编辑器高度，如果不设置，即根据输入内容适应 | String         |                           | 300px   |
