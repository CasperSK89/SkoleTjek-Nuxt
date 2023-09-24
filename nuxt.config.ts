// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['trpc-nuxt']
  },
  auth: {
    provider: {
      type: 'authjs'
    },
    globalAppMiddleware: {
      isEnabled: true,
    }
  },
  devtools: { enabled: false },
  ssr: false,
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@sidebase/nuxt-auth'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css' },
        {
          rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
        }]
    }
  },
  css: ['@/assets/css/fonts.css', "@/assets/css/transitions.css", "@/assets/css/main.css"],
})
