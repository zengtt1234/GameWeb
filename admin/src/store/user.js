export default{
  state: {
    token:'',
    // currentUser: null,
  },
  mutations: {
    setToken(state, val){
      state.token = val;
    },
    clearToken(state){
      state.token = '';
      localStorage.clear('token');
    },
    getToken(state){
      state.token = localStorage.getItem("token");
    },
    setCurrentUser(state,val){
      state.currentUser = val;
    },
    clearCurrentUser(state){
      state.currentUser = '';
      localStorage.clear('currentUser');
    },
  },
  actions: {

  },
}