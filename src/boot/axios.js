import Vue from 'vue'
import axios from 'axios'

import settings from "../config/settings";

const axiosInstance = axios.create({
  baseURL: settings.apiUrl,
})

Vue.prototype.$axios = axiosInstance

export { axiosInstance }
