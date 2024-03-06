import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: JSON.parse(localStorage.getItem("userInfo")) || {},
  },
  mutations: {
    setUserInfo(state, user) {
      localStorage.setItem("userInfo", JSON.stringify(user));
      state.userInfo = user;
    },
  },
  actions: {
    setUserInfo({ commit }, user) {
      commit("setUserInfo", user);
    },
  },
  getters: {},
});
