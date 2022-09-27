# MyPreview 文件预览

该组件使用`docx-preview`实现 `word` 文档的预览,使用`xlsx`实现 `xlsx` 文档的预览,还包含图片文件和`pdf`的预览功能。

## 基础用法

:::demo

```vue
<template>
    <my-preview :url="previewUrl" @close="previewUrl = ''" />
</template>

<script setup>
import { ref } from 'vue';

// 预览的文件地址
let previewUrl = ref('');
</script>
```

:::

## 属性

| 属性 | 说明     | 类型   | 可选值 | 默认值 |
| ---- | -------- | ------ | ------ | ------ |
| url  | 文件地址 | String |        |        |
