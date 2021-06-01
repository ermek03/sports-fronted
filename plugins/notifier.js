export default ({app, store}, inject) => {
  inject('notifier', {
    showMessage({content = '', color = 'success', timeout = 2500}) {
      store.commit('snackbar/SHOW_MESSAGE', {content, color, timeout})
    }
  })
}
