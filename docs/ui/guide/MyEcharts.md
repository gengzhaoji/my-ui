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

| 属性    | 说明                                         | 类型                 | 默认值 |
| ------- | -------------------------------------------- | -------------------- | ------ |
| geo     | 需要注册的地图 geoJson                       | Object               |        |
| map     | 需要注册的地图名称， map 和 geo 需要同时设置 | String               |        |
| options | echarts 配置项                               | `{Object, Function}` |        |
| width   | 图表的宽度                                   | String               | 100%   |
| height  | 图表的高度                                   | String               | 100%   |
| loading | 是否显示 loading 效果                        | Boolean              | true   |
| group   | 分组标识                                     | `{string,number}`    |        |
| toggle  | 是否开启全屏/取消全屏切换功能                | Boolean              | false  |
