<template>
    <div>系统管理
    </div>
</template>

<script lang='ts' setup>
onMounted(() => {
    window.api.user.list()
})
</script>

<style lang='less' scoped></style>
