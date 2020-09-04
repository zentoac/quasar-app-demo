import {axiosInstance} from '../boot/axios'

const endpoint = '/auth';

const login = (data) => {
  return axiosInstance.post(`${endpoint}/login`, data, {
    headers: {}
  });
}

const logout = () => {
  return axiosInstance.get(`${endpoint}/logout`, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }
  });
}

const refresh = () => {
  return axiosInstance.get(`${endpoint}/refresh`, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }
  });
}

const user = () => {
  return axiosInstance.get(`${endpoint}/user`, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }
  });
}

export default {
  login,
  logout,
  refresh,
  user,
}
