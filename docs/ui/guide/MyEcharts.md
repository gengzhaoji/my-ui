# MyEcharts 图表

基于[`echarts`](https://echarts.apache.org/zh/index.html)进行封装，包含自适应、初始化图表，全屏，加载动画等功能。

## 基础用法

:::demo 柱状图

```vue
<template>
    <my-echarts :options="options" width="500px" height="300px" />
</template>

<script setup>
const options = {
    title: {
        text: 'ECharts 入门示例',
    },
    tooltip: {},
    legend: {
        data: ['销量'],
    },
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    },
    yAxis: {},
    series: [
        {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
        },
    ],
};
</script>
```

:::

:::demo 折线图

```vue
<template>
    <my-echarts :options="options" width="500px" height="300px" />
</template>

<script setup>
const options = {
    title: {
        text: 'ECharts 入门示例',
    },
    tooltip: {},
    legend: {
        data: ['销量'],
    },
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    },
    yAxis: {},
    series: [
        {
            name: '销量',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20],
        },
    ],
};
</script>
```

:::

## 属性

| 属性          | 说明                         | 类型                  | 可选 | 默认值 |
| ------------- | ---------------------------- | --------------------- | ---- | ------ |
| modelValue    | 默认值                       | [String, Array, Date] |      |        |
| now           | 是否默认为当前时间           | Boolean               |      | false  |
| autoshortcuts | 是否添加默认规则的 shortcuts | Boolean               |      | true   |
