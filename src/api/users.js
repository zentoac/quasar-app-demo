import {axiosInstance} from '../boot/axios'

const target = '/users';

const getUsers = () => {
  return axiosInstance.get(`${target}`);
}

const createUser = (user) => {
  return axiosInstance.post(`${target}`, user);
}

const updateUser = (user) => {
  return axiosInstance.put(`${target}`, user);
}

const deleteUser = (id) => {
  return axiosInstance.delete(`${target}/${id}`);
}

export default {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
}
