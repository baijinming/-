import Vue from 'vue'
import Vuex from 'vuex'
import persistedstate from "vuex-persistedstate"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    maintainer: {},
  },
  mutations: {
    'UPDATE_INFO' (state, info) {
      state.maintainer = info
    }
  },
  plugins: [
    persistedstate({
      storage: {
        getItem: key => sessionStorage.getItem(key),
        setItem: (key, value) =>
          sessionStorage.setItem(key, value),
        removeItem: key => sessionStorage.removeItem(key)
      }
    })
  ]
})

export default store
