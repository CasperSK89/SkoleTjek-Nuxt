// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['trpc-nuxt']
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', 'storeToRefs', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore',], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  imports: {
    dirs: ['stores']
  },
  auth: {
    provider: {
      type: 'authjs',
    },
    globalAppMiddleware: {
      isEnabled: true,
    }
  },
  devtools: { enabled: false },
  ssr: false,
  modules: [
    '@pinia/nuxt',
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
  components: [
    { path: '@/components/teacher', prefix: 'Teacher' },
    '@/components'
  ], typescript: { tsConfig: { include: ["types/*.d.ts",] } }
})
