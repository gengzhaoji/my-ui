# MyForm 表单

基于[`el-form`](https://element-plus.org/zh-CN/component/form.html)进行封装，封装了查询 `form` 表单一行显示，更多展开查询功能，以及根据配置数组生成 `form` 表单，，表单默认校验`rules`数组，以及常用新增，详情等展示 `form` 表单。

## 基础用法

:::demo

```vue
<template>
    <my-form
        :model="formModel"
        :formItem="[
            { label: '名称', prop: 'name', required: true },
            { label: '年龄', prop: 'year', itemType: 'number' },
            { label: '性别', prop: 'sex', itemType: 'select' },
        ]"
        label-width="60px"
    />
</template>

<script setup>
import { ref } from 'vue';

const formModel = ref({
    name: '',
    year: '',
    sex: '',
});
</script>
```

:::

## 详情

:::demo

```vue
<template>
    <my-form
        :model="formModel"
        :formItem="[
            { label: '名称', prop: 'name', required: true },
            { label: '年龄', prop: 'year', itemType: 'number' },
        ]"
        label-width="60px"
        :detail="true"
    />
</template>

<script setup>
import { ref } from 'vue';

const formModel = ref({
    name: '耿朝继',
    year: 28,
});
</script>
```

:::

## 栅格布局

:::demo

```vue
<template>
    <my-form
        :model="formModel"
        :formItem="[
            { label: '名称', prop: 'name', required: true },
            { label: '年龄', prop: 'year', itemType: 'number' },
            { label: '测试1', prop: 'name1' },
            { label: '测试2', prop: 'name2' },
            { label: '测试3', prop: 'name3' },
        ]"
        label-width="60px"
        colFlag
    />
</template>

<script setup>
import { ref } from 'vue';

const formModel = ref({});
</script>
```

:::

## 查询表单

:::demo

```vue
<template>
    <my-form
        inline
        query
        :model="formModel"
        :formItem="[
            { label: '名称', prop: 'name', required: true },
            { label: '年龄', prop: 'year', itemType: 'number' },
            { label: '测试1', prop: 'name1' },
            { label: '测试2', prop: 'name2' },
            { label: '测试3', prop: 'name3' },
        ]"
        label-width="60px"
    />
</template>

<script setup>
import { ref } from 'vue';

const formModel = ref({});
</script>
```

:::

## 属性

| 属性        | 说明                                                                                                                     | 类型    | 可选 | 默认值 |
| ----------- | ------------------------------------------------------------------------------------------------------------------------ | ------- | ---- | ------ |
| formItem    | `formItem` 生成 `form` 表单的配置数组                                                                                    | Array   | 必传 |        |
| query       | 是否默认添加查询、重置按钮（查询表单）                                                                                   | Boolean |      | false  |
| rules       | `form` 表单的校验对象                                                                                                    | Object  |      | {}     |
| columns     | 默认一行显示的 `form-item` 数量 默认为 3 个                                                                              | Number  |      | 3      |
| listenEl    | 是否监听该 `form` 的宽度以自适应 一行显示的 `form-item` 数量 (必须在是 `query` 为 `true` 的时候才会生效，columns 将失效) | Boolean |      | true   |
| collapsible | 是否支持表单项展开、收起 (必须在是 `query` 为 `true` 的时候才会生效)                                                     | Boolean |      | true   |
| collapsed   | 初始收起表单项目，`collapsible=true` 是才有效                                                                            | Boolean |      | true   |
| detail      | 表单是否为详情展示表单                                                                                                   | Boolean |      | false  |
| colFlag     | 是否开启表单响应式                                                                                                       | Boolean |      | true   |

## 插槽

| 插槽名      | 说明                                     | 插槽作用域            |
| ----------- | ---------------------------------------- | --------------------- |
| `item.prop` | 每个`formItem`对象的`prop`即为**插槽名** | `{model，prop，item}` |
