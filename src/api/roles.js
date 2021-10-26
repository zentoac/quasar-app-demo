import Vue from "vue";

const endpoint = '/roles';

const getRoles = () => {
  return Vue.prototype.$axios.get(`${endpoint}`);
}

const createRole = (user) => {
  return Vue.prototype.$axios.post(`${endpoint}`, user);
}

const updateRole = (user) => {
  return Vue.prototype.$axios.put(`${endpoint}`, user);
}

const deleteRole = (id) => {
  return Vue.prototype.$axios.delete(`${endpoint}/${id}`);
}

export default {
  getRoles,
  createRole,
  updateRole,
  deleteRole,
}
