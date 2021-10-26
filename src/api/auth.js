import Vue from "vue";

const endpoint = '/auth';

const login = (data) => {
  return Vue.prototype.$axios.post(`${endpoint}/login`, data);
}

const logout = () => {
  return Vue.prototype.$axios.post(`${endpoint}/logout`);
}

const refresh = () => {
  return Vue.prototype.$axios.get(`${endpoint}/refresh`)
}

const user = () => {
  return Vue.prototype.$axios.get(`${endpoint}/user`);
}

export default {
  login,
  logout,
  refresh,
  user,
}
