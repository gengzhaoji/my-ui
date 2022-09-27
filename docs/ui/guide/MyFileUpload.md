# MyFileUpload 文件上传

基于[`el-upload`](https://element-plus.org/zh-CN/component/upload.html)进行封装，封装文件上传，文件详情的改名、下载、删除功能，扩展为扩展为 `elForm` 子元素，拥有 `elFormItem` 的功能。

## 显示提示

:::demo

```vue
<template>
    <my-file-upload v-model="file" />
</template>

<script setup>
import { ref } from 'vue';

const file = ref([]);
</script>
```

:::

## 不显示提示

:::demo

```vue
<template>
    <my-file-upload v-model="file" :isShowTip="false" />
</template>

<script setup>
import { ref } from 'vue';
const file = ref([]);
</script>
```

:::

## 属性

| 属性       | 说明                                                                     | 类型            | 可选 | 默认值 |
| ---------- | ------------------------------------------------------------------------ | --------------- | ---- | ------ |
| modelValue | v-model 绑定的值                                                         | [Array, String] |      |        |
| fileSize   | 上传文件大小的限制                                                       | Number          |      | 100    |
| isShowTip  | 是否显示上传框的提示                                                     | Boolean         |      | true   |
| download   | 是否允许下载文件                                                         | Boolean         |      | true   |
| disabled   | 是否允许操作（上传文件等操作，如果不传默认按照 form 表单的 disabled 值） | Boolean         |      |        |
| limit      | 上传附件数量                                                             | Number          |      | 1      |
