# MyImgUpload 图片上传

基于[`el-upload`](https://element-plus.org/zh-CN/component/upload.html)进行封装，封装图片上传，文件详情下载、删除功能，扩展为扩展为 `elForm` 子元素，拥有 `elFormItem` 的功能。

## 基础用法

:::demo

```vue
<template>
    <my-img-upload v-model="imgFile" />
</template>
<script setup>
import { ref } from 'vue';
const imgFile = ref([]);
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
