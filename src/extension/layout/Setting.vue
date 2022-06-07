<template>
    <div class="p-l-15 p-r-15">
        <el-divider content-position="left">整体风格</el-divider>
        <div class="theme-box">
            <theme-icon
                v-model:active="state.style"
                v-for="(row, index) in theme"
                :key="index"
                :name="index"
                :tip="row.name"
                :logo="row.logo.background"
                :menu="row.menu.background"
                :header="row.header.background"
                :main="row.container.background"
                :activeColor="row.page.color"
            />
        </div>
        <el-divider content-position="left">主题色</el-divider>
        <div class="theme-box">
            <theme-color
                v-for="(item, key) in themeColorArr"
                v-model:active="state.primaryColor"
                v-model:activeTextColor="state.primaryTextColor"
                :key="key"
                :color="item.color"
                :textColor="item.textColor"
                :tip="item.tip"
            />
        </div>
        <el-divider content-position="left">布局</el-divider>
        <el-radio-group class="three-columns" v-model="state.layout" size="small">
            <el-radio-button label="sidebar">左右</el-radio-button>
            <el-radio-button label="navbar">上下</el-radio-button>
            <el-radio-button label="both">上下 + 左右</el-radio-button>
        </el-radio-group>
        <el-divider content-position="left">其他设置</el-divider>
        <el-form label-width="240px" label-position="left" size="small">
            <!-- <el-form-item label="固定菜单栏">
                <el-switch v-model="state.fixedTop"></el-switch>
            </el-form-item> -->
            <el-form-item label="开启折叠">
                <el-switch v-model="state.collapsible"></el-switch>
            </el-form-item>
            <el-form-item label="开启导航Tab">
                <el-switch v-model="state.showTabs"></el-switch>
            </el-form-item>
            <el-form-item label="显示logo">
                <el-switch v-model="state.logo"></el-switch>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup name="Setting">
import themeIcon from './theme/theme-icon.vue';
import themeColor from './theme/theme-color.vue';
import { theme, themeColorArr } from '@/config/theme.js';
const $vm = inject('$vm');
// 只取值，不做computed
const state = $vm.$store.user.theme;
// 监听数据的变化
watch(
    () => state,
    (newVal) => {
        $vm.$store.user.stateChange(newVal);
    },
    { immediate: true }
);
</script>

<style lang="scss" scoped>
.theme-box {
    padding: 0 10px;
    display: flex;
    justify-content: space-around;
}
.three-columns {
    width: 100%;
    display: flex;
    :deep(.el-radio-button) {
        flex: 1;
        width: 0;
        .el-radio-button__inner {
            width: 100%;
        }
    }
}
</style>
