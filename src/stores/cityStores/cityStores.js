const state = {
  nm: JSON.parse(localStorage.getItem('cityName')) || '北京',
  id: JSON.parse(localStorage.getItem('cityId')) || 1
  // nm: '北京',
  // id: 1  
}
const mutations = {
  CITY_INFO(state, payload) {
    state.nm = payload.name;
    state.id = payload.id;
  }
}
const actions = {

}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
}