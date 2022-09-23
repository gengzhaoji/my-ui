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
import _camelCase from 'lodash/camelCase';

const $vm = inject('$vm'),
    emits = defineEmits(['getLabel']),
    attrs = useAttrs(),
    /***
     * 参数属性
     * @property {list[]} list 数据源
     * @property {String} type store.dispatch的方法名
     * @property {String} code 字典类型，传type/code进行数据字典数据请求
     */
    props = defineProps({
        type: {
            type: String,
        },
        list: {
            type: Array,
            default: () => [],
        },
        code: {
            type: String,
            default: '',
        },
    }),
    cascader = ref(null);

let dictType = computed(() => props?.type || (props.code && `GET${_camelCase(props.code)}`)),
    options = ref([]);

watch(
    () => props.list,
    (val) => {
        options.value = val;
    },
    { deep: true, immediate: true }
);
watch(
    () => props.$store?.com[unref(dictType)?.replace('GET', '')],
    (val) => {
        if (unref(dictType)) options.value = val;
    },
    { deep: true, immediate: true }
);

/**
 * 初始化执行逻辑
 */
if (unref(dictType)) $vm.$store?.com[unref(dictType)]();

function cascaderChange(item) {
    if (!attrs.props.multiple) {
        emits('getLabel', unref(cascader).getCheckedNodes()[0]?.label || '');
        unref(cascader).popperVisible = false;
    } else {
        emits('getLabel', unref(cascader).getCheckedNodes() || []);
    }
}
</script>
