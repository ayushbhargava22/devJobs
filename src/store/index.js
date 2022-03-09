import { createStore } from 'vuex';
import data from '../data/data.json';

export default createStore({
  state: {
    jobs: data,
  },
  mutations: {},
  actions: {},
  getters: {
    getJobs(state) {
      return state.jobs;
    }
  },
})