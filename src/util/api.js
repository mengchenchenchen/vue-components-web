import axios from "axios";
import qs from 'qs';
import config from '@/config'
// webpack alias
export default {
  get(path, params) {
    return axios.get(`${config.base_url}${path}?${qs.stringify(params)}`)
  },
  post(path, params) {
    return axios.post(`${config.base_url}${path}`, qs.stringify(params))
  }
}