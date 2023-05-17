<template>
    <el-menu :default-openeds="defaultOpeneds">
        <template v-for="(item, i) in routesLink" :key="i">
            <el-sub-menu v-if="item.children && item.children.length > 0" :index="item.name">
                <template #title>
                    <el-icon v-if="config.layout.is_ion">
                        <Menu />
                    </el-icon>
                    <span>{{ item.meta.title }}</span>
                </template>
                <router-link :index="items.name" active-class="active" v-for="(items, index) in item.children" :key="index"
                    :to="items.path"><el-menu-item v-if="items.meta.hidden">{{ items.meta.title
                    }}</el-menu-item></router-link>
            </el-sub-menu>
            <template v-else>
                <router-link :to="item.path" active-class="active">
                    <el-menu-item :index="item.name" v-if="item.meta.hidden">
                        <template #title>
                            {{ item.meta.title }}
                        </template>
                    </el-menu-item>
                </router-link>
            </template>
        </template>
    </el-menu>
</template>

<script lang='ts' setup>
import router from '@/router';
import config from '@/config'
const defaultOpeneds = ref(['system'])

const routesLink = ref<any>([])
const is_page = ref([
    ['系统管理员', '图书馆教师账号管理', '自习室管理员', '学生账号管理', '自习室座位管理', '座位预约管理'],
    ['系统管理员', '自习室管理员'],
    ['系统管理员', '学生账号管理'],
])
onMounted(async() => {
    routesLink.value = await router.options.routes.filter(v => !v.meta.layout)    
})
</script>

<style lang='less' scoped>
a {
    text-decoration: none;
    font-size: var(--font-size);
    color: #000;
}

:deep(.el-menu-item.is-active) {
    color: #000;
}

.active {
    :deep(.el-menu-item) {
        background-color: var(--el-layout-left);
        color: #fff;
    }
}

:deep(.el-sub-menu__title) {
    font-size: var(--font-size);
}
</style>
