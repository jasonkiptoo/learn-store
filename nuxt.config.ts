// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "nuxt-primevue"],
  primevue: {
    cssLayerOrder: 'reset,primevue',
    components: {
      include: "*"
  }
},
css: ['primevue/resources/themes/aura-light-green/theme.css']
})