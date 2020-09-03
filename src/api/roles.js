import {axiosInstance} from '../boot/axios'

const endpoint = '/roles';

const getRoles = () => {
  return axiosInstance.get(`${endpoint}`);
}

const createRole = (user) => {
  return axiosInstance.post(`${endpoint}`, user);
}

const updateRole = (user) => {
  return axiosInstance.put(`${endpoint}`, user);
}

const deleteRole = (id) => {
  return axiosInstance.delete(`${endpoint}/${id}`);
}

export default {
  getRoles,
  createRole,
  updateRole,
  deleteRole,
}
