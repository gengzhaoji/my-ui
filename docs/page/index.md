# 快速开发单页面

## 快捷键

```
vue (enter)回车
```

## 使用 vscode 自定义代码片段（`.vscode\vue.code-snippets`）

```json
{
    "vue common component": {
        "scope": "",
        "prefix": "vue",
        "body": [
            "<template>",
            "<div class=\"page\">",
            "  <div class=\"p-10 system-page-background b-r-4\">",
            "      <my-form",
            "         inline",
            "         query",
            "         :model=\"queryParams\"",
            "         :formItem=\"queryFormItem\"",
            "         @searchFn=\"refTable.reload()\"",
            "         @resetFn=\"refTable.reload()\"",
            "         />",
            " </div>",
            " <div class=\"f1 h0 flex-col system-page-background m-t-10 b-r-4\">",
            "     <div class=\"p-10\" v-hasPermi=\"['']\">",
            "         <my-button type=\"primary\" @click=\"insertFn()\" icon=\"Plus\" v-hasPermi=\"['']\">新 增</my-button>",
            "          <my-button type=\"danger\" :disabled=\"!tableSelection.length\" @click=\"deleteFn(tableSelection)\" icon=\"Delete\" v-hasPermi=\"['']\">",
            "              删 除",
            "           </my-button>",
            "       </div>",
            "       <div class=\"f1 h0 flex-col\">",
            "              <my-list-panel ref=\"refTable\" :total=\"state.total\" :loadFn=\"loadData\">",
            "             <template #default=\"{ page, size }\">",
            "                  <my-table :data=\"state.list\" :columns=\"state.columns\" @selection-change=\"(val) => (tableSelection = val)\">",
            "                     <template #index=\"{ \\$index }\">{{ \\$index + 1 + (page - 1) * size }}</template>",
            "                      <template #default=\"{ row }\">",
            "                         <my-button type=\"text\" class=\"caozuo\" @click=\"detailFn(row)\">查看</my-button>",
            "                          <my-button type=\"text\" class=\"caozuo\" @click=\"updateFn(row)\" v-hasPermi=\"['']\">修改</my-button>",
            "                          <my-button type=\"text\" class=\"caozuo\" @click=\"deleteFn(row)\" v-hasPermi=\"['']\">删除</my-button>",
            "                      </template>",
            "                  </my-table>",
            "             </template>",
            "         </my-list-panel>",
            "     </div>",
            " </div>",
            " <!-- 添加、修改对话框 -->",
            " <el-dialog",
            "     :title=\"dialogTitle\"",
            "      v-model=\"dialog.open\"",
            "      width=\"570px\"",
            "      append-to-body",
            "      @close=\"resetForm(refDialogFrom)",
            "  >",
            "      <my-form",
            "          ref=\"refDialogFrom\"",
            "          :model=\"dialog.form\"",
            "          label-width=\"110px\"",
            "          :disabled=\"['detail'].includes(dialog.name)\"",
            "          :formItem=\"[]\"",
            "      />",
            "      <template #footer>",
            "          <div class=\"dialog-footer\">",
            "              <my-button @click=\"dialog.open = false\">取 消</my-button>",
            "              <my-button type=\"primary\" @click=\"dialogSubmitFn()\">确 定</my-button>",
            "          </div>",
            "      </template>",
            "  </el-dialog>",
            " </div>",
            "</template>",
            "",
            "<script setup name=\"$1\">",
            "import { addRule as add, removeRule as remove, editRule as edit, pageRule as page } from '@a/$2';",
            "import mixin from '@u/mixin';",
            "",
            "let queryParams = \\$ref({ }),",
            "    queryFormItem = [],",
            "    state = \\$ref({",
            "        total: 0,",
            "        list: [],",
            "        columns: [",
            "            {",
            "               type: 'selection',",
            "         },",
            "         {",
            "             label: '序号',",
            "           prop: 'index',",
            "           width: 60,",
            "           },",
            "            {",
            "                label: '操作',",
            "                width: 180,",
            "            },",
            "        ],",
            "    }),",
            "   // 弹出层",
            "   dialog = \\$ref({",
            "       title: '规则配置',",
            "       open: false,",
            "        name: '',",
            "       form: {",
            "           id: undefined,",
            "       },",
            "   });",
            "",
            "// 表格数据",
            "const refTable = \\$ref(null),",
            "    refDialogFrom = \\$ref(null),",
            "    tableSelection = \\$ref([]);",
            "const { dialogTitle, loadData, getList, insertFn, deleteFn, updateFn, detailFn, dialogSubmitFn } = mixin({",
            "queryParams,",
            "queryFormItem,",
            "state,",
            "api: { page, remove, add, edit },",
            "dialog,",
            "refTable: () => refTable,",
            "refDialogFrom: () => refDialogFrom,",
            "});",
            "</script>",
            "",
            "<style lang='scss' scoped>",
            "",
            "</style>"
        ],
        "description": "Log output to console"
    }
}
```

## mixin 常用增删改查逻辑封装（src\utils\mixin.js）

```javascript
/**
 * 默认页面中的基本增删改查操作（弹窗类页面）
 */
import { computed, inject, nextTick } from 'vue';

// 响应数据转换（对象/函数）
function typeFn(data) {
    return typeof data === 'function' ? data?.() : data;
}
/**
 * @param {Array} queryFormItem 页面的查询my-form的form表单动态化数据，查询条件中有时间数组需要数据转换的  该参数则必传
 * @param {Object} queryParams 查询条件数据对象
 * @param {Object} state 页面表格数据，
 * @param {Object} api 页面的增、删、改、查接口 默认对应 add、remove、edit、page
 * @param {String} id 表格数据的唯一标识，用于数据删除使用
 * @param {Object} dialog 页面数据新增时的弹窗数据，用于弹窗显示、隐藏和弹窗的title计算
 * @param {html} refTable 表格分页组件的dom数据，用户操作查询和重置分页查询等工能
 * @param {html} refDialogFrom 新增弹窗的form表单的dom数据，用户新增，修改等表单校验，因为响应式问题，所以需要传递function(){return}return该值
 * @returns
 */
export default function ({
    queryFormItem = [],
    queryParams = {},
    state = {
        total: 0,
        list: [],
    },
    api = {},
    id = 'id',
    dialog = {
        name: 'insert',
        title: '窗口',
    },
    refTable,
    refDialogFrom,
} = {}) {
    // 全局挂载的方法获取
    const $vm = inject('$vm'),
        // 弹窗Title计算逻辑
        dialogTitle = computed(() => {
            if (dialog.name === 'insert') return `新增${dialog.title}`;
            if (dialog.name === 'update') return `修改${dialog.title}`;
            if (dialog.name === 'detail') return `${dialog.title}详情`;
        }),
        // 表格排序字段统计函数
        orderKeys = computed(() => {
            let data = [];
            state.columns.forEach((item) => {
                if (!!item.sortable) {
                    data.push(item.prop);
                }
            });
            return data;
        });
    // 页面查询函数
    function getList() {
        typeFn(refTable)?.loadData?.();
    }
    // 表格排序
    function sortChange({ column, prop, order }) {
        orderKeysFn();
        typeFn(queryParams)[prop] = order === 'ascending'; // true为升序false为降序
        typeFn(refTable)?.reload?.();
    }
    // 重置表格排序条件
    function orderKeysFn() {
        for (const item of orderKeys) {
            typeFn(queryParams)[item] = '';
        }
    }
    // 初始化表格查询逻辑
    function loadData(pageNum, pageSize) {
        let data = $vm.clone(typeFn(queryParams));
        if (typeFn(queryFormItem)) {
            // 时间组件
            const dateList = $vm.clone(typeFn(queryFormItem)).filter((item) => item.itemType === 'date' && item.type.match(/range/gi));
            dateList.forEach((item) => {
                const { prop, prepend } = item;
                data = $vm.addDateRange(data, prop, prepend);
            });
        }
        return typeFn(api)
            .page({ pageNum, pageSize, ...data })
            .then((res) => {
                state.total = res.data?.total;
                state.list = res.data?.rows;
            });
    }
    // 新增信息
    function insertFn() {
        $vm.resetForm(typeFn(refDialogFrom));
        dialog.name = 'insert';
        dialog.open = true;
        dialog.form.id = undefined;
    }
    // 删除信息
    function deleteFn(data) {
        // 删除单条
        const Table = typeFn(refTable);
        if (!Array.isArray(data)) {
            $vm.$$confirm('此操作将删除该条数据, 是否继续?')
                .then(() => {
                    typeFn(api)
                        .remove({ ids: `${data[id]}` })
                        .then(() => {
                            if (1 === state.list.length && Table?.lastcurrentPage) {
                                Table?.reload?.();
                            } else {
                                getList();
                            }
                            $vm.msgSuccess('删除成功');
                        });
                })
                .catch(() => {
                    $vm.msgInfo('已取消删除！');
                });
        } else {
            // 删除多条
            $vm.$$confirm('此操作将删除选中数据, 是否继续?')
                .then(() => {
                    typeFn(api)
                        .remove({ ids: data.map((item) => item[id]).join(',') })
                        .then(() => {
                            if (data.length === state.list.length && Table.lastcurrentPage) {
                                Table?.reload?.();
                            } else {
                                getList();
                            }
                            $vm.msgSuccess('删除成功');
                        });
                })
                .catch(() => {
                    $vm.msgInfo('已取消删除！');
                });
        }
    }
    // 修改、详情逻辑
    function dialogOpen(row, name) {
        dialog.name = name;
        if (typeFn(api).info) {
            typeFn(api)
                .info({ id: row[id] })
                .then((res) => {
                    dialog.open = true;
                    nextTick(() => {
                        dialog.form = res.data;
                    });
                });
        } else {
            dialog.open = true;
            nextTick(() => {
                dialog.form = $vm.clone(row);
            });
        }
    }
    // 修改信息
    function updateFn(row) {
        dialogOpen(row, 'update');
    }
    // 详情信息
    function detailFn(row) {
        dialogOpen(row, 'detail');
    }
    // 弹窗提交函数
    function dialogSubmitFn() {
        const DialogForm = typeFn(refDialogFrom),
            Form = DialogForm?.$refs?.refMyForm || DialogForm;
        Form.validate((valid) => {
            if (valid) {
                typeFn(api)
                    [dialog.name === 'insert' ? 'add' : 'edit'](dialog.form)
                    .then((res) => {
                        $vm.msgSuccess(`${dialog.name === 'insert' ? '新增成功！' : '修改成功！'}`);
                        dialog.open = false;
                        getList();
                    });
            }
        });
    }
    return {
        $vm,
        dialogTitle,
        getList,
        sortChange,
        orderKeysFn,
        loadData,
        insertFn,
        deleteFn,
        updateFn,
        detailFn,
        dialogSubmitFn,
    };
}
/**
 * 表格跨页选择事件逻辑封装 tableSelection，lists，必须使用响应式state传递，例子my-tree-table
 * @param {Array} queryFormItem 页面的查询my-form的form表单动态化数据，查询条件中有时间数组需要数据转换的  该参数则必传
 * @param {Object} queryParams 查询条件数据对象
 * @param {Object} state 页面表格数据，
 * @param {Object} api 页面的增、删、改、查接口 默认对应 add、remove、edit、page
 * @param {String} id 表格数据的唯一标识，用于数据删除使用
 * @param {html} myTable 表格的dom数据，用户操作表格的选中事件
 * @returns
 */
export function SpreadPage({
    queryFormItem = [],
    queryParams = {},
    state = {
        tableSelection: [],
        list: [],
        total: [],
    },
    api = {},
    id = 'id',
    myTable,
} = {}) {
    const $vm = inject('$vm');

    // 初始化表格查询逻辑
    function loadData(pageNum, pageSize) {
        let data = $vm.clone(typeFn(queryParams));
        if (queryFormItem) {
            // 时间组件
            const dateList = $vm.clone(queryFormItem).filter((item) => item.itemType === 'date' && item.type.match(/range/gi));
            dateList.forEach((item) => {
                const { prop, prepend } = item;
                data = $vm.addDateRange(data, prop, prepend);
            });
        }
        return typeFn(api)
            .page({ pageNum, pageSize, ...data })
            .then((res) => {
                state.total = res.data?.total;
                state.list = res.data?.rows;
                // 跨页缓存选中数据的功能
                nextTick(() => {
                    const Ids = state.tableSelection.map((item) => item[id]);
                    state.list.forEach((row, i) => {
                        if (Ids.includes(row[id])) typeFn(myTable)?.$refs?.myTable?.toggleRowSelection(state.list[i], true);
                    });
                });
            });
    }
    /**
     * @description:  单选
     * @param row 行数据
     */
    function handleSelectionChange(selection, row) {
        // isExited判断tableSelection是否已经存在当前项
        if (state.tableSelection.some((item) => item[id] === row[id])) {
            // 若存在，代表操作是 取消选中
            handleDelItem(row);
        } else {
            // 反之，选中某项
            state.tableSelection.push(row);
        }
    }
    /**
     * @description: 全选
     * @param selection 数据
     */
    function handleSelectionAllChange(selection) {
        if (selection.length === 0) {
            // 若是全不选，则循环删除tableSelection数组中存在的项
            state.list.forEach((item) => {
                handleDelItem(item);
            });
        } else {
            // 全选，将selected和当前table数据合起来 并去重
            let obj = {};
            // 去重
            const uniqueArr = state.tableSelection.concat(state.list).reduce((prev, next) => {
                obj[next[id]] ? '' : (obj[next[id]] = true && prev.push(next));
                return prev;
            }, []);
            state.tableSelection = uniqueArr;
        }
    }
    /**
     * @description: 删除tableSelection数组中某项数据
     * @param row 行数据
     */
    function handleDelItem(row) {
        const index = state.tableSelection.findIndex((item) => item[id] === row[id]);
        if (index >= 0) {
            state.tableSelection.splice(index, 1);
        }
    }
    return { loadData, handleSelectionChange, handleSelectionAllChange };
}
```
