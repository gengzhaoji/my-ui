# MyCascader 按钮

对 `el-cascader` 组件进行二次封装，集成数据字典数据自动查询，简化每次查询 `list` 的工作。

:::demo 使用 `MyCascader` 组件

```vue
<template>
    <MyCascader></MyCascader>
</template>
```

:::

## 说明

```js
/***
 * 参数属性
 * @property {list[]} list 数据源
 * @property {String} type store.dispatch的方法名
 * @property {String} code 字典类型，传type/code进行数据字典数据请求
 */

/**
 * 事件
 * @property {} getLabel 获取 `Label` 值
 */
```
