<template>
<div>
</div>
</template>

<script lang='ts' setup>
onMounted(()=>{
    window.api.user.login()
    window.api.user.list()
})
</script>

<style lang='less' scoped>
</style>
