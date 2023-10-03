export default defineNuxtRouteMiddleware((to, from) => {
  const { data}  = useAuth()

  if (data) {
    const meta: PageMeta = to.meta as PageMeta; // Cast to PageMeta type
    const currentSession = (data.value as UserSession)

    if (meta.role <= currentSession?.user.role) {
      console.log('You have permission.');
    }

    if (meta.role > currentSession?.user.role) {
      console.log('You do not have permission.');
      return navigateTo('/');
    }
  }

});
