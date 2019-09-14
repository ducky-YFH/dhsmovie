const state = {
  nm : JSON.parse(window.localStorage.getItem('city')).name || '北京',
  id : JSON.parse(window.localStorage.getItem('city')).id || 1
}
const mutations = {
  CITY_INFO(state, payload){
    state.nm = payload.name;
    state.id = payload.id;
  }
}
const actions = {

}
export default {
  namespaced : true,
  state,
  mutations,
  actions,
}