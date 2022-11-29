import { createStore } from 'vuex'
import CatsRequests from '@/services/axios/CatsRequests'

export default createStore({
  state: {
    breeds: [],
  },
  getters: {
  },
  mutations: {
    ALL_BREEDS(state, { breeds }) {
      state.breeds = breeds
    }
  },
  actions: {
    async getlAllBreeds({ commit }) {
      await CatsRequests.getlAllBreeds().then((res) => {
        commit('ALL_BREEDS', res.data)
        console.log(res);
      })
    }
  },
  modules: {
  }
})
