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
const props = defineProps({
    type: {
        type: String,
    },
    modelValue: null,
    list: {
        type: Array,
        default: () => [],
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

/**
 * GetnameList 用户树
 * GetdeptList 部门数
 * GeteqptNameTree 设备树 初始化执行逻辑
 */
if (props.type) {
    $vm.$store?.com[props.type]()
        .then((data) => {
            options = data;
        })
        .catch(() => {
            options = $vm.$store.com[props.type.replace('GET', '')];
        });
}

function cascaderChange(item) {
    emits('getLabel', cascader.getCheckedNodes()[0]?.label || '');
}
</script>
