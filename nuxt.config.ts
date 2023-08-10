// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  app: {
    head: {
      title: 'Paroki Resapombo',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width-device-width, initial-scale-1' },
        { hid: 'description', name: 'description', content: 'paroki santo fransisku asisi resapombo' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' }
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', defer: true }
      ],
    },
  },

  css: [
    "vuetify/styles/main.sass",
    "@mdi/font/css/materialdesignicons.css",
    "~/assets/css/main.css"
  ],
  build: {
    transpile: ["vuetify"],
  },

  devtools: { enabled: false },

  ssr: false
})





// link: [
//   { rel: 'stylesheet', href: 'assets/bootstrap/css/bootstrap.min.css' }
// ],
// script: [
//   { src: 'assets/bootstrap/js/bootstrap.bundle.min.js', defer: true }
// ],