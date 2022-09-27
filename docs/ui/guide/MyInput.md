# MyImgUpload 图片上传

基于[`el-input`](https://element-plus.org/zh-CN/component/input.html)进行封装，限制输入框禁止输入`/`，普通输入框限制长度为`100`，`textarea`为`250`，去除首尾空格。

## 基础用法

:::demo

```vue
<template>
    <my-input v-model="val" />
</template>
<script setup>
import { ref } from 'vue';
const val = ref('');
</script>
```

:::

## `textarea`输入框

:::demo

```vue
<template>
    <my-input v-model="val" type="textarea" />
</template>
<script setup>
import { ref } from 'vue';
const val = ref('');
</script>
```

:::

## 属性

| 属性       | 说明               | 类型    | 可选 | 默认值 |
| ---------- | ------------------ | ------- | ---- | ------ |
| modelValue | v-model 绑定的值   | Array   |      |        |
| fileSize   | 上传文件大小的限制 | Number  |      | 10     |
| download   | 是否允许下载图片   | Boolean |      | true   |
| limit      | 上传图片数量       | Number  |      |        |
