import {axiosInstance} from '../boot/axios'

const endpoint = '/users';

const getUsers = () => {
  return axiosInstance.get(`${endpoint}`);
}

const createUser = (user) => {
  return axiosInstance.post(`${endpoint}`, user);
}

const updateUser = (user) => {
  return axiosInstance.put(`${endpoint}`, user);
}

const deleteUser = (id) => {
  return axiosInstance.delete(`${endpoint}/${id}`);
}

export default {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
}
