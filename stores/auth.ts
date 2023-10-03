export const useAuthStore = defineStore('auth', () => {

  const { $client } = useNuxtApp();
  const { usersInGroups, usersRouter } = $client
  const userSession = ref<UserSession | null>()
  const currentUser = ref<UserSession['user'] | null>()

  const groups = ref<Groups>()
  authorize()
  groupsByUser()

  async function groupsByUser() {
    try {
      const resp = await usersInGroups.groupsByUser.query()
      groups.value = resp.flatMap((x)=>x.group)
      
    } catch (error) {
      console.log(error);
    }
  }

  async function authorize() {
    const { data } = useAuth()
    if (data.value?.user) {
      userSession.value = (data.value as UserSession)
      currentUser.value = userSession.value.user
    }
  }

  return {
    authorize,
    groupsByUser,
    currentUser,
    userSession,
    groups
  }
})