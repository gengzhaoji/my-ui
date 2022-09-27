# MyTimer 计时器

基于 [`dayjs`](https://dayjs.fenxianglu.cn/) 进行封装的计时器组件。

## 秒表模式

:::demo

```vue
<template>
    <div>
        默认计时： <my-timer auto></my-timer><br />

        指定结束时间： <my-timer :target="10" auto></my-timer> <my-timer target="00:01:00" auto></my-timer><br />

        指定显示格式： <my-timer :target="60" auto format="ss"></my-timer><br />

        手动触发
        <my-timer ref="timer"></my-timer>
        <my-button size="small" @click="timer.start()">开始</my-button>
        <my-button size="small" @click="timer.stop()">停止</my-button>
        <my-button size="small" @click="timer.reset()">重置</my-button><br />

        颜色：<my-timer auto type="primary"></my-timer>
        <my-timer auto type="success"></my-timer>
        <my-timer auto type="warning"></my-timer>
        <my-timer auto type="danger"></my-timer>
        <my-timer auto type="info"></my-timer><br />

        毫秒级：<my-timer auto :interval="10" format="H:mm:ss.SSS"></my-timer>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let timer = ref(null);
</script>

<style lang="scss" scoped>
.my-timer {
    margin: 10px;
}
</style>
```

:::

## 计时器（倒数）模式

:::demo

```vue
<template>
    <div>
        默认计时： <my-timer countdown auto></my-timer> <br />

        指定结束时间： <my-timer :target="10" countdown auto></my-timer> <my-timer target="00:01:00" countdown auto></my-timer> <br />

        指定显示格式： <my-timer :target="60" countdown auto format="ss"></my-timer> <br />

        手动触发 <my-timer ref="timer" countdown></my-timer>
        <my-button size="small" @click="timer.start()">开始</my-button>
        <my-button size="small" @click="timer.stop()">停止</my-button>
        <my-button size="small" @click="timer.reset()">重置</my-button>
        <br />

        颜色：<my-timer countdown auto type="primary"></my-timer>
        <my-timer countdown auto type="success"></my-timer>
        <my-timer countdown auto type="warning"></my-timer>
        <my-timer countdown auto type="danger"></my-timer>
        <my-timer countdown auto type="info"></my-timer>
        <br />

        毫秒级： <my-timer countdown target="1:00:00" auto :interval="10" format="H:mm:ss.SSS"></my-timer>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let timer = ref(null);
</script>

<style lang="scss" scoped>
.my-timer {
    margin: 10px;
}
</style>
```

:::

## 属性

| 属性      | 说明                                         | 类型              | 可选值                                           | 默认值     |
| --------- | -------------------------------------------- | ----------------- | ------------------------------------------------ | ---------- |
| target    | 设定值，`String` 为时间格式，`Number` 是秒数 | `{String,Number}` |                                                  |            |
| format    | 显示格式显示格式                             | String            |                                                  | 'HH:mm:ss' |
| countdown | 倒数模式                                     | Boolean           |                                                  | false      |
| type      | 颜色                                         | String            | `'primary','success','warning','danger', 'info'` |            |
| auto      | 自动运行                                     | Boolean           |                                                  | false      |
| interval  | 执行时间隔 单位 `ms`                         | Number            |                                                  | 1000       |
