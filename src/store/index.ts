import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    add (state) {
      state.count++
    }
  },
  // 涉及到调用异步 API
  actions: {
    increment (context) {
      context.commit('add')
    }
  }
})
export default store
