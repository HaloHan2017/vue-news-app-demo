import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: []
  },
  mutations: {
    addNewItem (state, newItem) {
      this.state.news.push(newItem)
    }
  },
  actions: {
  },
  modules: {
  }
})
