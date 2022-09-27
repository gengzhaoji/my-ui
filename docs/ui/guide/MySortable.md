# MySortable 拖拽排序

基于 [`sortablejs`](http://www.sortablejs.com/) 封装的拖拽组件。

## 基础用法

:::demo

```vue
<template>
    <my-sortable :data="[1, 2, 3, 4, 5]"></my-sortable>
</template>

<style lang="scss">
.my-sortable {
    margin-bottom: 50px;
}
.my-sortable > div {
    height: 40px;
    line-height: 40px;
    margin: 5px;
    background: #ddd;
}
</style>
```

:::

## 属性

| 属性    | 说明                | 类型   | 默认值 |
| ------- | ------------------- | ------ | ------ |
| data    | 数据                | Array  | []     |
| options | Sortablejs 参数选项 | Object | {}     |

## [Sortablejs 配置](http://www.sortablejs.com/options.html)
