export const state = () => ({
  list: []
})

export const getters = {
  sport_areas: state => state.list
}

export const mutations = {
  SET_SPORT_AREAS: (state, sport_area) => {
    state.list = sport_area
  }
}

export const actions = {
  async initStore({commit}) {
    const params = {
      'per_page': 9
    }
    let sport_areas = await this.$repositories.sport_area.all(params)
    commit('SET_SPORT_AREAS', sport_areas.results)
  },
}
