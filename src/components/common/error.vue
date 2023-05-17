<template>
  <el-empty :image-size="200">
    <template #description>
      <p class="text">404错误页面</p>
    </template>
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
.text {
  font-family: 'title_wide';
  font-size: 100px;
  background:linear-gradient(to left, #47453c,#5baf70,#947294);
  background-clip:text;
  -webkit-background-clip:text;
  -webkit-text-fill-color: transparent;
  color:transparent;
}
</style>
