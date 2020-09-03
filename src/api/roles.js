import {axiosInstance} from '../boot/axios'

const target = '/roles';

const getRoles = () => {
  return axiosInstance.get(`${target}`);
}

const createRole = (user) => {
  return axiosInstance.post(`${target}`, user);
}

const updateRole = (user) => {
  return axiosInstance.put(`${target}`, user);
}

const deleteRole = (id) => {
  return axiosInstance.delete(`${target}/${id}`);
}

export default {
  getRoles,
  createRole,
  updateRole,
  deleteRole,
}
