<template>
    <el-container class="layout-container-demo">
        <el-aside width="200px">
            <el-scrollbar>
                <div class="layout">
                    <p>{{config.layout.title}}</p>
                </div>
                <leftLayout/>
            </el-scrollbar>
        </el-aside>
        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <navbar />
            </el-header>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>
  
<script lang="ts" setup>
import config from "@/config";
import leftLayout from "./leftLayout/index.vue"
import navbar from "./navbar/index.vue"

onMounted(() => {

})
</script>
  
<style scoped lang="less">
.layout-container-demo {
    height: calc(100vh - 30px);
    .layout{
        height: 60px;
        display: flex;
        font-size: 25px;
        align-items: center;
        background-color: darkgray;
        justify-content: space-around;
        & >p{
            padding: 0;
            margin: 0;
        }
    }
}
.layout-container-demo .el-menu {
    border-right: none;
}

.layout-container-demo .el-main {
    background-color: var(--el-layout-main);
    padding: 0;
}

:deep(.el-header) {
    background-color: var(--el-layout-header);
}

.layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
}</style>
  