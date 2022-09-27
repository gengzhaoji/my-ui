# MyListPanel 内容分页

基于[`my-pager`](/ui/guide/MyPager.html)进行封装，集成了请求数据功能。

## 基础用法

:::demo

```vue
<template>
    <my-list-panel :total="30"> </my-list-panel>
</template>
```

:::

## 属性

| 属性   | 说明                                                      | 类型                        | 可选 | 默认值                                            |
| ------ | --------------------------------------------------------- | --------------------------- | ---- | ------------------------------------------------- |
| pager  | 是否使用分页控件                                          | Boolean                     |      | true                                              |
| loadFn | 数据加载函数，参数为 加载页和 单页数量。需要返回`promise` | Function(pageNum, pageSize) |      |                                                   |
| isAuto | 是否在组件初始化时自动加载数据，                          | Boolean                     |      | true                                              |
| size   | 分页组件每页显示条目个数                                  | Number                      |      | 20                                                |
| sizes  | 每页显示个数选择器的选项设置，                            | Array                       |      | [5, 10, 20, 30, 50, 100]                          |
| total  | 总条目数                                                  | Number                      |      | 0                                                 |
| layout | 组件布局，子组件名用逗号分隔                              | String                      |      | 'total,sizes, ->, prev, pager, next, jumper,slot' |
