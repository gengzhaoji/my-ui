# MyCornerMark 角标

## 基础用法

:::demo 基础用法

```vue
<template>
    <my-panel>
        <my-corner-mark>HOT</my-corner-mark>
    </my-panel>
</template>
```

:::

## 颜色

:::demo 颜色

```vue
<template>
    <div>
        <my-panel>
            <my-corner-mark>HOT</my-corner-mark>
        </my-panel>
        <my-panel>
            <my-corner-mark type="success">HOT</my-corner-mark>
        </my-panel>
        <my-panel>
            <my-corner-mark type="warning">HOT</my-corner-mark>
        </my-panel>
        <my-panel>
            <my-corner-mark type="danger">HOT</my-corner-mark>
        </my-panel>
    </div>
</template>
```

:::

## 尺寸

:::demo 尺寸

```vue
<template>
    <div>
        <my-panel>
            <my-corner-mark size="large">HOT</my-corner-mark>
        </my-panel>
        <my-panel>
            <my-corner-mark>HOT</my-corner-mark>
        </my-panel>
        <my-panel>
            <my-corner-mark size="small">HOT</my-corner-mark>
        </my-panel>
    </div>
</template>
```

:::

## 属性

| 属性   | 说明               | 类型               | 可选                                             | 默认值    |
| ------ | ------------------ | ------------------ | ------------------------------------------------ | --------- |
| type   | 颜色               | String             | 'primary', 'success', 'warning', 'danger','info' | 'primary' |
| size   | 尺寸               | String             | 'large', '', 'small'                             | ''        |
| target | 添加到目标的选择器 | String,HTMLElement |                                                  |           |

## 插槽

| 插槽名 | 说明               |
| ------ | ------------------ |
| -      | 自定义角标文字内容 |
