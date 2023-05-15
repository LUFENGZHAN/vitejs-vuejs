<template>
        <keep-alive v-if="config.router.keepAlive">
            <router-view />
        </keep-alive>
        <router-view v-else/>
</template>

<script lang='ts' setup>
import config from './config'
</script>

<style lang='less' scoped></style>
