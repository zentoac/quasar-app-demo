import axios from 'axios'
import {LocalStorage} from "quasar";

import settings from "../config/settings";

const axiosInstance = axios.create({
  baseURL: settings.apiUrl,
  headers: {
    'Content-Type' : 'application/json',
    'Accept' : 'application/json',
  }
})

// se ricarico la pagina ed ho il token nello storage lo applico all'istanza di axios
if(LocalStorage.has('token') && LocalStorage.getItem('token')) {
  axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + LocalStorage.getItem('token');
}

export default ({ store, Vue }) => {
  Vue.prototype.$axios = axiosInstance;
  store.$axios = axiosInstance
}

export { axiosInstance }
