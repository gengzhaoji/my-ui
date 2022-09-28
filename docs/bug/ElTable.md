# 树形表格数据回显问题

## 问题

`el-table` 组件，支持树类型的数据的显示。 当 `row` 中包含 `children` 字段时，被视为树形数据，普通的增删改查数据改变之后，无法更新视图。

## 解决方法

通过 `loadFnResolve` 记录展开行的 `id`，调整懒加载的 `lazyTreeNodeMap` 的值，从而达到数据更新。

```js
<template>
    <el-table
        ref="table"
        :data="list"
        row-key="id"
        lazy
        :load="
            (tree, treeNode, resolve) => {
                loadFnResolve.add(tree.id);
                resolve(tree.children);
            }
        "
        @row-click="
            (row, column, event) => {
                event.currentTarget?.querySelector('.el-table__expand-icon')?.click();
            }
        "
    />
</template>

<script setup>
/** 查询数据列表 */
let list = $ref([]),
    loadFnResolve = new Set(),
    table = $ref(null);
function getList() {
    listDept(queryParams).then((res) => {
        list = res.data;
        // 调整懒加载的lazyTreeNodeMap的值，从而达到数据更新。
        for (let key of loadFnResolve.keys()) {
            table.$refs.myTable.store.states.lazyTreeNodeMap.value[key] = find(res.data, true, (item) => item.id === key).children;
        }
    });
}
</script>
```
