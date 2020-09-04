import {axiosInstance} from '../boot/axios'

const endpoint = '/users';
const config = {
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  }
};

const getUsers = () => {
  return axiosInstance.get(`${endpoint}`, config);
}

const createUser = (user) => {
  return axiosInstance.post(`${endpoint}`, user, config);
}

const updateUser = (user) => {
  return axiosInstance.put(`${endpoint}`, user, config);
}

const deleteUser = (id) => {
  return axiosInstance.delete(`${endpoint}/${id}`, config);
}

export default {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
}
