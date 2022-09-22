<template>
    <el-button ref="elButton" v-bind="$attrs">
        <template #default v-if="$slots.default">
            <slot name="default"></slot>
        </template>
    </el-button>
</template>

<script setup name="MyButton"></script>
