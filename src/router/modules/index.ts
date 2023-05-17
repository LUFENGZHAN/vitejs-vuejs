
import { RouteRecordRaw } from 'vue-router'
const RouterList: Array<RouteRecordRaw> = [
	{
		path: '/system',
		name: 'system',
		meta: {
			title: '系统管理',
			hidden: true
		},
		children: [
			{
				path: '/system/system',
				name: 'System',
				component: () => import('@/views/system/System.vue'),
				meta: {
					title: '系统管理员',
					hidden: true
				},
			},
			{
				path: '/system/teache-account',
				name: 'TeacherAccount',
				component: () => import('@/views/system/TeacherAccount.vue'),
				meta: {
					title: '图书馆教师账号管理',
					hidden: true
				},
			},
			{
				path: '/system/seat',
				name: 'Seat',
				component: () => import('@/views/system/Seat.vue'),
				meta: {
					title: '自习室管理员',
					hidden: true
				},
			},
			{
				path: '/system/studen-account',
				name: 'studen-account',
				component: () => import('@/views/system/StudentAccount.vue'),
				meta: {
					title: '学生账号管理',
					hidden: true
				},
			},
		]
	},
	{
		path: '/seat-management',
		name: 'SeatManagement',
		meta: {
			title: '座位管理',
			hidden: true
		},
		children:[
			{
				path: '/seat-management/seat-management',
				name: 'SeatManagement',
				component: () => import('@/views/SeatManagement/SeatManagement.vue'),
				meta: {
					title: '自习室座位管理',
					hidden: true
				},
			},
		]
	},
	{
		path: '/seat-reservation',
		name: 'SeatReservation',
		meta: {
			title: '座位预约管理',
			hidden: true
		},
		children:[
			{
				path: '/seat-reservation/seat-reservation',
				name: 'SeatReservation',
				component: () => import('@/views/SeatReservation/SeatReservation.vue'),
				meta: {
					title: '座位预约管理',
					hidden: true
				},
			},
		]
	},
]
export default {
	RouterList
}