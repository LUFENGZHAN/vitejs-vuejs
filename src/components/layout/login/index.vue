<template>
    <div id="login">
        <div class="content">
            <el-form style="width: 260px">
                <el-form-item label="账号：">
                    <el-input v-model="forDate.username" />
                </el-form-item>
                <el-form-item label="密码：">
                    <el-input v-model="forDate.password" placeholder="密码" type="password" show-password/>
                </el-form-item>
            </el-form>
            <div class="login" @click="login">登录</div>
        </div>
    </div>
</template>
    
<script lang='ts' setup>
import { useRouter } from 'vue-router';
import routers from '@/router';
import store from '@/store';
import { ElMessage } from 'element-plus'
const router = useRouter()
const forDate = reactive({
    username:'admin',
    password:'123456'
})
const login = async() => {
    if (!forDate.username) return ElMessage.warning('请输入账号') 
    if (!forDate.password) return ElMessage.warning('请输入密码') 
    const res = await window.api.user.login(forDate)
    sessionStorage.setItem('userinfo',JSON.stringify(res.data))
    sessionStorage.setItem('token',res.data.token)
    sessionStorage.setItem('toutes',res.data.userId)
    store.commit('setrouterState',routers.options.routes.filter(v => !v.meta.layout))
    router.push({ path: '/' })
}
</script>
    
<style lang='less' scoped>
#login {
    height: 100vh;
    width: 100%;
    overflow: hidden;
    background: url('@/assets/imges/login.jpg') no-repeat 100% / 100% 100%;

    .content {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 40%;
        flex-direction: column;
        margin: 300px auto;
        padding: 55px 0;
        background-color: #ffffffee;
        border-radius: 20px;
        overflow: hidden;
        .login{
            width:60px;
            cursor: pointer;
            text-align: center;
            padding: 5px 15px;
            border-radius: 15px;
            background-color: rgb(48, 48, 252);
        }
    }
}
</style>
    