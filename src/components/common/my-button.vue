<template>
    <el-button ref="elButton" :size="$store.user.size" v-bind="$attrs">
        <slot></slot>
    </el-button>
</template>

<script setup name="my-button"></script>
