// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path"

export default defineNuxtConfig({
  app: {
    baseURL: '/VueTicketsTest/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
  },
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "/")
  },
  css: ["~/assets/main.scss"],
  modules: [
    // ...
    '@pinia/nuxt',
  ],
  pinia: {
    autoImports: [
      'defineStore', 
      ['defineStore', 'definePiniaStore'], 
    ],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
