export const state = () => ({
  list: []
})

export const getters = {
  categories: state => state.list
}

export const mutations = {
  SET_CATEGORIES: (state, sport_area) => {
    state.list = sport_area
  }
}

export const actions = {
  async initStore({commit}) {
    let categories = await this.$repositories.category.all({})
    commit('SET_CATEGORIES', categories)
  },
}
