# MyMarquee 无缝滚动

滚动容器需要固定尺寸。

## 基础用法

:::demo

```vue
<template>
    <my-marquee style="height: 150px" :data="list">
        <div v-for="item in list" :key="item.title" class="marqueeItem">
            <span class="title">{{ item.title }}</span>
            <span class="date">{{ item.date }}</span>
        </div>
    </my-marquee>
</template>
<script setup>
import { ref } from 'vue';

let list = ref([]);

for (let i = 0; i < 20; i++) {
    list.value.push({
        title: `无缝滚动第${i}行无缝滚动第${i}行`,
        date: '2017-12-16',
    });
}
</script>

<style lang="scss" scoped>
.marqueeItem {
    height: 30px;
    line-height: 30px;
}
.date {
    margin-left: 50px;
}
</style>
```

:::

## 向下滚动

:::demo

```vue
<template>
    <my-marquee style="height: 150px" :data="list" direction="down">
        <div v-for="item in list" :key="item.title" class="marqueeItem">
            <span class="title">{{ item.title }}</span>
            <span class="date">{{ item.date }}</span>
        </div>
    </my-marquee>
</template>
<script setup>
import { ref } from 'vue';

let list = ref([]);

for (let i = 0; i < 20; i++) {
    list.value.push({
        title: `无缝滚动第${i}行无缝滚动第${i}行`,
        date: '2017-12-16',
    });
}
</script>
```

:::

## 向左滚动

:::demo

```vue
<template>
    <my-marquee class="leftContainer" :data="list" direction="left">
        <div v-for="item in list" :key="item" class="leftItem">{{ item }}</div>
    </my-marquee>
</template>

<script setup>
import { ref } from 'vue';

let list = ref([]);

for (let i = 0; i < 20; i++) {
    list.value.push(i);
}
</script>

<style lang="scss" scoped>
.leftContainer {
    height: 70px;
    font-size: 0;
}
.leftItem {
    height: 50px;
    width: 50px;
    background: #91d5ff;
    line-height: 50px;
    display: inline-block;
    margin: 10px;
    text-align: center;
    font-size: 16px;
}
</style>
```

:::

## 向右滚动

:::demo

```vue
<template>
    <my-marquee class="rightContainer" :data="list" direction="right">
        <div v-for="item in list" :key="item" class="rightItem">{{ item }}</div>
    </my-marquee>
</template>

<script setup>
import { ref } from 'vue';

let list = ref([]);

for (let i = 0; i < 20; i++) {
    list.value.push(i);
}
</script>

<style lang="scss" scoped>
.rightContainer {
    height: 70px;
    font-size: 0;
}
.rightItem {
    height: 50px;
    width: 50px;
    background: #91d5ff;
    line-height: 50px;
    display: inline-block;
    margin: 10px;
    text-align: center;
    font-size: 16px;
}
</style>
```

:::

## 间隔滚动

:::demo

```vue
<template>
    <my-marquee style="height:150px;" :data="list" :scroll-length="60" :wait-time="2000">
        <div v-for="item in list" :key="item.title" class="marqueeItem">
            <span class="title">{{ item.title }}</span>
            <span class="date">{{ item.date }}</span>
        </div>
    </my-marquee>
</template>

<script setup>
import { ref } from 'vue';

let list = ref([]);

for (let i = 0; i < 20; i++) {
    list.value.push({
        title: `无缝滚动第${i}行无缝滚动第${i}行`,
        date: '2017-12-16',
    });
}
</script>
```

:::

## 属性

| 属性         | 说明                                  | 类型    | 可选                          | 默认值 |
| ------------ | ------------------------------------- | ------- | ----------------------------- | ------ |
| data         | 滚动数据，用作监听数据变更，更新 html | Array   |                               | []     |
| disabled     | 禁用                                  | Boolean |                               |        |
| direction    | 滚动方向                              | String  | 'up', 'down', 'left', 'right' | 'up'   |
| auto         | 自动开始                              | Boolean |                               | true   |
| speed        | 滚动速度，数值越大速度越快            | Number  |                               | 1      |
| waitTime     | 间隔滚动停顿等待时间                  | Number  |                               | 3000   |
| scrollLength | 间隔滚动，每次滚动的长度，单位 px     | Number  |                               | 0      |

## 插槽

| 插槽名  | 说明                   |
| ------- | ---------------------- |
| default | 默认插槽，放置滚动内容 |
