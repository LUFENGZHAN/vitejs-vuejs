<template>
    <div>座位管理
        <div>{{store.state.count}}</div>
    </div>
</template>

<script lang='ts' setup>

import store from '@/store';
import {postMsg} from '@/utils'
postMsg((e:any)=>{
    console.log(e,123)
})

</script>

<style lang='less' scoped></style>
