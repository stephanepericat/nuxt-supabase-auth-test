import path from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: ["@nuxtjs/supabase"],
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/api/auth/callback',
      include: ['/dashboard'],
      exclude: [],
      cookieRedirect: false,
    }
  }
})