<template>
    <div class="toolbar">
        <el-dropdown>
            <el-icon style="margin-right: 8px;outline: none; margin-top: 1px">
                <ArrowDown />
            </el-icon>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
        <span>{{ userinfo.name }}</span>
    </div>
</template>

<script lang='ts' setup>
let userinfo: any = reactive({
    name: '测试'
})
onMounted(() => {
    if (sessionStorage.getItem('userinfo')) {
        let name = JSON.stringify(sessionStorage.getItem('userinfo'))
        userinfo = name
    }
})
</script>

<style lang='less' scoped></style>
