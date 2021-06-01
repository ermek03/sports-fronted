export const state = () => ({
  content: '',
  color: '',
  timeout: 3000
})

export const mutations = {
  SHOW_MESSAGE(state, payload) {
    state.content = payload.content;
    state.color = payload.color;
    state.timeout = payload.timeout;
  },
}

