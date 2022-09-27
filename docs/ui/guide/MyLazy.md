# MyLazy 懒渲染

该组件用户内容过多，滚动到需要渲染的 `dom` 时，才进行渲染，使用`import { useIntersectionObserver } from '@vueuse/core'; `方法进行监听。

[@vueuse/core](https://vueuse.org/)

## 基础用法

:::demo

```vue
<template>
    <my-lazy>
        <my-form
            :model="formModel"
            :formItem="[
                { label: '名称', prop: 'name', required: true },
                { label: '年龄', prop: 'year', itemType: 'number' },
                { label: '性别', prop: 'sex', itemType: 'select' },
            ]"
            label-width="60px"
        />
    </my-lazy>
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

## 插槽

| 插槽名 | 说明     |
| ------ | -------- |
| -      | 渲染内容 |
