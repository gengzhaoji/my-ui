# MyHeader 头部

头部组件，分类或分隔展示信息时使用。

## 基础用法

:::demo

```vue
<template>
    <my-header title="我是标题文字" icon="menu" />
</template>
```

:::

## 显示背景色

:::demo

```vue
<template>
    <my-header title="我是标题文字" icon="menu" background />
</template>
```

:::

## 主题

支持 `default` `border-left` `border-top` `border-bottom` `bg-icon` `bg-down` `bg-right` 7 种风格。
:::demo

```vue
<template>
    <div>
        <my-header title="我是标题文字" icon="menu" background size="large"></my-header>

        <my-header title="我是标题文字" theme="border-left" background size="large"></my-header>

        <my-header title="我是标题文字" icon="menu" theme="border-top" background size="large"></my-header>

        <my-header title="我是标题文字" icon="menu" theme="border-bottom" background size="large"></my-header>

        <my-header title="我是标题文字" icon="menu" theme="bg-icon" background size="large"></my-header>

        <my-header title="我是标题文字" icon="menu" theme="bg-down" background size="large"></my-header>

        <my-header title="我是标题文字" icon="menu" theme="bg-right" background size="large"></my-header>
    </div>
</template>
```

:::

## 尺寸

支持 `large`, `默认`, `medium`, `small` 4 种尺寸。

:::demo

```vue
<template>
    <div>
        <my-header title="我是标题文字" icon="menu" theme="bg-right" background size="large"></my-header>
        <my-header title="我是标题文字" icon="menu" theme="bg-right" background></my-header>
        <my-header title="我是标题文字" icon="menu" theme="bg-right" background size="medium"></my-header>
        <my-header title="我是标题文字" icon="menu" theme="bg-right" background size="small"></my-header>
    </div>
</template>
```

:::

## 插槽

支持 `title` 和 `handle` 插槽定义标题和工具区
:::demo

```vue
<template>
    <my-header icon="menu" background>
        <template #title>我是插槽定义的标题</template>
        <template #handle>
            <my-button type="primary" size="small">新增</my-button>
        </template>
    </my-header>
</template>
```

:::

## 属性

| 属性       | 说明               | 类型    | 可选                                                                                | 默认值    |
| ---------- | ------------------ | ------- | ----------------------------------------------------------------------------------- | --------- |
| title      | 标题文本           | String  |                                                                                     |           |
| icon       | 标题文本左侧的图标 | String  |                                                                                     |           |
| background | Boolean            | Boolean |                                                                                     | false     |
| size       | 显示尺寸           | String  | '', 'large', 'medium', 'small'                                                      | ""        |
| theme      | 风格主题           | String  | 'default','border-left','border-top','border-bottom','bg-icon','bg-down','bg-right' | "default" |

## 插槽

| 插槽名 | 说明               |
| ------ | ------------------ |
| title  | 定义标题内容       |
| handle | 定义操作功能区内容 |
