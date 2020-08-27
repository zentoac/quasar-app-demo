import Vue from 'vue'
import axios from 'axios'

import settings from "../config/settings";

Vue.prototype.$axios = axios.create({
  baseURL: settings.apiUrl,
})
