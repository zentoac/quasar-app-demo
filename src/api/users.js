import Vue from "vue";

const endpoint = '/users';

const getUsers = () => {
  return Vue.prototype.$axios.get(`${endpoint}`);
}

const createUser = (user) => {
  return Vue.prototype.$axios.post(`${endpoint}`, user);
}

const updateUser = (user) => {
  return Vue.prototype.$axios.put(`${endpoint}`, user);
}

const deleteUser = (id) => {
  return Vue.prototype.$axios.delete(`${endpoint}/${id}`);
}

export default {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
}
