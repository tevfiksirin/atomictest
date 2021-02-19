export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'atomictest',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-i18n',
  ],
  i18n: {
    locales: [
      {
        code: 'tr',
        name: 'Türkçe',
      },
      {
        code: 'en',
        name: 'English',
      },
    ],
    defaultLocale: 'tr',
    vueI18n: {
      fallbackLocale: 'tr',
      messages: {
        tr: {
          welcome: 'Hoşgeldiniz',
          homepage: 'Anasayfa',
          dude: 'Dost',
          work: 'Çalışma',
          lang: 'Dil',
          menutest: 'Menü Test',
        },
        en: {
          welcome: 'Welcome',
          homepage: 'Homepage',
          dude: 'Dude',
          work: 'Work',
          lang: 'Lang',
          menutest: 'Menu Test',
        },
      },
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
