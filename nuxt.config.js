export default {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Sports.kg',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'Sports.kg', name: 'Sports.kg', content: 'Sports.kg'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#F46D6D',
    // height: '5px'
  },
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@plugins/vuetify.js',
    '@plugins/notifier.js',
    '@plugins/repository.js',
    {src: '~plugins/ymapPlugin', ssr: false},
    {src: '~/plugins/uikit.js', ssr: false},
    {src: '~/plugins/vueEditor.js', ssr: false},
    {src: '~/plugins/vue-carousel.js', ssr: false},
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'vue-screen/nuxt',
  ],

  /*
    ** Axios module configuration
    */
  axios: {
    proxy: true,
  },

  proxy: {
    '/api/': process.env.BASE_API || 'http://localhost:8000'
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          required: true,
          type: 'Bearer',
          maxAge: 86400
        },
        user: {
          property: false,
          autoFetch: true
        },
        endpoints: {
          login: {url: '/api/auth/jwt/create/', method: 'post'},
          logout: false,
          user: {url: '/api/auth/users/me/', method: 'get'}
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      })
    }
  }
}
