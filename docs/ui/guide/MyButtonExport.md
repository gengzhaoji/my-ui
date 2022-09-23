# MyButtonExport 导出按钮

完全兼容 [el-button](https://element-plus.org/zh-CN/component/button.html)。

-   使用`MyButtonExport`组件

:::demo 使用`MyButtonExport`组件

```vue
<template>
    <my-button-export />
</template>
```

:::

## 属性

| 属性    | 说明                              | 类型     | 可选值 | 默认值 |
| ------- | --------------------------------- | -------- | ------ | ------ |
| load    | 下载请求，必须要返回 Promise      | Function |        |        |
| confirm | ElMessageBox.confirm 提示配置参数 | Array    |        |        |
