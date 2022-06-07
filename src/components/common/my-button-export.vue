<template>
    <my-button ref="elButton" @click.prevent="exportFn" icon="Download" :disabled="loading" v-bind="$attrs">
        <slot>{{ loading ? loading_text : text }}</slot>
    </my-button>
</template>

<script setup name="my-button-export">
const $vm = inject('$vm');
/**
 * props
 * @property {Function} load // 下载请求，必须要返回Promise
 */
const props = defineProps({
    load: {
        type: Function,
        default: null,
    },
    text: {
        type: String,
        default: '导 出',
    },
    loading_text: {
        type: String,
        default: '导出中...',
    },
    confirm: {
        type: Object,
        default: () => [],
    },
});
const loading = $ref(false);
/**
 * 下载请求， 内部调用从组件props传入‘load’函数
 * @Function exportFn
 */
const exportFn = () => {
    if (!props.load || loading) return;
    $vm.$$confirm(props.confirm)
        .then(() => {
            loading = true;
            props
                .load()
                .then(() => {
                    $vm.msgSuccess('操作成功！');
                })
                .catch(() => {
                    $vm.msgError('操作失败！');
                })
                .finally(() => {
                    loading = false;
                });
        })
        .catch((err) => {
            $vm.msgInfo('已取消导出！');
        });
};
</script>
