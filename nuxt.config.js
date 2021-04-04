
export default {
  ssr: false,
  target: 'static',
  router: {
    base: process.env.NODE_ENV === 'development' ? '/' : '/nuxt-tailwind/'
  },
  static: {
    prefix: false
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // https://github.com/nuxt/postcss8
    '@nuxt/postcss8',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',

  ],
  tailwindcss: {
    jit: true
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    'portal-vue/nuxt'
  ],
  /*
  ** Build configuration
  */
  build: {
  }
}
