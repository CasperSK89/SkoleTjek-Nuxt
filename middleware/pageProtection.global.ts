export default defineNuxtRouteMiddleware((to, from) => {

  if (to.meta.role === 1) {
    console.log('du har ikke tilladelse');
    return navigateTo('/')
  }


})


