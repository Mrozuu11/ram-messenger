import Vue from "vue";
import Vuex from "vuex";
import httpClient from "@/api/httpClient.js";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

const state = {
  fetchedCharacters: {
    isFetching: false,
    response: {
      data: null,
      status: null,
    },
  },
  messages: [],
};

const getters = {
  fetchedCharacters: (state) => {
    return state.fetchedCharacters;
  },
  messages: (state) => {
    return state.messages;
  },
  // Sort messages to display newest first in history
  sortedMessages: (state) => {
    return [...state.messages].sort((a, b) => {
      return Date.parse(b.date) - Date.parse(a.date);
    });
  },
};

const mutations = {
  FETCH_CHARACTERS_STARTED(state) {
    state.fetchedCharacters.isFetching = true;
    state.fetchedCharacters.response = {
      data: null,
      status: null,
    };
  },
  FETCH_CHARACTERS_FINISHED(state, payload) {
    state.fetchedCharacters.isFetching = false;
    state.fetchedCharacters.response = {
      data: payload.data,
      status: payload.status,
    };
  },
  FETCH_CHARACTERS_ERROR(state) {
    state.fetchedCharacters.isFetching = false;
    state.fetchedCharacters.response = {
      data: null,
      status: null,
    };
  },
  UPDATE_MESSAGES(state, payload) {
    state.messages = payload;
  },
};

const actions = {
  fetchCharacters: async (context) => {
    context.commit("FETCH_CHARACTERS_STARTED");

    await httpClient
      .get("https://rickandmortyapi.com/api/character")
      .then((successResponse) => {
        context.commit("FETCH_CHARACTERS_FINISHED", successResponse);
      })
      .catch((errorResponse) => {
        context.commit("FETCH_CHARACTERS_ERROR", errorResponse);
      });
  },
  updateMessages: ({ commit }, payload) => [commit("UPDATE_MESSAGES", payload)],
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins: [vuexLocal.plugin],
});
