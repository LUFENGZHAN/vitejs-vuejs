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
  }
})
declare global {
  interface Window {
    store: typeof store;
  }
}

window.store = store
export default store
