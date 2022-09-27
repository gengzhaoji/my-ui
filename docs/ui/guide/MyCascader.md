# MyCascader 级联选择

对 [`el-cascader`](https://element-plus.org/zh-CN/component/cascader.html) 组件进行二次封装，集成数据字典数据自动查询，简化每次查询 `list` 的工作，完全兼容[`el-cascader`](https://element-plus.org/zh-CN/component/cascader.html)

:::demo 使用 `MyCascader` 组件

```vue
<template>
    <my-cascader></my-cascader>
</template>
```

:::

## 扩展属性

| 属性 | 说明                                                  | 类型   | 默认值 |
| ---- | ----------------------------------------------------- | ------ | ------ |
| list | 下拉选择的数据源                                      | Array  | []     |
| type | store.dispatch 的方法名(调用 dict/com 数据获取方法名) | String |        |
| code | 字典类型，传 `type/code` 进行数据字典数据请求         | String |        |

## 扩展事件

| 事件名   | 说明                 | 回调参数   |
| -------- | -------------------- | ---------- |
| getLabel | 获取选中的`Label` 值 | `Label` 值 |
