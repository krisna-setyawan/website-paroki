// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  app: {
    head:{
      title:'Website Paroki',
      meta:[
        {charset: 'utf-8'},
        {name:'viewport', content:'width-device-width, initial-scale-1'},
        {hid:'description', name:'description', content:'Website paroki'}
      ]
    }
  },

  css: [
    "vuetify/styles/main.sass",
    "@mdi/font/css/materialdesignicons.css"
  ],
  build: {
    transpile: ["vuetify"],
  },

  devtools: { enabled: false }
})
