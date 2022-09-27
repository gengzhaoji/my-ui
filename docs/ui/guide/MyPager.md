# MyPager 分页组件

基于[`el-pagination`](https://element-plus.org/zh-CN/component/pagination.html)进行封装，常用属性添加默认值，以及根据宽度自适应布局功能。

## 基础用法

:::demo

```vue
<template>
    <my-pager :total="30"> </my-pager>
</template>
```

:::

## 属性

| 属性       | 说明                                                                                                                 | 类型    | 可选 | 默认值            |
| ---------- | -------------------------------------------------------------------------------------------------------------------- | ------- | ---- | ----------------- |
| sizes      | 每页显示个数选择器的选项设置，                                                                                       | Array   |      | [10, 20, 50, 100] |
| layout     | 分页组件布局（需要显示那些功能模块），子组件名用逗号分隔，或者用‘full’(默认),'small','mini','simple'来设定分页器功能 | String  |      |                   |
| size       | 分页组件每页显示条目个数                                                                                             | Number  |      | 10                |
| total      | 总条目数                                                                                                             | Number  |      | 0                 |
| page       | 组件创建时打开第 n 页，                                                                                              | Number  |      | 1                 |
| autoLayout | 控制分页器 可以自动根据组件当前的长度来显示隐藏部分子组件（如分页器变窄时，可以自动隐藏 'pager'组件）                | Boolean |      | true              |
| background | 控制 分页器的 页码按钮 是否有 背景色                                                                                 | Boolean |      | true              |
