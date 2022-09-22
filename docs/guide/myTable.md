# myTable 表格

完全兼容 [el-table](https://element-plus.org/zh-CN/component/table.html)，扩展了部分功能。

-   使用`columns`来定义 table 的列

:::demo 使用`columns`来定义 table 的列

```vue
<template>
    <my-table :data="tableData" :columns="columns" />
</template>

<script setup>
const columns = [
        {
            label: '时间',
            prop: 'date',
        },
        {
            label: '名称',
            prop: 'name',
        },
        {
            label: '描述',
            prop: 'address',
        },
    ],
    tableData = [
        {
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St',
        },
        {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St',
        },
    ];
</script>
```

:::

-   使用`columnFilter`来动态定义 table 的列

:::demo `columns` 中 `display` 的值包含（`always`永远显示，`false`不显示，`true`显示）

```vue
<template>
    <my-table :data="tableData" :columns="columns" :initColumns="initColumns" columnFilter />
</template>

<script setup>
const initColumns = [
        {
            label: '时间',
            prop: 'date',
            display: 'always', // 永远显示
        },
        {
            label: '名称',
            prop: 'name',
        },
        {
            label: '描述',
            prop: 'address',
        },
    ],
    columns = initColumns,
    tableData = [
        {
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St',
        },
        {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St',
        },
    ];
</script>
```

:::

## 扩展 Table 属性

| 属性             | 说明                                                                                    | 类型             | 可选值 | 默认值 |
| ---------------- | --------------------------------------------------------------------------------------- | ---------------- | ------ | ------ |
| fit              | 是否占满父类                                                                            | Boolean          | —      | true   |
| columns          | 表格列定义，对象属性参数完全继承 el-table-column                                        | Array            | —      | []     |
| initColumns      | 表格列原始定义，对象属性参数完全继承 el-table-column，供 table 列的自定义列功能重置使用 | Array            | —      | []     |
| columnSortable   | 是否启用列拖拽排序, 可以配置 Sortable 个性化参数                                        | {Object/Boolean} | —      | false  |
| rowSortable      | 是否启用行拖拽排序, 可以配置 Sortable 个性化参数                                        | {Object/Boolean} | —      | false  |
| distanceToButton | 滚动到距离底部多少距离触发 on-reach-bottom 事件， table 需要设置高度才有效 (滚动)       | Number           | —      | 50     |
| columnFilter     | table 列的自定义功能                                                                    | Boolean          | —      | false  |

## 扩展 Table 事件

| 事件名                | 说明                   | 回调参数                    |
| --------------------- | ---------------------- | --------------------------- |
| column-change-confirm | 列表筛选点击确定时触发 | columns                     |
| on-column-sort        | 列拖拽排序完成时触发   | e，columns                  |
| on-row-sort           | 行拖拽排序完成时触发   | e，row                      |
| on-reach-bottom       | 表格滚动到底部时触发   | scrollDistance 离底部的距离 |
| on-reach-top          | 表格滚动到顶部时触发   | scrollTop 离顶部的距离      |
| on-scroll             | 表格滚动时触发         | e                           |
