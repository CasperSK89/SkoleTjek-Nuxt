export const useAuthStore = defineStore('auth', () => {
  const userSession = ref<UserSession | null>()
  const currentUser = ref<UserSession['user']>()
  
  authorize()

  async function authorize() {
    const { data } = useAuth()
    console.log(data.value?.user);

    if (data.value?.user) {
      userSession.value = (data.value as UserSession)
      currentUser.value = userSession.value.user
      
    }
  }


  return { authorize, currentUser, userSession,  }
})