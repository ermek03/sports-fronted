export default ($axios, app) => ({
  all(category, page) {
    try {
      return $axios.get('/api/news/category/' + category + '/' + page + '/').then(res => {
        return res.data
      }).catch(e => {
        app.$notifier.showMessage({content: 'Ошибка в системе!', color: 'error'})
        return []
      });
    } catch (e) {
      app.$notifier.showMessage({content: 'Ошибка в системе!', color: 'error'})
      return []
    }
  },
  detail(url) {
    try {
      return $axios.post('/api/news/detail/', {
        url: url
      }).then(res => {
        return res.data
      }).catch(e => {
        app.$notifier.showMessage({content: 'Ошибка в системе!', color: 'error'})
        return []
      });
    } catch (e) {
      app.$notifier.showMessage({content: 'Ошибка в системе!', color: 'error'})
      return []
    }
  }
})
