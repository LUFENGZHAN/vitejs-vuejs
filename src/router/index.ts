import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import config from '@/config'
import RouterList from './modules/index'

const routes = [
	{
		path: '/',
		name: '/',
		component: () => import('@/components/layout/index.vue'),
		meta: {
			title: '后台管理',
			layout: true
		},
		redirect: '/index3'
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/components/layout/login/index.vue'),
		meta: {
			title: '登录',
			layout: true
		}
	},
	{
		path: '/error',
		name: 'error',
		component: () => import('@/components/common/error.vue'),
		meta: {
			title: '404',
			layout: true
		},
	},
]
const routesLayout = import.meta.glob(
	'./modules/*.ts',
	{ eager: true }
)
const router = createRouter({
	history: createWebHashHistory(),
	routes: [...routes, ...RouterList.RouterList] as any
})
router.beforeEach((to, from, next) => {
	try {
		const toekn = window.sessionStorage.getItem('token')
		if (to.meta?.title) document.title = to.meta.title as any
		if (to.matched && to.matched.length == 0) {
			return next('/error')
		}
		if (config.router.login) {
			if (Boolean(toekn)) {
				next()
			} else {
				if (to.path == '/login') return next()
				next('/login')
			}
		} else {
			next();
		}
	} catch {
		return next('/error');
	}
})
interface RouteMeta {
	/**
	 * 页面标题
	 */
	title?: string;
	/**
	 * 是否在菜单中隐藏
	 */
	hidden?: boolean;
	/**
	 * 是否在菜单中禁用
	 */
	disabled?: boolean;
	/**
	 * 是否全屏
	 */
	isFullPage?: boolean;
	/**
	 * 是否外链，点击后会跳转到这个 url
	 */
	url?: string;
	target?: string;
	/**
	 * 页签标题，优先级高于 title
	 */
	tabTitle?: string;
	/**
	 * 面包屑，不需要手动定义
	 */
	breadcrumbs?: RouteRecordRaw[];
	/**
	 * 是否在页签中隐藏
	 */
	hiddenInTab?: boolean;
}

export default router
