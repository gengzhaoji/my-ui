<template>
    <div class="upload-file" v-loading="loading">
        <el-upload
            ref="upload"
            action
            list-type="picture-card"
            auto-upload
            :limit="limit"
            :on-exceed="exceedFn"
            :on-change="handleChange"
            :disabled="myImgUploadDisabled"
            :file-list="fileList"
            accept=".png,.jpg,.jpeg"
            v-bind="$attrs"
        >
            <el-icon><Plus /></el-icon>
            <!-- 缩略图模板的内容 -->
            <template #file="{ file }">
                <img class="el-upload-list__item-thumbnail" :src="file.downloadUrl" alt="" />
                <span class="el-upload-list__item-actions">
                    <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                        <el-icon><zoom-in /></el-icon>
                    </span>
                    <span v-if="!myImgUploadDisabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                        <el-icon><Download /></el-icon>
                    </span>
                    <span v-if="!myImgUploadDisabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                        <el-icon><Delete /></el-icon>
                    </span>
                </span>
            </template>
            <!-- 提示说明文字 -->
            <template #tip v-if="!myImgUploadDisabled">
                <div style="color: #858ebd">单张图片不超过10M</div>
            </template>
        </el-upload>
        <!-- 图片预览 -->
        <el-dialog v-model="dialogVisible" title="图片预览">
            <img style="max-height: 500px; max-width: 500px; display: block; margin: 0 auto" :src="dialogImageUrl" alt />
        </el-dialog>
    </div>
</template>

<script setup name="myImgUpload">
/**
 * 请求接口
 */
import { downloadGet } from '@u/axios';
import { rdfileDataUpload } from '@a/public';
import { formContextKey as elFormKey, formItemContextKey as elFormItemKey, genFileId } from 'element-plus';

const emits = defineEmits(['update:modelValue']),
    elForm = inject(elFormKey, {}),
    elFormItem = inject(elFormItemKey, {}),
    $vm = inject('$vm'),
    /***
     * props
     * @property {Array} modelValue v-model绑定的值，
     * @property {Number} fileSize 上传文件大小的限制（默认为10M）
     * @property {Boolean} download 是否允许下载文件（默认为true）
     */
    props = defineProps({
        modelValue: [Array],
        fileSize: {
            type: Number,
            default: 100,
        },
        download: {
            type: Boolean,
            default: true,
        },
        limit: {
            type: Number,
            default: 1,
        },
        disabled: Boolean,
    });

// 是否禁用上传功能
let myImgUploadDisabled = $computed(() => props.disabled || elForm?.disabled),
    // 文件上传弹窗数据
    dialogImageUrl = $ref(''),
    dialogVisible = $ref(false),
    loading = $ref(false),
    upload = $ref(null),
    fileList = $ref([]),
    fileType = ['png', 'jpg', 'jpeg'];
// 是否显示提示
watch(
    () => props.modelValue,
    (val) => {
        fileList = val ?? [];
    },
    { deep: true, immediate: true }
);

// 文件超出个数限制时的钩子
function exceedFn(files) {
    upload.clearFiles();
    const file = files[0];
    file.uid = genFileId();
    upload.handleStart(file);
}
// 文件上传
function handleChange(data) {
    if (data.raw) {
        if (handleBeforeUpload(data.raw)) {
            loading = true;
            let formdata = new FormData();
            formdata.append('file', data.raw);
            rdfileDataUpload(formdata)
                .then((res) => {
                    if (props.limit === 1) fileList = [];
                    fileList.push({
                        id: res.data.id,
                        downloadUrl: res.data.downloadUrl,
                        fileName: res.data.fileName.split('.')[0],
                        fileSizeFormat: res.data.fileSizeFormat,
                        fileSize: res.data.fileSize,
                    });
                    updateFn();
                })
                .finally(() => {
                    loading = false;
                });
        } else {
            if (props.limit === 1) fileList = [];
            updateFn();
        }
    }
}
// 上传前校检格式和大小
function handleBeforeUpload(file) {
    // 校检文件类型
    let fileExtension = '';
    if (file.name.lastIndexOf('.') > -1) {
        fileExtension = file.name.slice(file.name.lastIndexOf('.') + 1);
    }
    const isTypeOk = fileType.some((type) => {
        if (file.type.indexOf(type) > -1) return true;
        if (fileExtension && fileExtension.indexOf(type) > -1) return true;
        return false;
    });
    if (!isTypeOk) {
        $vm.msgError(`文件格式不正确, 请上传${fileType.join('/')}格式文件!`);
        return false;
    }
    // 校检文件大小
    if (props.fileSize) {
        const isLt = file.size / 1024 / 1024 < props.fileSize;
        if (!isLt) {
            $vm.msgError(`上传文件大小不能超过 ${props.fileSize} MB!`);
            return false;
        }
    }
    return true;
}
// 文件预览
function handlePictureCardPreview(file, index) {
    dialogImageUrl = file.downloadUrl;
    dialogVisible = true;
}
// 文件下载
function handleDownload(data) {
    loading = true;
    downloadGet({ url: data.downloadUrl, fileName: data.fileName }).finally(() => {
        loading = false;
    });
}
// 删除文件
function handleRemove(file) {
    $vm.$$confirm('此操作将删除该数据, 是否继续?')
        .then(() => {
            upload.clearFiles();
            if (props.limit === 1) {
                fileList = [];
            } else {
                const index = fileList.findIndex((item) => item.id === file.id);
                fileList.splice(index, 1);
            }
            updateFn();
            $vm.msgSuccess('删除成功');
        })
        .catch(() => {
            $vm.msgInfo('已取消删除！');
        });
}
function updateFn() {
    emits('update:modelValue', fileList);
}
</script>

<style lang="scss">
.upload-file .is-disabled .el-upload--picture-card {
    display: none;
}
</style>
