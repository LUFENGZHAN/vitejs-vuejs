<template>
    <el-menu :default-openeds="defaultOpeneds">
        <template v-for="(item, i) in routesLink" :key="i">
            <el-sub-menu v-if="item.children && item.children.length > 0" :index="item.name">
                <template #title>
                    <span>{{ item.meta.title }}</span>
                </template>
                <el-menu-item :index="items.name" v-for="(items, index) in item.children" :key="index">
                    <router-link :to="items.path">{{ items.meta.title }}</router-link>
                </el-menu-item>
            </el-sub-menu>
            <template v-else>
                <el-menu-item :index="item.name">
                <template #title>
                    <router-link :to="item.path">{{ item.meta.title }}</router-link>
                </template>
            </el-menu-item>
            </template>
        </template>
    </el-menu>
</template>

<script lang='ts' setup>
import router from '@/router';
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
const defaultOpeneds = ref([])

const routesLink = ref<any>([])
onMounted(() => {
    routesLink.value = router.options.routes.filter(v => !v.meta.layout)
    console.log(routesLink.value);

})
</script>

<style lang='less' scoped>
a{
    text-decoration: none;
    font-size: var(--font-size);
}
:deep(.el-sub-menu__title){
    font-size: var(--font-size);
}
</style>
