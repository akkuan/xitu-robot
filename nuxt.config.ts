// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],
  css: ['~/assets/scss/main.scss'],
  i18n: {
    locales: [
          { code: 'en', language: 'en-US', file: 'en.json', name: 'English' },
          { code: 'zh', language: 'zh-CN', file: 'zh.json', name: '简体中文' }
    ],
    lazy: true,
    langDir: './locales',
    defaultLocale: 'en',
    strategy: 'prefix_and_default',
    detectBrowserLanguage: false
  },
  // Static Site Generation configuration
  ssr: true, // Must be true for 'nuxt generate' to pre-render HTML
  nitro: {
    static: true,
  }
})
