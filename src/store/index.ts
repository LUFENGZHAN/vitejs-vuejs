import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      count: 0,
      is_id:null,
      is_page: [
        ['系统管理员', '图书馆教师账号管理', '自习室管理员', '学生账号管理', '自习室座位管理', '座位预约管理'],
        ['系统管理员', '自习室管理员'],
        ['系统管理员', '学生账号管理'],
      ]
    }
  },
  mutations: {
    add(state) {
      state.count++
    },
    setrouterState(state, routers) {
      state.is_id = window.sessionStorage.getItem('id')
      let router = []
      routers.forEach( (item:any)=>{
        Object.defineProperty(item, 'children',item.children.map((value:any)=>{
          if (!state.is_page[state.is_id || 0].includes(value.meta.title)) {
            value.meta.hidden = false
          }
          return value
        }))
        router = item.children.map((v:any)=> v.meta.hidden)
        if(router.every((item:any) => item ===false)) {
          item.meta.hidden = false
        }
      })
    }
  },
  // 涉及到调用异步 API
  actions: {
    increment(context) {
      context.commit('add')
    }
  }
})
export default store
