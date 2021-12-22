import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    loadingUsers: false,
  },
  mutations: {
    USERS(state, payload) {
      state.users = payload;
    },
    LOADING_USERS(state, payload) {
      state.loadingUsers = payload;
    },
  },
  actions: {
    fetchUsers(context) {
      context.commit("LOADING_USERS", true);
      axios
        .get("https://61ba455648df2f0017e5aa20.mockapi.io/UsersTelcom")
        .then((data) => {
          context.commit("USERS", data.data);
          context.commit("LOADING_USERS", false);
        });
    },
  },
  modules: {},
});
