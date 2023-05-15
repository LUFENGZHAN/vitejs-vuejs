
import { RouteRecordRaw } from 'vue-router'
const RouterList: Array<RouteRecordRaw>=[
    {
        path: '/index',
        name: 'index',
        meta: {
          title: '测试',
          hidden: true
    
        },
        children: [
          {
            path: '/index/index11',
            name: 'index11',
            component: () => import('@/views/index1.vue'),
            meta: {
              title: '测试1',
              hidden: true
            },
          },
          {
            path: '/index/index12',
            name: 'index12',
            component: () => import('@/views/index2.vue'),
            meta: {
              title: '测试2',
              hidden: true
            },
          },
        ]
      },
      {
        path: '/index3',
        name: 'index3',
        component: () => import('@/views/index3.vue'),
        meta: {
          title: '测试3',
          hidden: true
    
        },
      },
]
export default {
    RouterList
}