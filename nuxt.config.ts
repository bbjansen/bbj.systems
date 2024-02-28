// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: './client',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    '@tresjs/nuxt'
  ],
  plugins: [
    {
      src: './client/plugins/aos',
      ssr: false,
      mode: 'client',
    }
  ],
  tailwindcss: {
    cssPath: './client/assets/css/tailwind.css',
    configPath: './tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },
  headlessui: {
    prefix: 'Headless',
  },
})
