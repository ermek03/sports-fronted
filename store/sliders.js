export const state = () => ({
  list: []
})

export const getters = {
  sliders: state => state.list
}

export const mutations = {
  SET_SLIDER: (state, sliders) => {
    state.list = sliders
  }
}

export const actions = {
  async initStore({commit}, payload) {
    commit('SET_SLIDER', await this.$repositories.slider.all())
  },
}
