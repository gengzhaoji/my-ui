# MyMenu 菜单

基于[`el-menu`](https://element-plus.org/zh-CN/component/menu.html)进行封装，组件递归自我调用，菜单图标使用 `class` 的字体图标。

## 基础用法

:::demo

```vue
<template>
    <my-menu :data="menuList"> </my-menu>
</template>
<script setup>
let menuList = [
    {
        path: '/system',
        meta: {
            title: '系统管理',
            icon: 'menu',
        },
        children: [
            {
                path: '/user',
                meta: {
                    title: '用户管理',
                    icon: 'menu',
                },
            },
            {
                path: '/dict',
                meta: {
                    title: '字典管理',
                    icon: 'menu',
                },
            },
        ],
    },
];
</script>
```

:::

## 属性

| 属性 | 说明                     | 类型  | 可选 | 默认值 |
| ---- | ------------------------ | ----- | ---- | ------ |
| data | 生成菜单的数据，**必传** | Array |      | []     |
