# MyDatePicker 日期时间选择器

完全兼容[`el-date-picker`](https://element-plus.org/zh-CN/component/datetime-picker.html)，扩展了默认时间、默认`shortcuts`等功能。

## 基础用法

:::demo 基础用法

```vue
<template>
    <my-date-picker :autoshortcuts="false" />
</template>
```

:::

## 默认当前时间

:::demo 默认当前时间

```vue
<template>
    <my-date-picker v-model="date" now />
</template>

<script setup>
import { ref } from 'vue';
const date = ref('');
</script>
```

:::

## 默认添加`shortcuts`

:::demo 默认添加`shortcuts`

```vue
<template>
    <my-date-picker />
</template>
```

:::

## 属性

| 属性          | 说明                         | 类型                  | 可选 | 默认值 |
| ------------- | ---------------------------- | --------------------- | ---- | ------ |
| modelValue    | 默认值                       | [String, Array, Date] |      |        |
| now           | 是否默认为当前时间           | Boolean               |      | false  |
| autoshortcuts | 是否添加默认规则的 shortcuts | Boolean               |      | true   |
