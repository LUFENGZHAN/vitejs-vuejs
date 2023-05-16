<template>
        <keep-alive v-if="config.router.keepAlive">
            <router-view ><layout/></router-view>
        </keep-alive>
        <router-view v-else><layout/></router-view>
</template>

<script lang='ts' setup>
import layout from '@/components/layout/index.vue'
import config from './config'
</script>

<style lang='less' scoped></style>
