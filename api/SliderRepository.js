export default ($axios, app) => ({
  all() {
    try {
      return $axios.get('/api/sliders').then(res => {
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
  list() {
    try {
      return $axios.get('/api/feedback').then(res => {
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
  add(data) {
    try {
      return $axios.post('/api/feedback', data).then(res => {
        app.$notifier.showMessage({content: 'Ваш отзыв успешно отправлен', color: 'success'})
        return true
      }).catch(e => {
        if (Object.keys(e.response.data).length > 0) {
          Object.keys(e.response.data).forEach(key => {
            app.$notifier.showMessage({content: key + ": " + e.response.data[key][0], color: 'orange lighten-1'})
          });
        } else app.$notifier.showMessage({content: 'Ошибка в системе!', color: 'error'})
        return false
      });
    } catch (e) {
      app.$notifier.showMessage({content: 'Ошибка в системе!', color: 'error'})
      return false
    }
  },
})
