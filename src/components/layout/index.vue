<template>
    <router-view v-if="routeElse.meta.layout"></router-view>
    <el-container class="layout-container-demo" v-else>
        <el-aside width="200px">
            <el-scrollbar>
                <div class="layout">
                    <img alt="Vue logo" src="@/assets/imges/logo.png">
                    <p>{{ config.layout.title }}</p>
                </div>
                <leftLayout />
            </el-scrollbar>
        </el-aside>
        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <navbar />
            </el-header>
            <el-main>
                <KeepAlive v-if="config.router.keepAlive">
                    <transition name="fade-transform" mode="out-in">
                        <router-view />
                    </transition>
                </KeepAlive>
                <transition name="fade-transform" mode="out-in" v-else>
                    <router-view />
                </transition>
            </el-main>
        </el-container>
    </el-container>
</template>
  
<script lang="ts" setup>
import config from "@/config";
import leftLayout from "./leftLayout/index.vue"
import navbar from "./navbar/index.vue"
const routeElse = useRoute();
const timer = setInterval(() => {
    routeElse
}, 300)
onUnmounted(() => {
    clearInterval(timer)
})
</script>
  
<style scoped lang="less">
.layout-container-demo {
    height: calc(100vh - 30px);

    .layout {
        height: 60px;
        display: flex;
        font-size: 25px;
        align-items: center;
        background-color: rgba(201, 196, 196, 0.363);
        justify-content: space-evenly;

        &>p {
            padding: 0;
            margin: 0;
        }

        &>img {
            width: 40px;
            height: 40px;
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
}
</style>
  