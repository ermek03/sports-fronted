export default ($axios, app) => ({
  all(params) {
    try {
      return $axios.get('/api/categories/', {
        params: params,
      }).then(res => {
        return res.data
      }).catch(e => {
        app.$notifier.showMessage({content: 'Ошибка в системе!', color: 'error'})
        return {}
      });
    } catch (e) {
      app.$notifier.showMessage({content: 'Ошибка в системе!', color: 'error'})
      return {}
    }
  },
})

