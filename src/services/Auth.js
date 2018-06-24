import http from '../helpers/http'

export default {
  login (data) {
    return http.post('/login', data)
      .then(res => res.data)
      .catch(err => err.response)
  },
  register (data) {
    return http.post('/register', data)
      .then(res => res.data)
      .catch(err => err.response)
  }
}