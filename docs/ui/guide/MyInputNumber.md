# MyInputNumber 数字输入框

基于[`el-input`](https://element-plus.org/zh-CN/component/input.html)进行封装，限制输入框只能输入数字。

## 基础用法

:::demo

```vue
<template>
    <my-input-number v-model="val" />
</template>
<script setup>
import { ref } from 'vue';
const val = ref('');
</script>
```

:::

## 小数

:::demo

```vue
<template>
    <my-input-number v-model="val" numberType="float-2" />
</template>
<script setup>
import { ref } from 'vue';
const val = ref('');
</script>
```

:::

## 属性

| 属性         | 说明                                                    | 类型            | 可选 | 默认值  |
| ------------ | ------------------------------------------------------- | --------------- | ---- | ------- |
| modelValue   | v-model 绑定的值                                        | {String/Number} |      |         |
| numberType   | 数据类型（整型，浮点型），`float-n`（`n` 代表几位小数） | init，float-n   |      | n，init |
| numberLength | 只能输入几位整数，`numberType=init` 时才有效，          | Number          |      |         |
