import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - pojetoAulas',
    title: 'pojetoAulas',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/formationTextGlobal.css' 
         
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false, // Define o tema padrão como claro
      themes: {
        light: {
          primary: colors.orange.darken1,
          secondary: '#894200',
          background: '#7a7a7a',
          accent: '#61ce70',
          black: '#000000',
          white: '#FFFFFF',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        dark: {
          primary: '#E38108',
          secondary: '#894200',
          background: '#7a7a7a',
          accent: '#61ce70',
          black: '#000000',
          white: '#FFFFFF',
          info: colors.teal.darken1,
          warning: colors.amber.darken3,
          error: colors.deepOrange.lighten4,
          success: colors.green.lighten3
        }
      }
    }
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    }
  }
}
