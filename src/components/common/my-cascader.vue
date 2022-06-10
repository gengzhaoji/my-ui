<template>
    <el-cascader
        ref="cascader"
        v-model="fieldValue"
        :options="options"
        :props="{
            expandTrigger: 'hover',
            value: 'id',
            emitPath: false,
            checkStrictly: true,
        }"
        :show-all-levels="false"
        filterable
        clearable
        :teleported="false"
        :size="$store.user.size"
        @change="cascaderChange"
        v-bind="$attrs"
    />
</template>

<script setup name="my-cascader">
const $vm = inject('$vm');
const emits = defineEmits(['update:modelValue', 'getLabel']);
/***
 * 参数属性
 * @property {Object[]} modelValue 默认值
 * @property {list[]} list 下拉列表数据
 * @property {String} type store.dispatch的方法名
 */
const props = defineProps({
    modelValue: null,
    list: {
        type: Array,
        default: () => [],
    },
    type: {
        type: String,
    },
});
let options = $ref(null);
const cascader = $ref(null);

let fieldValue = computed({
    get() {
        return props.modelValue;
    },
    set(val) {
        cascader.popperVisible = false;
        emits('update:modelValue', val);
    },
});
watch(
    () => props.list,
    (val) => {
        options = val;
    },
    { deep: true, immediate: true }
);

watch(
    () => $vm.$store.com[props.type.replace('GET', '')],
    (val) => {
        options = val;
    }
);

/**
 *  初始化执行逻辑 调用$store获取数据方法
 */
if (props.type) $vm.$store?.com[props.type]();

function cascaderChange(item) {
    emits('getLabel', cascader.getCheckedNodes()[0]?.label || '');
}
</script>
