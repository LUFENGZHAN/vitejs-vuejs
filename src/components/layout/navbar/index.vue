<template>
    <div class="toolbar">
        <el-avatar :size="20" :src="circleUrl" />
        <el-dropdown>
            <span>{{ userinfo.name }}</span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item @click="go">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
        <el-icon style="margin-right: 8px;outline: none; margin-top: 1px">
            <ArrowDown />
        </el-icon>
    </div>
</template>

<script lang='ts' setup>
import { useRouter } from 'vue-router';
let userinfo: any = reactive({
    name: '测试'
})
const router = useRouter()
const go = ()=>{
    sessionStorage.clear()
    router.push({ path: '/login' })
}
const circleUrl = ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png')
onMounted(() => {
    if (sessionStorage.getItem('userinfo')) {
        let name = JSON.stringify(sessionStorage.getItem('userinfo'))
        userinfo = name
    }
})
</script>

<style lang='less' scoped>
span{
    outline: none;
    cursor: pointer;
    margin:0 8px;
    color: #000;
    font-size: var(--font-size);
}
</style>
