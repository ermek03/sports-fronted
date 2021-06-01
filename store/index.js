export const state = () => ({

});

export const mutations = {
  SET_USER: function (state, user) {
    state.authUser = user
  }
};

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  async nuxtServerInit({commit, dispatch}, {req}) {
    return Promise.all([
      dispatch('sliders/initStore'),
      dispatch('sport-areas/initStore'),
      dispatch('categories/initStore'),
    ])
  },
};

export const strict = false
