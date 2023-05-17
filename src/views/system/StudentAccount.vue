<template>
    <div>学生账号管理
        <div @click="()=>{{store.commit('add')}}">+1</div>
    </div>
</template>

<script lang='ts' setup>
import store from '@/store';
</script>

<style lang='less' scoped></style>
