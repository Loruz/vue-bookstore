import store from '../store'

const onError = (err) => {
  return new Promise(function (resolve, reject) {
    if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
      // if you ever get an unauthorized, logout the user
      store.dispatch('auth/logout')
      // you can also redirect to /login if needed !
    }
    throw err;
  });
}

export {onError}