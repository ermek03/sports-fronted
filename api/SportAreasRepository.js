export default ($axios, app) => ({
  all(params) {
    try {
      return $axios.get('/api/sports_areas/', {
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

  in_map(params) {
    try {
      return $axios.get('/api/sports_areas/for_map/', {
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

  detail(id) {
    try {
      console.log(id)
      return $axios.get('/api/sports_area/detail/' + id + '/').then(res => {
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
  add(data) {
    try {
      return $axios.post('/api/sports_areas/', data).then(res => {
        app.$notifier.showMessage({content: 'Новый запись добавлено', color: 'success'})
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

  update(payload, id) {
    try {
      return $axios.$patch('/api/sports_areas/' + id + '/', payload).then(res => {
        app.$notifier.showMessage({content: 'Запись успешно изменено', color: 'success'})
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

  delete(id) {
    try {
      return $axios.delete('/api/sports_areas/' + id + '/', {}).then(res => {
        app.$notifier.showMessage({content: 'Запис успешно удалено', color: 'success'})
        return true
      }).catch(e => {
        app.$notifier.showMessage({content: 'Ошибка в системе!', color: 'error'})
        return false
      });
    } catch (e) {
      app.$notifier.showMessage({content: 'Ошибка в системе!', color: 'error'})
      return false
    }
  }

})

