<template>
    <div>老师账号管理
    </div>
</template>
    
<script lang='ts' setup>
onMounted(() => {
    window.api.user.login()
})
</script>
    
<style lang='less' scoped></style>
    