import http from '../helpers/http'

export default {
  login (data) {
    return http.post('/auth/login', data)
      .then(res => res.data)
      .catch(err => Promise.reject(err.response))
  },
  register (data) {
    return http.post('/auth/register', data)
      .then(res => res.data)
      .catch(err => Promise.reject(err.response))
  }
}