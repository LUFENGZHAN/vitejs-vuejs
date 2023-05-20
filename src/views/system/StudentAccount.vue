<template>
    <div>学生账号管理
        <div @click="stores">+1</div>
    </div>
</template>

<script lang='ts' setup>
import store from '@/store';
import {sendmsg} from '@/utils';
const stores = ()=>{
    store.commit('add')
    sendmsg('add', {name:123})
}
</script>

<style lang='less' scoped></style>
