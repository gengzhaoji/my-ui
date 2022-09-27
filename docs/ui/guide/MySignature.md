# MySignature 签名

对 [`signature_pad`](https://www.npmjs.com/package/signature_pad) 封装的签字组件。

## 基础使用

:::demo

```vue
<template>
    <div>
        <my-button @click="signatureShow = true">签名</my-button>
        <my-signature
            v-model="signatureShow"
            @getImg="
                (val) => {
                    signatureShow = false;
                    model[prop] = val;
                }
            "
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';

let signatureShow = ref(false);
</script>
```

:::

## 自定义宽高

:::demo

```vue
<template>
    <div>
        <my-button @click="signatureShow = true">签名</my-button>
        <my-signature
            v-model="signatureShow"
            @getImg="
                (val) => {
                    signatureShow = false;
                    model[prop] = val;
                }
            "
            :width="550"
            :height="300"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';

let signatureShow = ref(false);
</script>
```

:::

## 属性

| 属性         | 说明                    | 类型   | 默认值                           |
| ------------ | ----------------------- | ------ | -------------------------------- |
| height       | 签字版的高度            | Number | 200                              |
| width        | 签字版的宽度            | Number | 470                              |
| signatureObj | SignaturePad 的配置属性 | Object | `{ backgroundColor: '#b1b3b8' }` |

## SignaturePad 属性

| 属性                 | 说明                                                                             | 类型     | 默认值 |
| -------------------- | -------------------------------------------------------------------------------- | -------- | ------ |
| dotSize              | 点的大小（在屏幕上点击留下的点大小，单位：px）                                   | Number   |        |
| minWidth             | 线的最小宽度（单位：px，默认：0.5）                                              | Number   | 0.5    |
| maxWidth             | 线的最大宽度（单位：px，默认：2.5）                                              | Number   | 2.5    |
| throttle             | 节流（每次绘制两个点之间的时间，单位：ms，默认：16，注意：设置过大会显得很卡顿） | Number   | 16     |
| minDistance          | 最小距离（每次绘制两个点之间的最小距离，单位：px，默认：5）                      | Number   | 5      |
| backgroundColor      | 背景色（默认：#000）                                                             | String   | #000   |
| penColor             | 线条颜色（默认：#fff）                                                           | String   | #fff   |
| velocityFilterWeight | 根据速度控制线的 weight（默认：0.7）                                             | Number   | 0.7    |
| onBegin              | 笔开始时触发的事件                                                               | Function |        |
| onEnd                | 笔结束时触发的事件                                                               | Function |        |
