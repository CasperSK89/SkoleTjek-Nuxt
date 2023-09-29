export const useAuthStore = defineStore('auth', () => {
  const { data } = useAuth()
  const currentSession = (data.value as UserSession)
  const currentUser = currentSession.user

  async function authorize() {
    console.log(currentUser);

  }


  return { authorize, currentSession, currentUser }
})