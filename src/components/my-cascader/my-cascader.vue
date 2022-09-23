<template>
    <el-cascader
        ref="cascader"
        :options="options"
        :show-all-levels="false"
        filterable
        clearable
        collapse-tags
        collapse-tags-tooltip
        :size="$store.user.size"
        @change="cascaderChange"
        v-bind="$attrs"
    />
</template>

<script setup name="MyCascader">
const $vm = inject('$vm'),
    emits = defineEmits(['getLabel']),
    attrs = useAttrs(),
    props = defineProps({
        type: {
            type: String,
        },
        list: {
            type: Array,
            default: () => [],
        },
    }),
    cascader = ref(null);
let options = ref([]);

watch(
    () => props.list,
    (val) => {
        options.value = val;
    },
    { deep: true, immediate: true }
);
watch(
    () => $vm.$store.com[props.type?.replace('GET', '')],
    (val) => {
        if (props.type) options.valu = val;
    },
    { deep: true, immediate: true }
);
/**
 * 初始化执行逻辑
 */
if (props.type) $vm.$store?.com[props.type]();

function cascaderChange(item) {
    if (!attrs.props.multiple) {
        emits('getLabel', unref(cascader).getCheckedNodes()[0]?.label || '');
        unref(cascader).popperVisible = false;
    } else {
        emits('getLabel', unref(cascader).getCheckedNodes() || []);
    }
}
</script>
