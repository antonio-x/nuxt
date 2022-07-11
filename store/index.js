export const state = () => {
  return {
    userMsg: null,
    isLogin: false,
  };
};

export const mutations = {
  setUserMsg(state, userMsg) {
    state.userMsg = userMsg;
  },
  setLogin(state, isLogin) {
    state.isLogin = isLogin;
  },
};
