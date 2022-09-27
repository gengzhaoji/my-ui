# MySelect 下拉选择

对 [`el-select`](https://element-plus.org/zh-CN/component/select.html) 组件进行二次封装，集成数据字典数据自动查询，简化每次查询 `list` 的工作。

## 基础使用

:::demo

```vue
<template>
    <my-select v-model="val" :list="options"></my-select>
</template>

<script setup>
import { ref } from 'vue';

let val = ref('');
const options = [
    { dictValue: 'Option1', dictLabel: 'Option1' },
    { dictValue: 'Option2', dictLabel: 'Option2' },
    { dictValue: 'Option3', dictLabel: 'Option3' },
];
</script>
```

:::

## 添加全部选项

:::demo

```vue
<template>
    <my-select needAll v-model="val" :list="options"></my-select>
</template>

<script setup>
import { ref } from 'vue';

let val = ref('');
const options = [
    { dictValue: 'Option1', dictLabel: 'Option1' },
    { dictValue: 'Option2', dictLabel: 'Option2' },
    { dictValue: 'Option3', dictLabel: 'Option3' },
];
</script>
```

:::

## 扩展属性

| 属性       | 说明                                                             | 类型     | 默认值                                   |
| ---------- | ---------------------------------------------------------------- | -------- | ---------------------------------------- |
| modelValue | 默认值                                                           |          |                                          |
| list       | 下拉选择的数据源                                                 | Array    | []                                       |
| needAll    | 是否需要全部选项                                                 | Boolean  | false                                    |
| fillType   | 数据格式                                                         | Object   | ` {label:'dictLabel',value:'dictValue'}` |
| loadmoreFn | 滚动加载的方法，loadmoreFn 传入时 popper-append-to-body 为 false | Function |                                          |
| type       | store.dispatch 的方法名(调用 dict/com 数据获取方法名)            | String   |                                          |
| code       | 字典类型，传 `type/code` 进行数据字典数据请求                    | String   |                                          |

## 扩展事件

| 事件名   | 说明                 | 回调参数   |
| -------- | -------------------- | ---------- |
| getLabel | 获取选中的`Label` 值 | `Label` 值 |
