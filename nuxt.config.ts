// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '@/assets/styles/all.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import'],
          additionalData: `@import "bootstrap/scss/functions"; @import "bootstrap/scss/variables";`
        }
      }
    }
  },
  router: {
    options: {
      linkActiveClass: 'active',
      linkExactActiveClass: 'active'
    }
  }
})
