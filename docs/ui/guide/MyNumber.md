# MyNumber 数字

格式化数值的组件，对[`countup.js`](https://inorganik.github.io/countUp.js/)进行封装。

## 基础用法

:::demo

```vue
<template>
    <my-number value="3234" />
</template>

<style lang="scss" scoped>
.my-number {
    font-size: 20px;
    margin: 20px;
}
</style>
```

:::

## 设置默认值

如果值无法转换成数字类型，就会用默认值代替
:::demo

```vue
<template>
    <my-number value="null" default-value="0" />
</template>
```

:::

## 显示趋势

:::demo

```vue
<template>
    <div>
        <my-number value="3345" trend="up" />
        <my-number value="1234" trend="down" />
        <my-number value="2002" trend="-" />
    </div>
</template>
```

:::

## 分隔符

:::demo

```vue
<template>
    <div>
        <my-number value="3345123" separator="," />
        <my-number value="3345123" separator="" />
        <my-number value="3345123" separator="-" />
    </div>
</template>
```

:::

## 精度

:::demo

```vue
<template>
    <div>
        <my-number value="3345.2474914" :precision="1" />
        <my-number value="3345.2474914" :precision="2" />
        <my-number value="3345.2474914" :precision="3" />
    </div>
</template>
```

:::

## 前缀后缀

:::demo

```vue
<template>
    <my-number value="3345.2474914" :precision="2" prefix="￥" suffix="万" />
</template>
```

:::

## 百分比显示

:::demo

```vue
<template>
    <div>
        <my-number value="0.23233322" percentage />
        <my-number value="0.23233322" percentage :precision="2" />
    </div>
</template>
```

:::

## 颜色

:::demo

```vue
<template>
    <div>
        <my-number value="12345" />
        <my-number value="12345" type="primary" />
        <my-number value="12345" type="success" />
        <my-number value="12345" type="warning" />
        <my-number value="12345" type="danger" />
        <my-number value="12345" type="info" />
    </div>
</template>
```

:::

## 动效

:::demo

```vue
<template>
    <div>
        <my-button @click="start">开始动画</my-button>
        <my-number :value="data" count-up />
        <my-number :value="data" type="primary" :count-up="{ startVal: 1000 }" />
        <my-number :value="data" type="success" :count-up="{ duration: 5 }" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

let data = ref(12343);
function start() {
    data.value = Math.random() * 10000;
}
</script>
```

:::

## 属性

| 属性              | 说明                                                                | 类型    | 可选值                                               | 默认值 |
| ----------------- | ------------------------------------------------------------------- | ------- | ---------------------------------------------------- | ------ |
| value             | 原始值                                                              | Number  |                                                      |        |
| defaultValue      | 即 value 无效时取 defaultValue, 如果 defaultValue 为 null，显示空白 | Number  |                                                      | 0      |
| countUp           | CountUp 配置参数对象                                                | Object  |                                                      | {}     |
| countUp.auto      | 是否自动开始计数，默认为自动开始                                    | Boolean |                                                      | true   |
| countUp.startVal  | 计数初始值，不限正负数，默认值为 0                                  | Number  |                                                      | 0      |
| countUp.duration  | 计数器动画持续时间，即计数器从开始到结束的时间，单位为秒            | Number  |                                                      | 2      |
| countUp.useEasing | 是否显示渐入渐出效果                                                | Boolean |                                                      | true   |
| trend             | 趋势                                                                | String  | 'up', 'down', '-'                                    |        |
| precision         | 精度，保留几位小数                                                  | Number  |                                                      | 0      |
| separator         | 分隔值的符号，默认值为‘,’（英文逗号）                               | String  |                                                      | ,      |
| prefix            | 前缀内容，也可以用插槽定义                                          | String  |                                                      |        |
| suffix            | 后缀内容，也可以用插槽定义                                          | String  |                                                      |        |
| percentage        | 按百分比计算显示, 如 value=0.2, 显示为 20%                          | Boolean |                                                      |        |
| type              | 颜色类型                                                            | String  | '','primary', 'success', 'warning', 'danger', 'info' | ''     |
| sup               | 前缀 和 后缀采用下标显示                                            | Boolean |                                                      |        |

## 插槽

| 插槽名  | 说明                   | 插槽作用域                          |
| ------- | ---------------------- | ----------------------------------- |
| default | 默认插槽，定义显示内容 | value 原始值值，displayValue 显示值 |
| prefix  | 前缀内容               |                                     |
| suffix  | suffix                 |                                     |
| trend   | 个性化趋势显示         | trend 趋势方向                      |
