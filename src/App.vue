<template>
    <el-config-provider :size="size" :z-index="zIndex">
    <router-view v-if="config.layout.screen"/>
    <layout  v-else></layout>
    </el-config-provider>
</template>

<script lang='ts' setup>
import config from "@/config";
import layout from '@/components/layout/index.vue'
const size:any = ref('small') //| "small" | "default" | "large"
const zIndex = ref(3000)
</script>

<style lang='less' scoped></style>
