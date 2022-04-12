export default {
  namespaced: true,
  state: { count: 1 },
  mutations: {
    increment(state) {
      // mutate state
      state.count++;
    },
  },
  actions: {},
  getters: {},
};
