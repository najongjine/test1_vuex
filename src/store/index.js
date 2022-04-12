import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import sampleModule from "./sampleModule";

export default createStore({
  modules: { sampleModule: sampleModule },
  plugins: [createPersistedState({ paths: ["sampleModule"] })],
});
