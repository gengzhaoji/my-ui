# MyPanel 面板容器

[`el-card`](https://element-plus.org/zh-CN/component/card.html)和[`my-header`](/ui/guide/MyHeader)进行的封装，Panel(面板)是一个容器，它具有特定的功能和结构部件，这使它成为面向应用用户界面的完美基石。

## 基础用法

:::demo

```vue
<template>
    <my-panel title="容器标题"> 我是内容 </my-panel>
</template>
```

:::

## 定义标题和图标

:::demo

```vue
<template>
    <my-panel icon="menu">
        <template #title>我是插槽定义的标题</template>
        我是内容
    </my-panel>
</template>
```

:::

## 阴影显示时机

:::demo

```vue
<template>
    <el-row :gutter="20">
        <el-col :span="8">
            <my-panel title="容器标题" shadow="always"> always </my-panel>
        </el-col>
        <el-col :span="8">
            <my-panel title="容器标题" shadow="hover"> hover </my-panel>
        </el-col>
        <el-col :span="8">
            <my-panel title="容器标题" shadow="never"> never </my-panel>
        </el-col>
    </el-row>
</template>
```

:::

## 风格设置

:::demo

```vue
<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <my-panel title="容器标题" icon="menu"> 默认风格 </my-panel>
            </el-col>
            <el-col :span="8">
                <my-panel title="容器标题" theme="background" icon="menu"> 头部加背景 </my-panel>
            </el-col>
            <el-col :span="8">
                <my-panel title="容器标题" theme="border-top" icon="menu"> 顶部加边框 </my-panel>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="8">
                <my-panel title="容器标题" theme="border-left"> 标题左边框 </my-panel>
            </el-col>
            <el-col :span="8">
                <my-panel title="容器标题" theme="flag" icon="menu"> 标题标志 </my-panel>
            </el-col>
        </el-row>
    </div>
</template>

<style lang="scss" scoped>
.my-panel {
    margin-top: 20px;
}
</style>
```

:::

## 尺寸设置

:::demo

```vue
<template>
    <el-row :gutter="20">
        <el-col :span="6">
            <my-panel title="容器标题" size="large" icon="menu"> 大尺寸 </my-panel>
        </el-col>
        <el-col :span="6">
            <my-panel title="容器标题" icon="menu"> 默认 </my-panel>
        </el-col>
        <el-col :span="6">
            <my-panel title="容器标题" size="medium" icon="menu"> 中 </my-panel>
        </el-col>
        <el-col :span="6">
            <my-panel title="容器标题" size="small" icon="menu"> 小 </my-panel>
        </el-col>
    </el-row>
</template>
```

:::

## 适配父容器

:::demo

```vue
<template>
    <div class="box">
        <my-panel title="容器标题" icon="menu" fit>
            <p v-for="n in 20" :key="n">占位文字</p>
        </my-panel>
    </div>
</template>

<style lang="scss" scoped>
.box {
    width: 100%;
    height: 200px;
}
</style>
```

:::

## 隐藏边框

:::demo

```vue
<template>
    <my-panel title="容器标题" icon="menu" :border="false" shadow="never"> 我是内容 </my-panel>
</template>
```

:::

## 定义操作区内容

:::demo

```vue
<template>
        <my-panel title="容器标题" icon="menu">
            <template #handle>
                <my-button type='primary'>操作</-button>
            </template>
            我是内容
        </my-panel>
</template>

<style lang="scss" scoped>
.my-panel {
    margin-bottom: 2rem;
}
</style>
```

:::

## 设置角标

:::demo

```vue
<template>
    <my-panel title="容器标题">
        <my-corner-mark>角标</my-corner-mark>
    </my-panel>
</template>
```

:::

## 属性

| 属性        | 说明                                                  | 类型    | 可选值                                                                                           | 默认值 |
| ----------- | ----------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------ | ------ |
| header      | 是否显示头部                                          | Boolean |                                                                                                  | true   |
| shadow      | 设置阴影显示时机                                      | String  | 'always', 'hover', 'never'                                                                       | always |
| title       | 标题文本，如果需要设置复制的标题，可以使用 title 插槽 | String  |                                                                                                  |        |
| icon        | 标题左侧的图标                                        | String  |                                                                                                  |        |
| theme       | 风格设置                                              | String  | '','background','flag','border-left','border-top','border-bottom','bg-icon','bg-down','bg-right' | ''     |
| fit         | 设置自适应父节点的高度                                | Boolean |                                                                                                  |        |
| size        | 设置尺寸                                              | String  | '', 'large', 'medium', 'small'                                                                   | ''     |
| border      | 设置是否显示边框                                      | Boolean |                                                                                                  | true   |
| bodyStyle   | 主体内容设置样式                                      | Object  |                                                                                                  |        |
| headerStyle | 头部设置样式                                          | Object  |                                                                                                  |        |

## 插槽

| 插槽名  | 说明                                                       |
| ------- | ---------------------------------------------------------- |
| default | 默认插槽，定义容器放置的内容                               |
| header  | 自定义头部内容，如果自定义头部，title 和 handle 插槽将失效 |
| title   | 定义标题内容                                               |
| handle  | 定义右上角的操作区                                         |
