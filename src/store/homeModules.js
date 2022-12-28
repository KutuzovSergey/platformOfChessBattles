
export default ({
  state: {
    login: false,
    registration: false,
  },
  getters: {
    LOGIN: state => {
      return state.login;
    },
    REGISTRATION: state => {
      return state.registration;
    },
  },
  mutations: {
    SET_LOGIN: (state, payload) => {
      state.login = payload;
    },
    SET_REGISTRATION: (state, payload) => {
      state.registration = payload;
    }
  },
  actions: {
    SET_LOGIN: (context, payload) => {
      context.commit('SET_LOGIN', payload);
    },
    SET_REGISTRATION: (context, payload) => {
      context.commit('SET_REGISTRATION', payload);
    },
  },
  modules: {
  }
})