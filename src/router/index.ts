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
		redirect: '/system/system'
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

export default router
