<template>
    <div id="login">
        <div>
            <span @click="login">登录</span>
        </div>
    </div>
</template>
    
<script lang='ts' setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const login = ()=>{
    router.push({ path: '/' })
}
</script>
    
<style lang='less' scoped>
#login{

}
</style>
    