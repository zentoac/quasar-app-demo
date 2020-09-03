import {axiosInstance} from '../boot/axios'

const endpoint = '/auth';

const login = (data) => {
  return axiosInstance.post(`${endpoint}/login`, data);
}

const logout = () => {
  return axiosInstance.post(`${endpoint}/logout`);
}

const refresh = () => {
  return axiosInstance.post(`${endpoint}/refresh`);
}

const user = () => {
  return axiosInstance.post(`${endpoint}/user`);
}

export default {
  login,
}
