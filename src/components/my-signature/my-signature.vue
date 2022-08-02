<template>
    <el-dialog title="签名" width="500px" @open="init" append-to-body draggable v-bind="$attrs">
        <canvas v-bind="{ height: 200, width: 470 }" ref="refCanvas" />
        <template #footer>
            <my-button @click="clearFn">重新签名</my-button>
            <my-button type="primary" @click="submitFn">确认签名</my-button>
        </template>
    </el-dialog>
</template>

<script setup name="MySignature">
/**
 * 签名组件
 * @module components/my-signature
 * 使用demo
 * <!-- 签名组件 -->
 * <my-signature v-model="signatureShow" @getImg="(val) => {signatureShow = false; model[prop] = val;} "/>
 */
import { rdfileUpload } from '@a/public';
import { base64ToFile } from '@u/download';
import SignaturePad from 'signature_pad';

const $vm = inject('$vm');
const $emits = defineEmits(['getImg']);
const props = defineProps({
    signatureObj: {
        type: Object,
        default: () => ({ backgroundColor: '#b1b3b8' }),
    },
});

let signature,
    refCanvas = ref(null);
function init() {
    nextTick(() => {
        if (refCanvas.value) signature = new SignaturePad(refCanvas.value, props.signatureObj);
    });
}

// 清除画板
function clearFn() {
    signature.clear();
}

// 确认画板
function submitFn() {
    let formdata = new FormData();
    formdata.append('file', base64ToFile(signature.toDataURL('image/png')));
    rdfileUpload(formdata)
        .then((res) => {
            if (res?.data) {
                $emits('getImg', res.data);
                signature.clear();
                $vm.msgSuccess('保存成功！');
            }
        })
        .catch(() => {
            $vm.msgError('保存失败');
        });
}
</script>
