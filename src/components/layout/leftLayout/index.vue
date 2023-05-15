<template>
    <el-menu :default-openeds="defaultOpeneds">
        <template v-for="(item, i) in routesLink" :key="i">
            <el-sub-menu v-if="item.children && item.children.length > 0" :index="item.name">
                <template #title>
                    <span>{{ item.meta.title }}</span>
                </template>

                <router-link :index="items.name" v-for="(items, index) in item.children" :key="index"
                    :to="items.path"><el-menu-item>{{ items.meta.title }}</el-menu-item></router-link>
            </el-sub-menu>
            <template v-else>
                <router-link :to="item.path">
                    <el-menu-item :index="item.name">
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
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
const defaultOpeneds = ref(['/index/index11'])

const routesLink = ref<any>([])

onMounted(() => {
    routesLink.value = router.options.routes.filter(v => !v.meta.layout)
})
</script>

<style lang='less' scoped>
a {
    text-decoration: none;
    font-size: var(--font-size);
    color: #000;
}

:deep(.el-sub-menu__title) {
    font-size: var(--font-size);
}
</style>
