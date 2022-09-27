# MyPrint 打印

使用`window.print()`进行打印，可保留打印内容原有的样式。。

## 基础用法

-   `print-range` 参数传一个 `css` 选择器,指定需要打印的区域，如果选择器匹配到多个区域，则会依次分页打印。你可以利用这一特性灵活处理打印内容。

:::demo

```vue
<template>
    <div>
        <my-panel title="打印区域" theme="border-left">
            <template #handle>
                <my-print :print-range="'.print-range1'">
                    <el-button type="primary" icon="tickets"></el-button>
                </my-print>
            </template>
            <my-table
                :columns="[
                    { label: '姓名', prop: 'name' },
                    { label: '地址', prop: 'address' },
                ]"
                :data="tableData"
                class="print-range1"
                height="250"
            />
        </my-panel>
    </div>
</template>
<script setup>
import { ref } from 'vue';

let tableData = ref([]);
for (let i = 0; i < 50; i++) {
    tableData.value.push({
        name: '王小虎',
        address: `上海市普陀区金沙江路 ${i} 弄`,
    });
}
</script>
```

:::

## 打印 canvas 元素

:::demo

```vue
<template>
    <my-panel title="分页处理" theme="border-left">
        <template #handle>
            <my-print :print-range="'.print-range3'">
                <el-button type="primary" icon="tickets"></el-button>
            </my-print>
        </template>
        <div class="print-range3">
            <my-echarts :options="options" height="300px" />
        </div>
    </my-panel>
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

| 属性                | 说明                                                                                           | 类型                          | 默认值                    |
| ------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------- | ------------------------- |
| printRange          | 打印区域，`css` 选择器，该参数为必须                                                           | String                        |                           |
| containerClass      | 打印内容的容器 `className`                                                                     | String                        | 'my-print-page-container' |
| parentDom           | 作为父容器的 dom 对象，或者返回 dom 对象的方法,dom 中必须包含 container-class 指定的 className | Function、HTMLElement、String |                           |
| rootStyle           | 顶层容器的样式,请不要设置 position 为 absolute,relative 或 static, 否则分页效果会不起作用      | Object                        |                           |
| beforePrint         | 在复制打印区域前执行，须返回 `promise` 对象                                                    | Function                      |                           |
| afterPrint          | 在打印完成之后执行                                                                             | Function                      |                           |
| removeSelector      | 打印时需要删除的元素选择器                                                                     | String                        |                           |
| styleArray          | 打印时须改变的样式数组，示例:[{selector: '.selector', style: {height: 'auto'}}]                | Array                         |                           |
| domTransfer         | 自定义修改打印内容的方法                                                                       | Function                      |                           |
| disableDefaultStyle | 禁用默认样式数组，只使用 `style-array` 参数                                                    | Boolean                       |                           |
| preview             | 打印预览                                                                                       | Boolean                       |                           |
