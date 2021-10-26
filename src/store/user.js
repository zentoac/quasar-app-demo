import Vue from "vue";
import JwtDecode from 'jwt-decode';

const isLoggedIn = () => {
  try {
    if(localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
  catch (error) {
    console.log(error);
  }
}

const set = (data) => {
  try {
    localStorage.setItem('token', data);
    Vue.prototype.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + data;
    localStorage.setItem('user', JSON.stringify(JwtDecode(data)));
  }
  catch (error) {
    console.log(error);
  }
}

const get = () => {
  try {
    if(localStorage.getItem('user')) {
      return JSON.parse(localStorage.getItem('user'));
    }
    return false;
  }
  catch (error) {
    console.log(error);
  }
}

const remove = () => {
  try {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    delete Vue.prototype.$axios.defaults.headers.common['Authorization'];
  }
  catch (error) {
    console.log(error);
  }
}

export default {
  isLoggedIn,
  set,
  get,
  remove,
}
