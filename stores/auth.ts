export const useAuthStore = defineStore('auth', () => {
  const { data } = useAuth()
  const currentSession = (data.value as UserSession)


  return { currentSession }
})