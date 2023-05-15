<template>
    <el-empty :image-size="200" description="错误页面">
    <el-button type="primary" @click="goHome">返回首页</el-button>
  </el-empty>
</template>

<script lang="ts" setup>
defineProps<{
    error?: string;
}>();
const router = useRouter();
const goHome = () => router.replace('/');
</script>

<style lang="less" scoped>
</style>
