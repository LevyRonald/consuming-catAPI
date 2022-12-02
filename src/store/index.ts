import { createStore } from 'vuex'
import CatsRequests from '@/services/axios/CatsRequests'

export default createStore({
  state: {
    breeds: [],
    breed: {},
  },
  getters: {
  },
  mutations: {
    ALL_BREEDS(state, { breeds }) {
      state.breeds = breeds
    },
    ONE_BREED(state, { breed }) {
      state.breed = breed
    }
  },
  actions: {
    async getlAllBreeds({ commit }: any, data?: object) {
      await CatsRequests.getlAllBreeds(data).then((res) => {
        commit('ALL_BREEDS', res.data)
      })
    },
    async getOneBreed({ commit }: any, data: string) {
      await CatsRequests.getOneBreed(data).then((res) => {
        console.log(res);
        commit('ONE_BREED', res.data)
      })
    },
  },
  modules: {
  }
})
