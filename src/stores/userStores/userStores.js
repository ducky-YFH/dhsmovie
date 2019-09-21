const state = {
  username:  window.localStorage.getItem('username') || '',
  isAdmin: window.localStorage.getItem('isAdmin') || false,
  avatarUrl: '',
}
const mutations = {
  CHANGE_USERNAME(state,  payload){
    state.username = payload.username
    state.isAdmin = payload.isAdmin
    state.avatarUrl = payload.avatarUrl
  }
}

export default {
  namespace: true,
  state,
  mutations
}