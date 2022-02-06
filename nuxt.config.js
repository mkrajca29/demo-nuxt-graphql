export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'demo-magento-nuxt',
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
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/apollo'
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "https://venia.magento.com/graphql",
        httpLinkOptions: {
          /* httpLinkOptions: {
            fetchOptions: {
              mode: 'cors'
            },
            credentials: "include",
            //headers: {
            //  "Content-Type": "application/json",
            //  "Access-Control-Allow-Origin": "\*"
            //}
          }, */
        }
      }
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/proxy'
  ],

  proxy: {
    '/graphql': {
      target: 'http://localhost:3000/',
      changeOrigin: true,
      pathRewrite: { '^/graphql': '/' },
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  target: 'static',

  router: {
    base: '/demo-nuxt-graphql/'
  }

}
