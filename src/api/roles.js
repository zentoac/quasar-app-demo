import {axiosInstance} from '../boot/axios'

const endpoint = '/roles';
const config = {
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  }
};

const getRoles = () => {
  return axiosInstance.get(`${endpoint}`, config);
}

const createRole = (user) => {
  return axiosInstance.post(`${endpoint}`, user, config);
}

const updateRole = (user) => {
  return axiosInstance.put(`${endpoint}`, user, config);
}

const deleteRole = (id) => {
  return axiosInstance.delete(`${endpoint}/${id}`, config);
}

export default {
  getRoles,
  createRole,
  updateRole,
  deleteRole,
}
